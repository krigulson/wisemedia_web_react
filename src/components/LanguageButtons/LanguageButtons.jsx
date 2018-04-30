import React, { Component } from 'react';

export class LanguageButtons extends Component {
  render() {
    const { i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    return (
      <div>
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
    );
  }
}
