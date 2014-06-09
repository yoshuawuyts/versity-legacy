'use strict';

/**
 * Module dependencies
 */

var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var envify = require('envify/custom');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var myth = require('gulp-myth');
var gulp = require('gulp');
var path = require('path');

/**
 * Exports
 */

module.exports = gulp;

/**
 * Variables
 */

var ENV = process.env.NODE_ENV || 'development';

/**
 * Compile CSS
 *
 * Includes css files in the following order
 * /base/reset.css > /base/vars.css > /base/*.css > all other css files.
 */

gulp.task('styles', function() {
  gulp
    .src(['client/modules/index/reset.css',
      'client/modules/index/vars.css',
      'client/modules/index/!(reset, vars)*.css', 
      'client/modules/!(index)**/*.css'
    ])
    .pipe(concat('build.css'))
    .pipe(myth())
    .pipe(gulp.dest(path.join(__dirname, '/build/')));
});

/**
 * Compile JS
 */

gulp.task('modules', function() {
  if ('development' == ENV) {
    browserify(path.join(__dirname, '/client/modules/index/build.js'))
      .transform('browserify-shim')
      .transform(envify({NODE_ENV: ENV}))
      .transform({global: true}, 'uglifyify')
      .bundle({debug: true})
      .pipe(source('build.js'))
      .pipe(gulp.dest(path.join(__dirname, '/build/')));
  }

  if ('development' != ENV) {
    browserify(path.join(__dirname, '/client/modules/index/build.js'))
      .transform('browserify-shim')
      .transform(envify({NODE_ENV: ENV}))
      .bundle({debug: true})
      .pipe(source('build.js'))
      .pipe(gulp.dest(path.join(__dirname, '/build/')));
  }
});

/**
 * Copy assets
 */

gulp.task('assets', function() {
  gulp
    .src(['client/modules/index/*.ttf'])
    .pipe(gulp.dest(path.join(__dirname, '/build/fonts')));
});

gulp.task('lint', function() {
  gulp
    .src(['*.js', 'client/**/**/*.js', 'data/*.js', 'test/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

/**
 * Watch for file changes
 */

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(['client/**/**/*.js', 'client/**/**/**/*.js'], ['modules']);
  gulp.watch('client/modules/**/*.css', ['styles']);
  gulp.watch(['*.js', 'client/**/**/*.js', 'data/*.js', 'test/**/*.js'], ['lint']);
  gulp.watch('client/modules/**/*.tff', ['assets']);
  gulp.watch(['/build/**']).on('change', livereload.changed);
});

/**
 * Default
 */

gulp.task('default', [
  'styles',
  'lint',
  'modules',
  'assets',
  'watch'
]);