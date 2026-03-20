"use client";

import { useTranslation, Trans } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

function SectionHeader({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm font-bold text-accent">{number}</span>
      <span className="h-px w-8 bg-border" />
      <span className="font-mono text-sm font-semibold tracking-[0.15em] text-text-secondary">
        {label}
      </span>
    </div>
  );
}

export default function DiscordCloneCaseStudy() {
  const { t } = useTranslation("caseStudy");

  const solutionFeatures = t("sections.solution.features", {
    returnObjects: true,
  }) as Array<{ title: string; body: string }>;

  const authSteps = t("sections.auth.steps", {
    returnObjects: true,
  }) as string[];

  const realtimeSteps = t("sections.realtime.steps", {
    returnObjects: true,
  }) as string[];

  const techStackItems = t("sections.techStack.items", {
    returnObjects: true,
  }) as Array<{ category: string; items: string; description: string }>;

  const cicdSteps = t("sections.cicd.steps", {
    returnObjects: true,
  }) as string[];

  const challenges = t("sections.challenges.items", {
    returnObjects: true,
  }) as Array<{ number: string; title: string; body: string }>;

  const results = [
    { stat: "53", label: t("sections.results.stats.frontendTests") },
    { stat: "34", label: t("sections.results.stats.backendUnitTests") },
    { stat: "14", label: t("sections.results.stats.backendIntTests") },
    { stat: "9", label: t("sections.results.stats.e2eSpecs") },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="flex flex-col gap-6 bg-card-darker px-6 pb-12 pt-12 md:px-12 lg:px-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-foreground"
        >
          {t("header.backLink")}
        </Link>

        <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
          {t("header.title")}
        </h1>

        <p className="max-w-2xl text-lg text-text-muted">
          {t("header.description")}
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-medium sm:gap-5 md:gap-6">
          <a
            href="https://esteban-discord-clone.duckdns.org/"
            className="text-accent hover:underline"
          >
            {t("header.links.liveDemo")}
          </a>

          <a
            href="https://github.com/esteban0406/Chat-App"
            className="text-accent hover:underline"
          >
            {t("header.links.github")}
          </a>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="00" label={t("sections.problem.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.problem.title")}
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.problem.body1")}
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.problem.body2")}
        </p>
      </section>

      {/* SOLUTION */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="01" label={t("sections.solution.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.solution.title")}
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.solution.intro")}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutionFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="02" label={t("sections.design.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.design.title")}
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.design.body1")}
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.design.body2")}
        </p>

        <div className="w-full overflow-hidden rounded-xl border border-border bg-card p-4">
          <Image
            src="/images/mockup.png"
            alt={t("sections.design.imageAlt")}
            width={1512}
            height={787}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="03" label={t("sections.architecture.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.architecture.title")}
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          <Trans
            i18nKey="sections.architecture.body1"
            ns="caseStudy"
            components={{ strong: <strong className="text-foreground" /> }}
          />
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          <Trans
            i18nKey="sections.architecture.body2"
            ns="caseStudy"
            components={{
              strong: <strong className="text-foreground" />,
              code: <code className="font-mono text-accent text-sm" />,
            }}
          />
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          <Trans
            i18nKey="sections.architecture.body3"
            ns="caseStudy"
            components={{ strong: <strong className="text-foreground" /> }}
          />
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.architecture.body4")}
        </p>

        <div className="w-full overflow-hidden rounded-xl border border-border bg-card p-4">
          <Image
            src="/images/architecturemermaid.png"
            alt={t("sections.architecture.imageAlt")}
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* AUTH FLOW */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="04" label={t("sections.auth.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.auth.title")}
        </h2>

        <ul className="max-w-3xl space-y-3 text-text-secondary">
          {authSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      {/* REALTIME FLOW */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="05" label={t("sections.realtime.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.realtime.title")}
        </h2>

        <ul className="max-w-3xl space-y-3 text-text-secondary">
          {realtimeSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <div className="w-full overflow-hidden rounded-xl border border-border bg-card p-4">
          <Image
            src="/images/Chatflowmermaid.png"
            alt={t("sections.realtime.imageAlt")}
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="06" label={t("sections.techStack.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.techStack.title")}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStackItems.map((tech) => (
            <div
              key={tech.category}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase">
                  {tech.category}
                </span>
                <h3 className="font-semibold text-foreground text-sm">
                  {tech.items}
                </h3>
              </div>

              <p className="text-sm text-text-muted leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CI/CD */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="07" label={t("sections.cicd.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.cicd.title")}
        </h2>

        <ul className="max-w-3xl space-y-3 text-text-secondary">
          {cicdSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      {/* CHALLENGES */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="08" label={t("sections.challenges.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.challenges.title")}
        </h2>

        <div className="flex flex-col gap-6 max-w-3xl">
          {challenges.map((challenge) => (
            <div
              key={challenge.number}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-accent">
                  {challenge.number}
                </span>
                <h3 className="font-semibold text-foreground">
                  {challenge.title}
                </h3>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                {challenge.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="09" label={t("sections.results.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.results.title")}
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.results.body1")}
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {results.map((result) => (
            <div
              key={result.label}
              className="flex flex-col gap-2 rounded-xl border border-border bg-card p-6 text-center"
            >
              <span className="text-4xl font-bold text-accent">
                {result.stat}
              </span>
              <span className="text-sm text-text-muted leading-snug">
                {result.label}
              </span>
            </div>
          ))}
        </div>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.results.body2")}
        </p>
      </section>
    </main>
  );
}
