import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { I18n, translate } from 'react-i18next';
import logo from '../../wisemedia_logo.svg';
import i18n from '../../i18n';
export class Navbar extends Component {
  render() {
    const toggle = (lng) => i18n.changeLanguage(lng);
    return (
      <I18n>
        {
          (t) => {
            return (
              <nav className="navbar fixed-top">
                  <BrandLogo>
                    <img src={logo} alt="BrandLogo" width="200" height="50" />
                  </BrandLogo>
                  <ul className="navbar-nav mr-auto ml-5 flex-row">
                    <li className="nav-item mr-4">
                      <NavLink className="nav-link" activeclass="active" to="/about-us">
                        {t('about_us')}
                      </NavLink>
                    </li>
                    <li className="nav-item mr-4">
                      <NavLink className="nav-link" activeclass="active" to="/where-i-am">
                        {t('where_i_am')}
                      </NavLink>
                    </li>
                  </ul>
                  <a className="btn btn-outline-dark" onClick={() => toggle('de')}>{t('Germany')}</a>
                  <a className="btn btn-outline-dark" onClick={() => toggle('en')}>{t('English')}</a>
              </nav>
            )
          }
        }
      </I18n>
    )
  }
}
export class BrandLogo extends Component {
  render() {
    const { children } = this.props;
    return (
      <a className="navbar-brand animated fadeInDownBig" href="/">
        {children}
      </a>
    )
  }
}

export default translate('translations')(Navbar);

