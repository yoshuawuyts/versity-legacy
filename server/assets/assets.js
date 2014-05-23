/**
 * Module dependencies
 */

var serve = require('koa-static');
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

app.use(serve(__dirname + '/../../build'));