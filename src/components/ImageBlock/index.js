import React from 'react';
import PropTypes from 'prop-types';
import ValidatorPropTypes from 'react-validator-prop-types';

import FlatButton from '../../components/FlatButton';
import TapAction from './includes/TapAction';

import './ImageBlock.css';

const ImageBlock = ({
  id, title, imageUrl, onRemoveImage,
}) => {
  const removeImage = () => {
    onRemoveImage(id);
  };

  return (
    <div className="ImageBlock">
      <header className="ImageBlockHeader">
        <div title={title} className="ImageBlockHeader-Title">
          {title}
        </div>
        <div className="ImageBlockFlatButton">
          <FlatButton text="Delete" color="red" onClick={removeImage} />
        </div>
      </header>
      <div className="ImageBlockTapAction">
        <img src={imageUrl} alt={title} className="ImageBlockImage" />
        <TapAction onRemoveImage={removeImage} />
      </div>
    </div>
  );
};

ImageBlock.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onRemoveImage: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-typos
  imageUrl: ValidatorPropTypes.url.isRequired,
};

export default ImageBlock;
