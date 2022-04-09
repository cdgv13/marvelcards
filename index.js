import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import _store from './redux-saga/store/_configureStore';

const Root = () => {
  return (
    <Provider store={_store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Root);
