/**
 * Module dependencies
 */

/**
 * Dispatcher prototype
 */

var dispatcher = Dispatcher.prototype;

/**
 * Exports
 */

module.exports = dispatcher;

/**
 * Dispatcher
 *
 * https://github.com/lipsmack/flux/tree/master/lib/core
 */

function Dispatcher() {
  if (!(this instanceof Dispatcher)) return new Dispatcher;
  this.callbacks = [];
};

/**
 * Register a new store.
 */

dispatcher.register = function(action, callback) {
  this.callbacks.push({
    action: action,
    callback: callback
  });
};

/**
 * Dispatch events
 */

dispatcher.dispatch = function(action) {
  return this.getCallbacks(action)
    .map(function(callback) {
      return callback.apply(callback);
    })
};

/**
 * Get callbacks.
 */ 

dispatcher.getCallbacks = function(action) {
  return this.callbacks.filter(function(callback) {
    return callback.action === action;
  }).map(function(callback) {
    return callback.callback;
  });
};