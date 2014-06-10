/**
 * Module dependencies
 */

var react = require('react');
var sidebar = require('../../modules/sidebar/sidebar');

/**
 * 'Home' view
 */

module.exports = react.createClass({
  displayName: 'search',

  render: function() {
    return react.DOM.div(null, 
      sidebar()
    ); 
  }
});