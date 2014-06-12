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
  return react.DOM.aside({className: 'sidebar'},
    react.DOM.nav(null,
      react.DOM.ul(null,
        react.DOM.li({className: 'sidebar-title'}, 
          react.DOM.a({
            href: '/', 
            onClick: handleClick.bind(this, '/')
          }, 'Versity')
        )
      ),
      react.DOM.ul(null,
        react.DOM.li({className: 'sidebar-headline'},
          react.DOM.a({
            href: '/learn', 
            onClick: handleClick.bind(this, 'learn')
          }, 'Learn')
        )
      ),
      react.DOM.ul(null,
        react.DOM.li({className: 'sidebar-headline'},
          react.DOM.a({
            href: '/teach', 
            onClick: handleClick.bind(this, 'teach')
          }, 'Teach')
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

function handleClick(url, event) {
  event.preventDefault();
  dispatcher.dispatch('path_update', '/search');
}