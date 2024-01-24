import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import es from "./locales/es/es.json";
import en from "./locales/en/en.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    lng: "es",
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "lang",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;