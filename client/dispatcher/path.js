/**
 * Module dependencies
 */

var pathsStore = require('../stores/users');

/**
 * Initialize the 'paths' store
 *
 * @param {Object} path
 * @api public
 */

exports.initialize = function initialize(path) {
  pathsStore.add({path: path});
}

/**
 * Update the 'paths' store
 *
 * @param {String} path
 * @api public
 */

exports.update = function update(path) {
  pathsStore.update(path);
}