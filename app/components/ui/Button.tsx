import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  download?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  external,
  download,
  children,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg font-semibold transition-colors";
  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent-hover px-7 py-3.5 text-sm",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-background px-7 py-3.5 text-sm",
    ghost:
      "px-4 py-2 text-xs text-text-muted hover:text-foreground hover:bg-white/5",
  };

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]}`}
      download={download}
      {...externalProps}
    >
      {children}
    </Link>
  );
}
