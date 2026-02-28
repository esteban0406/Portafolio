interface PipelineStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

export function PipelineStep({
  icon,
  title,
  description,
  isLast = false,
}: PipelineStepProps) {
  return (
    <>
      <div
        className={`flex w-44 flex-col items-center gap-3 rounded-xl border p-5 ${
          isLast
            ? "border-accent bg-card"
            : "border-border bg-card"
        }`}
      >
        <div className="text-accent">{icon}</div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="font-mono text-[11px] text-text-muted">{description}</p>
      </div>
      {!isLast && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-1 shrink-0 text-accent"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </>
  );
}
