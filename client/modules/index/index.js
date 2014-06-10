/**
 * Module dependencies
 */

var react = require('react');

var livereload = require('./livereload');
var router = require('../router/router');

/**
 * Initialize ENV variables.
 */

var PORT = process.env.port || 1337;
var host = process.env.NODE_ENV == 'production' 
  ? 'versity.co'
  : 'site.dev:' + PORT;
var reactCDN = process.env.NODE_ENV == 'production' 
  ? 'http://fb.me/react-0.10.0.min.js'
  : 'http://fb.me/react-0.10.0.js';

/**
 * Define react class.
 *
 * @props {String} path
 * @props {String} env
 * @return {ReactView}
 */

module.exports = react.createClass({
  displayName: 'Index',
  render: function() {  
    return react.DOM.html({className: 'no-js'},
      react.DOM.head(null, 
        react.DOM.meta({charSet: 'utf-8'}),
        react.DOM.meta({httpEquiv: 'X-UA-Compatible', content: 'IE=edge'}),
        react.DOM.title(null, 'Versity'),
        react.DOM.meta({
          name: 'viewport', 
          content: 'width=device-width, initial-scale=1'
        }),
        react.DOM.base({href: 'http://assets.' + 'site.dev:1337'},
          react.DOM.link({rel: 'stylesheet', href:'/build.css'}),
          react.DOM.link({rel: 'shortcut icon', href: '/favicon.ico'}),
          react.DOM.script({src: '/react.js'}),
          react.DOM.script({src:'/build.js'})
        )
      ),
     react.DOM.body(null,
        router({path: this.props.path}),
        react.DOM.div({
          dangerouslySetInnerHTML: {
            __html: '<script>window.React || document.write("<script src=http://' + host + '/react.min.js")</script>'
          }
        }),
        livereload()
      )
    );
  }
});