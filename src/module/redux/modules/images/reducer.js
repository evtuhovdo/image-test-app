// @flow
import * as types from './types';

import type {
  ImagesStoreStateType,
  ImagesStoreActionType,
  ImageType,
} from '../../flow-types/imagesStore';

const imagesReducer = (
  state: ImagesStoreStateType = {
    images: [
      {
        id: '416ac246-e7ac-49ff-93b4-f7e94d997e6a',
        title: 'some Title 1',
        url: 'https://picsum.photos/800/600',
      },
      {
        id: '416ac246-e7ac-49ff-93b4-f7e94d997e6b',
        title: 'some Title 2',
        url: 'https://picsum.photos/900/1000',
      },
      {
        id: '416ac246-e7ac-49ff-93b4-f7e94d997e6c',
        title: 'some Title 3',
        url: 'https://picsum.photos/400/500',
      },
    ],
  },
  action: ImagesStoreActionType,
): ImagesStoreStateType => {
  switch (action.type) {
    case types.ADD_IMAGE:
      return {
        ...state,
        images: [
          ...state.images,
          {
            id: action.id,
            title: action.title,
            url: action.url,
          },
        ],
      };
    case types.REMOVE_IMAGE: {
      const { imageId } = action;
      const images = state.images.filter((image: ImageType): boolean => image.id !== imageId);

      return {
        ...state,
        images,
      };
    }
    default:
      return state;
  }
};

export default imagesReducer;
