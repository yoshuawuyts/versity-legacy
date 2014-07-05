/* global window*/

/**
 * Module dependencies
 */

var debug = require('debug')('versity:router');
var wayfarer = require('wayfarer');
var react = require('react');
var settings = require('../../views/settings/settings');
var dispatcher = require('../../dispatcher/dispatcher');
var course = require('../../views/course/course');
var search = require('../../views/search/search');
var notFound = require('../../views/404/404');
var pathStore = require('../../stores/path');
var home = require('../../views/home/home');
var user = require('../../views/user/user');
var router = wayfarer();

/**
 * Manage routes.
 *
 * @props {String} path
 * @api public
 */

module.exports = react.createClass({
  displayName: 'router',
  componentWillMount: componentWillMount,
  componentDidMount: componentDidMount,
  shouldComponentUpdate: shouldComponentUpdate,
  componentDidUpdate: componentDidUpdate,
  componentWillUnmount: componentWillUnmount,
  render: render,
  propTypes: {
    path: react.PropTypes.string.isRequired
  }
});

/**
 * Render DOM.
 *
 * @return {ReactComponent}
 * @api private
 */

function render() {
  router
    .path('/', home)
    .path('/search', search)
    .path('/settings', settings)
    .path('/404', notFound)
    .path('/:user', user)
    .path('/:user/:course', course);

  return router.match(this.state.path);
}

/**
 * Lifecycle: componentWillMount
 */

function componentWillMount() {
  this.setState({path: this.props.path});
}

/**
 * Lifecycle: listen to changes in 'path'.
 */

function componentDidMount() {
  pathStore.on('update', updateUrl.bind(this));
  window.onpopstate = function() {
    dispatcher.dispatch('path_update', window.location.pathname);
  };
}

/**
 * Lifecycle: determine if component must update
 */

function shouldComponentUpdate(nextProps, nextState) {
  return nextState.path !== this.state.path;
}

/**
 * Lifecycle: log if component updated
 */

function componentDidUpdate() {
  debug('Changed route to %s', this.state.path);
  window.history.pushState({}, '', this.state.path);
}

/**
 * Lifecycle: close all connections
 */

function componentWillUnmount() {
  pathStore.removeListener('update', updateUrl.bind(this));
}

/**
 * Update the url
 *
 * @param {Object} url
 * @api private
 */

function updateUrl(newUrl) {
  this.setState({path: newUrl.path});
}