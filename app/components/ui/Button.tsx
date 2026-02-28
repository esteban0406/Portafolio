import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export function Button({ href, variant = "primary", children }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition-colors";
  const variants = {
    primary: "bg-accent text-background hover:bg-accent-hover",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-background",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
