"use client";

import { useTranslation } from "react-i18next";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

const techStack = [
  { label: "HTML", icon: "<>" },
  { label: "CSS", icon: "#" },
  { label: "JavaScript", icon: "JS" },
  { label: "TypeScript", icon: "TS" },
  { label: "Node.js", icon: "N" },
  { label: "Next.js", icon: "N" },
  { label: "Nest.js", icon: "N" },
  { label: "Docker", icon: "D" },
  { label: "github", icon: "GH" },
];

export function Hero() {
  const { t } = useTranslation("common");

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
      {/* Availability badge */}
      <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-xs font-medium text-text-secondary">
        <span className="h-2 w-2 rounded-full bg-accent" />
        {t("hero.availability")}
      </span>

      {/* Name */}
      <h1 className="text-center text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
        Luis Esteban Peña
      </h1>

      {/* Role */}
      <p className="text-center text-lg text-text-secondary md:text-xl lg:text-2xl">
        {t("hero.role")}
      </p>

      {/* Value Proposition */}
      <p className="max-w-2xl text-center text-base leading-relaxed text-text-muted md:text-lg">
        {t("hero.valueProposition")}
      </p>

      {/* Quick credibility signals */}
      <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm font-mono text-text-muted sm:gap-4 md:gap-6">
        <span>{t("hero.signals.realtime")}</span>
        <span>{t("hero.signals.cicd")}</span>
        <span>{t("hero.signals.docker")}</span>
      </div>

      {/* Tech stack */}
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {techStack.map((tech) => (
          <Badge
            key={tech.label}
            label={tech.label}
            icon={
              <span className="font-mono text-[10px] font-bold">
                {tech.icon}
              </span>
            }
          />
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-col items-center gap-4">
        {/* Group 1: Main actions */}
        <div className="flex flex-row gap-3">
          <Button href="#contact" variant="primary">
            {t("hero.cta.contactMe")}
          </Button>
          <Button href="#projects" variant="outline">
            {t("hero.cta.viewProjects")}
          </Button>
        </div>

        {/* Group 2: Social links */}
        <div className="flex flex-row gap-2">
          <Button
            href="https://github.com/esteban0406"
            variant="ghost"
            external
          >
            {t("hero.cta.github")}
          </Button>
          <Button
            href="https://linkedin.com/in/luis-esteban-pe%C3%B1a-rodriguez-808b9b151"
            variant="ghost"
            external
          >
            LinkedIn
          </Button>
          <Button
            href="/documents/cv.pdf"
            variant="ghost"
            download="Luis_Esteban_Pena_CV.pdf"
          >
            {t("hero.cta.downloadCv")}
          </Button>
        </div>
      </div>
    </section>
  );
}
