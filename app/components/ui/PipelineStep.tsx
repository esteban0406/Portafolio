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
      <div className="flex w-full max-w-xs flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 sm:max-w-sm md:max-w-none xl:w-40">
        <div className="text-accent">{icon}</div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="font-mono text-[11px] text-text-muted">{description}</p>
      </div>
      {!isLast && (
        <>
          {/* Down arrow — mobile only */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="my-1 shrink-0 text-accent md:hidden"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          {/* Right arrow — desktop only */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-1 hidden shrink-0 text-accent xl:block"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </>
      )}
    </>
  );
}
