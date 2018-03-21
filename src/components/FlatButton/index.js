import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FlatButton.css';

const FlatButton = ({
  text, fullWidth, fullHeight, ...rest
}) => (
  <button
    className={classNames([
      'FlatButton',
      fullWidth && 'FlatButton-fullWidth',
      fullHeight && 'FlatButton-fullHeight',
    ])}
    {...rest}
  >
    {text}
  </button>
);

FlatButton.propTypes = {
  text: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
};

FlatButton.defaultProps = {
  fullWidth: false,
  fullHeight: false,
};

export default FlatButton;
