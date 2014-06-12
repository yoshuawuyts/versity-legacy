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

exports.add = function add(user) {
  usersStore.add(user);
  console.log(usersStore);
};