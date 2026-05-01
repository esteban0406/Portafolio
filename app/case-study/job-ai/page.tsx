"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { MermaidDiagram } from "../../components/MermaidDiagram";

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

const DIAGRAMS = {
  solution: `graph LR
    User["👤 User"] --> FE["Next.js 16\\nFrontend"]
    FE --> BE["NestJS 11\\nBackend API"]
    BE --> DB[("PostgreSQL\\n+ pgvector")]
    BE --> AI["AI Providers\\nGemini · Groq · Ollama"]
    BE --> Jobs["Job Sources\\nRemotive · Jobicy · Findwork"]`,

  architecture: `graph TD
    subgraph Frontend
        A["App Router\\n(Next.js 16)"] --> B["Server Components\\ndata fetching"]
        A --> C["Client Components\\ninteractivity"]
        C --> D["Zustand Stores\\nauth · ai-panel"]
        C --> E["AI Panel\\nSSE stream consumer"]
    end
    subgraph Backend
        F["Auth Module\\nJWT · bcrypt"]
        G["Jobs Module\\nfilter · paginate"]
        H["RAG Module\\nretrieve · synthesize"]
        I["Embedding Module\\nGemini · Ollama"]
        J["LLM Module\\nGroq · Ollama"]
        L["Ingestion Module\\ncron · parse · chunk"]
        M["Resume Module\\nPDF · parse · embed"]
        N["User Module\\nprofile · favorites"]
        H --> I
        H --> J
        L --> I
        M --> I
    end
    K[("PostgreSQL\\n+ pgvector\\nJobs · Chunks · Users\\nResumes · Favorites")]
    F & G & H & L & M & N --> K
    Frontend -->|"REST + SSE"| Backend`,

  ragPipeline: `flowchart TD
    Q["User Query"] --> RA["Resume Augmentation\\nprepend titles + skills"]
    RA --> EM["Embed Query\\nGemini / e5-base-v2\\n768 dimensions"]
    EM --> VS["Vector Search\\ncosine similarity · top 15 chunks"]
    VS --> GR["Group by Job\\ntop 5 unique jobs"]
    GR --> FD["Field Detection\\ndetect salary · benefits · requirements intent"]
    FD --> CA["Chunk Assembly\\n+ auto-append missing fields"]
    CA --> PR["Build LLM Prompt\\nuser profile + job context + query"]
    PR --> LLM["Groq Llama-4-Scout"]
    LLM --> ST["Stream tokens → UI\\nSSE · token by token"]`,

  queryClassification: `flowchart TD
    Q["User Query"] --> RC["Regex Classifier\\nfast path"]
    RC -->|"aggregation pattern matched"| AG["Aggregation Path\\nSQL template → LLM summary"]
    RC -->|"no match"| LC["LLM Classifier\\nfallback"]
    LC -->|"retrieval"| RAG["RAG Path\\nvector search → LLM synthesis"]
    LC -->|"aggregation"| AG
    LC -->|"hybrid"| HY["Hybrid Path\\nRAG + Aggregation\\ncombined prompt"]
    AG --> RES["Streamed Response"]
    RAG --> RES
    HY --> RES`,

  dataIngestion: `flowchart LR
    A["Fetch Jobs\\nRemotive · Jobicy · Findwork\\nevery 6 hours"] --> B["Deduplicate\\ncontent-hash check"]
    B --> C["LLM Parse\\nextract structured fields"]
    C -->|"success"| D["Structured Chunks\\nidentity · requirements\\nresponsibilities · benefits"]
    C -->|"failure"| E["Sliding Window\\n800-char overlapping chunks"]
    D --> F["Embed Chunks\\n768-dim vectors"]
    E --> F
    F --> G[("Store\\nPostgreSQL + pgvector")]`,
};

export default function JobAICaseStudy() {
  const { t } = useTranslation("caseStudyJobAI");

  const solutionFeatures = t("sections.solution.features", {
    returnObjects: true,
  }) as Array<{ title: string; body: string }>;

  const ragSteps = t("sections.ragPipeline.steps", {
    returnObjects: true,
  }) as string[];

  const classificationSteps = t("sections.queryClassification.steps", {
    returnObjects: true,
  }) as string[];

  const ingestionSteps = t("sections.dataIngestion.steps", {
    returnObjects: true,
  }) as string[];

  const frontendFeatures = t("sections.frontend.features", {
    returnObjects: true,
  }) as Array<{ title: string; body: string }>;

  const decisions = t("sections.decisions.items", {
    returnObjects: true,
  }) as Array<{ number: string; title: string; body: string }>;

  const techStackItems = t("sections.techStack.items", {
    returnObjects: true,
  }) as Array<{ category: string; items: string; description: string }>;

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
            href="https://esteban-jobai.duckdns.org/"
            className="text-accent hover:underline"
          >
            {t("header.links.liveDemo")}
          </a>

          <a
            href="https://github.com/esteban0406/RAG-JobPosting"
            className="text-accent hover:underline"
          >
            {t("header.links.github")}
          </a>
        </div>
      </header>

      {/* 00 — PROBLEM */}
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

      {/* 01 — SOLUTION */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="01" label={t("sections.solution.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.solution.title")}
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.solution.intro")}
        </p>

        <MermaidDiagram chart={DIAGRAMS.solution} id="jobai-solution" />

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

      {/* 02 — ARCHITECTURE */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="02" label={t("sections.architecture.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.architecture.title")}
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.architecture.body1")}
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.architecture.body2")}
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.architecture.body3")}
        </p>

        <MermaidDiagram chart={DIAGRAMS.architecture} id="jobai-architecture" />
      </section>

      {/* 03 — RAG PIPELINE */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="03" label={t("sections.ragPipeline.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.ragPipeline.title")}
        </h2>

        <ul className="max-w-3xl space-y-3 text-text-secondary">
          {ragSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <MermaidDiagram chart={DIAGRAMS.ragPipeline} id="jobai-rag" maxWidth="55%" />
      </section>

      {/* 04 — QUERY CLASSIFICATION */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader
          number="04"
          label={t("sections.queryClassification.label")}
        />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.queryClassification.title")}
        </h2>

        <ul className="max-w-3xl space-y-3 text-text-secondary">
          {classificationSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <MermaidDiagram
          chart={DIAGRAMS.queryClassification}
          id="jobai-classification"
          maxWidth="55%"
        />
      </section>

      {/* 05 — DATA INGESTION */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="05" label={t("sections.dataIngestion.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.dataIngestion.title")}
        </h2>

        <ul className="max-w-3xl space-y-3 text-text-secondary">
          {ingestionSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <MermaidDiagram chart={DIAGRAMS.dataIngestion} id="jobai-ingestion" />
      </section>

      {/* 06 — FRONTEND */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="06" label={t("sections.frontend.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.frontend.title")}
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.frontend.body1")}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {frontendFeatures.map((feature) => (
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

      {/* 07 — ENGINEERING DECISIONS */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="07" label={t("sections.decisions.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.decisions.title")}
        </h2>

        <div className="flex flex-col gap-6 max-w-3xl">
          {decisions.map((decision) => (
            <div
              key={decision.number}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-accent">
                  {decision.number}
                </span>
                <h3 className="font-semibold text-foreground">
                  {decision.title}
                </h3>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                {decision.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 08 — WHAT I LEARNED */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="08" label={t("sections.learned.label")} />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("sections.learned.title")}
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.learned.body1")}
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          {t("sections.learned.body2")}
        </p>
      </section>

      {/* 09 — TECH STACK */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="09" label={t("sections.techStack.label")} />

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
    </main>
  );
}
