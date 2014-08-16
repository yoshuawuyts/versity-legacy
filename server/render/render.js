/**
 * Module dependencies
 */

var router = require('koa-router');
var react = require('react');
var koa = require('koa');

var index = require('../../client/modules/index/index');

/**
 * Variables
 */

var ENV = process.env.NODE_ENV;
var PORT = process.env.port || 1337;
var host = process.env.NODE_ENV == 'production'
  ? 'versity.co'
  : 'versity.dev:' + PORT;

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

app.get('/favicon.ico', function*(next) {})

/**
 * Render
 */

app.get('*', function*(next) {
  this.body = react.renderComponentToString(index({
    path: this.path,
    host: host,
    env: ENV
  }));
});
