import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, FileText, Target, MessageSquare, Linkedin, LayoutDashboard, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, CTAButton, EyebrowChip } from "@/components/site/primitives";
import { Reveal, RevealStagger, staggerItem } from "@/components/site/Reveal";
import talentHero from "@/assets/talent-hero.jpg";

export const Route = createFileRoute("/talent")({
  head: () => ({
    meta: [
      { title: "For Talent — Build Your Career | G Talent Pro" },
      { name: "description", content: "AI Resume Builder, ATS Score Checker, Interview Prep, and curated opportunities for ambitious professionals." },
      { property: "og:title", content: "For Talent — G Talent Pro" },
      { property: "og:description", content: "Career growth tools and verified opportunities, powered by AI." },
      { property: "og:image", content: talentHero },
    ],
  }),
  component: TalentPage,
});

const tools = [
  { icon: FileText, t: "AI Resume Builder", d: "Craft stunning, ATS-friendly resumes in minutes.", accent: "from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)]" },
  { icon: Target, t: "ATS Score Checker", d: "Know your match score and optimize before applying.", accent: "from-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)]" },
  { icon: MessageSquare, t: "Interview Prep", d: "AI mock interviews with personalized feedback.", accent: "from-[oklch(0.71_0.16_162)] to-[oklch(0.55_0.22_264)]" },
  { icon: Linkedin, t: "LinkedIn Optimizer", d: "Get discovered by top recruiters and employers.", accent: "from-[oklch(0.65_0.2_320)] to-[oklch(0.55_0.22_264)]" },
  { icon: LayoutDashboard, t: "Career Dashboard", d: "Track applications, interviews, and growth in one place.", accent: "from-[oklch(0.78_0.16_85)] to-[oklch(0.71_0.16_162)]" },
  { icon: Search, t: "Smart Job Matches", d: "Curated opportunities aligned to your goals.", accent: "from-[oklch(0.72_0.14_211)] to-[oklch(0.65_0.2_320)]" },
];

function TalentPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-deep-bg text-white">
        <div className="absolute inset-0">
          <img src={talentHero} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.08_264)]/95 via-[oklch(0.18_0.08_264)]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.08_264)] via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="blob top-0 -right-20 h-96 w-96 bg-[oklch(0.65_0.2_320)]" />
        <div className="blob -bottom-20 -left-20 h-96 w-96 bg-[oklch(0.71_0.16_162)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-28 lg:py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-[oklch(0.85_0.15_180)]" /> For Talent
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
              Your career, <br /><span className="text-gradient-light">supercharged by AI.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-white/75 leading-relaxed">
              From resume to dream offer — every tool you need to stand out and grow. Free for all professionals, freshers to executives.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton variant="primary"><Sparkles className="h-4 w-4" /> Create free account</CTAButton>
              <CTAButton variant="ghost" className="!bg-white/5 !border-white/15 !text-white hover:!bg-white/10">Build resume now</CTAButton>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {[{ v: "92/100", l: "Avg ATS score" }, { v: "3.4x", l: "Interview rate" }, { v: "100%", l: "Free for talent" }].map((s, i) => (
                <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}>
                  <div className="text-3xl font-extrabold text-gradient-light">{s.v}</div>
                  <div className="mt-1 text-xs text-white/60 uppercase tracking-wider">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* TOOLS */}
      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full gradient-accent-bg animate-glow-pulse" /> Career growth tools
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">Everything you need to <span className="text-gradient">land your dream role.</span></h2>
          </div>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.06}>
          {tools.map(({ icon: Icon, t, d, accent }, idx) => (
            <motion.div key={t} variants={staggerItem} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="group relative rounded-3xl bg-surface border border-border p-7 overflow-hidden cursor-pointer">
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${accent} p-[1.5px]`}>
                <div className="h-full w-full rounded-3xl bg-surface" />
              </div>
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-3xl group-hover:opacity-40 transition-all duration-700`} />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <motion.div whileHover={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 0.5 }} className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-[var(--shadow-glow)]`}>
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <span className="text-[10px] font-bold tracking-widest text-muted-foreground/60 bg-background/50 border border-border rounded-full px-2.5 py-1">0{idx + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-tight group-hover:text-gradient transition-all">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
                <div className="mt-6 pt-5 border-t border-border/60 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Try it free <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </Section>

      {/* RESUME SCORE */}
      <Section className="bg-surface-2/50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="right">
            <div className="rounded-3xl bg-surface border border-border p-8 shadow-[var(--shadow-lift)]">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-muted-foreground">Your AI Resume Score</div>
                <span className="text-xs rounded-full bg-[oklch(0.71_0.16_162)]/15 text-[oklch(0.71_0.16_162)] px-3 py-1 font-bold">Excellent</span>
              </div>
              <div className="mt-6 flex items-end gap-2">
                <div className="text-7xl font-display font-extrabold text-gradient">92</div>
                <div className="text-sm text-muted-foreground mb-3">/ 100</div>
              </div>
              <div className="mt-6 space-y-3">
                {[{ l: "Keyword match", v: 95 }, { l: "Skill relevance", v: 88 }, { l: "Experience signals", v: 94 }, { l: "Formatting", v: 90 }].map((r) => (
                  <div key={r.l}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">{r.l}</span>
                      <span className="font-semibold">{r.v}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${r.v}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full gradient-accent-bg" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal direction="left">
            <EyebrowChip>AI resume intelligence</EyebrowChip>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight">Beat the bots. <span className="text-gradient">Get noticed.</span></h2>
            <p className="mt-5 text-lg text-muted-foreground">98% of Fortune 500 companies use ATS. Our intelligence engine optimizes your resume for both algorithms and humans — boosting interview rates dramatically.</p>
            <CTAButton variant="primary" className="mt-8">Check your score <ArrowRight className="h-4 w-4" /></CTAButton>
          </Reveal>
        </div>
      </Section>
    </SiteLayout>
  );
}
