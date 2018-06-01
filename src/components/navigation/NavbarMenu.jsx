import React, { Component } from "react";
import { I18n } from 'react-i18next';
import injectSheet from "react-jss";
import styles from "./NavbarStyles";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'
import faMap from '@fortawesome/fontawesome-free-solid/faMap'
import faRss from '@fortawesome/fontawesome-free-solid/faRss'
import LanguageButtons from "../language/LanguageButtons";

export class NavbarMenu extends Component {
  render() {
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
                <div className="navbar-end is-hidden-mobile">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">{t('Choose lang')}</a>
                    <div className="navbar-dropdown">
                      <LanguageButtons />
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
