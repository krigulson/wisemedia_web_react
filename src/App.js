import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'hover.css/css/hover.css';
import { BrowserRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import Route from 'react-router-dom/Route';

import BgImage from './components/bg/BgImage';
import Navbar from './components/navbar/Navbar';
import WelcomeText from './components/welcome/WelcomeText';
import GoogleMap from './components/GoogleMap';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    const { t } = this.props;

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <BgImage />
          <Route path="/" exact render={
            () => {
              return (
                <WelcomeText text={t('Hello folks!')} />
              )
            }
          } />
          <Route path="/about-us" exact render={
            () => {
              return (
                <WelcomeText text={t('Hello folks!')} />
              )
            }
          } />
          <Route path="/where-i-am" exact render={
            () => {
              return (
                <div>
                  <WelcomeText text={t('where_i_am')} />
                  <GoogleMap isMarkerShown/>
                </div>
              )
            }
          } />
          <Footer>Soola 3, Tartu, 11111, +372 000 000</Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default translate('translations')(App);
