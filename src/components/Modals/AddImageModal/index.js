import React from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';

import BorderedButton from '../../../components/BorderedButton';

import './AddImageModal.css';

const style = {
  underlayStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#A5A5A5',
  },
};

const AddImageModal = ({ onExit, getApplicationNode, mounted }) => (
  <AriaModal
    focusTrapPaused
    mounted={mounted}
    titleText="Add new image"
    onExit={onExit}
    initialFocus="#newImageTitleInput"
    getApplicationNode={getApplicationNode}
    underlayStyle={style.underlayStyle}
  >
    <div className="AddImageModal">
      <header className="AddImageModalHeader">New image</header>
      <div className="AddImageModalInputContainer">
        <input className="AddImageModalInput" id="newImageTitleInput" type="text" placeholder="Title" />
        <input className="AddImageModalInput" type="text" placeholder="URL" />
      </div>
      <footer className="AddImageModalFooter">
        <BorderedButton text="CLOSE" color="black" onClick={onExit} />
        <BorderedButton
          text="ADD"
          onClick={() => {
            console.log('add new Image');
          }}
        />
      </footer>
    </div>
  </AriaModal>
);

AddImageModal.propTypes = {
  mounted: PropTypes.bool,
  getApplicationNode: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
};

AddImageModal.defaultProps = {
  mounted: false,
};

export default AddImageModal;
