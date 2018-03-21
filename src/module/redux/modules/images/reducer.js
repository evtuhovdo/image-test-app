import * as types from './types';

const imagesReducer = (
  state = {
    images: [
      {
        id: '416ac246-e7ac-49ff-93b4-f7e94d997e6a', title: 'some Title 1', url: 'https://placeholdit.co/i/800x450',
      },
      {
        id: '416ac246-e7ac-49ff-93b4-f7e94d997e6b', title: 'some Title 2', url: 'https://placeholdit.co/i/800x450',
      },
      {
        id: '416ac246-e7ac-49ff-93b4-f7e94d997e6c', title: 'some Title 3', url: 'https://placeholdit.co/i/800x450',
      },
    ],
  },
  action,
) => {
  switch (action.type) {
    case types.ADD_IMAGE:
      return {
        ...state,
        images: [
          ...state.images,
          {
            id: action.payload.id,
            title: action.payload.title,
            url: action.payload.url,
          },
        ],
      };
    case types.REMOVE_IMAGE:
      return {
        ...state,
        images: state.images.filter(image => image.id !== action.payload.imageId),
      };
    default:
      return state;
  }
};

export default imagesReducer;
