import React from 'react';
import PropTypes from 'prop-types';

import './FlatButton.css';

const FlatButton = ({ text, ...rest }) => (
  <button className="FlatButton" {...rest}>
    {text}
  </button>
);

FlatButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FlatButton;
