/**
 * Module dependencies
 */

var router = require('koa-router');
var react = require('react');
var koa = require('koa');

var index = require('../../client/modules/index/index');

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

app.use(function *(next) {
  this.body = react.renderComponentToString(index({path: '/'}));
});
