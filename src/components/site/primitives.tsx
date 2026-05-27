import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function EyebrowChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
      <span className="h-1.5 w-1.5 rounded-full gradient-accent-bg animate-glow-pulse" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <EyebrowChip>{eyebrow}</EyebrowChip>}
      <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

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
      "gradient-accent-bg text-white shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-cyan)] hover:-translate-y-0.5",
    ghost:
      "border border-border bg-surface text-foreground hover:border-primary/40 hover:shadow-[var(--shadow-card)]",
    dark:
      "bg-foreground text-background hover:opacity-90",
  }[variant];
  return (
    <As className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </As>
  );
}
