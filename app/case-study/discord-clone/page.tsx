import Link from "next/link";
import Image from "next/image";

const techStack = [
  {
    category: "Frontend",
    items: "Next.js 16, React 19, Tailwind CSS v4",
    description:
      "App Router with server components, responsive layouts, long-lived client state, and real-time event subscriptions.",
  },
  {
    category: "Backend",
    items: "NestJS 11, Prisma ORM, PostgreSQL",
    description:
      "Modular monolith with focused domain modules. Prisma models the full collaboration schema with explicit RBAC permissions.",
  },
  {
    category: "Real-time",
    items: "Socket.IO",
    description:
      "Persistent bidirectional connections for instant message delivery and targeted user notifications.",
  },
  {
    category: "Voice & Video",
    items: "LiveKit",
    description:
      "Channel-based audio and video sessions accessible directly from within the application.",
  },
  {
    category: "Authentication",
    items: "JWT, Passport, Google OAuth 2.0",
    description:
      "Supports email/password registration and Google OAuth. JWTs are validated across both REST and WebSocket layers.",
  },
  {
    category: "Media Storage",
    items: "Cloudinary",
    description:
      "Profile avatar uploads with cloud storage, allowing users to personalize their accounts.",
  },
  {
    category: "Testing",
    items: "Jest, Supertest, Playwright",
    description:
      "Layered test strategy: frontend unit tests, backend unit and integration tests, and browser-level end-to-end specs.",
  },
  {
    category: "DevOps",
    items: "Docker, Docker Compose, GitHub Actions, GHCR, VPS/SSH",
    description:
      "Multi-stage container builds, automated CI pipelines, and production deployment over SSH to a Linux VPS behind Nginx.",
  },
];

const challenges = [
  {
    number: "01",
    title: "Making real-time features feel selective instead of noisy",
    body: "Messaging, status updates, channel changes, invites, and friendship actions all have different audiences. The solution was to separate channel-level events from user-level events — messages are emitted only to the relevant channel room, while friend and invite notifications are emitted directly to the affected users. This kept the real-time layer clean and closer to how a production chat system should behave.",
  },
  {
    number: "02",
    title: "Keeping authorization understandable as features expanded",
    body: "As soon as server management was added, authorization became more complex than simple ownership checks. Channel creation, role management, inviting users, renaming a server, and removing members all needed explicit rules. Instead of scattering those checks across controllers and services, a dedicated permission system was modeled in Prisma and enforced through NestJS guards — giving the project a clear RBAC story that is easy to explain and extend.",
  },
  {
    number: "03",
    title: "Verifying a real-time product across multiple layers",
    body: "A real-time app can appear to work while hiding fragile behavior across API flows, sockets, and UI state. To reduce that risk, a layered test strategy was built: backend unit tests for service and module logic, backend integration tests against a real PostgreSQL database, frontend unit tests for components and client utilities, and Playwright end-to-end tests that boot the full stack in Docker. That approach gave the project much stronger credibility than a visual demo alone.",
  },
];

const results = [
  { stat: "53", label: "Frontend unit tests" },
  { stat: "34", label: "Backend unit tests" },
  { stat: "14", label: "Backend integration tests" },
  { stat: "9", label: "Playwright e2e specs" },
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
          Case Study: Discol
        </h1>

        <p className="max-w-2xl text-lg text-text-muted">
          A technical deep dive into the architecture and engineering decisions
          behind a full-stack real-time chat platform with voice rooms,
          role-based permissions, and production-grade deployment.
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-medium sm:gap-5 md:gap-6">
          <a
            href="https://esteban-discord-clone.duckdns.org/"
            className="text-accent hover:underline"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/esteban0406/Chat-App"
            className="text-accent hover:underline"
          >
            GitHub Repository
          </a>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="00" label="PROBLEM" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Problem & Goals
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          Modern chat platforms feel simple on the surface, but they rely on a
          dense mix of systems behind the scenes: identity, real-time
          communication, permissions, presence, media, and deployment
          reliability. Most portfolio projects stop at the UI layer. The
          challenge was to go deeper.
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          The goal was to design and ship a complete real-time product — a
          system where users can register, connect with friends, join
          communities, chat instantly, manage roles and permissions, enter voice
          rooms, and interact with a guided demo experience. Just as
          importantly, the project had to reflect production-minded engineering
          practices: automated testing, containerized environments, and
          continuous delivery.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="01" label="SOLUTION" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          What Was Built
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          Discol is a full-stack real-time chat application built around
          servers, channels, friendships, and role-based collaboration. Users
          can sign up with email and password or Google OAuth, create servers,
          invite other users, organize conversations into text and voice
          channels, and manage server membership through roles and permissions.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Real-time Messaging",
              body: "Text messages delivered instantly via Socket.IO. Presence updates are pushed only to relevant users rather than broadcast globally.",
            },
            {
              title: "Voice Rooms",
              body: "Channel-based audio and video sessions powered by LiveKit, accessible directly from within the application.",
            },
            {
              title: "Role-based Permissions",
              body: "Explicit server permissions for channel creation, invite management, role management, and server deletion modeled in the database.",
            },
            {
              title: "Media Uploads",
              body: "Profile avatar uploads through Cloudinary with cloud storage and serving.",
            },
            {
              title: "Demo Mode",
              body: "Seeded content and a guided product tour so recruiters and reviewers can explore the product without populating it manually.",
            },
            {
              title: "Localization",
              body: "English and Spanish language support built into the frontend interface.",
            },
          ].map((feature) => (
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
        <SectionHeader number="02" label="DESIGN" />

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

        <div className="w-full overflow-hidden rounded-xl border border-border bg-card p-4">
          <Image
            src="/images/mockup.png"
            alt="Discord Clone UI Mockup"
            width={1512}
            height={787}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="03" label="ARCHITECTURE" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          System Architecture
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          The frontend is a <strong className="text-foreground">Next.js 16</strong> application using the App
          Router, React 19, and Tailwind CSS v4. It handles page routing,
          responsive UI, long-lived client state, and real-time event
          subscriptions. Shared contexts keep the interface synchronized as
          events arrive.
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          The backend is a <strong className="text-foreground">NestJS 11</strong> modular monolith. Focused
          modules cover authentication, users, friendships, servers, roles,
          channels, messages, voice access, and real-time gateway events. All
          REST endpoints are exposed under <code className="font-mono text-accent text-sm">/api</code>, while
          Socket.IO runs alongside for low-latency messaging.
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          For data persistence, the app uses <strong className="text-foreground">PostgreSQL</strong> with{" "}
          <strong className="text-foreground">Prisma ORM</strong>. The schema models users, OAuth accounts,
          friendships, servers, invites, members, roles, channels, and messages.
          Role-based access control is enforced through explicit server
          permissions, keeping authorization rules visible and maintainable.
        </p>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          The real-time layer uses two communication patterns: channel rooms for
          chat fanout (only users in the active channel receive live messages)
          and user-specific rooms for private notifications like friend
          requests, server invites, and presence changes.
        </p>

        <div className="w-full overflow-hidden rounded-xl border border-border bg-card p-4">
          <Image
            src="/images/architecturemermaid.png"
            alt="System Architecture Diagram"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* AUTH FLOW */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="04" label="AUTHENTICATION" />

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
      <section className="flex flex-col gap-8 bg-card-darker px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="05" label="REAL-TIME MESSAGING" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Message Flow
        </h2>

        <ul className="max-w-3xl space-y-3 text-text-secondary">
          <li>Client sends message through WebSocket gateway</li>
          <li>Gateway validates user authentication</li>
          <li>Message stored in PostgreSQL</li>
          <li>Server broadcasts message to channel room</li>
          <li>Connected clients receive update instantly</li>
        </ul>

        <div className="w-full overflow-hidden rounded-xl border border-border bg-card p-4">
          <Image
            src="/images/Chatflowmermaid.png"
            alt="Message Flow Diagram"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="06" label="TECH STACK" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Technology Decisions
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((tech) => (
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
        <SectionHeader number="07" label="CI/CD PIPELINE" />

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
      <section className="flex flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <SectionHeader number="08" label="CHALLENGES" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Challenges & Lessons Learned
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
        <SectionHeader number="09" label="RESULTS" />

        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Outcomes
        </h2>

        <p className="max-w-3xl text-text-secondary leading-relaxed">
          Discol became a strong end-to-end case study in building and shipping
          a modern real-time product. It demonstrates full-stack ownership across
          product design, domain modeling, authentication, authorization,
          WebSocket workflows, voice integration, media uploads,
          internationalization, testing, and deployment.
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
          All tests run automatically in GitHub Actions pipelines that gate pull
          requests before deployment — making the project not just a feature
          demo, but a credible example of engineering quality and delivery from
          start to finish.
        </p>
      </section>
    </main>
  );
}
