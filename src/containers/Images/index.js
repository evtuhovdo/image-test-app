import React from 'react';
import { connect } from 'react-redux';
import { imagesActions } from '../../module/redux/modules/images';

import './Images.css';
import ImageBlock from '../../components/ImageBlock';

// TODO: PropTypes
const Images = ({ images, removeImage }) => (
  <section>
    {images.length === 0 && <div>Нет изображений</div>}
    {images.length && (
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
