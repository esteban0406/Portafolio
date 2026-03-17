import { Badge } from "./ui/Badge";

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
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
      
      {/* Availability badge */}
      <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-xs font-medium text-text-secondary">
        <span className="h-2 w-2 rounded-full bg-accent" />
        Open to junior backend / full-stack opportunities
      </span>

      {/* Name */}
      <h1 className="text-center text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
        Luis Esteban Peña
      </h1>

      {/* Role */}
      <p className="text-center text-lg text-text-secondary md:text-xl lg:text-2xl">
        Full-Stack Developer focused on scalable backend systems
      </p>

      {/* Value Proposition */}
      <p className="max-w-2xl text-center text-base leading-relaxed text-text-muted md:text-lg">
        I build production-ready web applications with real-time features,
        scalable backend architectures, and automated CI/CD pipelines using
        modern DevOps practices.
      </p>

      {/* Quick credibility signals */}
      <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm font-mono text-text-muted sm:gap-4 md:gap-6">
        <span>✔ Real-time systems</span>
        <span>✔ CI/CD automated</span>
        <span>✔ Dockerized deployments</span>
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
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        
        {/* Primary CTA */}
        <a
          href="#projects"
          className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
        >
          View Projects
        </a>

        {/* Secondary CTA */}
        <a
          href="https://github.com/esteban0406"
          target="_blank"
          className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
        >
          GitHub
        </a>

        {/* Optional CTA */}
        <a
          href="/cv.pdf"
          className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text-secondary transition hover:bg-muted"
        >
          Download CV
        </a>

      </div>
    </section>
  );
}