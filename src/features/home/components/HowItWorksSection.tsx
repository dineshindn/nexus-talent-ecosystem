import { Sparkles, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/shared";
import { stepsData } from "@/features/home/data";
import type { StepItem } from "@/features/home/types";

const NAVY = "#36429F";

function StepCard({ s, i }: { s: StepItem; i: number }) {
  const Icon = s.icon;
  return (
    <AnimateIn delay={i * 120} direction="up">
      <div className="group flex flex-col items-center text-center">
        {/* Circle number */}
        <div
          className="relative z-10 h-20 w-20 rounded-full flex items-center justify-center text-white font-extrabold text-2xl shadow-2xl transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${s.accent}, ${NAVY})`,
            boxShadow: `0 8px 32px ${s.accent}55`,
            animation: `step-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 120 + 200}ms both`,
          }}
        >
          {s.n}
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: `0 0 0 10px ${s.accent}22, 0 0 0 20px ${s.accent}0A` }}
          />
        </div>

        {/* Tag pill */}
        <span
          className="mt-4 inline-block px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase"
          style={{ background: `${s.accent}22`, color: s.accent, border: `1px solid ${s.accent}44` }}
        >
          {s.tag}
        </span>

        {/* Icon card */}
        <div
          className="mt-4 h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1"
          style={{ background: `${s.accent}18`, border: `1px solid ${s.accent}33` }}
        >
          <Icon className="h-6 w-6" style={{ color: s.accent }} />
        </div>

        <h3 className="mt-5 text-lg font-extrabold text-white leading-snug">{s.t}</h3>
        <p className="mt-2 text-sm leading-relaxed px-2" style={{ color: "rgba(255,255,255,0.55)" }}>{s.d}</p>
      </div>
    </AnimateIn>
  );
}

export function HowItWorksSection({
  steps = stepsData,
  heading = "Your career journey",
  headingHighlight,
  description = "From profile to placement — everything happens in one intelligent platform designed to accelerate your career.",
  ctaLabel = "Start Your Journey Today",
}: {
  steps?: StepItem[];
  heading?: string;
  headingHighlight?: string;
  description?: string;
  ctaLabel?: string;
} = {}) {
  const highlight = headingHighlight ?? `in ${steps.length} simple steps.`;
  const cols = steps.length <= 4
    ? `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
    : `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5`;

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080f2a 0%, #0d1b4b 40%, #0a1535 100%)" }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blur orbs */}
      <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(16,185,129,0.10) 70%)" }} />
      <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(139,92,246,0.10) 70%)" }} />

      {/* Floating sparkle dots */}
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{
            top: `${15 + ((i * 11) % 70)}%`,
            left: `${5 + ((i * 13) % 90)}%`,
            background: i % 2 === 0 ? "#34d399" : "#60a5fa",
            animation: `glow-pulse ${3 + (i % 3)}s ease-in-out ${i * 0.5}s infinite`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <AnimateIn>
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{ border: "1px solid rgba(52,211,153,0.30)", background: "rgba(52,211,153,0.10)", color: "#6ee7b7" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-glow-pulse" style={{ background: "#34d399" }} />
              How It Works
            </span>
            <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              {heading}{" "}
              <span style={{ backgroundImage: "linear-gradient(90deg, #6ee7b7, #93c5fd, #6ee7b7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {highlight}
              </span>
            </h2>
            <p className="mt-7 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              {description}
            </p>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="relative mt-24">
          {/* Dashed connector line */}
          <div className="hidden lg:block absolute -top-4 left-0 w-full h-24 pointer-events-none">
            <svg viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id={`stepsGrad-${steps.length}`} x1="0" x2="1" y1="0" y2="0">
                  {steps.map((s, i) => (
                    <stop key={i} offset={`${(i / (steps.length - 1)) * 100}%`} stopColor={s.accent} />
                  ))}
                </linearGradient>
              </defs>
              <path
                d="M 80 50 Q 300 -10 450 50 T 800 50 T 1120 50"
                stroke={`url(#stepsGrad-${steps.length})`}
                strokeWidth="2"
                strokeDasharray="8 6"
                fill="none"
                opacity="0.55"
              />
            </svg>
          </div>

          <div className={`grid ${cols} gap-8 lg:gap-6`}>
            {steps.map((s, i) => (
              <StepCard key={s.n} s={s} i={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimateIn delay={500}>
          <div className="mt-24 flex flex-col items-center gap-5">
            <button
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #10b981, #3b82f6)", boxShadow: "0 8px 32px rgba(16,185,129,0.35)" }}
            >
              <Sparkles className="w-5 h-5" />
              {ctaLabel}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              <span className="flex -space-x-2">
                {[0, 1, 2].map((j) => (
                  <span key={j} className="w-6 h-6 rounded-full border-2"
                    style={{ borderColor: "#080f2a", background: "linear-gradient(135deg, #34d399, #60a5fa)" }} />
                ))}
              </span>
              <span>Join 47,000+ professionals this month</span>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
