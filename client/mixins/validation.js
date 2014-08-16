/**
 * Module dependencies.
 */

var assert = require('assert');
var react = require('react');

/**
 * Validation mixin. 
 * 
 * Expects an `{Object} validators` to be present with validation
 * functions. 
 *
 * Example: 
 * 
 *   var form = react.createClass({
 *     validators: {
 *       userName: myModel.name.validate,
 *       gender: myModel.gender.validate
 *     }
 *   })
 * 
 * 
 * The available states for objects are:
 *
 *  │==============================│
 *  │ ACTION           │ STATE     │
 *  │==============================│
 *  │ initialized      │ pristine  │
 *  │ field is valid   │ valid     │
 *  │ field is invalid │ invalid   │
 *  │==============================│
 *
 * The available states for the form are:
 *  │====================================│
 *  │ ACTION                 │ STATE     │
 *  │====================================│
 *  │ allformsValidated      │ false     │
 *  │ submitted              │ false     │
 *  │ success                │ false     │
 *  │====================================│
 *
 *
 *  (1): If a field is invalid, the field should handle the error. Until
 *       all fields are valid, the form will remain 'editable'.
 */

module.exports = {
  componentWillMount: componentWillMount,
  updateFormString: updateFormString,
  hasError: hasError,
  resetError: resetError,
  validateInputField: validateInputField,
  allFormsValidated: allFormsValidated
};

/**
 * Lifecycle: componentWillMount.
 */

function componentWillMount() {
  assert(this.validators, 'this.validators should be an Object.');
  
  this.setState({

    // Check if all form fields are validated.
    allFormsValidated: false,

    // Check if the contents of the form have been submitted to the server.
    submitted: false,

    // Check if the form has been succesfully submitted.
    succes: false,

    // Hold the names of the forms that have an invalid input.
    errors: []
  });

  Object.keys(this.validators)
    .forEach(function(key) {
      assert('function' == typeof this.validators[key], 'Validator should be a function.');
      var obj = {};
      obj[key] = {};
      obj[key].isValid = 'pristine';
      obj[key].value = '';
      this.setState(obj);
    }.bind(this));
}

/**
 * Run validation on field, push 'key' to 'errors' array if failed.
 *
 * @param {String} key
 * @api public
 */

function validateInputField(key) {
  // Initialize empty obj.
  var obj = {};

  // Check if the validator[key] validates the formField value.
  if (!this.validators[key].bind(this, this.state[key].value)) {

    // If the error hasn't been bound yet, push the error.
    if (!hasError.bind(this, key)) obj.errors = this.state.errors.push(key);

    // Set invalid state on field.
    obj[key] = {};
    obj[key].isValid = 'invalid';
    this.setState(obj);
    return;
  }

  // Reset any errors.
  if (hasError.bind(this, key)) resetError.bind(this, key);
  
  // Set valid state on field.
  obj[key] = {};
  obj[key].isValid = 'valid';
  this.setState(obj);
}

/**
 * Update the form string.
 *
 * @param {String} key
 * @param {KeyboardEvent} e
 * @api public
 */

function updateFormString(key, e) {
  this.state[key].value = e.target.value;
}

/**
 * Check if all forms are filled in, set 'state.allFormsValidated'.
 *
 * @return {Boolean}
 * @api public
 */

function allFormsValidated() {
  return Object.keys(this.validators)
    .every(function(validator) {
      return !!this.state[validator];
    }.bind(this));
}

/**
 * Check if the component at 'key' has an error registered in 'errors'.
 *
 * @param {String} key
 * @return {Boolean}
 * @api private
 */

function hasError(key) {
  return this.state.errors.any(function(error) {
    return error == key;
  });
}

/**
 * Remove an error from the 'errors' array.
 *
 * @param {String} key
 * @api private
 */

function resetError(key) {
  this.setState({errors: this.state.errors.splice(key, 1)});
}