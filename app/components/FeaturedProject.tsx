import { Button } from "./ui/Button";

const techBadges = [
  "Next.js",
  "NestJS",
  "WebSockets",
  "PostgreSQL",
  "Docker",
  "Nginx",
  "GitHub Actions",
];

const features = [
  "Real-time messaging via WebSockets",
  "JWT authentication and role-based access control",
  "Channel-based messaging system",
  "Containerized deployment with Docker",
  "Automated CI/CD pipeline",
];

export function FeaturedProject() {
  return (
    <section className="flex flex-col items-center gap-12 px-6 py-16 md:px-12 md:py-16 lg:px-20 lg:py-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <div className="h-0.5 w-12 rounded-full bg-accent" />

        <h2 className="text-center text-3xl font-bold text-foreground lg:text-4xl">
          Featured Engineering Project
        </h2>
      </div>

      {/* Content */}
      <div className="flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row md:items-start md:gap-8 lg:gap-12">
        {/* Screenshot */}
        <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-card md:w-3/5">
          <span className="font-mono text-sm text-text-muted">
            Project Screenshot
          </span>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6 md:w-2/5">
          {/* Title */}
          <h3 className="text-3xl font-bold text-foreground">Discord Clone</h3>

          {/* Technical Highlight */}
          <p className="font-mono text-xs text-accent">
            Real-time messaging architecture with WebSockets and automated CI/CD
            deployment
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-accent/10 px-3 py-1.5 font-mono text-xs font-medium text-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed text-text-secondary">
            A real-time messaging platform inspired by Discord that supports
            channels, direct messaging, and role-based access control. Built
            with WebSocket communication, a NestJS backend API, and a
            containerized deployment pipeline using Docker and Nginx.
          </p>

          {/* Key Features */}
          <div className="flex flex-col gap-2">
            <h4 className="font-mono text-xs uppercase tracking-wide text-text-muted">
              Key Features
            </h4>

            <ul className="flex flex-col gap-1 text-sm text-text-secondary">
              {features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-3 md:gap-4">
            <Button href="https://esteban-discord-clone.duckdns.org/">
              Live Demo
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </Button>

            <Button href="/case-study/discord-clone" variant="outline">
              Architecture Case Study
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
