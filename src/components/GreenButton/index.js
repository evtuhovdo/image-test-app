import React from 'react';
import PropTypes from 'prop-types';

import './GreenButton.css';

const GreenButton = ({ text }) => (
  <button className="button">
    {text}
  </button>
);

GreenButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GreenButton;
