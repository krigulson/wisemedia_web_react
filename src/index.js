import React from "react";
import { render } from "react-dom";
import { translate } from 'react-i18next';
import App from './App';
import i18n from "./i18n";

translate.setI18n(i18n);

render(
  <App />,
  document.getElementById("root")
);
