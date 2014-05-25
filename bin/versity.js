#!/usr/bin/env node

/**
 * Module dependencies
 */

var program = require('commander');
var gulp = require('../gulpfile.js');
var fs = require('fs');

var server = require('../server/index/index');

/**
 * Options.
 */

program.version(JSON.parse(fs.readFileSync(__dirname + '/../package.json', 'utf8')).version)
  .option('-p, --port <port>', 'specify the port [1337]', '1337')
  .option('-t, --task <task>', 'specify the gulp task [default]', 'default')
  .option('-e, --environment <env>', 'specify the environment [development]', 'development');

program.name = 'versity';

/**
 * Start 'versity'.
 *
 * TODO: spawn separate process to throw harmony flags in the mix
 * https://github.com/Swatinem/perf-cpuprofile/blob/master/bin/perf-cpuprofile.js
 * http://stackoverflow.com/questions/20980222/run-a-node-shell-script-in-harmony-mode
 */

program
  .command('start')
  .description('start server')
  .action(function() {
    console.log('Environment: ' + program.environment);
    console.log('Port: ' + program.port);
    server.listen(program.port);
  });

/**
 * Build packages.
 *
 * TODO: add logging listeners via @contra - 
 * https://github.com/gulpjs/gulp/blob/master/bin/gulp.js#L102
 */

program
  .command('build')
  .description('build assets')
  .action(function() {
    gulp.start(program.task);
  });

/**
 * Parse arguments.
 */

program.parse(process.argv);

/**
 * Help if no commands specified.
 */

if (!process.argv[2]) {
  program.help();
}