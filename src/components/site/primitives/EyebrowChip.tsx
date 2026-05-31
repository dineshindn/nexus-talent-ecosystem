import type { ReactNode } from "react";

export function EyebrowChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm">
      <span className="h-1.5 w-1.5 rounded-full gradient-teal-bg animate-glow-pulse" />
      {children}
    </span>
  );
}
