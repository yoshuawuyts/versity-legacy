/**
 * Module dependencies
 */

var detect = require('is-client');
var react = require('react');
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
  : 'http://fb.me/react-0.10.0.js'

/**
 * Define react class.
 *
 * @props {String} markdown
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
        react.DOM.script({src: reactCDN}),
        react.DOM.div({
          dangerouslySetInnerHTML: {
            __html: '<script>window.React || document.write("<script src=http://assets.site.dev/react.min.js")</script>'
          }
        }),
        react.DOM.base({href: 'http://assets.' + host},
          react.DOM.link({rel: 'stylesheet', href:'/build.css'}),
          react.DOM.script({src:'/build.js'}),
          react.DOM.link({rel: 'shortcut icon', href: '/favicon.ico'})
        )
      ),
      router({path: this.props.path})
    )
  }
});