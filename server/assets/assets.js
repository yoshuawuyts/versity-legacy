/**
 * Module dependencies
 */

var serve = require('koa-static');
var path = require('path');
var koa = require('koa');

/**
 * Initialize 'app'.
 */

var app = koa();

/**
 * Export 'app'.
 */

module.exports = app;

/**
 * Render index.html
 */

app.use(serve(path.join(__dirname, '/../../build')));