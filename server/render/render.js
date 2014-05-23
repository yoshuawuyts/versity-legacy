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

app.use(router(app));

app.get('/', function* (next) {
  this.body = react.renderComponentToString(index({path: '/'}));
});

app.get('/search', function* (next) {
  this.body = react.renderComponentToString(index({path: '/search'}));
});

app.get('/settings', function* (next) {
  this.body = react.renderComponentToString(index({path: '/settings'}));
});

app.get('/:user', function* (next) {
  this.body = react.renderComponentToString(index({path: '/:user'}));
});

app.get('/:user/:course', function* (next) {
  this.body = react.renderComponentToString(index({path: '/:user/:course'}));
});