interface BadgeProps {
  icon?: React.ReactNode;
  label: string;
}

export function Badge({ icon, label }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-mono text-xs font-medium text-text-secondary">
      {icon && <span className="text-accent">{icon}</span>}
      {label}
    </span>
  );
}
