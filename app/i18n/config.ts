import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../../locales/en/common.json";
import enCaseStudy from "../../locales/en/caseStudy.json";
import esCommon from "../../locales/es/common.json";
import esCaseStudy from "../../locales/es/caseStudy.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    defaultNS: "common",
    ns: ["common", "caseStudy"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator"],
      caches: [],
    },
    resources: {
      en: { common: enCommon, caseStudy: enCaseStudy },
      es: { common: esCommon, caseStudy: esCaseStudy },
    },
  });

export default i18n;
