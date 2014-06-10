/**
 * Module dependencies
 */

var router = require('react-router-component');
var react = require('react');
var dispatcher = require('../../dispatcher/dispatcher');

/**
 * Render a sidebar
 *
 * @api public
 */

module.exports = react.createClass({
  displayName: 'sidebar',
  render: render
});

/**
 * Render DOM
 *
 * @return {ReactComponent}
 * @api private
 */ 

function render() {
  return react.DOM.aside({className: 'sidebar', onClick: handleClick.bind(this)},
    react.DOM.nav(null,
      react.DOM.ul(null,
        react.DOM.li({className: 'sidebar-title'}, 
          react.DOM.a({onClick: handleClick.bind(this)}, 'Versity')
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