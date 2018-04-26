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

import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


class App extends Component {
  render() {
    const { i18n, t } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    const MyGoogleMap = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyAtEIDMy5l_7y8bZAeytovChGugymppVUE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{
          height: `200px`,
          position: 'relative',
          bottom: 0,
          top: '500px',
          width: '800px',
          left: '25%',
         }} />,
        mapElement: <div style={{ height: `100%` }} />
      }),
      withScriptjs,
      withGoogleMap
    )(props => (
      <GoogleMap defaultZoom={16} defaultCenter={{ lat: 58.3775219, lng: 26.7310817 }}>
        {props.isMarkerShown && (
          <Marker position={{ lat: 58.3775219, lng: 26.7310817 }} />
        )}
      </GoogleMap>
    ));
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
          <Route path="/where-i-am" exact render={
            () => {
              return (
                <div>
                  <WelcomeText text={t('Where I am?')} />
                  <MyGoogleMap isMarkerShown/>
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
