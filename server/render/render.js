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
app.use(router(app));

/**
 * Export 'app'.
 */

module.exports = app;

/**
 * Render
 */

app.get('/', function* (next) {
  this.body = react.renderComponentToString(index({path: this.path}));
});

app.get('/search', function* (next) {
  this.body = react.renderComponentToString(index({path: this.path}));
});

app.get('/settings', function* (next) {
  this.body = react.renderComponentToString(index({path: this.path}));
});

app.get('/:user', function* (next) {
  this.body = react.renderComponentToString(index({path: this.path}));
});

app.get('/:user/:course', function* (next) {
  this.body = react.renderComponentToString(index({path: this.path}));
});

app.get('/404', function* (next) {
  this.body = react.renderComponentToString(index({path: this.path}));
});