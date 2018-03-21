import React, { Component } from 'react';

import './App.css';

import Header from './../Header';
import MainContent from '../MainContent';
import Images from '../Images';
import AddImageModal from '../../components/Modals/AddImageModal';
import AppMainActions from '../AppMainActions';

class App extends Component {
  state = {
    showAddImageModal: false,
  };

  getRootNode = () => document.getElementById('root');

  showAddImageModal = () => {
    this.setState({ showAddImageModal: true });
  };

  hideAddImageModal = () => {
    this.setState({ showAddImageModal: false });
  };

  render() {
    const { showAddImageModal } = this.state;

    return (
      <div className="App">
        <Header />
        <MainContent>
          <AppMainActions onAddClick={this.showAddImageModal} />
          <Images />
        </MainContent>
        <AddImageModal
          onExit={this.hideAddImageModal}
          getApplicationNode={this.getRootNode}
          mounted={showAddImageModal}
        />
      </div>
    );
  }
}

export default App;
