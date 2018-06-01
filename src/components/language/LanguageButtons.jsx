import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import i18n from '../../i18n';

export class LanguageButtons extends Component {
  render() {
    const toggle = (lng) => i18n.changeLanguage(lng);
    return (
      <I18n>
        {
          (t) => {
            return (
              <div>
                <a className="navbar-item" onClick={() => toggle('de')}>
                  {t('Germany')}
                </a>
                <a className="navbar-item" onClick={() => toggle('us')}>
                  {t('English')}
                </a>
              </div>
            )
          }
        }
      </I18n>
    );
  }
}

export default LanguageButtons;
