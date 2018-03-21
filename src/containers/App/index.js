import React, { Component } from 'react';

import './App.css';

import Header from './../Header';
import MainContent from '../MainContent';
import GreenButton from '../../components/GreenButton';
import Images from '../Images';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent>
          <section className="AppMainActions">
            <GreenButton text="NEW" />
          </section>
          <Images />
        </MainContent>
      </div>
    );
  }
}

export default App;
