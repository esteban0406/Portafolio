import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../../locales/en/common.json";
import enCaseStudy from "../../locales/en/caseStudy.json";
import enCaseStudyJobAI from "../../locales/en/caseStudyJobAI.json";
import esCommon from "../../locales/es/common.json";
import esCaseStudy from "../../locales/es/caseStudy.json";
import esCaseStudyJobAI from "../../locales/es/caseStudyJobAI.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    defaultNS: "common",
    ns: ["common", "caseStudy", "caseStudyJobAI"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator"],
      caches: [],
    },
    resources: {
      en: { common: enCommon, caseStudy: enCaseStudy, caseStudyJobAI: enCaseStudyJobAI },
      es: { common: esCommon, caseStudy: esCaseStudy, caseStudyJobAI: esCaseStudyJobAI },
    },
  });

export default i18n;
