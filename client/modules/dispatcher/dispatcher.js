/**
 * Module dependencies
 */

var Dispatcher = require('barracks');
var index = require('../index/index');
var dispatcher = Dispatcher();

/**
 * Expose 'Dispatcher()'
 */

module.exports = dispatcher;

/**
 * Register callbacks.
 */

dispatcher.register('changeRoute', function(path) {
  index.forceUpdate.bind({path: path});
});