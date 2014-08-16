/**
 * Module dependencies
 */

var react = require('react');
var loginForm = require('../../modules/form/login');


/**
 * 'Home' view
 */

module.exports = react.createClass({
  displayName: 'login',

  render: function() {
    return react.DOM.div(null, 
      react.DOM.p({style: {color: 'black'}}, 
        'login'
      ), 
      loginForm()
    ); 
  }
});