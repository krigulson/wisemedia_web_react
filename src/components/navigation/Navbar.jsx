import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { I18n } from 'react-i18next';
import injectSheet from "react-jss";
import styles from "./NavbarStyles";
import logo from '../../wisemedia_logo.svg';
import i18n from '../../i18n';
import FlagIcon from "../FlagIcon";

export class Navbar extends Component {
  render() {
    const toggle = (lng) => i18n.changeLanguage(lng);
    const { classes } = this.props;
    const codes = {
      germany: 'de',
      english: 'us',
      estonian: 'ee'
    };
    const sizes = { default: 'lg'};
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
                      <NavLink className={classes.navLink} activeclass="kala" to="/about-us">
                        {t('about_us')}
                      </NavLink>
                    </li>
                    <li className="nav-item mr-4">
                      <NavLink className={classes.navLink} activeclass="active" to="/where-i-am">
                        {t('where_i_am')}
                      </NavLink>
                    </li>
                  </ul>
                  <a className="btn" onClick={() => toggle('de')}>
                    <FlagIcon code={codes.germany} size={sizes.default} />
                  </a>
                  <a className="btn" onClick={() => toggle('en')}>
                    <FlagIcon code={codes.english} size={sizes.default} />
                  </a>
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

export default injectSheet(styles)(Navbar);
