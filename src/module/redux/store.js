import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { responsiveStoreEnhancer } from 'redux-responsive';

import reducers from './reducers';

const initialState = {};
const enhancers = [responsiveStoreEnhancer];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const rootReducer = combineReducers({
  ...reducers,
});

const middlewares = [thunk];

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
