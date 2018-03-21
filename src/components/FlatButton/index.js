import React from 'react';
import PropTypes from 'prop-types';

import './FlatButton.css';

const FlatButton = ({ text, onClick }) => (
  <button onClick={onClick} className="FlatButton">
    {text}
  </button>
);

FlatButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

FlatButton.defaultProps = {
  onClick: () => {},
};

export default FlatButton;
