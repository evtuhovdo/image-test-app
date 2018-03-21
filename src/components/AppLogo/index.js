import React from 'react';
import PropTypes from 'prop-types';

import './AppLogo.css';

const AppLogo = ({ title }) => {
  return (
    <div className="logo">
      <div className="logo-image"/>
      <div className="app-title">{title}</div>
    </div>
  );
};

AppLogo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppLogo;
