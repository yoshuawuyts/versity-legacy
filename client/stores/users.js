/**
 * Module dependencies
 */

var store = require('dad');

/**
 * Initialize 'users' store.
 */

var users = store('users');

/**
 * Expose 'users';
 */

module.exports = users;

/**
 * Define properties
 */

users
  .attr('name');
