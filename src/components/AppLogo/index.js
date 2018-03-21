import React from 'react';
import PropTypes from 'prop-types';

import './AppLogo.css';

const AppLogo = ({ title }) => (
  <div className="AppLogo">
    <div className="AppLogoImage" />
    <div className="AppLogoTitle">{title}</div>
  </div>
);

AppLogo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppLogo;
