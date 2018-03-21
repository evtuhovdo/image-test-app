import * as types from './types';

export const addImage = ({ title, url, id }) => ({
  type: types.ADD_IMAGE,
  payload: {
    title,
    url,
    id,
  },
});

export const removeImage = imageId => ({
  type: types.REMOVE_IMAGE,
  payload: { imageId },
});
