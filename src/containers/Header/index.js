import React from 'react';

import AppLogo from './../../components/AppLogo';

import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="headerContent">
        <AppLogo title="Images" />
      </div>
    </header>
  );
};

export default Header;
