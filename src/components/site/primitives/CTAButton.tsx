import type { ReactNode } from "react";

export function CTAButton({
  children,
  variant = "primary",
  className = "",
  as: As = "button",
  ...rest
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
  as?: any;
  [k: string]: any;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles = {
    primary:
      "gradient-accent-bg text-white shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-teal)] hover:-translate-y-0.5",
    ghost:
      "border border-border bg-surface text-foreground hover:border-primary hover:text-primary hover:shadow-[var(--shadow-card)]",
    dark: "bg-foreground text-background hover:opacity-90",
  }[variant];
  return (
    <As className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </As>
  );
}
