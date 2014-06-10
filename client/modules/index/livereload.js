/**
 * Module dependencies
 */

var react = require('react');

/**
 * Define react class.
 *
 * @props {String} env
 * @return {ReactView}
 */

module.exports = react.createClass({
  displayName: 'livereload',
  render: function() {
    if (this.props.env != 'production') {
      return react.DOM.script({
        src: 'http://localhost:35729/livereload.js?snipver=1'
      });
    }
    return react.DOM.div(null);
  }
});