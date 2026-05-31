import { useState, useRef, useEffect } from "react";
import {
  ArrowRight, Building2, CheckCircle2, Shield, Sparkles,
  Globe2, Workflow, Brain,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, EyebrowChip } from "@/components/site/primitives";
import { AnimateIn, TypingText } from "@/components/shared";
import { reasons, employerSteps } from "@/features/employers/data";
import { HowItWorksSection } from "@/features/home/components/HowItWorksSection";
import employerBanner from "@/assets/employers-banner.jpg";

/* ── Constants ─────────────────────────────────────────────────── */

const BANNER_STATS = [
  { value: "70%",  label: "Faster Screening" },
  { value: "−47%", label: "Time to Hire" },
  { value: "500+", label: "Enterprise Clients" },
];

const ICON_GRADS = [
  "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.72 0.14 211))",
  "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.55 0.22 264))",
  "linear-gradient(135deg, oklch(0.38 0.17 264), oklch(0.55 0.22 264))",
  "linear-gradient(135deg, oklch(0.45 0.25 305), oklch(0.55 0.22 264))",
  "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.72 0.14 211))",
  "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.38 0.17 264))",
  "linear-gradient(135deg, oklch(0.72 0.14 211), oklch(0.71 0.16 162))",
  "linear-gradient(135deg, oklch(0.38 0.17 264), oklch(0.72 0.14 211))",
  "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.45 0.25 305))",
];

const GRAD_BORDER =
  "linear-gradient(var(--surface), var(--surface)) padding-box, " +
  "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.55 0.22 264), oklch(0.72 0.14 211)) border-box";

const OVERVIEW_CARDS = [
  {
    icon: Globe2,
    grad: "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.72 0.14 211))",
    accent: "oklch(0.72 0.14 211)",
    title: "Connected Talent Ecosystem",
    desc: "Access verified professionals, freshers, campus talent, recruitment agencies, and specialized workforce pools — all unified in one intelligent platform designed around your hiring outcomes.",
  },
  {
    icon: Workflow,
    grad: "linear-gradient(135deg, oklch(0.38 0.17 264), oklch(0.55 0.22 264))",
    accent: "oklch(0.55 0.22 264)",
    title: "Unified Workforce Management",
    desc: "Manage centralized vendor management, intelligent recruiter collaboration, and unified hiring insights that reduce operational complexity. Gain complete visibility across internal teams, staffing partners, campus hiring, and workforce pipelines — from a single platform.",
  },
  {
    icon: Brain,
    grad: "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.55 0.22 264))",
    accent: "oklch(0.71 0.16 162)",
    title: "AI-Powered Hiring Intelligence",
    desc: "Leverage AI-driven candidate matching, resume intelligence, ATS optimization, and smart hiring insights to reduce screening effort, improve hiring decisions, and identify best-fit candidates with speed and confidence.",
  },
];

const PIPELINE_BARS = [
  { l: "Sourced",     v: 1240, w: "100%", c: "oklch(0.55 0.22 264)" },
  { l: "Screened",    v: 432,  w: "62%",  c: "oklch(0.72 0.14 211)" },
  { l: "Interviewed", v: 186,  w: "38%",  c: "oklch(0.71 0.16 162)" },
  { l: "Offered",     v: 64,   w: "18%",  c: "oklch(0.78 0.16 85)"  },
];

const PIPELINE_BULLETS = [
  "AI-driven candidate matching",
  "Vendor & agency collaboration",
  "Real-time hiring analytics",
  "Bias-aware shortlisting",
  "Integrated assessments & BGV",
];

/* ── Component ─────────────────────────────────────────────────── */

export function EmployersPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  const dashRef = useRef<HTMLDivElement>(null);
  const [dashVisible, setDashVisible] = useState(false);
  useEffect(() => {
    const el = dashRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setDashVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <SiteLayout>

      {/* ═══ BANNER ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: "540px" }}>
        <img src={employerBanner} alt="Employers" className="absolute inset-0 w-full h-full object-cover object-center" draggable={false} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.09 0.05 264 / 0.97) 0%, oklch(0.13 0.07 264 / 0.88) 42%, oklch(0.15 0.06 240 / 0.55) 70%, transparent 100%)" }} />
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
        <div className="blob bottom-0 left-0 h-72 w-72 pointer-events-none" style={{ background: "oklch(0.71 0.16 162)", opacity: 0.10 }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-7 px-4 py-2"
              style={{ background: "oklch(1 0 0 / 0.10)", border: "1px solid oklch(1 0 0 / 0.22)", backdropFilter: "blur(12px)" }}>
              <Building2 className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "oklch(0.71 0.16 162)" }} />
              <span style={{ color: "oklch(0.90 0.08 162)" }}>For Employers</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold leading-[1.04] tracking-tight">
              Hire smarter with <br className="hidden sm:block" />
              <span className="text-gradient-light">AI talent intelligence.</span>
            </h1>
            <p className="mt-6 text-base lg:text-[17px] leading-relaxed max-w-lg" style={{ color: "oklch(1 0 0 / 0.65)" }}>
              Access verified professionals, freshers, campus talent, recruitment agencies and specialized workforce pools — through one connected hiring ecosystem.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "oklch(0.71 0.16 162)" }}>
                Start hiring smarter <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/15"
                style={{ border: "1.5px solid oklch(1 0 0 / 0.38)", background: "oklch(1 0 0 / 0.07)", backdropFilter: "blur(8px)" }}>
                Request a demo
              </button>
            </div>
            <div className="mt-14 flex flex-wrap gap-10">
              {BANNER_STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-4">
                  {i > 0 && <div className="h-8 w-px hidden sm:block" style={{ background: "oklch(1 0 0 / 0.20)" }} />}
                  <div>
                    <div className="text-3xl font-extrabold text-white leading-none">{s.value}</div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(1 0 0 / 0.50)" }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORM OVERVIEW ════════════════════════════════════ */}
      <Section className="bg-surface-2/40">
        {/* Heading */}
        <AnimateIn>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <EyebrowChip>Platform Overview</EyebrowChip>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Hire Smarter with{" "}
              <span className="text-gradient">AI-Powered Talent Intelligence</span>
            </h2>
            <p className="mt-6 text-base lg:text-[17px] text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Find the right talent faster with an intelligent hiring ecosystem designed to simplify recruitment,
              improve hiring quality, and accelerate workforce growth. Access verified professionals, freshers,
              campus talent, recruitment agencies, and specialized workforce pools — all through one connected platform.
            </p>
          </div>
        </AnimateIn>

        {/* Three feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {OVERVIEW_CARDS.map((card, i) => (
            <AnimateIn key={card.title} delay={i * 110} direction="up">
              <div
                className="group relative rounded-2xl p-7 h-full overflow-hidden cursor-default flex flex-col"
                style={{
                  background: "linear-gradient(135deg, oklch(0.16 0.07 264), oklch(0.22 0.10 264))",
                  border: "1px solid oklch(1 0 0 / 0.10)",
                  transition: "transform 0.28s ease, box-shadow 0.28s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-5px)", e.currentTarget.style.boxShadow = `0 24px 60px -12px ${card.accent}30`)}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)", e.currentTarget.style.boxShadow = "none")}
              >
                {/* Hover radial glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${card.accent}18 0%, transparent 65%)` }} />

                {/* Icon */}
                <div className="relative h-12 w-12 rounded-xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0"
                  style={{ background: card.grad }}>
                  <card.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-extrabold text-white leading-snug mb-3">{card.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "oklch(1 0 0 / 0.60)" }}>{card.desc}</p>

                {/* Hover: bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                  style={{ background: card.grad }} />
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* ═══ WHY EMPLOYERS CHOOSE G TALENT PRO ═══════════════════ */}
      <Section>
        <AnimateIn>
          <div className="text-center mb-14">
            <EyebrowChip>Why Employers Choose G Talent Pro</EyebrowChip>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight">
              Nine reasons teams hire{" "}
              <TypingText text="smarter with us." className="text-gradient" />
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              From AI matching to unified analytics — every feature built to reduce cost, accelerate hiring, and improve quality.
            </p>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const isHovered = hovered === i;
            return (
              <AnimateIn key={r.t} delay={i * 65}>
                <div
                  className="group relative flex flex-col rounded-2xl p-6 h-full cursor-default overflow-hidden"
                  style={{
                    background: isHovered ? GRAD_BORDER : i === 0 ? "linear-gradient(135deg, oklch(0.55 0.22 264 / 0.06), oklch(0.71 0.16 162 / 0.04))" : "var(--surface)",
                    border: `${isHovered ? "1.5px" : "1px"} solid ${isHovered ? "transparent" : i === 0 ? "oklch(0.71 0.16 162 / 0.22)" : "var(--border)"}`,
                    transition: "all 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                    boxShadow: isHovered ? "0 20px 50px -12px oklch(0.38 0.17 264 / 0.18)" : "none",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0, background: "radial-gradient(ellipse at top left, oklch(0.71 0.16 162 / 0.07) 0%, transparent 60%)" }} />

                  {/* Sequence number */}
                  <span className="absolute top-5 right-5 text-[11px] font-mono font-semibold select-none"
                    style={{ color: "var(--muted-foreground)", opacity: 0.32 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon circle */}
                  <div className="relative h-11 w-11 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                    style={{ background: ICON_GRADS[i % ICON_GRADS.length] }}>
                    <r.icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="mt-4 text-[15px] font-bold tracking-tight text-foreground leading-snug">{r.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{r.d}</p>

                  {/* Hover CTA */}
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold transition-all duration-300"
                    style={{ color: "oklch(0.71 0.16 162)", opacity: isHovered ? 1 : 0, transform: isHovered ? "translateX(0)" : "translateX(-6px)" }}>
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px transition-all duration-300"
                    style={{ background: "linear-gradient(90deg, oklch(0.71 0.16 162), oklch(0.55 0.22 264))", opacity: isHovered ? 1 : 0 }} />
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </Section>

      {/* ═══ HOW IT WORKS ═════════════════════════════════════════ */}
      <HowItWorksSection
        steps={employerSteps}
        heading="Hire Smarter. Connect Faster."
        headingHighlight="Grow Stronger."
        description="Four simple steps to transform your hiring — from posting requirements to onboarding top talent with AI-driven precision."
        ctaLabel="Start Hiring Today"
      />

      {/* ═══ SMART HIRING PIPELINE ════════════════════════════════ */}
      <Section className="bg-surface-2/60">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <AnimateIn direction="left">
            <EyebrowChip>Smart Hiring Pipeline</EyebrowChip>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight leading-tight">
              From requisition to offer —{" "}
              <span className="text-gradient">in days, not weeks.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Centralize requisitions, vendor pipelines, and internal sourcing in one intelligent workspace. Move fast with confidence.
            </p>
            <ul className="mt-8 space-y-3.5">
              {PIPELINE_BULLETS.map((b, i) => (
                <AnimateIn key={b} delay={120 + i * 70} direction="left">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.71 0.16 162 / 0.12)", border: "1px solid oklch(0.71 0.16 162 / 0.35)" }}>
                      <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "oklch(0.71 0.16 162)" }} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{b}</span>
                  </li>
                </AnimateIn>
              ))}
            </ul>
          </AnimateIn>

          {/* Right — Dashboard */}
          <AnimateIn direction="right">
            <div ref={dashRef} className="relative">
              <div className="rounded-2xl p-7 shadow-[var(--shadow-lift)]"
                style={{ background: "linear-gradient(135deg, oklch(0.18 0.08 264), oklch(0.28 0.12 264))" }}>
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "oklch(1 0 0 / 0.45)" }}>Hiring Dashboard</div>
                    <div className="text-xl font-bold text-white mt-0.5">Q3 Pipeline</div>
                  </div>
                  <span className="rounded-full text-xs px-3 py-1 font-bold"
                    style={{ background: "oklch(0.71 0.16 162 / 0.20)", color: "oklch(0.71 0.16 162)" }}>+24% ↑</span>
                </div>
                <div className="space-y-5">
                  {PIPELINE_BARS.map((r, i) => (
                    <div key={r.l}>
                      <div className="flex justify-between text-sm mb-2">
                        <span style={{ color: "oklch(1 0 0 / 0.60)" }}>{r.l}</span>
                        <span className="font-bold text-white">{r.v.toLocaleString()}</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: "oklch(1 0 0 / 0.10)" }}>
                        <div className="h-full rounded-full"
                          style={{
                            width: r.w, background: r.c,
                            transformOrigin: "left",
                            transform: dashVisible ? "scaleX(1)" : "scaleX(0)",
                            transition: `transform 1.1s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 + i * 0.14}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 flex items-center justify-between"
                  style={{ borderTop: "1px solid oklch(1 0 0 / 0.10)" }}>
                  <span className="text-xs" style={{ color: "oklch(1 0 0 / 0.45)" }}>Avg. time-to-fill</span>
                  <span className="text-lg font-extrabold" style={{ color: "oklch(0.71 0.16 162)" }}>11 days</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-4 shadow-xl"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center gradient-accent-bg">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground font-medium">Time-to-hire</div>
                    <div className="text-lg font-extrabold text-foreground">−47%</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* ═══ CTA ══════════════════════════════════════════════════ */}
      <Section>
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl gradient-hero-bg p-12 lg:p-16 text-center text-white">
            <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
            <div className="blob -top-10 -right-10 h-48 w-48 pointer-events-none" style={{ background: "oklch(0.71 0.16 162)", opacity: 0.20 }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-6 px-4 py-2"
                style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.20)" }}>
                <Sparkles className="h-3.5 w-3.5" style={{ color: "oklch(0.71 0.16 162)" }} />
                <span style={{ color: "oklch(0.90 0.08 162)" }}>30-min personalized demo</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                See G Talent Pro <span className="text-gradient-light">in action.</span>
              </h2>
              <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "oklch(1 0 0 / 0.65)" }}>
                Our hiring experts will walk you through a live demo tailored to your industry and team size.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "oklch(0.71 0.16 162)" }}>
                  Request Demo <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Section>

    </SiteLayout>
  );
}
