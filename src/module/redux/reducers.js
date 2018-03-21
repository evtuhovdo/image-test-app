import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import imagesStore from './modules/images';

export default {
  form: formReducer,
  imagesStore,
  router,
};
