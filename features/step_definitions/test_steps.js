/**
 * Module dependencies
 */

var world = require("../support/world.js");

/**
 * Step definitions
 */

module.exports = function () {
  this.World = world;

  this.Given('I am on the timeline page', function(callback) {
    this.visit('http://localhost:8000', callback);
  });

  this.When(/^I do bla bla$/, function(callback) {
    callback.pending();
  });

  this.Then(/^I should see "(.*)" as the page title$/, function(title, callback) {
    var pageTitle = this.browser.text('title');
    if (title === pageTitle) {
      callback();
    } else {
      callback.fail(new Error("Expected to be on page with title " + title));
    }
  });
};  