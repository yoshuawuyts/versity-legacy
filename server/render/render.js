/**
 * Module dependencies
 */

var router = require('koa-router');
var react = require('react');
var koa = require('koa');

var index = require('../../client/modules/index/index');
var ENV = process.env.NODE_ENV;

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
 * because fuck the favicon, that's why.
 */

app.get('/favicon.ico', function* (next){})

/**
 * Render
 */

app.get('/', function* (next) {
  this.body = react.renderComponentToStaticMarkup(index({
    path: this.path,
    env: ENV
  }));
});

app.get('/search', function* (next) {
  this.body = react.renderComponentToStaticMarkup(index({
    path: this.path,
    env: ENV
  }));
});

app.get('/settings', function* (next) {
  this.body = react.renderComponentToStaticMarkup(index({
    path: this.path,
    env: ENV
  }));
});

app.get('/:user', function* (next) {
  this.body = react.renderComponentToStaticMarkup(index({
    path: this.path,
    env: ENV
  }));
});

app.get('/:user/:course', function* (next) {
  this.body = react.renderComponentToStaticMarkup(index({
    path: this.path,
    env: ENV
  }));
});

app.get('/404', function* (next) {
  this.body = react.renderComponentToStaticMarkup(index({
    path: this.path,
    env: ENV
  }));
});