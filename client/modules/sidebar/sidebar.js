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
            react.DOM.a({onClick: console.log.bind(console, 'hello')}, 'Guide')
          )
        ),
        react.DOM.ul(null,
          react.DOM.li({className: 'sidebar-headline'},
            react.DOM.a({href: 'ux', onClick: handleClick.bind(this, 'ux')}, 'UX')
          ),
          react.DOM.section(null,
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'Animations')
            ),
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'Buttons')
            )
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

function handleClick(url, event) {
  console.log('preventdefault');
  event.preventDefault();
  //dispatcher.dispatch('changeRoute', url);
}