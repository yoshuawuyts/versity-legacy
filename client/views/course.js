/**
 * Module dependencies
 */

var react = require('react');
var navbar = require('../modules/navbar/navbar');
var course = require('../modules/course/course');

/**
 * 'Home' view
 */

module.exports = react.createClass({
  displayName: 'course',

  render: function() {
    return react.DOM.div(null,
      navbar(),
      course()
    );
  }
});
