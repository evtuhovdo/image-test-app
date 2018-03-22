import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';

import './index.css';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import store from './module/redux/store';

const target = document.getElementById('root');

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  target,
);

registerServiceWorker();
