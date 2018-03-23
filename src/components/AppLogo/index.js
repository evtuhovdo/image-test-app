// @flow

import React, { Component } from 'react';

import './AppLogo.css';

type PropType = {
  title: string
};

class AppLogo extends Component<PropType> {
  shouldComponentUpdate = (nextProps: PropType): boolean => this.props.title !== nextProps.title;

  render(): ?React$Node {
    const { title } = this.props;

    return (
      <div className="AppLogo">
        <div className="AppLogoImage" />
        <div className="AppLogoTitle">{title}</div>
      </div>
    );
  }
}

export default AppLogo;
