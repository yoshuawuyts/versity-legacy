/**
 * Module dependencies
 */

var react = require('react');

/**
 * Render a sidebar.
 *
 * @api public
 */

module.exports = react.createClass({
  displayName: 'navbar',
  render: render
});

/**
 * Render DOM.
 *
 * @return {ReactComponent}
 * @api private
 */

function render() {
  return react.DOM.nav({className: 'navbar'});
}
