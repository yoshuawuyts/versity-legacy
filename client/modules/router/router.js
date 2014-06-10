/**
 * Module dependencies
 */

var router = require('react-router-component');
var react = require('react');
var settings = require('../../views/settings/settings');
var dispatcher = require('../../dispatcher/dispatcher');
var course = require('../../views/course/course');
var search = require('../../views/search/search');
var notFound = require('../../views/404/404');
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
  render: render
});

/**
 * Render DOM.
 *
 * @return {ReactComponent}
 * @api private
 */

function render() {
  return router.Pages({path: this.props.path}, 
    router.Page({path: '/', handler: home}),
    router.Page({path: '/search', handler: search}),
    router.Page({path: '/settings', handler: settings}),
    router.Page({path: '/404', handler: notFound}),
    router.Page({path: '/:user', handler: user}),
    router.Page({path: '/:user/:course', handler: course})
  );
}

/**
 * Lifecycle: component will mount
 */

function componentWillMount() {

}