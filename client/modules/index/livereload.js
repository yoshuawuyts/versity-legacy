/**
 * Module dependencies
 */

var react = require('react');

/**
 * Define vars
 */

/**
 * Define react class.
 *
 * @return {ReactView}
 */

module.exports = react.createClass({
  displayName: 'livereload',
  render: function() {
    if (process.env.NODE_ENV != 'production') {
      return react.DOM.script({
        src: 'http://localhost:35729/livereload.js?snipver=1'
      });
    }
  }
});