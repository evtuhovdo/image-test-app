// @flow
import * as types from './types';
import type { ImagesStoreActionType, ImageType, ImageIdType } from '../../flow-types/imagesStore';

export const addImage = ({ title, url, id }: ImageType): ImagesStoreActionType => ({
  type: types.ADD_IMAGE,
  id,
  title,
  url,
});

export const removeImage = (imageId: ImageIdType): ImagesStoreActionType => ({
  type: types.REMOVE_IMAGE,
  imageId,
});
