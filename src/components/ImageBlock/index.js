import React from 'react';
import PropTypes from 'prop-types';
import ValidatorPropTypes from 'react-validator-prop-types';

import FlatButton from '../../components/FlatButton';

import './ImageBlock.css';

const ImageBlock = ({ title, imageUrl }) => (
  <div className="ImageBlock">
    <header className="ImageBlockHeader">
      <div title={title} className="ImageBlockHeader-Title">{title}</div>
      <FlatButton text="Delete" color="red" onClick={() => { console.log('puff and Delete image')}} />
    </header>
    <img src={imageUrl} alt={title} className="ImageBlockImage" />
  </div>
);

ImageBlock.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: ValidatorPropTypes.url.isRequired,
};

export default ImageBlock;
