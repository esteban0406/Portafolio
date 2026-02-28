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
];

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-24 md:px-20">
      {/* Availability badge */}
      <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-xs font-medium text-text-secondary">
        <span className="h-2 w-2 rounded-full bg-accent" />
        Available for opportunities
      </span>

      {/* Name */}
      <h1 className="text-center text-5xl font-bold tracking-tight text-foreground md:text-7xl">
        Luis Esteban Pena
      </h1>

      {/* Title */}
      <p className="text-center text-lg text-text-secondary md:text-xl">
        Full Stack Software Developer | CS &amp; AI Engineering
      </p>

      {/* Description */}
      <p className="max-w-xl text-center text-base leading-relaxed text-text-muted">
        Building scalable applications with modern technologies. Passionate
        about clean architecture, DevOps, and AI-driven solutions.
      </p>

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
    </section>
  );
}
