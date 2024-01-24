import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import es from "./locales/es/es.json";
import en from "./locales/en/en.json";

i18n
  .use(initReactI18next)
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
  });

export default i18n;