import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, ger, hu } from './locales';

const resources = {
  en: {
    translation: en,
  },
  ger: {
    translation: ger,
  },
  hu: {
    translation: hu,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // if you're using a language detector, do not define the lng option
    lng: 'hu',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
