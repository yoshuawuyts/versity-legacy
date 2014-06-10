/* global window, document*/

/**
 * Module dependencies
 */

var react = require('react');
var index = require('./index');

var ENV = process.env.NODE_ENV;

/**
 * Render component on the client.
 *
 * This is the entry point for the build task, once all dependencies are loaded
 * on the client `renderComponent()` gets triggered and makes all elements
 * dynamic.
 */

module.exports = react.renderComponent(
  index({
    path: '/',
    env: 'development'
  }), 
  document.getElementsByTagName('html')[0]
);