/**
 * Module dependencies
 */

var pathStore = require('../stores/path');

/**
 * Initialize the 'path' store
 *
 * @param {Object} path
 * @api public
 */

exports.initialize = function initialize(path) {
  pathStore.add({path: path});
};

/**
 * Update the 'path' store
 *
 * @param {String} path
 * @api public
 */

exports.update = function update(path) {
  pathStore.update({cid: 0, path: path});
};