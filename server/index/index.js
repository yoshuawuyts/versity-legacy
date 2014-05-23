'use strict';

/**
 * Module dependencies
 */

var responseTime = require('koa-response-time');
var compress = require('koa-compress');
var compose = require('koa-compose');
var logger = require('koa-logger');
var helmet = require('koa-helmet');
var serve = require('koa-static');
var http = require('http');
var koa = require('koa');

var assets = require('../assets/assets');
var render = require('../render/render');
var vhost = require('../vhost/vhost');
var api = require('../api/api');

/**
 * Initialize variables.
 */

var ENV = process.env.NODE_ENV || 'development';
var PORT = process.env.port || 1337;
var app = koa();

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
      break;

    case 'assets':
      return yield compose(assets.middleware).call(this, next);
      break;

    default:
      return yield compose(render.middleware).call(this, next);
      break;
  }
});

/**
 * Start listening.
 */

app.listen(PORT);
console.log('Environment: ' + ENV);
console.log('Port: ' + PORT);