import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { responsiveStateReducer } from 'redux-responsive';
import { createResponsiveStateReducer } from 'redux-responsive';


import imagesStore from './modules/images';

export default {
  browser: createResponsiveStateReducer({
    big: 1024,
    small: 700,
  }),
  form: formReducer,
  imagesStore,
  router,
};
