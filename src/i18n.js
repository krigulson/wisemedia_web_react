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
          'Germany': 'Germany',
          'English': 'English',
          'about_us': 'About us',
          'where_i_am': 'Where I am?',
          'Hello folks!': 'Hello folks!',
          'Hold on tiger ... blog is coming': 'Hold on tiger ... blog is coming',
          'where i am': 'Where am I?',
          'blog': 'Blog'
        }
      },
      de: {
        translations: {
          'Hello folks!': 'Hallo leute!',
          'Germany': 'Deutschland',
          'English': 'Englisch',
          'about_us': 'Über uns',
          'where i am': 'Wo bin ich?',
          'Hold on tiger ... blog is coming': 'halt den Tiger, der Blog geht ...',
        }
      }
    },
  });

export default i18next;
