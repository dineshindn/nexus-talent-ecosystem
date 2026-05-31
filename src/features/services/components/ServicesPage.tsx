import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/primitives";
import { AnimateIn } from "@/components/shared";
import { services, bannerStats } from "@/features/services/data";
import servicesBanner from "@/assets/services-banner.jpg";

// ── Gradient border on hover using the padding-box / border-box trick ──
const GRAD_BORDER =
  "linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.55 0.22 264), oklch(0.72 0.14 211)) border-box";

export function ServicesPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SiteLayout>

      {/* ═══════════════════════════════════════════════════════
          BANNER
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: "520px" }}>
        {/* Background image */}
        <img
          src={servicesBanner}
          alt="Services banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
        />

        {/* Dark overlay — heavier on left for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, oklch(0.10 0.05 264 / 0.97) 0%, oklch(0.14 0.07 264 / 0.88) 45%, oklch(0.16 0.06 240 / 0.60) 75%, transparent 100%)",
          }}
        />

        {/* Dot-grid texture */}
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

        {/* Blob accent */}
        <div
          className="blob bottom-0 left-0 h-80 w-80 pointer-events-none"
          style={{ background: "oklch(0.71 0.16 162)", opacity: 0.12 }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-7 px-4 py-2"
              style={{
                background: "oklch(1 0 0 / 0.10)",
                border: "1px solid oklch(1 0 0 / 0.22)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Sparkles className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "oklch(0.71 0.16 162)" }} />
              <span style={{ color: "oklch(0.90 0.08 162)" }}>Our Services</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold leading-[1.04] tracking-tight">
              Smart hiring solutions{" "}
              <span className="text-gradient-light">for the modern workforce.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base lg:text-[17px] leading-relaxed max-w-lg" style={{ color: "oklch(1 0 0 / 0.65)" }}>
              From talent and recruitment to placement, training, and verification — ten
              flexible service models engineered around your outcomes.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/services">
                <button
                  className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: "oklch(0.71 0.16 162)" }}
                >
                  Explore services
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15"
                  style={{
                    border: "1.5px solid oklch(1 0 0 / 0.38)",
                    background: "oklch(1 0 0 / 0.07)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  Talk to an expert
                </button>
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-10">
            {bannerStats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-4">
                {i > 0 && (
                  <div className="h-8 w-px hidden sm:block" style={{ background: "oklch(1 0 0 / 0.20)" }} />
                )}
                <div>
                  <div className="text-3xl font-extrabold text-white leading-none">{s.value}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(1 0 0 / 0.50)" }}>
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICE CARDS GRID
      ═══════════════════════════════════════════════════════ */}
      <Section className="bg-surface-2">
        {/* Section heading */}
        <AnimateIn>
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-5 px-4 py-2"
              style={{
                background: "oklch(0.71 0.16 162 / 0.10)",
                border: "1px solid oklch(0.71 0.16 162 / 0.25)",
                color: "oklch(0.55 0.20 162)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.71 0.16 162)" }} />
              Complete Service Suite
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              Built for every{" "}
              <span className="text-gradient">hiring challenge.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Pick a single capability or compose a full ecosystem — every service is modular,
              measurable, and outcome-driven.
            </p>
          </div>
        </AnimateIn>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const isHovered = hovered === i;
            return (
              <AnimateIn key={svc.name} delay={i * 60}>
                <div
                  className="group relative flex flex-col rounded-2xl p-6 cursor-pointer h-full"
                  style={{
                    background: isHovered ? GRAD_BORDER : "var(--surface)",
                    border: `${isHovered ? "1.5px" : "1px"} solid ${isHovered ? "transparent" : "var(--border)"}`,
                    transition: "all 0.30s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                    boxShadow: isHovered
                      ? "0 16px 50px -12px oklch(0.38 0.17 264 / 0.20), 0 0 0 0 transparent"
                      : "0 2px 12px -4px oklch(0.38 0.17 264 / 0.07)",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Top row: icon + code badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                      style={{ background: svc.grad }}
                    >
                      <svc.icon className="h-5 w-5 text-white" />
                    </div>

                    <span
                      className="text-[11px] font-bold rounded-full px-2.5 py-1 leading-none"
                      style={{
                        background: isHovered
                          ? "oklch(0.71 0.16 162 / 0.10)"
                          : "oklch(0.92 0.01 255)",
                        color: isHovered
                          ? "oklch(0.55 0.20 162)"
                          : "oklch(0.42 0.05 260)",
                        border: isHovered
                          ? "1px solid oklch(0.71 0.16 162 / 0.30)"
                          : "1px solid var(--border)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {svc.code}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-[17px] font-bold leading-snug text-foreground">{svc.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{svc.desc}</p>

                  {/* Footer: number + learn more */}
                  <div className="mt-6 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
                    <span className="text-xs font-mono font-semibold" style={{ color: "var(--muted-foreground)" }}>
                      {String(i + 1).padStart(2, "0")}/{String(services.length).padStart(2, "0")}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300"
                      style={{
                        color: "oklch(0.71 0.16 162)",
                        transform: isHovered ? "translateX(3px)" : "translateX(0)",
                      }}
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  {/* Inner glow on hover */}
                  {isHovered && (
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at top left, oklch(0.71 0.16 162 / 0.05) 0%, transparent 60%)",
                      }}
                    />
                  )}
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════════ */}
      <Section>
        <AnimateIn>
          <div className="relative rounded-3xl overflow-hidden gradient-hero-bg p-12 lg:p-16 text-white text-center">
            <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
            <div className="blob -top-10 -left-10 h-64 w-64 pointer-events-none"
              style={{ background: "oklch(0.71 0.16 162)", opacity: 0.20 }} />
            <div className="blob -bottom-10 -right-10 h-64 w-64 pointer-events-none"
              style={{ background: "oklch(0.55 0.22 264)", opacity: 0.20 }} />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Not sure which service fits?{" "}
                <span className="text-gradient-light">Let's talk.</span>
              </h2>
              <p className="mt-4 text-base" style={{ color: "oklch(1 0 0 / 0.65)" }}>
                Our experts will map the right solution to your exact hiring goals.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button
                    className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                    style={{ background: "oklch(0.71 0.16 162)" }}
                  >
                    Talk to an expert
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link to="/employers">
                  <button
                    className="inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/15"
                    style={{ border: "1.5px solid oklch(1 0 0 / 0.38)", background: "oklch(1 0 0 / 0.07)" }}
                  >
                    View for Employers
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Section>

    </SiteLayout>
  );
}
