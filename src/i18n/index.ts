import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEnglish from '../locales/en/translation.json';
import translationsInTurkish from '../locales/tr/translation.json';

const resources = {
  en: {
    translation: translationsInEnglish
  },
  tr: {
    translation: translationsInTurkish
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    debug: true,
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;