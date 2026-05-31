import { useState } from "react";
import { ArrowRight, GraduationCap, CheckCircle2, Sparkles, TrendingUp, Users, Lightbulb, BarChart2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, EyebrowChip } from "@/components/site/primitives";
import { AnimateIn, TypingText } from "@/components/shared";
import { advantages, campusSteps } from "@/features/campus/data";
import { HowItWorksSection } from "@/features/home/components/HowItWorksSection";
import campusBanner from "@/assets/campus-banner.jpg";

/* ── Constants ─────────────────────────────────────────────────── */

const BANNER_STATS = [
  { value: "1,200+", label: "Partner Campuses" },
  { value: "89%",    label: "Avg Placement Rate" },
  { value: "8,400+", label: "Verified Employers" },
];

const ICON_GRADS = [
  "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.72 0.14 211))",
  "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.72 0.14 211))",
  "linear-gradient(135deg, oklch(0.45 0.25 305), oklch(0.55 0.22 264))",
  "linear-gradient(135deg, oklch(0.72 0.14 211), oklch(0.71 0.16 162))",
  "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.38 0.17 264))",
  "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.55 0.22 264))",
  "linear-gradient(135deg, oklch(0.38 0.17 264), oklch(0.72 0.14 211))",
  "linear-gradient(135deg, oklch(0.72 0.14 211), oklch(0.55 0.22 264))",
  "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.45 0.25 305))",
  "linear-gradient(135deg, oklch(0.38 0.17 264), oklch(0.71 0.16 162))",
];

const GRAD_BORDER =
  "linear-gradient(var(--surface), var(--surface)) padding-box, " +
  "linear-gradient(135deg, oklch(0.72 0.14 211), oklch(0.71 0.16 162), oklch(0.55 0.22 264)) border-box";

const OVERVIEW_CARDS = [
  {
    icon: Users,
    grad: "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.72 0.14 211))",
    accent: "oklch(0.72 0.14 211)",
    title: "Strengthen Employer Partnerships",
    desc: "Strengthen employer partnerships, improve placement efficiency, and connect students directly with verified hiring organizations. Create stronger industry demand for your students by aligning skills, training programs, and career opportunities with real-time hiring trends.",
  },
  {
    icon: Lightbulb,
    grad: "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.55 0.22 264))",
    accent: "oklch(0.71 0.16 162)",
    title: "AI-Powered Placement Excellence",
    desc: "Simplify placement operations, increase employer engagement, and improve placement ratios with AI-powered student profiling, smart candidate recommendations, employer connectivity, and centralized placement insights.",
  },
  {
    icon: BarChart2,
    grad: "linear-gradient(135deg, oklch(0.38 0.17 264), oklch(0.55 0.22 264))",
    accent: "oklch(0.55 0.22 264)",
    title: "Complete Placement Visibility",
    desc: "Enable students to become more visible to recruiters while giving institutions the tools to track placement performance, skill readiness, and hiring outcomes with greater accuracy and control.",
  },
];

const PLACEMENT_STATS = [
  { label: "Placement Rate", value: "94%",   grad: "from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)]", bar: 94 },
  { label: "Avg. Package",   value: "₹8.4L", grad: "from-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)]", bar: 84 },
  { label: "Recruiters",     value: "284",    grad: "from-[oklch(0.71_0.16_162)] to-[oklch(0.55_0.22_264)]", bar: 68 },
  { label: "Drives Hosted",  value: "42",     grad: "from-[oklch(0.78_0.16_85)] to-[oklch(0.72_0.14_211)]",  bar: 42 },
];

const ANALYTICS_BULLETS = [
  "Live placement ratios",
  "Skill-gap heatmaps",
  "Employer engagement scores",
  "Student readiness index",
  "Industry demand trends",
];

/* ── Component ─────────────────────────────────────────────────── */

export function CampusPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SiteLayout>

      {/* ═══ BANNER ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: "540px" }}>
        <img src={campusBanner} alt="Campus" className="absolute inset-0 w-full h-full object-cover object-center" draggable={false} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.09 0.05 264 / 0.97) 0%, oklch(0.13 0.07 264 / 0.88) 42%, oklch(0.15 0.06 240 / 0.52) 70%, transparent 100%)" }} />
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
        <div className="blob bottom-0 left-0 h-80 w-80 pointer-events-none" style={{ background: "oklch(0.71 0.16 162)", opacity: 0.12 }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-7 px-4 py-2"
              style={{ background: "oklch(1 0 0 / 0.10)", border: "1px solid oklch(1 0 0 / 0.22)", backdropFilter: "blur(12px)" }}>
              <GraduationCap className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "oklch(0.71 0.16 162)" }} />
              <span style={{ color: "oklch(0.90 0.08 162)" }}>For Campus</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold leading-[1.04] tracking-tight">
              Empower placements with <br className="hidden sm:block" />
              <span className="text-gradient-light">industry-connected intelligence.</span>
            </h1>
            <p className="mt-6 text-base lg:text-[17px] leading-relaxed max-w-lg" style={{ color: "oklch(1 0 0 / 0.65)" }}>
              Transform your campus into a future-ready talent hub. Connect students directly with verified employers through one connected placement platform.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "oklch(0.71 0.16 162)" }}>
                Partner with us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/15"
                style={{ border: "1.5px solid oklch(1 0 0 / 0.38)", background: "oklch(1 0 0 / 0.07)", backdropFilter: "blur(8px)" }}>
                See campus demo
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
              Empower Campus Placements with{" "}
              <span className="text-gradient">Industry-Connected Talent Intelligence</span>
            </h2>
            <p className="mt-6 text-base lg:text-[17px] text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Transform your campus into a future-ready talent hub with an intelligent placement ecosystem designed for
              Placement Directors, Training & Placement Officers, Deans, Principals, and Training Academies.
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

                <h3 className="text-lg font-extrabold text-white leading-snug mb-3">{card.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "oklch(1 0 0 / 0.60)" }}>{card.desc}</p>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                  style={{ background: card.grad }} />
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* ═══ WHY CAMPUSES CHOOSE G TALENT PRO ════════════════════ */}
      <Section>
        <AnimateIn>
          <div className="text-center mb-14">
            <EyebrowChip>Why Campuses Choose G Talent Pro</EyebrowChip>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ten reasons campuses{" "}
              <TypingText text="place smarter with us." className="text-gradient" />
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              From AI-powered student profiling to real-time placement analytics — every feature built around your campus success.
            </p>
          </div>
        </AnimateIn>

        {/* 10 items — 5-col on desktop, 2-col on tablet, 1-col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {advantages.map((adv, i) => {
            const isHovered = hovered === i;
            return (
              <AnimateIn key={adv.t} delay={i * 55}>
                <div
                  className="group relative flex flex-col rounded-2xl p-5 h-full cursor-default overflow-hidden"
                  style={{
                    background: isHovered ? GRAD_BORDER : i === 0 ? "linear-gradient(135deg, oklch(0.72 0.14 211 / 0.06), oklch(0.71 0.16 162 / 0.04))" : "var(--surface)",
                    border: `${isHovered ? "1.5px" : "1px"} solid ${isHovered ? "transparent" : i === 0 ? "oklch(0.72 0.14 211 / 0.22)" : "var(--border)"}`,
                    transition: "all 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                    boxShadow: isHovered ? "0 20px 50px -12px oklch(0.38 0.17 264 / 0.18)" : "none",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0, background: "radial-gradient(ellipse at top left, oklch(0.72 0.14 211 / 0.08) 0%, transparent 60%)" }} />

                  {/* Sequence number */}
                  <span className="absolute top-4 right-4 text-[10px] font-mono font-semibold select-none"
                    style={{ color: "var(--muted-foreground)", opacity: 0.32 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="relative h-10 w-10 rounded-full flex items-center justify-center shadow-md flex-shrink-0 mb-4"
                    style={{ background: ICON_GRADS[i % ICON_GRADS.length] }}>
                    <adv.icon className="h-4.5 w-4.5 text-white" style={{ width: "18px", height: "18px" }} />
                  </div>

                  <h3 className="text-[13px] font-bold tracking-tight text-foreground leading-snug">{adv.t}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed flex-1">{adv.d}</p>

                  {/* Hover CTA */}
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold transition-all duration-300"
                    style={{ color: "oklch(0.72 0.14 211)", opacity: isHovered ? 1 : 0, transform: isHovered ? "translateX(0)" : "translateX(-5px)" }}>
                    Learn more <ArrowRight className="h-2.5 w-2.5" />
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-4 right-4 h-px transition-all duration-300"
                    style={{ background: "linear-gradient(90deg, oklch(0.72 0.14 211), oklch(0.71 0.16 162))", opacity: isHovered ? 1 : 0 }} />
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </Section>

      {/* ═══ HOW IT WORKS ═════════════════════════════════════════ */}
      <HowItWorksSection
        steps={campusSteps}
        heading="Empower Students. Connect Industry."
        headingHighlight="Shape Future Talent."
        description="Four powerful steps that transform your campus into a future-ready talent hub — seamlessly connected to industry."
        ctaLabel="Partner With Us Today"
      />

      {/* ═══ PLACEMENT ANALYTICS ══════════════════════════════════ */}
      <Section className="bg-surface-2/60">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <AnimateIn direction="left">
            <EyebrowChip>Placement Analytics</EyebrowChip>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight leading-tight">
              Real-time visibility on{" "}
              <span className="text-gradient">every placement metric.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Go beyond reports. Act on live signals — from student readiness to employer engagement — in a single intelligent dashboard.
            </p>
            <ul className="mt-8 space-y-3.5">
              {ANALYTICS_BULLETS.map((b, i) => (
                <AnimateIn key={b} delay={100 + i * 70} direction="left">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.72 0.14 211 / 0.12)", border: "1px solid oklch(0.72 0.14 211 / 0.35)" }}>
                      <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "oklch(0.72 0.14 211)" }} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{b}</span>
                  </li>
                </AnimateIn>
              ))}
            </ul>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 cursor-pointer"
              style={{ color: "oklch(0.72 0.14 211)" }}>
              <TrendingUp className="h-4 w-4" /> View sample dashboard
            </div>
          </AnimateIn>

          {/* Right — Stats grid */}
          <AnimateIn direction="right">
            <div className="grid grid-cols-2 gap-4">
              {PLACEMENT_STATS.map((s, i) => (
                <AnimateIn key={s.label} delay={i * 90}>
                  <div className={`rounded-2xl p-6 bg-gradient-to-br ${s.grad} text-white cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                    <div className="text-3xl lg:text-4xl font-extrabold leading-none">{s.value}</div>
                    <div className="text-[11px] mt-2 uppercase tracking-widest font-semibold opacity-75">{s.label}</div>
                    <div className="mt-4 h-1 rounded-full overflow-hidden" style={{ background: "oklch(1 0 0 / 0.25)" }}>
                      <div className="h-full rounded-full" style={{ width: `${s.bar}%`, background: "oklch(1 0 0 / 0.70)" }} />
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* ═══ CTA ══════════════════════════════════════════════════ */}
      <Section>
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl gradient-hero-bg p-12 lg:p-16 text-center text-white">
            <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
            <div className="blob -top-10 -left-10 h-48 w-48 pointer-events-none" style={{ background: "oklch(0.72 0.14 211)", opacity: 0.20 }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-6 px-4 py-2"
                style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.20)" }}>
                <Sparkles className="h-3.5 w-3.5" style={{ color: "oklch(0.71 0.16 162)" }} />
                <span style={{ color: "oklch(0.90 0.08 162)" }}>Join 1,200+ campuses</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Ready to transform <span className="text-gradient-light">campus placements?</span>
              </h2>
              <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "oklch(1 0 0 / 0.65)" }}>
                Get started with a free platform walkthrough designed for your placement team.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "oklch(0.71 0.16 162)" }}>
                  Get Started <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Section>

    </SiteLayout>
  );
}
