/**
 * Module dependencies
 */

var spawn = require('child_process').spawn;
var browser = require('zombie');
var path = require('path');

/**
 * Initialize 'server'.
 */

var args = [
    '--harmony',
    path.join(__dirname, '/../../server/index/index.js')
]
  .concat(process.argv.slice(2));

spawn('node', args, {
  env: 'test',
  stdio: [0,1,2]
});

/**
 * Create a new 'world'.
 *
 * @param {Function} callback
 * @api public
 */

module.exports = function World(callback) {
  this.browser = new browser();

  this.visit = function(url, callback) {
    this.browser.visit(url, callback);
  };

  callback();
};