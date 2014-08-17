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
  displayName: 'course',
  render: render
});

/**
 * Render DOM.
 *
 * @return {ReactComponent}
 * @api private
 */

function render() {
  return react.DOM.section({className: 'section-course'});
}
