import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import GlobalStyle from './global-styles';
import { PersistGate } from 'redux-persist/lib/integration/react';

import store, { persistor } from './store/index';


render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
      <GlobalStyle />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)