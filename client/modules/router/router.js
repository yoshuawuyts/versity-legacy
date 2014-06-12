/* global window*/

/**
 * Module dependencies
 */

var router = require('react-router-component');
var debug = require('debug')('versity:router');
var react = require('react');
var settings = require('../../views/settings/settings');
var dispatcher = require('../../dispatcher/dispatcher');
var course = require('../../views/course/course');
var search = require('../../views/search/search');
var notFound = require('../../views/404/404');
var pathStore = require('../../stores/path');
var home = require('../../views/home/home');
var user = require('../../views/user/user');

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
  return router.Pages({path: this.state.path}, 
    router.Page({path: '/', handler: home}),
    router.Page({path: '/search', handler: search}),
    router.Page({path: '/settings', handler: settings}),
    router.Page({path: '/404', handler: notFound}),
    router.Page({path: '/:user', handler: user}),
    router.Page({path: '/:user/:course', handler: course})
  );
}

/**
 * Lifecycle: componentWillMount
 * Set initial state.
 *
 * @api private
 */

function componentWillMount() {
  this.setState({path: this.props.path});
}

/**
 * Lifecycle: listen to changes in 'path'.
 *
 * @api private
 */

function componentDidMount() {
  pathStore.on('update', updateUrl.bind(this));
  window.onpopstate = function() {
    dispatcher.dispatch('path_update', window.location.pathname);
  };
}

/**
 * Lifecycle: determine if component must update
 *
 * @param {Object} nextProps
 * @param {Object} nextState
 * @return {Boolean}
 * @api private
 */

function shouldComponentUpdate(nextProps, nextState) {
  return nextState.path !== this.state.path;
}

/**
 * Lifecycle: log if component updated
 *
 * @api private
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
 */

function updateUrl(newUrl) {
  this.setState({path: newUrl.path});
}