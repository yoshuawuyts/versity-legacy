#!/usr/bin/env node

/**
 * Module dependencies
 */

var spawn = require('child_process').spawn;
var program = require('commander');
var fs = require('fs');

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
 */

program
  .command('start')
  .description('start server')
  .action(function() {
    process.env.NODE_ENV = program.environment;
    var args = ['--harmony', __dirname + '/../server/index/index.js']
      .concat(process.argv.slice(2));
      
    spawn(process.argv[0], args, {
      env: process.env,
      stdio: [0,1,2]
    });
  });

/**
 * Build packages.
 */

program
  .command('build')
  .description('build assets')
  .action(function() {
    process.env.NODE_ENV = program.environment;
    var args = ['--harmony', __dirname + '/../node_modules/gulp/bin/gulp.js']
      .concat(program.task);
    spawn(process.argv[0], args, {
      env: process.env,
      stdio: [0,1,2]
    });
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