'use strict';

/**
 * Module dependencies
 */

var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var concat = require('gulp-concat');
var myth = require('gulp-myth');
var gulp = require('gulp');

/**
 * Exports
 */

module.exports = gulp;

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
    .pipe(gulp.dest('build'));
});

/**
 * Compile JS
 */

gulp.task('modules', function() {
  browserify(__dirname + '/client/modules/index/index.js')
    .bundle({debug: true})
    .pipe(source('build.js'))
    .pipe(gulp.dest('build/'));
});

/**
 * Copy assets
 */

gulp.task('assets', function() {
  gulp
    .src(['client/modules/index/*.ttf'])
    .pipe(gulp.dest('build/fonts/'));
});

/**
 * Watch for file changes
 */

gulp.task('watch', function() {
  var reload = function(file) {
    livereload().changed(file.path);
  };

  gulp.watch(['client/**/*.js', 'client/**/**/*.js', 'client/**/**/**/*.js'], ['modules']);
  gulp.watch('client/modules/**/*.css', ['styles']);
  gulp.watch('client/modules/**/*.tff', ['assets']);
  gulp.watch(['build/**']).on('change', reload);
});

/**
 * Default
 */

gulp.task('default', [
  'styles',
  'modules',
  'assets'
]);