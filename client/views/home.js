/**
 * Module dependencies
 */

var react = require('react');
var sidebar = require('../modules/sidebar/sidebar');
var navbar = require('../modules/navbar/navbar');
var home = require('../modules/home/home');

/**
 * 'Home' view
 */

module.exports = react.createClass({
  displayName: 'home',
  render: render
});

/**
 * Render.
 */

function render() {
  return react.DOM.div({className: 'root-section'}, 
    navbar(),
    sidebar(),
    home()
  ); 
}