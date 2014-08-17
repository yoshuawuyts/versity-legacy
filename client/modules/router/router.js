/* global window*/

/**
 * Module dependencies
 */

var debug = require('debug')('versity:router');
var wayfarer = require('wayfarer');
var react = require('react');
var dispatcher = require('../../dispatcher/dispatcher');
var notFound = require('../../views/404/404');
var pathStore = require('../../stores/path');
var course = require('../../views/course');
var home = require('../../views/home');
var router = wayfarer();

/**
 * Manage routes.
 */

module.exports = react.createClass({
  displayName: 'router',
  render: render,
  propTypes: {
    path: react.PropTypes.string.isRequired
  }
});

/**
 * Render DOM.
 */

function render() {
  return course();
}
