import React from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';

import BorderedButton from '../../../components/BorderedButton';
import AddImageForm from './includes/AddImageForm';

import './AddImageModal.css';
import submit from './includes/AddImageForm/submit';

const style = {
  underlayStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#A5A5A5',
  },
};

const AddImageModal = ({ onExit, getApplicationNode, mounted }) => {
  const onSubmit = (values) => {
    onExit();
    return submit(values);
  };

  return (
    <AriaModal
      mounted={mounted}
      titleText="Add new image"
      onExit={onExit}
      initialFocus="#newImageTitleInput"
      getApplicationNode={getApplicationNode}
      underlayStyle={style.underlayStyle}
    >
      <div className="AddImageModal">
        <header className="AddImageModalHeader">New image</header>
        <AddImageForm onSubmit={onSubmit}>
          <footer className="AddImageModalFooter">
            <BorderedButton text="CLOSE" color="black" onClick={onExit} />
            <BorderedButton text="ADD" type="submit" />
          </footer>
        </AddImageForm>
      </div>
    </AriaModal>
  );
};

AddImageModal.propTypes = {
  mounted: PropTypes.bool,
  getApplicationNode: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
};

AddImageModal.defaultProps = {
  mounted: false,
};

export default AddImageModal;
