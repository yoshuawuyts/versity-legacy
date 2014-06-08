/**
 * Module dependencies
 */

var react = require('react');

/**
 * Define react class.
 *
 * @return {ReactView}
 */

module.exports = react.createClass({
  displayName: 'livereload',
  render: function() {
    if (process.env.NODE_ENV == 'development') {
      return react.DOM.div({
        dangerouslySetInnerHTML: {
          __html: '<script>document.write("<script src=http://localhost:35729/livereload.js?snipver=1"></script>")</script>'
        }
      })
    }
    return null;
  }
})