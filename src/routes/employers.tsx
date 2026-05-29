import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Brain, BarChart3, Building2, CheckCircle2, Zap, Workflow, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, CTAButton, EyebrowChip } from "@/components/site/primitives";
import { Reveal, RevealStagger, staggerItem } from "@/components/site/Reveal";
import employersHero from "@/assets/employers-hero.jpg";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "For Employers — Hire Smarter | G Talent Pro" },
      { name: "description", content: "AI-powered talent intelligence for employers. Centralized vendor management, smart matching, and unified hiring insights." },
      { property: "og:title", content: "For Employers — G Talent Pro" },
      { property: "og:description", content: "Hire smarter with AI-powered talent intelligence." },
      { property: "og:image", content: employersHero },
    ],
  }),
  component: EmployersPage,
});

const reasons = [
  { icon: Brain, t: "AI-powered talent discovery", d: "Smart recommendations across freshers, professionals, and campus pools.", accent: "from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)]" },
  { icon: Building2, t: "Centralized vendor management", d: "Unify staffing partners and recruitment agencies in one workspace.", accent: "from-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)]" },
  { icon: BarChart3, t: "Unified hiring insights", d: "Visibility across internal teams, vendors, and campus pipelines.", accent: "from-[oklch(0.71_0.16_162)] to-[oklch(0.55_0.22_264)]" },
  { icon: Zap, t: "Faster screening", d: "AI shortlisting reduces screening effort by up to 70%.", accent: "from-[oklch(0.78_0.16_85)] to-[oklch(0.72_0.14_211)]" },
  { icon: TrendingUp, t: "Lower resourcing costs", d: "Optimize spend with intelligent vendor performance analytics.", accent: "from-[oklch(0.65_0.2_320)] to-[oklch(0.55_0.22_264)]" },
  { icon: Workflow, t: "Scalable hiring models", d: "Project, contract, contingent, and full-time — all flexible.", accent: "from-[oklch(0.55_0.22_264)] to-[oklch(0.71_0.16_162)]" },
];

function EmployersPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-deep-bg text-white">
        <div className="absolute inset-0">
          <img src={employersHero} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.08_264)]/95 via-[oklch(0.18_0.08_264)]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.08_264)] via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="blob top-0 -left-20 h-96 w-96 bg-[oklch(0.55_0.22_264)]" />
        <div className="blob -bottom-20 right-1/4 h-96 w-96 bg-[oklch(0.71_0.16_162)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-28 lg:py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium border border-white/10">
              <Building2 className="h-3.5 w-3.5 text-[oklch(0.85_0.15_180)]" /> For Employers
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
              Hire smarter with <br /><span className="text-gradient-light">AI talent intelligence.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-white/75 leading-relaxed">
              Access verified professionals, freshers, campus talent, recruitment agencies and specialized workforce pools — through one connected hiring ecosystem.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton variant="primary">Start hiring smarter <ArrowRight className="h-4 w-4" /></CTAButton>
              <CTAButton variant="ghost" className="!bg-white/5 !border-white/15 !text-white hover:!bg-white/10">Request a demo</CTAButton>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {[{ v: "70%", l: "Faster screening" }, { v: "−47%", l: "Time to hire" }, { v: "500+", l: "Enterprise clients" }].map((s, i) => (
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
              <span className="h-1.5 w-1.5 rounded-full gradient-accent-bg animate-glow-pulse" /> Why employers choose us
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Built for modern <span className="text-gradient">talent acquisition.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">Reduce hiring time and cost. Improve quality. Unify your workforce ecosystem.</p>
          </div>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.06}>
          {reasons.map(({ icon: Icon, t, d, accent }, idx) => (
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

      {/* PIPELINE */}
      <Section className="bg-surface-2/50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="right">
            <EyebrowChip>Smart hiring pipeline</EyebrowChip>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight">From requisition to offer — <span className="text-gradient">in days, not weeks.</span></h2>
            <p className="mt-5 text-lg text-muted-foreground">Centralize requisitions, vendor pipelines, and internal sourcing in one intelligent workspace.</p>
            <ul className="mt-8 space-y-3">
              {["AI-driven candidate matching", "Vendor & agency collaboration", "Real-time hiring analytics", "Bias-aware shortlisting", "Integrated assessments & BGV"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground"><CheckCircle2 className="h-5 w-5 text-[oklch(0.71_0.16_162)]" /><span className="font-medium">{b}</span></li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="left">
            <div className="relative">
              <div className="rounded-3xl gradient-deep-bg text-white p-8 shadow-[var(--shadow-lift)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Hiring Dashboard</div>
                    <div className="text-2xl font-bold mt-1">Q3 Pipeline</div>
                  </div>
                  <span className="rounded-full bg-[oklch(0.71_0.16_162)]/20 text-[oklch(0.71_0.16_162)] text-xs px-3 py-1 font-semibold">+24%</span>
                </div>
                <div className="mt-8 space-y-4">
                  {[
                    { l: "Sourced", v: 1240, w: "100%", c: "oklch(0.55_0.22_264)" },
                    { l: "Screened", v: 432, w: "62%", c: "oklch(0.72_0.14_211)" },
                    { l: "Interviewed", v: 186, w: "38%", c: "oklch(0.71_0.16_162)" },
                    { l: "Offered", v: 64, w: "18%", c: "oklch(0.78_0.16_85)" },
                  ].map((r) => (
                    <div key={r.l}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/70">{r.l}</span>
                        <span className="font-bold">{r.v}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: r.w }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full rounded-full" style={{ background: r.c }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass-light rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl gradient-accent-bg flex items-center justify-center"><Shield className="h-5 w-5 text-white" /></div>
                  <div>
                    <div className="text-xs text-muted-foreground">Time-to-hire</div>
                    <div className="text-lg font-bold text-foreground">−47%</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-[2rem] gradient-hero-bg p-12 lg:p-20 text-center text-white">
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <div className="blob top-0 left-1/4 h-72 w-72 bg-[oklch(0.71_0.16_162)]" />
            <div className="blob bottom-0 right-1/4 h-72 w-72 bg-[oklch(0.55_0.22_264)]" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">See G Talent Pro <span className="text-gradient-light">in action.</span></h2>
              <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">30-minute personalized demo with our hiring experts.</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <CTAButton variant="primary">Request demo <ArrowRight className="h-4 w-4" /></CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </SiteLayout>
  );
}
