// @flow
// TODO: Типизировать детальнее
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import reducers from './reducers';

import type { StoreType } from './flow-types';

const initialState = {};
const enhancers = [responsiveStoreEnhancer];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const persistConfig = {
  key: 'persistedStore',
  storage,
  whitelist: ['imagesStore'],
};

const rootReducer = combineReducers({
  ...reducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

const store: StoreType = createStore(persistedReducer, initialState, composedEnhancers);
const persistor = persistStore(store);

export { store, persistor };
