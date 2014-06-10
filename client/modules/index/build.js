/* global window, document*/

/**
 * Module dependencies
 */

var react = require('react');
var index = require('./index');

/**
 * Variables
 */

var ENV = process.env.NODE_ENV;
var host = process.env.NODE_ENV == 'production' 
  ? 'versity.co'
  : 'versity.dev:' + process.env.port || 1337;

/**
 * Render component on the client.
 *
 * This is the entry point for the build task, once all dependencies are loaded
 * on the client `renderComponent()` gets triggered and makes all elements
 * dynamic.
 */

module.exports = react.renderComponent(
  index({
    path: window.location.pathname,
    host: host,
    env: ENV
  }), 
  document
);