import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

i18next
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
          'about_us': 'About us',
          'where_i_am': 'Where I am?',
          'Hello folks!': 'Hello folks!',
        }
      },
      de: {
        translations: {
          'Hello folks!': 'Hallo leute!',
          'Germany': 'Deutschland',
          'English': 'Englisch',
          'about_us': 'Über uns',
          'where_i_am': 'Wo bin ich?',
        }
      }
    },
  });

export default i18next;
