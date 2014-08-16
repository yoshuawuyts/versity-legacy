/**
 * Module dependencies.
 */

var react = require('react');
var validationMixin = require('../../mixins/validation');
var dispatcher = require('../../dispatcher/dispatcher');
var userValidate = require('../../stores/users').validate;
var formMixin = require('../../mixins/form');

/**
 * React form view.
 */

module.exports = react.createClass({
  mixins: [validationMixin],
  render: render,
  validators: {
    lastName: userValidate.bind(userValidate, 'lastName'),
    firstName: userValidate.bind(userValidate, 'firstName'),
    userName: userValidate.bind(userValidate, 'userName'),
    password: userValidate.bind(userValidate, 'password')
  }
});

/**
 * Lifecycle: Render the DOM
 */

function render() {
  var submitButton = {
    onClick: handleSubmit.bind(this), 
    className: this.state.allFormsValidated
  };

  return react.DOM.div(null,
    react.DOM.button(null, 'continue with facebook'),
    react.DOM.hr(),
    react.DOM.form({className: this.state.allFormsValidated},
      react.DOM.section({className: 'firstName ' + this.state.firstName.isValid},
        react.DOM.p(null, 'first name'),
        react.DOM.input(createField.call(this, 'firstName')),
        react.DOM.label()
      ),
      react.DOM.section({className: 'lastName ' + this.state.lastName.isValid},
        react.DOM.p(null, 'last name'),
        react.DOM.input(createField.call(this, 'lastName')),
        react.DOM.label()
      ),
      react.DOM.section({className: 'userName ' + this.state.userName.isValid},
        react.DOM.p(null, 'user name'),
        react.DOM.input(createField.call(this, 'userName')),
        react.DOM.label()
      ),
      react.DOM.section({className: 'password ' + this.state.password.isValid},
        react.DOM.p(null, 'password'),
        react.DOM.input(createField.call(this, 'password')),
        react.DOM.label(),
        react.DOM.input({type: 'checkbox'}),
        react.DOM.label(null, 'show password')
      ),
      react.DOM.button(submitButton, 'submit')
    )
  );
}

/**
 * Create a field.
 *
 * @param {String} name
 * @api private
 */

function createField(name) {
  var obj = {};
  obj.className = this.state[name].isValid;
  obj.onKeyDown = handleKeyDown.bind(this, name);
  obj.onBlur = this.resetError.bind(this, 'password');
  return obj;
}

/**
 * Handle keydown.
 *
 * @param {String} key
 * @param {KeyboardEvent} e
 * @api private
 */

function handleKeyDown(key, e) {
  this.updateFormString(key, e);
  this.validateInputField(key);
  this.setState({allFormsValidated: this.allFormsValidated()});
}

/**
 * Handle submit.
 *
 * @param {KeyboardEvent} event
 * @api private
 */

function handleSubmit(event) {
  event.preventDefault();
  if (!this.state.allFormsValidated) return;
  this.setState({submitted: true});
}