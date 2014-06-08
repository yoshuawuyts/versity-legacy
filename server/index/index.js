'use strict';

/**
 * Module dependencies
 */

var responseTime = require('koa-response-time');
var compress = require('koa-compress');
var compose = require('koa-compose');
var logger = require('koa-logger');
var helmet = require('koa-helmet');
var koa = require('koa');

var assets = require('../assets/assets');
var render = require('../render/render');
var api = require('../api/api');

/**
 * Initialize variables.
 */

var ENV = process.env.NODE_ENV || 'development';
var PORT = process.env.port || 1337;
var app = koa();

/**
 * Exports
 */

module.exports = app;

/**
 * Middleware
 */

if ('test' != process.env.NODE_ENV) app.use(logger());
app.use(responseTime());
app.use(compress());
app.use(helmet.defaults());

/**
 * Subdomain routes.
 */

app.use(function *(next) {
  switch (this.subdomains[0]) {

    case 'api': 
      return yield compose(api.middleware).call(this, next);

    case 'assets':
      return yield compose(assets.middleware).call(this, next);

    default:
      return yield compose(render.middleware).call(this, next);
  }
});

/**
 * Start listening.
 */

if (!module.parent) {
  app.listen(PORT);
  console.log('Environment: ' + ENV);
  console.log('Port: ' + PORT);
}