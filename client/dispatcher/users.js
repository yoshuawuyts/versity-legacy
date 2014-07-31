/**
 * Module dependencies
 */

var usersStore = require('../stores/users');

/**
 * Add a user to 'users'
 *
 * @param {Object} user
 * @api public
 */

exports.add = function(user) {
  usersStore.add(user);
};

/**
 * Validate a target against the .
 */

exports.validate = function() {
  usersStore.validate();
};