import { reducer as formReducer } from 'redux-form';
import { createResponsiveStateReducer } from 'redux-responsive';

import imagesStore from './modules/images';

export default {
  browser: createResponsiveStateReducer({
    big: 1024,
    small: 700,
  }),
  form: formReducer,
  imagesStore,
};
