/**
 * Module dependencies
 */

var store = require('dad');

/**
 * Initialize 'routes' store.
 */

var routes = store('routes');

/**
 * Expose 'routes';
 */

module.exports = routes;

/**
 * Define properties
 */

routes
  .attr('route', {required: true});
