import uuid from 'uuid/v4';
import { store } from './../../../../../module/redux/store';
import { imagesActions } from './../../../../../module/redux/modules/images';

function submit(values) {
  return store.dispatch(imagesActions.addImage({
    id: uuid(),
    title: values.title,
    url: values.url,
  }));
}

export default submit;
