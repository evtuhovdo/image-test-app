import React from 'react';
import PropTypes from 'prop-types';

import './MainContent.css';

const MainContent = ({ children }) => (
  <main className="MainContent">
    {children}
  </main>
);

MainContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainContent;
