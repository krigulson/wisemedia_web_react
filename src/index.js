import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import { translate } from 'react-i18next';
import App from './App';
import i18n from "./i18n";
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// import store from './config/store';

translate.setI18n(i18n);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)} >
    <App />
  </Provider>,
  document.getElementById("root")
);
