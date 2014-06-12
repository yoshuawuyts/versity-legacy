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
  : 'http://assets.versity.dev:1337/react.js';

/**
 * Define react class.
 *
 * @api public
 */

module.exports = react.createClass({
  displayName: 'Index',
  render: render,
  componentDidMount: componentDidMount
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
      //livereload(),
      react.DOM.link({rel: 'stylesheet', href:'http://assets.' + this.props.host + '/build.css'}),
      react.DOM.link({rel: 'shortcut icon', href: 'http://assets.' + this.props.host + '/favicon.ico'}),
      react.DOM.script({src: 'http://assets.versity.dev:1337/react.js'}),
      react.DOM.script({src:'http://assets.' + this.props.host + '/build.js'})
    ),
    // router gets rendered directly on the <body> tag.
    router({path: this.props.path})
  );
}

/**
 * Lifecycle: component did mount.
 *
 * @props {String} path
 * @api private
 */

function componentDidMount() {
  dispatcher.dispatch('path_initialize', this.props.path);
}