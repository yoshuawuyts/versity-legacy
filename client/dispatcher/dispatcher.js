/**
 * Module dependencies
 */

var Dispatcher = require('barracks');
var users = require('./users');
var path = require('./path');

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