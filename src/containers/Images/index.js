import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { imagesActions } from '../../module/redux/modules/images';

import './Images.css';
import ImageBlock from '../../components/ImageBlock';

const Images = ({ images, removeImage }) => (
  <section className="Images">
    {images.length === 0 && <div className="ImagesNoImages">Нет изображений</div>}
    {images.length > 0 && (
        images.map(image => (
          <ImageBlock
            onRemoveImage={removeImage}
            key={image.id}
            id={image.id}
            title={image.title}
            imageUrl={image.url}
          />
        ))
      )}
  </section>
);

Images.propTypes = {
  removeImage: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

const mapStoreToProps = state => ({
  images: state.imagesStore.images,
});

const mapDispatchToProps = dispatch => ({
  addImage: ({ id, title, url }) =>
    dispatch(imagesActions.addImage({
      id,
      title,
      url,
    })),
  removeImage: imageId => dispatch(imagesActions.removeImage(imageId)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Images);
