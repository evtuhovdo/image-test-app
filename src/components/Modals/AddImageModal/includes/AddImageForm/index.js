import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm, propTypes } from 'redux-form';

import './AddImageFormStyle.css';
import validate from './validate';
import asyncValidate from './asyncValidate';

const renderField = field => (
  <div className="input-row">
    <input
      {...field.input}
      className="AddImageModalInput"
      {...field.inputProps}
    />
    {field.meta.touched &&
      field.meta.error && <span className="error">{field.meta.error}</span>}
  </div>
);

class AddImageForm extends Component {
  render() {
    const { children, handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <div className="AddImageModalInputContainer">
          <Field
            component={renderField}
            name="title"
            inputProps={{
              type: 'text',
              placeholder: 'Title',
              id: 'newImageTitleInput',
            }}
          />
          <Field
            component={renderField}
            name="url"
            inputProps={{
              type: 'text',
              placeholder: 'URL',
            }}
          />
        </div>
        {children}
      </Form>
    );
  }
}

AddImageForm.propTypes = {
  ...propTypes,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

AddImageForm.defaultProps = {
  children: null,
};

export default reduxForm({
  form: 'addImageForm',
  validate,
  asyncValidate,
  asyncChangeFields: ['url'],
  asyncBlurFields: ['url'],
})(AddImageForm);
