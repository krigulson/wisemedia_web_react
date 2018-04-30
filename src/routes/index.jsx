import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from '../components/Navbar/Navbar';
import { WelcomeText } from '../components/MyComponent/WelcomeText';

export default () => (
  <Router>
    <Switch>
      <Route path="/" render={() =>
        <div>
          <Navbar />
          <WelcomeText text="Kala" />
        </div>
      } />
      <Route path="/about-us" render={() => <WelcomeText text="Hello!" /> } />
    </Switch>
  </Router>
);
/* <Router>
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
    <Route path="/where-i-am" exact render={
      () => {
        return (
          <div>
            <WelcomeText text={t('Where I am?')} />
            <MyGoogleMap isMarkerShown />
          </div>
        )
      }
    } />
    <Footer>Soola 3, Tartu, 11111, +372 000 000</Footer>
  </div>
  <Router>
    <Route path="/" component={</Router>port default () => (

  );
</Router> */
