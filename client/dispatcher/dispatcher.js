/**
 * Module dependencies
 */

var Dispatcher = require('barracks');
var path = require('./path');
var users = require('./users');

/**
 * Initialize 'Dispatcher'
 */

var dispatcher = Dispatcher();

/**
 * Expose 'Dispatcher()'.
 */

module.exports = dispatcher;

/**
 * Register callbacks.
 */

dispatcher
  .register('users_add', users.add)
  .register('path_initialize', path.initialize)
  .register('path_update', path.update);