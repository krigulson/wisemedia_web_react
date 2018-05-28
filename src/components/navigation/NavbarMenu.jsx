import React, { Component } from "react";
import FlagIcon from "../FlagIcon";
import { I18n } from 'react-i18next';
import i18n from '../../i18n';
import injectSheet from "react-jss";
import styles from "./NavbarStyles";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'
import faMap from '@fortawesome/fontawesome-free-solid/faMap'
import faRss from '@fortawesome/fontawesome-free-solid/faRss'

export class NavbarMenu extends Component {
  render() {
    const toggle = (lng) => i18n.changeLanguage(lng);
    const codes = {
      germany: 'de',
      english: 'us',
      estonian: 'ee'
    };
    const sizes = { default: 'lg' };
    return (
      <I18n>
        {
          (t) => {
            return (
              <div className="navbar-menu">
                <div className="navbar-start">
                  <a href="/about-us" className="navbar-item">
                    <span className="icon has-text-danger"><FontAwesomeIcon icon={faHeart} /></span>
                    <span>{t('about_us')}</span>
                  </a>
                  <a href="/where-i-am" className="navbar-item">
                    <span className="icon has-text-primary"><FontAwesomeIcon icon={faMap} /></span>
                    <span>{t('where i am')}</span>
                  </a>
                  <a href="/blog" className="navbar-item">
                    <span className="icon has-text-warning"><FontAwesomeIcon icon={faRss} /></span>
                    <span>{t('blog')}</span>
                  </a>
                </div>
                <div className="navbar-end">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">Choose lang</a>
                    <div className="navbar-dropdown">
                      <a className="navbar-item" onClick={() => toggle('de')}>
                        <FlagIcon code={codes.germany} size={sizes.default} />
                        {t('Germany')}
                      </a>
                      <a className="navbar-item" onClick={() => toggle('us')}>
                        <FlagIcon code={codes.english} size={sizes.default} />
                        {t('English')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        }
      </I18n>
    )
  }
}

export default injectSheet(styles)(NavbarMenu);
