import * as types from './types';

export const addImage = ({ title, imageUrl, imageId }) => ({
  type: types.ADD_IMAGE,
  payload: { title, imageUrl, imageId },
});

export const removeImage = imageId => ({
  type: types.REMOVE_IMAGE,
  payload: imageId,
});
