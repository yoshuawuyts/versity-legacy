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
  .attr('userName', {type: 'string', required: true})
  .attr('firstName', {type: 'string', required: true})
  .attr('lastName', {type: 'string', required: true})
  .attr('email', {type: /^.+@.+\..+$/, required: true})
  .attr('gender', {type: 'string'})
  .attr('password', {type: 'string'});
