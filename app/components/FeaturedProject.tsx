import { Button } from "./ui/Button";

const techBadges = ["Next.js", "Nest.js", "Docker"];

export function FeaturedProject() {
  return (
    <section className="flex flex-col items-center gap-12 px-6 py-20 md:px-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <div className="h-0.5 w-12 rounded-full bg-accent" />
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          Featured Project
        </h2>
      </div>

      {/* Content: screenshot + info */}
      <div className="flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center">
        {/* Screenshot placeholder */}
        <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-card lg:w-3/5">
          <span className="font-mono text-sm text-text-muted">
            Project Screenshot
          </span>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6 lg:w-2/5">
          <h3 className="text-3xl font-bold text-foreground">Discord Clone</h3>

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

          <p className="text-base leading-relaxed text-text-secondary">
            A full-featured real-time messaging platform built with a modern
            microservices architecture. Features include channels, direct
            messaging, voice integration, and role-based access control.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="https://esteban-discord-clone.duckdns.org/">
              View Project
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
              Case Study
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
