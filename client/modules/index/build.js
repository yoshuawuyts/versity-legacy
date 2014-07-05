/* global window*/

/**
 * Module dependencies
 */

var react = require('react');
var index = require('./index');

/**
 * Variables
 */

var ENV = process.env.NODE_ENV;
var PORT = process.env.port || 1337;
var HOST = process.env.NODE_ENV == 'production' ? 'versity.co'
  : 'versity.dev:' + PORT;

/**
 * Render component on the client.
 *
 * This is the entry point for the build task (gulp), once all dependencies are 
 * loaded on the client `renderComponent()` gets triggered and makes all 
 * elements dynamic.
 */

module.exports = react.renderComponent(
  index({
    path: window.location.pathname,
    host: HOST,
    env: ENV
  }), 
  window.document
);