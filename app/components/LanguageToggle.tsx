"use client";

import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("es") ? "es" : "en";

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`px-1 transition-colors ${
          current === "en"
            ? "font-bold text-accent"
            : "text-text-secondary hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-border">|</span>
      <button
        onClick={() => i18n.changeLanguage("es")}
        className={`px-1 transition-colors ${
          current === "es"
            ? "font-bold text-accent"
            : "text-text-secondary hover:text-foreground"
        }`}
      >
        ES
      </button>
    </div>
  );
}
