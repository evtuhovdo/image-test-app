import React from 'react';
import PropTypes from 'prop-types';

import './BorderedButton.css';

const BorderedButton = ({ text, color, ...rest }) => (
  <button className={`BorderedButton BorderedButton-${color}`} {...rest}>
    {text}
  </button>
);

BorderedButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'green', 'black',
  ]),
};

BorderedButton.defaultProps = {
  color: 'green',
};

export default BorderedButton;
