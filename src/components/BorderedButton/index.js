import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './BorderedButton.css';

const BorderedButton = ({ text, color, fullWidth, ...rest }) => (
  <button
    className={classNames([
      `BorderedButton BorderedButton-${color}`,
      fullWidth && 'BorderedButton-fullWidth',
    ])}
    {...rest}
  >
    {text}
  </button>
);

BorderedButton.propTypes = {
  text: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  color: PropTypes.oneOf(['green', 'black']),
};

BorderedButton.defaultProps = {
  color: 'green',
  fullWidth: false,
};

export default BorderedButton;
