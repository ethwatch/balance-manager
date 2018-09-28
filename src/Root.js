import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import Storage from '@devshack/react-native-storage';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

var BrowserRouter = null;
if (typeof window !== undefined) {
  BrowserRouter = require('react-router-dom').BrowserRouter;
  // const commonStorage = require('balance-common').commonStorage;
  // const storage = new Storage({
  //   size: 1000,
  //   storageBackend: window.localStorage,
  //   defaultExpires: null,
  //   enableCache: true,
  // });

  // window.storage = storage;
}

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
