/**
 * Module dependencies
 */

var router = require('react-router-component');
var react = require('react');

var settings = require('../../views/settings/settings');
var course = require('../../views/course/course');
var search = require('../../views/search/search');
var home = require('../../views/home/home');
var user = require('../../views/user/user');
var notFound = require('../../views/404/404');

/**
 * Manage routes.
 *
 * @props {String} path
 */

module.exports = react.createClass({
  displayName: 'router',

  render: function() {
    return router.Pages({path: this.props.path}, 
      router.Page({path: '/', handler: home}),
      router.Page({path: '/search', handler: search}),
      router.Page({path: '/settings', handler: settings}),
      router.Page({path: '/404', handler: notFound}),
      router.Page({path: '/:user', handler: user}),
      router.Page({path: '/:user/:course', handler: course})
    );
  }
});