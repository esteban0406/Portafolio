import Link from "next/link";

const technologies = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 17 5-5-5-5"/><path d="M18 17V7"/></svg>
    ),
    name: "Next.js",
    description: "Frontend framework with SSR and API routes",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
    ),
    name: "Nest.js",
    description: "Backend framework with modular architecture",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"/><path d="M10 21.9V14L2.1 9.1"/><path d="m10 14 11.9-6.9"/></svg>
    ),
    name: "Docker",
    description: "Containerized deployment and orchestration",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
    ),
    name: "PostgreSQL",
    description: "Relational database with TypeORM integration",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>
    ),
    name: "WebSockets",
    description: "Real-time bidirectional communication",
  },
];

function SectionHeader({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
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
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex flex-col gap-4 bg-card-darker px-6 pb-12 pt-12 md:px-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
        >
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
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">
          Case Study: Discord Clone
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
          A deep dive into the design, architecture, and implementation of a
          real-time messaging platform
        </p>
      </header>

      {/* Section 1: Design */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-20">
        <SectionHeader number="01" label="DESIGN" />
        <h2 className="text-3xl font-bold text-foreground">
          UI/UX Design Decisions
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-text-secondary">
          The interface was designed with a focus on familiarity and usability,
          drawing inspiration from Discord&apos;s proven UX patterns while
          introducing modern design improvements. The dark theme reduces eye
          strain during extended use, and the sidebar navigation provides quick
          access to servers and channels.
        </p>
        <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-card">
          <span className="font-mono text-sm text-text-muted">
            UI Design Mockup Placeholder
          </span>
        </div>
      </section>

      {/* Section 2: Architecture */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-20">
        <SectionHeader number="02" label="ARCHITECTURE" />
        <h2 className="text-3xl font-bold text-foreground">
          System Architecture
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-text-secondary">
          The application follows a modular microservices architecture with clear
          separation of concerns. The frontend communicates with the backend
          through RESTful APIs and WebSocket connections for real-time features.
          Docker containers ensure consistent environments across development and
          production.
        </p>
        <div className="flex aspect-video max-h-[400px] w-full items-center justify-center rounded-xl border border-border bg-card">
          <span className="font-mono text-sm text-text-muted">
            Architecture Diagram Placeholder
          </span>
        </div>
      </section>

      {/* Section 3: Technologies */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-20">
        <SectionHeader number="03" label="TECHNOLOGIES" />
        <h2 className="text-3xl font-bold text-foreground">
          Tech Stack Deep Dive
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
            >
              <div className="text-accent">{tech.icon}</div>
              <h3 className="text-base font-semibold text-foreground">
                {tech.name}
              </h3>
              <p className="text-[13px] leading-relaxed text-text-muted">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Video Testing */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-20">
        <SectionHeader number="04" label="VIDEO TESTING" />
        <h2 className="text-3xl font-bold text-foreground">
          Testing &amp; Demo
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-text-secondary">
          A comprehensive walkthrough demonstrating real-time messaging, channel
          management, user authentication, and voice integration features in
          action.
        </p>
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-background"
              aria-hidden="true"
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </div>
          <span className="font-mono text-sm text-text-muted">
            Video Demo Placeholder
          </span>
        </div>
      </section>
    </main>
  );
}
