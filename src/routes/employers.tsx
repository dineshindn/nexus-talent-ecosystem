import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Brain, BarChart3, Users, Building2, CheckCircle2, Zap, Workflow, Shield, TrendingUp } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionHeader, CTAButton, EyebrowChip } from "@/components/site/primitives";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "For Employers — Hire Smarter | G Talent Pro" },
      { name: "description", content: "AI-powered talent intelligence for employers. Centralized vendor management, smart matching, and unified hiring insights." },
      { property: "og:title", content: "For Employers — G Talent Pro" },
      { property: "og:description", content: "Hire smarter with AI-powered talent intelligence." },
    ],
  }),
  component: EmployersPage,
});

const reasons = [
  { icon: Brain, t: "AI-powered talent discovery", d: "Smart recommendations across freshers, professionals, and campus pools." },
  { icon: Building2, t: "Centralized vendor management", d: "Unify staffing partners and recruitment agencies in one workspace." },
  { icon: BarChart3, t: "Unified hiring insights", d: "Visibility across internal teams, vendors, and campus pipelines." },
  { icon: Zap, t: "Faster screening", d: "AI shortlisting reduces screening effort by up to 70%." },
  { icon: TrendingUp, t: "Lower resourcing costs", d: "Optimize spend with intelligent vendor performance analytics." },
  { icon: Workflow, t: "Scalable hiring models", d: "Project, contract, contingent, and full-time — all flexible." },
];

function EmployersPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-deep-bg text-white">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="blob top-10 -left-32 h-96 w-96 bg-[oklch(0.55_0.22_264)]" />
        <div className="blob -bottom-20 -right-20 h-96 w-96 bg-[oklch(0.72_0.14_211)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <Building2 className="h-3.5 w-3.5 text-[oklch(0.72_0.14_211)]" /> For Employers
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Hire smarter with <span className="text-gradient-light">AI-powered talent intelligence.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Access verified professionals, freshers, campus talent, recruitment agencies,
              and specialized workforce pools — all through one connected hiring ecosystem.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton variant="primary">Start Hiring Smarter <ArrowRight className="h-4 w-4" /></CTAButton>
              <button className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Why Employers Choose Us"
          title={<>Built for modern <span className="text-gradient">talent acquisition teams.</span></>}
          subtitle="Reduce hiring time and cost. Improve quality. Unify your workforce ecosystem."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl bg-surface border border-border p-7 glow-hover">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-2/50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <EyebrowChip>Smart Hiring Pipeline</EyebrowChip>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight">
              From requisition to offer — <span className="text-gradient">in days, not weeks.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Centralize requisitions, vendor pipelines, and internal sourcing in one
              intelligent workspace. Move fast with confidence.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "AI-driven candidate matching",
                "Vendor & agency collaboration",
                "Real-time hiring analytics",
                "Bias-aware shortlisting",
                "Integrated assessments & BGV",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-[oklch(0.71_0.16_162)]" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>

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
                      <div className="h-full rounded-full" style={{ width: r.w, background: r.c }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-light rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl gradient-accent-bg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Time-to-hire</div>
                  <div className="text-lg font-bold text-foreground">−47%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-[2rem] gradient-hero-bg p-12 lg:p-20 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            See G Talent Pro <span className="text-gradient-light">in action.</span>
          </h2>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
            30-minute personalized demo with our hiring experts.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton variant="primary">Request Demo <ArrowRight className="h-4 w-4" /></CTAButton>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
