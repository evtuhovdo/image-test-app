// @flow
export type AddImageType = 'images/ADD_IMAGE';
export type RemoveImageType = 'images/REMOVE_IMAGE';

export type ImageIdType = string;
export type ImageTitleType = string;
export type ImageUrlType = string;

export type ImageType = {
  +id: ImageIdType,
  +title: ImageTitleType,
  +url: ImageUrlType
};

export type ImagesStoreType = Array<ImageType>;

export type ImagesStoreStateType = {
  +images: ImagesStoreType
};

export type ImagesStoreActionType =
  | {| type: RemoveImageType, +imageId: ImageIdType |}
  | {| type: AddImageType, +id: ImageIdType, +title: ImageTitleType, +url: ImageUrlType |};
