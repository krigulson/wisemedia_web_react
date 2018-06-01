import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'et',
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
          'Estonia': 'Estonia',
          'about_us': 'About us',
          'Choose lang': 'Choose lang',
          'Hello folks!': 'Hello folks!',
          'Hold on tiger ... blog is coming': 'Hold on tiger ... blog is coming',
          'where i am': 'Where am I?',
          'Where I am then?': 'Where I am then?',
          'blog': 'Blog',
          'working with innovative technologies': 'working with innovative technologies',
          'being part of a really wise team': 'being part of a really wise team',
          'gaining experience from the best': 'gaining experience from the best'
        }
      },
      et: {
        translations: {
          'Germany': 'Saksa',
          'English': 'Inglise',
          'Estonia': 'Eesti',
          'about_us': 'Meist',
          'Choose lang': 'Vali keel',
          'Hello folks!': 'Hei teie seal!',
          'where i am': 'Kus ma olen?',
          'Where I am then?': 'Kus ma olen siis?',
          'blog': 'Blogi',
          'working with innovative technologies': 'Töötad, kasutades innovatiivseid tehnoloogiaid',
          'being part of a really wise team': 'Oled osa tõeliselt targast tiimist',
          'gaining experience from the best': 'Omandad kogemusi parimatelt'
        }
      },
      de: {
        translations: {
          'Hello folks!': 'Hallo leute!',
          'Germany': 'Deutschland',
          'English': 'Englisch',
          'Estonia': 'Estland',
          'about_us': 'Über uns',
          'Choose lang': 'Sprache wählen',
          'where i am': 'Wo bin ich?',
          'Where I am then?': 'Wo bin ich dann?',
          'Hold on tiger ... blog is coming': 'halt den Tiger, der Blog geht ...',
          'working with innovative technologies': 'Arbeiten mit innovativen Technologien',
          'being part of a really wise team': 'Teil eines wirklich weisen Teams zu sein',
          'gaining experience from the best': 'Erfahrungen von den Besten sammeln',
        }
      }
    },
  });

export default i18next;
