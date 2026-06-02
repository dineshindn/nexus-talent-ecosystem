import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, Sparkles, Search, Building2, Rocket, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, SectionHeader, CTAButton } from "./primitives";
import { Reveal } from "./Reveal";

/* ── Data ─────────────────────────────────────────────── */

const steps = [
  {
    n: "01", t: "Create Your Smart Profile",
    d: "Build your professional presence — upload resume, showcase skills and career goals.",
    icon: UserPlus, badge: "2 MIN",
    gradient: "from-[#2dd4bf] to-[#0d9488]",
    color: "#2dd4bf", glow: "rgba(45,212,191,0.5)",
  },
  {
    n: "02", t: "Get AI-Powered Career Insights",
    d: "Receive personalized job matches, skill gap analysis, and profile enhancements.",
    icon: Sparkles, badge: "INSTANT",
    gradient: "from-[#818cf8] to-[#4f46e5]",
    color: "#818cf8", glow: "rgba(129,140,248,0.5)",
  },
  {
    n: "03", t: "Discover Opportunities",
    d: "Browse curated, verified roles matched to your goals from top companies.",
    icon: Search, badge: "1-CLICK",
    gradient: "from-[#c084fc] to-[#9333ea]",
    color: "#c084fc", glow: "rgba(192,132,252,0.5)",
  },
  {
    n: "04", t: "Connect with Top Employers",
    d: "Apply to verified employers and become visible to hiring teams.",
    icon: Building2, badge: "SMART",
    gradient: "from-[#38bdf8] to-[#0284c7]",
    color: "#38bdf8", glow: "rgba(56,189,248,0.5)",
  },
  {
    n: "05", t: "Get Hired & Grow",
    d: "Track interviews, receive offers, build your future with AI career guidance.",
    icon: Rocket, badge: "REAL-TIME",
    gradient: "from-[#fbbf24] to-[#d97706]",
    color: "#fbbf24", glow: "rgba(251,191,36,0.5)",
  },
];

// Wave: 5 anchor points at x=0,250,500,750,1000 all at y=48 (center of h-24=96px circles)
// Amplitude ±38px, alternating S-curves for a visible wave
const WAVE = "M 0,48 C 62,86 188,10 250,48 C 312,10 438,86 500,48 C 562,86 688,10 750,48 C 812,10 938,86 1000,48";

// Floating background particles
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 7) % 92}%`,
  delay: i * 0.55,
  dur: 4.5 + (i % 5) * 0.8,
  size: [3, 2, 4, 2, 3][i % 5],
  opacity: 0.12 + (i % 4) * 0.06,
}));

/* ── Component ────────────────────────────────────────── */

interface Props { gradientId?: string }

export function HowItWorksSection({ gradientId = "hiw" }: Props) {
  const svgRef  = useRef<SVGSVGElement>(null);
  const dotRef  = useRef<SVGCircleElement>(null);
  const isInView = useInView(svgRef, { once: true, amount: 0.3 });

  // Trigger the SMIL animateMotion dot when the section enters view
  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => {
      const anim = dotRef.current?.querySelector("animateMotion") as SVGAnimationElement | null;
      anim?.beginElement();
    }, 420);
    return () => clearTimeout(t);
  }, [isInView]);

  const gId = gradientId; // shorthand

  return (
    <Section className="relative overflow-hidden">

      {/* ── SECTION BACKGROUND ─────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.07_260)] via-background to-background pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-[0.12] pointer-events-none" />

      {/* Ambient blobs */}
      <motion.div
        className="blob -top-40 -left-40 h-[560px] w-[560px] bg-[oklch(0.55_0.22_264)] opacity-[0.06]"
        animate={{ x: [0, 45, 0], y: [0, 28, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob -bottom-28 -right-28 h-[440px] w-[440px] bg-[oklch(0.72_0.14_211)] opacity-[0.06]"
        animate={{ x: [0, -32, 0], y: [0, -22, 0], scale: [1, 1.09, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map(p => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: p.left, bottom: -8, width: p.size, height: p.size, opacity: 0 }}
            animate={{ y: [0, -160, -320], opacity: [0, p.opacity, 0], x: [0, p.id % 2 === 0 ? 18 : -18, 0] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* ── CONTENT ────────────────────────────────────── */}
      <div className="relative">

        <Reveal>
          <SectionHeader
            eyebrow="How It Works"
            title={<>Build Your Future. <span className="text-gradient">In 5 simple steps.</span></>}
            subtitle="A guided, AI-powered path from profile creation to your next big role — designed for every stage of your career."
          />
        </Reveal>

        {/* ══ DESKTOP ══════════════════════════════════════ */}
        <div className="hidden lg:block mt-24">
          <div className="relative grid grid-cols-5">

            {/* SVG wave — absolutely behind circles */}
            <div className="absolute pointer-events-none z-0" style={{ top: 0, left: "10%", right: "10%", height: 96 }}>
              <svg
                ref={svgRef}
                viewBox="0 0 1000 96"
                className="w-full h-full"
                preserveAspectRatio="none"
                overflow="visible"
              >
                <defs>
                  {/* Gradient along the wave */}
                  <linearGradient id={`${gId}-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#2dd4bf" />
                    <stop offset="25%"  stopColor="#818cf8" />
                    <stop offset="50%"  stopColor="#c084fc" />
                    <stop offset="75%"  stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>

                  {/* Blur filter for glow layer */}
                  <filter id={`${gId}-blur`} x="-10%" y="-80%" width="120%" height="260%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b" />
                  </filter>
                </defs>

                {/* Track: dim dashed background */}
                <path
                  d={WAVE}
                  fill="none"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="2"
                  strokeDasharray="9 7"
                  strokeLinecap="round"
                />

                {/* Glow halo (wide + blurred) */}
                <motion.path
                  d={WAVE}
                  fill="none"
                  stroke={`url(#${gId}-grad)`}
                  strokeWidth="12"
                  strokeLinecap="round"
                  filter={`url(#${gId}-blur)`}
                  style={{ opacity: 0 }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.38 } : {}}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                />

                {/* Main colored dashed wave */}
                <motion.path
                  d={WAVE}
                  fill="none"
                  stroke={`url(#${gId}-grad)`}
                  strokeWidth="2.5"
                  strokeDasharray="9 7"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                />

                {/* Named reference path for animateMotion */}
                <path id={`${gId}-wpath`} d={WAVE} fill="none" stroke="none" />

                {/* Traveling glow dot (SMIL animateMotion — triggered via beginElement) */}
                <circle
                  ref={dotRef}
                  r="6"
                  fill="white"
                  style={{ filter: "drop-shadow(0 0 8px white) drop-shadow(0 0 3px rgba(255,255,255,0.9))" }}
                >
                  <animateMotion
                    dur="1.8s"
                    fill="freeze"
                    begin="indefinite"
                    calcMode="spline"
                    keyTimes="0;1"
                    keySplines="0.16 1 0.3 1"
                  >
                    <mpath xlinkHref={`#${gId}-wpath`} />
                  </animateMotion>
                </circle>
              </svg>
            </div>

            {/* ── STEP COLUMNS ─────────────────────────── */}
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.n}
                  className="relative z-10 flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.4, y: 28 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.14, duration: 0.7, type: "spring", stiffness: 155, damping: 13 }}
                >
                  {/* Ambient background glow per circle */}
                  <motion.div
                    className="absolute rounded-full pointer-events-none"
                    style={{ width: 140, height: 140, top: -22, background: `radial-gradient(circle, ${s.glow} 0%, transparent 68%)` }}
                    animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.45 }}
                  />

                  {/* Main circle */}
                  <motion.div
                    className={`relative h-24 w-24 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center select-none cursor-default`}
                    style={{ boxShadow: `0 0 0 3px ${s.color}30, 0 0 32px ${s.color}50, 0 8px 36px rgba(0,0,0,0.45)` }}
                    whileHover={{
                      scale: 1.13,
                      boxShadow: `0 0 0 5px ${s.color}55, 0 0 56px ${s.color}75, 0 14px 44px rgba(0,0,0,0.55)`,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    {/* Inner specular shine */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/22 via-transparent to-transparent" />

                    {/* Expanding pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: `${s.color}70` }}
                      animate={{ scale: [1, 1.35, 1.7], opacity: [0.85, 0.4, 0] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: i * 0.38 }}
                    />

                    {/* Second, slower pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border"
                      style={{ borderColor: `${s.color}40` }}
                      animate={{ scale: [1, 1.55, 2], opacity: [0.5, 0.2, 0] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut", delay: i * 0.38 + 0.6 }}
                    />

                    <span className="relative z-10 text-[1.8rem] font-extrabold text-white tracking-tight leading-none drop-shadow">
                      {s.n}
                    </span>
                  </motion.div>

                  {/* Badge label */}
                  <motion.span
                    className="mt-3.5 px-3 py-1 rounded-full text-[9.5px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm"
                    style={{
                      background: `${s.color}14`,
                      border: `1px solid ${s.color}48`,
                      color: s.color,
                      boxShadow: `0 2px 14px ${s.color}20`,
                    }}
                    initial={{ opacity: 0, y: -10, scale: 0.75 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.14 + 0.32, duration: 0.42, type: "spring" }}
                  >
                    {s.badge}
                  </motion.span>

                  {/* Glass step card */}
                  <motion.div
                    className="mt-9 w-full rounded-2xl p-5 text-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(145deg, ${s.color}0a 0%, rgba(255,255,255,0.025) 100%)`,
                      border: `1px solid ${s.color}22`,
                      boxShadow: `0 4px 28px rgba(0,0,0,0.22), inset 0 1px 0 ${s.color}18`,
                    }}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.11 + 0.58, duration: 0.52 }}
                    whileHover={{
                      y: -7,
                      boxShadow: `0 14px 44px rgba(0,0,0,0.32), 0 0 0 1px ${s.color}38, inset 0 1px 0 ${s.color}28`,
                    }}
                  >
                    {/* Card background shimmer */}
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                      style={{ background: `linear-gradient(135deg, ${s.color}08 0%, transparent 60%)` }}
                    />

                    {/* Icon box */}
                    <motion.div
                      className="mx-auto mb-3.5 h-11 w-11 rounded-xl flex items-center justify-center relative"
                      style={{ background: `${s.color}16`, border: `1px solid ${s.color}30` }}
                      whileHover={{ scale: 1.12, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 320, damping: 14 }}
                    >
                      <Icon className="h-5 w-5" style={{ color: s.color }} />
                    </motion.div>

                    <h3 className="text-sm font-bold text-foreground leading-snug">{s.t}</h3>
                    <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">{s.d}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══ MOBILE ═══════════════════════════════════════ */}
        <div className="lg:hidden mt-12 space-y-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                className="flex gap-3.5 items-stretch"
                initial={{ opacity: 0, x: -22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.48, type: "spring" }}
              >
                {/* Left spine: circle + vertical connector */}
                <div className="flex flex-col items-center shrink-0 gap-0">
                  <div
                    className={`h-14 w-14 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center font-extrabold text-white text-lg relative shrink-0`}
                    style={{ boxShadow: `0 0 22px ${s.color}55, 0 0 0 3px ${s.color}28` }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                    <span className="relative z-10 text-base font-extrabold">{s.n}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <motion.div
                      className="w-px grow mt-1"
                      style={{ background: `linear-gradient(to bottom, ${s.color}60, ${steps[i + 1].color}30)`, minHeight: 16 }}
                      initial={{ scaleY: 0, originY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.09 + 0.3, duration: 0.4 }}
                    />
                  )}
                </div>

                {/* Right content card */}
                <motion.div
                  className="flex-1 mb-2 rounded-2xl px-4 py-3.5 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}09, rgba(255,255,255,0.02))`,
                    border: `1px solid ${s.color}1e`,
                    boxShadow: `0 2px 16px rgba(0,0,0,0.18), inset 0 1px 0 ${s.color}10`,
                  }}
                  whileHover={{ y: -3, boxShadow: `0 8px 28px rgba(0,0,0,0.28), 0 0 0 1px ${s.color}30` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="h-7 w-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                    >
                      <Icon className="h-3.5 w-3.5" style={{ color: s.color }} />
                    </div>
                    <span
                      className="text-[8.5px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}38` }}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground text-sm leading-snug">{s.t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.d}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={0.32} className="mt-16 text-center">
          <motion.div
            className="inline-flex"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            <CTAButton variant="primary" as={Link} to="/talent">
              <Sparkles className="h-4 w-4" /> Start Your Journey <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </motion.div>
        </Reveal>
      </div>
    </Section>
  );
}
