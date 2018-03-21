import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';

import './index.css';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import store from './module/redux/store';

const target = document.getElementById('root');

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  target,
);

registerServiceWorker();
