#!/usr/bin/env node

/**
 * Module dependencies
 */

var spawn = require('child_process').spawn;
var program = require('commander');
var glog = require('gulp-api-log');
var fs = require('fs');

var gulp = require('../gulpfile.js');

/**
 * Options.
 */

program
  .option('-p, --port <port>', 'specify the server port [1337]', '1337')
  .option('-t, --task <task>', 'specify the build task [default]', 'default')
  .option('-e, --environment <env>', 'specify the environment [development]', 'development');

program.name = 'versity';

/**
 * Start 'versity'.
 *
 * TODO: pass port / env arguments to process
 * -> wrap index/index in a function that receives arguments
 */

program
  .command('start')
  .description('start server')
  .action(function() {
    var args = [ __dirname + '/../server/index/index.js' ].concat(process.argv.slice(2));
    spawn(process.argv[0], ['--harmony'].concat(args), {stdio: [0,1,2]});
  });

/**
 * Build packages.
 */

program
  .command('build')
  .description('build assets')
  .action(function() {
    glog(gulp);
    gulp.start(program.task);
  });

/**
 * Parse arguments.
 */

program.parse(process.argv);

/**
 * Log help if no commands specified.
 */

if (!process.argv[2]) {
  program.help();
}