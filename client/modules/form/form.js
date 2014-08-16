/**
 * Module dependencies.
 */

var login = require('./login');

/**
 * Decide which form to use.
 */

module.exports = function(form) {
  switch(form) {
    case 'login': 
      return login;
  }
};