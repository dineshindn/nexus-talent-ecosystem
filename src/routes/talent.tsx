import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, FileText, Target, MessageSquare, Linkedin, LayoutDashboard, Search, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionHeader, CTAButton, EyebrowChip } from "@/components/site/primitives";

export const Route = createFileRoute("/talent")({
  head: () => ({
    meta: [
      { title: "For Talent — Build Your Career | G Talent Pro" },
      { name: "description", content: "AI Resume Builder, ATS Score Checker, Interview Prep, and curated opportunities for ambitious professionals." },
      { property: "og:title", content: "For Talent — G Talent Pro" },
      { property: "og:description", content: "Career growth tools and verified opportunities, powered by AI." },
    ],
  }),
  component: TalentPage,
});

const tools = [
  { icon: FileText, t: "AI Resume Builder", d: "Craft stunning, ATS-friendly resumes in minutes." },
  { icon: Target, t: "ATS Score Checker", d: "Know your match score and optimize before applying." },
  { icon: MessageSquare, t: "Interview Prep", d: "AI mock interviews with personalized feedback." },
  { icon: Linkedin, t: "LinkedIn Optimizer", d: "Get discovered by top recruiters and employers." },
  { icon: LayoutDashboard, t: "Career Dashboard", d: "Track applications, interviews, and growth in one place." },
  { icon: Search, t: "Smart Job Matches", d: "Curated opportunities aligned to your goals." },
];

function TalentPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-2 to-background py-24 lg:py-32">
        <div className="blob top-0 -right-32 h-96 w-96 bg-[oklch(0.55_0.22_264)] opacity-30" />
        <div className="blob bottom-0 -left-32 h-96 w-96 bg-[oklch(0.72_0.14_211)] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <EyebrowChip>For Talent</EyebrowChip>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Your career, <span className="text-gradient">supercharged by AI.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From resume to dream offer — every tool you need to stand out and grow.
              Free for all professionals, freshers to executives.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton variant="primary">
                <Sparkles className="h-4 w-4" /> Create Free Account
              </CTAButton>
              <CTAButton variant="ghost">Build Resume Now</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Career Growth Tools"
          title={<>Everything you need to <span className="text-gradient">land your dream role.</span></>}
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-3xl bg-surface border border-border p-7 glow-hover">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[oklch(0.55_0.22_264)] to-[oklch(0.71_0.16_162)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Try it free <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-2/50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              {[
                { l: "Keyword match", v: 95 },
                { l: "Skill relevance", v: 88 },
                { l: "Experience signals", v: 94 },
                { l: "Formatting", v: 90 },
              ].map((r) => (
                <div key={r.l}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">{r.l}</span>
                    <span className="font-semibold">{r.v}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full gradient-accent-bg" style={{ width: `${r.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <EyebrowChip>AI Resume Intelligence</EyebrowChip>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight">
              Beat the bots. <span className="text-gradient">Get noticed.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              98% of Fortune 500 companies use ATS. Our intelligence engine optimizes
              your resume for both algorithms and humans — boosting interview rates dramatically.
            </p>
            <CTAButton variant="primary" className="mt-8">
              Check Your Score <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
