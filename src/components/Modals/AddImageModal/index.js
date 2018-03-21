import React from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';
import { connect } from 'react-redux';

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

const AddImageModal = ({ onExit, getApplicationNode, mounted, smallView }) => {
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
            <BorderedButton text="CLOSE" fullWidth={smallView} color="black" onClick={onExit} />
            <BorderedButton text="ADD" fullWidth={smallView} type="submit" />
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
  smallView: PropTypes.bool.isRequired,
};

AddImageModal.defaultProps = {
  mounted: false,
};

const mapStoreToProps = ({ browser }) => ({ smallView: browser.lessThan.big });

export default connect(mapStoreToProps)(AddImageModal);
