/**
 * Module dependencies
 */

var react = require('react');
var dispatcher = require('../../dispatcher/dispatcher');
var livereload = require('./livereload');
var router = require('../router/router');

/**
 * Initialize ENV variables.
 */

var reactCDN = process.env.NODE_ENV == 'production' 
  ? 'http://fb.me/react-0.10.0.min.js'
  : 'http://fb.me/react-0.10.0.js';

/**
 * Define react class.
 *
 * @api public
 */

module.exports = react.createClass({
  displayName: 'Index',
  render: render,
  componentWillMount: componentWillMount
});

/**
 * Render DOM.
 *
 * @props {String} host
 * @props {String} path
 * @return {ReactView}
 * @api private
 */

function render() {
  return react.DOM.html({className: 'no-js'},
    react.DOM.head(null, 
      react.DOM.meta({charSet: 'utf-8'}),
      react.DOM.meta({httpEquiv: 'X-UA-Compatible', content: 'IE=edge'}),
      react.DOM.title(null, 'Versity'),
      react.DOM.meta({
        name: 'viewport', 
        content: 'width=device-width, initial-scale=1'
      }),
      react.DOM.link({rel: 'stylesheet', href:'http://assets.' + this.props.host + '/build.css'}),
      react.DOM.link({rel: 'shortcut icon', href: 'http://assets.' + this.props.host + '/favicon.ico'}),
      react.DOM.script({src: reactCDN}),
      react.DOM.script({src:'http://assets.' + this.props.host + '/build.js'}),
      react.DOM.div({dangerouslySetInnerHTML: {
        __html: '<script>window.React || document.write("<script src=http://' 
          + this.props.host 
          + '/react.min.js")</script>'
      }}),
      livereload()
    ),
    react.DOM.body(null,
      router({path: this.props.path})
    )
  );
}

/**
 * Lifecycle: component will mount.
 *
 * @props {String} path
 * @api private
 */

function componentWillMount() {
  dispatcher.dispatch('path_initialize', this.props.path);
}
