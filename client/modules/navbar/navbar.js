/**
 * Module dependencies
 */

var router = require('react-router-component');
var react = require('react');
var dispatcher = require('../../dispatcher/dispatcher');

/**
 * Render a sidebar.
 *
 * @api public
 */

module.exports = react.createClass({
  displayName: 'sidebar',
  render: render
});

/**
 * Render DOM.
 *
 * @return {ReactComponent}
 * @api private
 */ 

function render() {

  var header = {
    href: '/', 
    onClick: handleClick.bind(this, '/')
  }

  var search = {
    href: '/search',
    onClick: handleClick.bind(this, 'learn')
  }

  var settings = {
    href: '/settings', 
    onClick: handleClick.bind(this, 'teach')
  }

  return react.DOM.aside({className: 'sidebar'},
    react.DOM.nav(null,
      react.DOM.ul(null,
        react.DOM.li({className: 'sidebar-title'}, 
          react.DOM.a(header, 
            'Versity'
          )
        )
      ),
      react.DOM.ul(null,
        react.DOM.li({className: 'sidebar-headline'},
          react.DOM.a(search, 
            'Search'
          )
        )
      ),
      react.DOM.ul(null,
        react.DOM.li({className: 'sidebar-headline'},
          react.DOM.a(settings, 
            'Settings'
          )
        )
      ) 
    )
  );
}

/**
 * Handle click.
 *
 * @param {String} url
 * @param {Event} e
 * @api private
 */

function handleClick(url, e) {
  event.preventDefault();
  dispatcher.dispatch('path_update', url);
}