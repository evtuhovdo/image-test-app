import React from 'react';
import PropTypes from 'prop-types';
import ValidatorPropTypes from 'react-validator-prop-types';

import FlatButton from '../../components/FlatButton';

import './ImageBlock.css';

const ImageBlock = ({ id, title, imageUrl, onRemoveImage }) => {
  const removeImage = () => {
    onRemoveImage(id);
  };

  return (
    <div className="ImageBlock">
      <header className="ImageBlockHeader">
        <div title={title} className="ImageBlockHeader-Title">
          {title}
        </div>
        <FlatButton text="Delete" color="red" onClick={removeImage} />
      </header>
      <img src={imageUrl} alt={title} className="ImageBlockImage" />
    </div>
  );
};

ImageBlock.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onRemoveImage: PropTypes.func.isRequired,
  imageUrl: ValidatorPropTypes.url.isRequired,
};

export default ImageBlock;
