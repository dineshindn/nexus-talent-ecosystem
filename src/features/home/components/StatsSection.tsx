import { Sparkles } from "lucide-react";
import { AnimateIn } from "@/components/shared";
import { StatCounter } from "@/components/shared";
import { Section } from "@/components/site/primitives";
import { stats } from "@/features/home/data";

export function StatsSection() {
  return (
    <Section>
      <div
        className="relative overflow-hidden rounded-[2rem] p-12 lg:p-16"
        style={{ background: "linear-gradient(135deg, oklch(0.20 0.09 264) 0%, oklch(0.40 0.18 264) 45%, oklch(0.66 0.17 162) 100%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="blob top-0 right-0 h-72 w-72" style={{ background: "oklch(0.71 0.16 162)", opacity: 0.20 }} />
        <div className="blob bottom-0 left-0 h-64 w-64" style={{ background: "oklch(0.38 0.17 264)", opacity: 0.25 }} />
        <div className="relative">
          <AnimateIn className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white mb-4"
              style={{ background: "oklch(1 0 0 / 0.15)", border: "1px solid oklch(1 0 0 / 0.25)" }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              By the numbers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Trusted by the best, built for scale.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 100}>
                <StatCounter target={s.target} suffix={s.suffix} label={s.label} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
