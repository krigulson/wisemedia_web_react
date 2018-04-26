import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import BgImage from './components/BgImage/BgImage';
import { Navbar } from './components/Navbar/Navbar';
import WelcomeText from './components/MyComponent/WelcomeText';
import Footer from './components/Footer/Footer';
import { translate } from 'react-i18next';

class App extends Component {
  render() {
    const { i18n, t } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <a className="btn btn-outline-dark" onClick={() => changeLanguage('de')}>{t('Germany')}</a>
            <a className="btn btn-outline-dark" onClick={() => changeLanguage('en')}>{t('English')}</a>
          </Navbar>
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
          <Footer>Soola 3, Tartu, 11111, +372 000 000</Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default translate('translations')(App);
