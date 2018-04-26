import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true
    },

    resources: {
      en: {
        translations: {
          'Hello folks!': 'Hello folks!'
        }
      },
      de: {
        translations: {
          'Hello folks!': 'Hallo leute!',
          'Germany': 'Deutschland',
          'English': 'Englisch',
        }
      }
    },
  });

export default i18n;
