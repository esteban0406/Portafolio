import { PipelineStep } from "./ui/PipelineStep";

const steps = [
  {
    icon: (
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
    title: "Code Push",
    description: "GitHub Repository",
  },
  {
    icon: (
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
    title: "GitHub Actions",
    description: "CI Workflow Trigger",
  },

  // NEW STEP
  {
    icon: (
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
    title: "Test & Quality Gate",
    description: "Quality, Unit & E2E Tests",
  },

  {
    icon: (
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
    title: "Docker Build",
    description: "Containerized Image",
  },
  {
    icon: (
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
    title: "VPS Deployment",
    description: "Linux Production Server",
  },
  {
    icon: (
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
    title: "Nginx Proxy",
    description: "Reverse Proxy Routing",
  },
];

const capabilities = [
  "Automated builds on every push",
  "Quality checks and CI test validation",
  "Unit and end-to-end tests before merge",
  "Dockerized production environment",
  "Reverse proxy routing with Nginx",
  "Live deployment on VPS server",
];

export function Infrastructure() {
  return (
    <section className="flex flex-col items-center gap-12 bg-card-darker px-6 py-20 md:px-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-0.5 w-12 rounded-full bg-accent" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Infrastructure & DevOps
        </h2>

        <p className="max-w-xl text-base text-text-muted">
          Automated CI/CD pipeline with integrated testing that validates code
          quality, runs unit and end-to-end tests, and deploys containerized
          applications to a production VPS using GitHub Actions, Docker, and
          Nginx.
        </p>
      </div>

      {/* Pipeline flow */}
      <div className="flex flex-wrap items-center justify-center gap-0">
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
        Every push to the <span className="font-mono">main</span> branch
        triggers a CI workflow that runs quality checks, unit tests, and
        end-to-end tests before building a Docker image and deploying it to a
        Linux VPS server behind an Nginx reverse proxy.
      </p>

      {/* Capabilities */}
      <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-text-muted">
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
        View CI/CD workflow →
      </a>
    </section>
  );
}
