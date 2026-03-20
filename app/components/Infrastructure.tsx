"use client";

import { useTranslation } from "react-i18next";
import { PipelineStep } from "./ui/PipelineStep";

const stepIcons = [
  (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  ),
  (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  ),
  (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12l2 2 4-4" />
      <path d="M21 12c0 5-4 9-9 9S3 17 3 12 7 3 12 3s9 4 9 9z" />
    </svg>
  ),
  (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
      <path d="M10 21.9V14L2.1 9.1" />
      <path d="m10 14 11.9-6.9" />
    </svg>
  ),
  (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  ),
];

const stepKeys = [
  "codePush",
  "githubActions",
  "testQuality",
  "dockerBuild",
  "vpsDeployment",
  "nginxProxy",
] as const;

export function Infrastructure() {
  const { t } = useTranslation("common");

  const steps = stepKeys.map((key, i) => ({
    icon: stepIcons[i],
    title: t(`infrastructure.steps.${key}.title`),
    description: t(`infrastructure.steps.${key}.description`),
  }));

  const capabilities = t("infrastructure.capabilities", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="flex flex-col items-center gap-12 bg-card-darker px-6 py-16 md:px-12 md:py-16 lg:px-20 lg:py-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-0.5 w-12 rounded-full bg-accent" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          {t("infrastructure.title")}
        </h2>

        <p className="max-w-xl text-base text-text-muted">
          {t("infrastructure.description")}
        </p>
      </div>

      {/* Pipeline flow */}
      <div className="flex w-full flex-col items-center gap-4 md:grid md:grid-cols-3 md:gap-4 xl:flex xl:flex-row xl:flex-nowrap xl:items-center xl:justify-center xl:gap-0">
        {steps.map((step, i) => (
          <PipelineStep
            key={step.title}
            icon={step.icon}
            title={step.title}
            description={step.description}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>

      {/* Pipeline explanation */}
      <p className="max-w-2xl text-center text-sm leading-relaxed text-text-muted">
        {(() => {
          const [before, after] = t("infrastructure.pipelineExplanation", {
            branch: "\x00",
          }).split("\x00");
          return (
            <>
              {before}
              <span className="font-mono">main</span>
              {after}
            </>
          );
        })()}
      </p>

      {/* Capabilities */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-mono text-text-muted md:gap-x-6 md:gap-y-3">
        {capabilities.map((cap) => (
          <span key={cap}>✔ {cap}</span>
        ))}
      </div>

      {/* Optional workflow link */}
      <a
        href="https://github.com/esteban0406/Chat-App/tree/main/.github/workflows"
        target="_blank"
        className="text-sm font-medium text-accent hover:underline"
      >
        {t("infrastructure.viewWorkflow")}
      </a>
    </section>
  );
}
