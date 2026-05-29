import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Users, Building2, Award, BarChart3, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, CTAButton, EyebrowChip } from "@/components/site/primitives";
import { Reveal, RevealStagger, staggerItem } from "@/components/site/Reveal";
import campusHero from "@/assets/campus-hero.jpg";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "For Campus — Placement Ecosystem | G Talent Pro" },
      { name: "description", content: "Transform campus placements with AI-powered student profiling, employer connectivity, and centralized placement insights." },
      { property: "og:title", content: "For Campus — G Talent Pro" },
      { property: "og:description", content: "Industry-connected placement ecosystem for campuses." },
      { property: "og:image", content: campusHero },
    ],
  }),
  component: CampusPage,
});

const advantages = [
  { icon: Building2, t: "Verified employer network", d: "Direct access to top recruiters across industries.", accent: "from-[oklch(0.71_0.16_162)] to-[oklch(0.72_0.14_211)]" },
  { icon: BarChart3, t: "Smarter placement visibility", d: "Increase placement ratios with intelligent talent surfacing.", accent: "from-[oklch(0.72_0.14_211)] to-[oklch(0.55_0.22_264)]" },
  { icon: Sparkles, t: "AI student profiling", d: "Skill-mapped student profiles and growth recommendations.", accent: "from-[oklch(0.55_0.22_264)] to-[oklch(0.71_0.16_162)]" },
  { icon: Award, t: "Industry-aligned training", d: "Curriculum and demand signals from live hiring trends.", accent: "from-[oklch(0.78_0.16_85)] to-[oklch(0.71_0.16_162)]" },
  { icon: Users, t: "Centralized coordination", d: "One workspace for drives, assessments, and reporting.", accent: "from-[oklch(0.65_0.2_320)] to-[oklch(0.72_0.14_211)]" },
  { icon: GraduationCap, t: "Future-ready ecosystem", d: "Build a career-first campus brand for students & parents.", accent: "from-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)]" },
];

function CampusPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-deep-bg text-white">
        <div className="absolute inset-0">
          <img src={campusHero} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.08_264)]/95 via-[oklch(0.18_0.08_264)]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.08_264)] via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="blob top-0 -left-20 h-96 w-96 bg-[oklch(0.71_0.16_162)]" />
        <div className="blob -bottom-20 right-1/4 h-96 w-96 bg-[oklch(0.55_0.22_264)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-28 lg:py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium border border-white/10">
              <GraduationCap className="h-3.5 w-3.5 text-[oklch(0.85_0.18_165)]" /> For Campus
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
              Empower placements with <br /><span className="text-gradient-light">industry-connected intelligence.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-white/75 leading-relaxed">
              Transform your campus into a future-ready talent hub. Connect students directly with verified employers through one connected placement platform.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton variant="primary">Partner with us <ArrowRight className="h-4 w-4" /></CTAButton>
              <CTAButton variant="ghost" className="!bg-white/5 !border-white/15 !text-white hover:!bg-white/10">See campus demo</CTAButton>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {[{ v: "94%", l: "Placement rate" }, { v: "284+", l: "Active recruiters" }, { v: "150+", l: "Partner campuses" }].map((s, i) => (
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

      {/* CARDS */}
      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full gradient-accent-bg animate-glow-pulse" /> Why campuses choose us
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">Better placements. <span className="text-gradient">Stronger industry connect.</span></h2>
          </div>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.06}>
          {advantages.map(({ icon: Icon, t, d, accent }, idx) => (
            <motion.div key={t} variants={staggerItem} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="group relative rounded-3xl bg-surface border border-border p-7 overflow-hidden">
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
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </Section>

      {/* ANALYTICS */}
      <Section className="bg-surface-2/50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="right">
            <EyebrowChip>Placement analytics</EyebrowChip>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight">Real-time visibility on <span className="text-gradient">every placement metric.</span></h2>
            <ul className="mt-8 space-y-3">
              {["Live placement ratios", "Skill-gap heatmaps", "Employer engagement scores", "Student readiness index", "Industry demand trends"].map((b) => (
                <li key={b} className="flex items-center gap-3 font-medium"><CheckCircle2 className="h-5 w-5 text-[oklch(0.71_0.16_162)]" /> {b}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="left">
            <div className="rounded-3xl bg-surface border border-border p-8 shadow-[var(--shadow-lift)]">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { l: "Placement Rate", v: "94%", c: "from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)]" },
                  { l: "Avg. Package", v: "₹8.4L", c: "from-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)]" },
                  { l: "Recruiters", v: "284", c: "from-[oklch(0.71_0.16_162)] to-[oklch(0.55_0.22_264)]" },
                  { l: "Drives Hosted", v: "42", c: "from-[oklch(0.78_0.16_85)] to-[oklch(0.72_0.14_211)]" },
                ].map((s, i) => (
                  <motion.div key={s.l} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className={`rounded-2xl p-5 bg-gradient-to-br ${s.c} text-white`}>
                    <div className="text-3xl font-extrabold">{s.v}</div>
                    <div className="text-xs mt-1 opacity-80 uppercase tracking-wide">{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </SiteLayout>
  );
}
