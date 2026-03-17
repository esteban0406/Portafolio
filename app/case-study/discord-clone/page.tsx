import Link from "next/link";

const technologies = [
  {
    name: "Next.js",
    description:
      "Used to build the frontend interface with server-side rendering and efficient routing for a responsive user experience.",
  },
  {
    name: "NestJS",
    description:
      "Backend framework providing modular architecture, dependency injection, and built-in WebSocket gateway support.",
  },
  {
    name: "WebSockets",
    description:
      "Enables persistent bidirectional communication required for real-time messaging and instant updates.",
  },
  {
    name: "PostgreSQL",
    description:
      "Relational database used to persist users, channels, and messages with strong consistency guarantees.",
  },
  {
    name: "Docker",
    description:
      "Containerized deployment ensuring consistent environments between development and production.",
  },
];

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
  return (
    <main className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="flex flex-col gap-6 bg-card-darker px-6 pb-12 pt-12 md:px-12 lg:px-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-foreground"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
          Case Study: Discord Clone
        </h1>

        <p className="max-w-2xl text-lg text-text-muted">
          A technical deep dive into the architecture and engineering decisions
          behind a real-time messaging platform inspired by Discord.
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-medium sm:gap-5 md:gap-6">
          <a
            href="https://esteban-discord-clone.duckdns.org/"
            className="text-accent hover:underline"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/yourusername/discord-clone"
            className="text-accent hover:underline"
          >
            GitHub Repository
          </a>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="00" label="PROBLEM" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Problem & Goals</h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          Real-time communication platforms must solve several architectural
          challenges including persistent client connections, concurrent user
          messaging, synchronization across channels, and authentication across
          both HTTP and WebSocket layers.
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          The goal of this project was to design and implement a real-time
          messaging system inspired by Discord that demonstrates scalable
          communication patterns, secure authentication flows, and production
          deployment practices.
        </p>
      </section>

      {/* DESIGN */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="01" label="DESIGN" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          UI/UX Design Decisions
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          The interface was designed around familiar messaging patterns to
          minimize the learning curve for users. The layout follows a
          three-column structure consisting of server navigation, channel list,
          and active chat view.
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          A dark theme was chosen to improve readability during long messaging
          sessions and match the design conventions of modern collaboration
          tools.
        </p>

        <div className="flex aspect-video min-h-[180px] w-full items-center justify-center rounded-xl border border-border bg-card">
          UI Mockup Placeholder
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="02" label="ARCHITECTURE" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          System Architecture
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          The backend follows a modular monolithic architecture built with
          NestJS. Each domain of the application such as authentication,
          channels, messaging, and users is implemented as an isolated module.
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          The frontend communicates with the backend through REST APIs for
          standard operations and WebSocket connections for real-time
          communication.
        </p>

        <div className="flex aspect-video min-h-[180px] max-h-[400px] w-full items-center justify-center rounded-xl border border-border bg-card">
          Architecture Diagram Placeholder
        </div>
      </section>

      {/* AUTH FLOW */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="03" label="AUTHENTICATION" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Authentication Flow
        </h2>

        <ul className="max-w-3xl space-y-3 text-text-secondary">
          <li>1. User authenticates via REST API endpoint</li>
          <li>2. Server generates and returns a JWT token</li>
          <li>3. Client attaches the token during WebSocket handshake</li>
          <li>4. WebSocket gateway validates authentication</li>
          <li>5. Authenticated users join channel rooms</li>
        </ul>
      </section>

      {/* REALTIME FLOW */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="04" label="REAL-TIME MESSAGING" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Message Flow</h2>

        <ul className="max-w-3xl space-y-3 text-text-secondary">
          <li>Client sends message through WebSocket gateway</li>
          <li>Gateway validates user authentication</li>
          <li>Message stored in PostgreSQL</li>
          <li>Server broadcasts message to channel room</li>
          <li>Connected clients receive update instantly</li>
        </ul>
      </section>

      {/* TECHNOLOGIES */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="05" label="TECH STACK" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Technology Decisions
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-foreground">{tech.name}</h3>

              <p className="text-sm text-text-muted leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CI/CD */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="06" label="CI/CD PIPELINE" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Continuous Integration & Deployment
        </h2>

        <ul className="max-w-3xl space-y-3 text-text-secondary">
          <li>1. Code push triggers GitHub Actions workflow</li>
          <li>2. Unit and end-to-end tests run automatically</li>
          <li>3. Docker image is built</li>
          <li>4. Container deployed to Linux VPS</li>
          <li>5. Nginx routes traffic to the application</li>
        </ul>
      </section>

      {/* CHALLENGES */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="07" label="CHALLENGES" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Challenges & Lessons Learned
        </h2>

        <ul className="max-w-3xl space-y-3 text-text-secondary">
          <li>
            Sharing authentication logic between HTTP controllers and WebSocket
            gateways required careful separation of concerns.
          </li>

          <li>
            Managing concurrent users required room-based broadcasting to ensure
            efficient message delivery.
          </li>

          <li>
            Containerizing the application simplified deployment but required
            configuring networking between services.
          </li>
        </ul>
      </section>

      {/* DEMO */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="08" label="SYSTEM DEMO" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Live System Walkthrough
        </h2>

        <div className="flex aspect-video min-h-[180px] w-full items-center justify-center rounded-xl border border-border bg-card">
          Video Demo Placeholder
        </div>
      </section>
    </main>
  );
}
