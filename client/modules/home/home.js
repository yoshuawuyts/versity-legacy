/**
 * Module dependencies
 */

var react = require('react');
var dispatcher = require('../../dispatcher/dispatcher');

/**
 * Render a sidebar.
 *
 * @api public
 */

module.exports = react.createClass({
  displayName: 'home',
  render: render
});

/**
 * Render DOM.
 *
 * @return {ReactComponent}
 * @api private
 */ 

function render() {
  return react.DOM.div({className: 'home'});
}