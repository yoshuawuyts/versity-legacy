/**
 * Module dependencies
 */

var router = require('react-router-component');
var react = require('react');

var dispatcher = require('../dispatcher/dispatcher');

/**
 * Component
 */

module.exports = react.createClass({
  displayName: 'sidebar',

  render: function() {
    return react.DOM.aside({className: 'sidebar', onClick: console.log.bind(console, 'hello')},
      react.DOM.nav(null,

        react.DOM.ul(null,
          react.DOM.li({className: 'sidebar-title'}, 
            react.DOM.a({onClick: console.log.bind(console, 'hello')}, 'Versity')
          )
        ),
        react.DOM.ul(null,
          react.DOM.li({className: 'sidebar-headline', onClick: handleClick.bind(this, 'learn')},
            react.DOM.a({href: '/learn'}, 'Learn')
          )
        ),
        react.DOM.ul(null,
          react.DOM.li({className: 'sidebar-headline'},
            react.DOM.a({href: '/teach', onClick: handleClick.bind(this, 'teach')}, 'Teach')
          )
        ) 
      )
    );
  }
});

/**
 * Handle click
 *
 * @param {String} url
 * @api private
 */

function handleClick(event) {
  console.log('preventdefault');
  event.preventDefault();
  dispatcher.dispatch('changeRoute', '/learn');
}