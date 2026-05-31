import { useState, useRef, useEffect } from "react";
import { ArrowRight, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, EyebrowChip } from "@/components/site/primitives";
import { AnimateIn, TypingText } from "@/components/shared";
import { tools, talentSteps } from "@/features/talent/data";
import { HowItWorksSection } from "@/features/home/components/HowItWorksSection";
import talentBanner from "@/assets/talent-banner.jpg";

const BANNER_STATS = [
  { value: "92/100", label: "Avg ATS Score" },
  { value: "3.4×",   label: "Interview Rate" },
  { value: "100%",   label: "Free for Talent" },
];

const ICON_GRADS = [
  "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.72 0.14 211))",
  "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.55 0.22 264))",
  "linear-gradient(135deg, oklch(0.45 0.25 305), oklch(0.55 0.22 264))",
  "linear-gradient(135deg, oklch(0.72 0.14 211), oklch(0.71 0.16 162))",
  "linear-gradient(135deg, oklch(0.38 0.17 264), oklch(0.55 0.22 264))",
  "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.72 0.14 211))",
];

const GRAD_BORDER =
  "linear-gradient(var(--surface), var(--surface)) padding-box, " +
  "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.45 0.25 305), oklch(0.55 0.22 264)) border-box";

const RESUME_BARS = [
  { l: "Keyword match",      v: 95 },
  { l: "Skill relevance",    v: 88 },
  { l: "Experience signals", v: 94 },
  { l: "Formatting",         v: 90 },
];

export function TalentPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  // Score counter
  const scoreRef = useRef<HTMLDivElement>(null);
  const [scoreStarted, setScoreStarted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const el = scoreRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setScoreStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!scoreStarted) return;
    const target = 92;
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setScore(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [scoreStarted]);

  // Animate progress bars
  const barsRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);
  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setBarsVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <SiteLayout>

      {/* ═══ BANNER ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: "540px" }}>
        <img src={talentBanner} alt="Talent" className="absolute inset-0 w-full h-full object-cover object-center" draggable={false} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.09 0.04 264 / 0.97) 0%, oklch(0.12 0.06 264 / 0.88) 42%, oklch(0.14 0.05 285 / 0.52) 70%, transparent 100%)" }} />
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
        <div className="blob bottom-0 left-0 h-80 w-80 pointer-events-none" style={{ background: "oklch(0.71 0.16 162)", opacity: 0.10 }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-7 px-4 py-2" style={{ background: "oklch(1 0 0 / 0.10)", border: "1px solid oklch(1 0 0 / 0.22)", backdropFilter: "blur(12px)" }}>
              <Sparkles className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "oklch(0.71 0.16 162)" }} />
              <span style={{ color: "oklch(0.90 0.08 162)" }}>For Talent</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold leading-[1.04] tracking-tight">
              Your career, <br className="hidden sm:block" />
              <span className="text-gradient-light">supercharged by AI.</span>
            </h1>
            <p className="mt-6 text-base lg:text-[17px] leading-relaxed max-w-lg" style={{ color: "oklch(1 0 0 / 0.65)" }}>
              From resume to dream offer — every tool you need to stand out and grow. Free for all professionals, freshers to executives.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ background: "oklch(0.71 0.16 162)" }}>
                <Sparkles className="h-4 w-4" /> Create free account
              </button>
              <button className="inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/15" style={{ border: "1.5px solid oklch(1 0 0 / 0.38)", background: "oklch(1 0 0 / 0.07)", backdropFilter: "blur(8px)" }}>
                Build resume now
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

      {/* ═══ CAREER GROWTH TOOLS ══════════════════════════════ */}
      <Section>
        <AnimateIn>
          <div className="text-center mb-14">
            <EyebrowChip>Career Growth Tools</EyebrowChip>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight">
              Everything you need to{" "}
              <TypingText text="land your dream role." className="text-gradient" />
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Six AI-powered tools, one seamless career platform. Free forever.
            </p>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, i) => {
            const isHovered = hovered === i;
            return (
              <AnimateIn key={tool.t} delay={i * 80}>
                <div
                  className="group relative flex flex-col rounded-2xl p-6 h-full cursor-default overflow-hidden"
                  style={{
                    background: isHovered ? GRAD_BORDER : i === 2 ? "linear-gradient(135deg, oklch(0.45 0.25 305 / 0.06), oklch(0.55 0.22 264 / 0.04))" : "var(--surface)",
                    border: `${isHovered ? "1.5px" : "1px"} solid ${isHovered ? "transparent" : i === 2 ? "oklch(0.45 0.25 305 / 0.22)" : "var(--border)"}`,
                    transition: "all 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                    boxShadow: isHovered ? "0 20px 50px -12px oklch(0.38 0.17 264 / 0.18)" : "none",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0, background: "radial-gradient(ellipse at top left, oklch(0.71 0.16 162 / 0.07) 0%, transparent 60%)" }} />

                  <span className="absolute top-5 right-5 text-[11px] font-mono font-semibold select-none"
                    style={{ color: "var(--muted-foreground)", opacity: 0.35 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative h-11 w-11 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                    style={{ background: ICON_GRADS[i % ICON_GRADS.length] }}>
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="mt-4 text-[15px] font-bold tracking-tight text-foreground leading-snug">{tool.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{tool.d}</p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold transition-all duration-300"
                    style={{ color: "oklch(0.71 0.16 162)", opacity: isHovered ? 1 : 0.65, transform: isHovered ? "translateX(0)" : "translateX(-4px)" }}>
                    Try it free <ArrowRight className="h-3 w-3" />
                  </div>

                  <div className="absolute bottom-0 left-6 right-6 h-px transition-all duration-300"
                    style={{ background: "linear-gradient(90deg, oklch(0.71 0.16 162), oklch(0.45 0.25 305))", opacity: isHovered ? 1 : 0 }} />
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </Section>

      {/* ═══ HOW IT WORKS ════════════════════════════════════ */}
      <HowItWorksSection
        steps={talentSteps}
        heading="Your path to the"
        headingHighlight="perfect career."
        description="Five AI-powered steps — from building your profile to landing your dream role and growing beyond it."
        ctaLabel="Create Your Free Profile"
      />

      {/* ═══ AI RESUME SCORE ══════════════════════════════════ */}
      <Section className="bg-surface-2/60">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — Score card */}
          <AnimateIn direction="left">
            <div ref={scoreRef} className="rounded-2xl p-8 shadow-[var(--shadow-lift)]"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-semibold text-muted-foreground">Your AI Resume Score</div>
                <span className="text-xs rounded-full px-3 py-1 font-bold"
                  style={{ background: "oklch(0.71 0.16 162 / 0.12)", color: "oklch(0.55 0.20 162)" }}>
                  Excellent
                </span>
              </div>

              {/* Animated score */}
              <div className="flex items-end gap-2 mb-8">
                <div className="text-7xl font-display font-extrabold text-gradient leading-none">{score}</div>
                <div className="text-xl text-muted-foreground mb-2 font-semibold">/ 100</div>
              </div>

              {/* Progress bars */}
              <div ref={barsRef} className="space-y-4">
                {RESUME_BARS.map((r, i) => (
                  <div key={r.l}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium text-muted-foreground">{r.l}</span>
                      <span className="font-bold text-foreground">{r.v}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--secondary)" }}>
                      <div className="h-full rounded-full gradient-accent-bg"
                        style={{
                          width: `${r.v}%`,
                          transformOrigin: "left",
                          transform: barsVisible ? "scaleX(1)" : "scaleX(0)",
                          transition: `transform 1.0s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + i * 0.13}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-5 flex items-center gap-2 text-xs"
                style={{ borderTop: "1px solid var(--border)", color: "var(--muted-foreground)" }}>
                <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "oklch(0.71 0.16 162)" }} />
                Score updates automatically as you improve your profile
              </div>
            </div>
          </AnimateIn>

          {/* Right */}
          <AnimateIn direction="right">
            <EyebrowChip>AI Resume Intelligence</EyebrowChip>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight leading-tight">
              Beat the bots.{" "}
              <span className="text-gradient">Get noticed.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              98% of Fortune 500 companies use ATS. Our intelligence engine optimizes your resume for both algorithms and humans — boosting interview rates dramatically.
            </p>

            {/* Feature bullets */}
            <ul className="mt-8 space-y-3.5">
              {[
                "Real-time ATS compatibility score",
                "Keyword gap analysis vs. job description",
                "Section-by-section improvement tips",
                "One-click optimization suggestions",
              ].map((b, i) => (
                <AnimateIn key={b} delay={100 + i * 70} direction="right">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "oklch(0.71 0.16 162 / 0.12)", border: "1px solid oklch(0.71 0.16 162 / 0.35)" }}>
                      <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "oklch(0.71 0.16 162)" }} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{b}</span>
                  </li>
                </AnimateIn>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5" style={{ background: "oklch(0.71 0.16 162)" }}>
                Check Your Score <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all hover:bg-secondary"
                style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}>
                <Zap className="h-4 w-4" style={{ color: "oklch(0.71 0.16 162)" }} /> How it works
              </button>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* ═══ CTA ══════════════════════════════════════════════ */}
      <Section>
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl gradient-hero-bg p-12 lg:p-16 text-center text-white">
            <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
            <div className="blob -top-10 -right-10 h-48 w-48 pointer-events-none" style={{ background: "oklch(0.45 0.25 305)", opacity: 0.20 }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-6 px-4 py-2"
                style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.20)" }}>
                <Sparkles className="h-3.5 w-3.5" style={{ color: "oklch(0.71 0.16 162)" }} />
                <span style={{ color: "oklch(0.90 0.08 162)" }}>100% free — always</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Start your career journey <span className="text-gradient-light">today.</span>
              </h2>
              <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "oklch(1 0 0 / 0.65)" }}>
                Join thousands of professionals who landed their dream role using G Talent Pro.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5" style={{ background: "oklch(0.71 0.16 162)" }}>
                  <Sparkles className="h-4 w-4" /> Create Free Account
                </button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Section>

    </SiteLayout>
  );
}
