import React, { Component } from 'react';
import './App.css';

import Header from './../Header';
import MainContent from '../MainContent';
import GreenButton from '../../components/GreenButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent>
          <GreenButton text="NEW" />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </MainContent>
      </div>
    );
  }
}

export default App;
