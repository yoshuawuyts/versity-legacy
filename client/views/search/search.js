/**
 * Module dependencies
 */

var react = require('react');
var navbar = require('../../modules/navbar/navbar');

/**
 * 'Home' view
 */

module.exports = react.createClass({
  displayName: 'search',

  render: function() {
    return react.DOM.div(null, 
      react.DOM.p(
        {style: {color: 'white'}}, 
        'search'
      ),
      navbar()
    ); 
  }
});