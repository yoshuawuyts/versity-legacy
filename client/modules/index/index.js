/**
 * Module dependencies
 */

var react = require('react');
var router = require('../router/router'); 

/**
 * Initialize ENV variables.
 */

var PORT = process.env.port || 1337;
var host = process.env.NODE_ENV == 'production' 
  ? 'mywebsite.com' 
  : 'site.dev:' + PORT;

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