/**
 * Form mixin
 */

module.exports = {
  componentWillMount: componentWillMount,
  updateFormString: updateFormString
};

/**
 * Lifecycle: componentWillMount.
 *
 *  │====================================================│
 *  │ ACTION                                 │ STATE     │
 *  │====================================================│
 *  │ initialized                            │ editable  │
 *  │ any field invalidated(1)               │ editable  │
 *  │ all fields validated                   │ valid     │
 *  │ submitted to server, no response yet   │ pending   │
 *  │ submitted to server, success           │ success   │
 *  │ submitted to server, error             │ error     │
 *  │====================================================│
 *
 *  (1): If a field is invalid, the field should handle the error. Until
 *       all fields are valid, the form will remain 'editable'.
 *
 * @api public
 */

function componentWillMount() {
  this.setState({
    submitted: false,
    succes: false
  });
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