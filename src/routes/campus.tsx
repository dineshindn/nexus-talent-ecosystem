import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Users, Building2, Award, BarChart3, Sparkles, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionHeader, CTAButton, EyebrowChip } from "@/components/site/primitives";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "For Campus — Placement Ecosystem | G Talent Pro" },
      { name: "description", content: "Transform campus placements with AI-powered student profiling, employer connectivity, and centralized placement insights." },
      { property: "og:title", content: "For Campus — G Talent Pro" },
      { property: "og:description", content: "Industry-connected placement ecosystem for campuses." },
    ],
  }),
  component: CampusPage,
});

const advantages = [
  { icon: Building2, t: "Verified employer network", d: "Direct access to top recruiters across industries." },
  { icon: BarChart3, t: "Smarter placement visibility", d: "Increase placement ratios with intelligent talent surfacing." },
  { icon: Sparkles, t: "AI student profiling", d: "Skill-mapped student profiles and growth recommendations." },
  { icon: Award, t: "Industry-aligned training", d: "Curriculum and demand signals from live hiring trends." },
  { icon: Users, t: "Centralized coordination", d: "One workspace for drives, assessments, and reporting." },
  { icon: GraduationCap, t: "Future-ready ecosystem", d: "Build a career-first campus brand for students & parents." },
];

function CampusPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-deep-bg text-white">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="blob top-10 -left-20 h-96 w-96 bg-[oklch(0.71_0.16_162)]" />
        <div className="blob -bottom-20 -right-20 h-96 w-96 bg-[oklch(0.55_0.22_264)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <GraduationCap className="h-3.5 w-3.5 text-[oklch(0.71_0.16_162)]" /> For Campus
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Empower placements with <span className="text-gradient-light">industry-connected talent intelligence.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Transform your campus into a future-ready talent hub. Connect students directly
              with verified employers through one connected placement platform.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton variant="primary">Partner with Us <ArrowRight className="h-4 w-4" /></CTAButton>
              <button className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition">
                See Campus Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Why Campuses Choose G Talent Pro"
          title={<>Better placements. <span className="text-gradient">Stronger industry connect.</span></>}
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl bg-surface border border-border p-7 glow-hover">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)] flex items-center justify-center shadow-[var(--shadow-glow-cyan)]">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-2/50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <EyebrowChip>Placement Analytics</EyebrowChip>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight">
              Real-time visibility on <span className="text-gradient">every placement metric.</span>
            </h2>
            <ul className="mt-8 space-y-3">
              {["Live placement ratios", "Skill-gap heatmaps", "Employer engagement scores", "Student readiness index", "Industry demand trends"].map((b) => (
                <li key={b} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[oklch(0.71_0.16_162)]" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-surface border border-border p-8 shadow-[var(--shadow-lift)]">
            <div className="grid grid-cols-2 gap-4">
              {[
                { l: "Placement Rate", v: "94%", c: "from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)]" },
                { l: "Avg. Package", v: "₹8.4L", c: "from-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)]" },
                { l: "Recruiters", v: "284", c: "from-[oklch(0.71_0.16_162)] to-[oklch(0.55_0.22_264)]" },
                { l: "Drives Hosted", v: "42", c: "from-[oklch(0.78_0.16_85)] to-[oklch(0.72_0.14_211)]" },
              ].map((s) => (
                <div key={s.l} className={`rounded-2xl p-5 bg-gradient-to-br ${s.c} text-white`}>
                  <div className="text-3xl font-extrabold">{s.v}</div>
                  <div className="text-xs mt-1 opacity-80 uppercase tracking-wide">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
