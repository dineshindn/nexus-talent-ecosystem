import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Target, Heart, Rocket } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionHeader, EyebrowChip } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Humanizing Recruitment with AI | G Talent Pro" },
      { name: "description", content: "G Talent Pro builds the AI-powered ecosystem connecting employers, campuses and professionals — humanizing recruitment at scale." },
      { property: "og:title", content: "About G Talent Pro" },
      { property: "og:description", content: "Humanizing recruitment with artificial intelligence." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, t: "Intelligence first", d: "Every workflow powered by smart, explainable AI." },
  { icon: Heart, t: "Human at the core", d: "Technology amplifies people — never replaces them." },
  { icon: Target, t: "Outcome-driven", d: "Measured in real hires, real placements, real careers." },
  { icon: Rocket, t: "Built to scale", d: "From startup to enterprise — one connected platform." },
];

const timeline = [
  { y: "2022", t: "The vision", d: "G Talent Pro is founded with a mission to humanize recruitment with AI." },
  { y: "2023", t: "First 1,000 hires", d: "Launched the matching engine; partnered with leading enterprises." },
  { y: "2024", t: "Campus ecosystem", d: "Rolled out PAN India campus placement workflows." },
  { y: "2025", t: "AI intelligence", d: "Released ATS optimizer, resume builder, and interview prep suite." },
  { y: "2026", t: "Connected ecosystem", d: "Unified employers, campuses, and talent in one platform." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-deep-bg text-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="blob top-0 -left-20 h-96 w-96 bg-[oklch(0.55_0.22_264)]" />
        <div className="blob -bottom-20 -right-20 h-96 w-96 bg-[oklch(0.71_0.16_162)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">About Us</span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Humanizing recruitment with <span className="text-gradient-light">artificial intelligence.</span>
          </h1>
          <p className="mt-6 text-lg text-white/75 leading-relaxed">
            We believe hiring isn't about filling positions — it's about building futures,
            empowering businesses, and transforming careers.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="rounded-3xl bg-surface border border-border p-10">
            <EyebrowChip>Our Mission</EyebrowChip>
            <h2 className="mt-5 text-3xl font-extrabold">Connect every ambition to the right opportunity.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Bridge ambition and opportunity through a connected ecosystem where hiring
              becomes faster, smarter, transparent, and outcome-driven.
            </p>
          </div>
          <div className="rounded-3xl gradient-hero-bg text-white p-10">
            <EyebrowChip>Our Vision</EyebrowChip>
            <h2 className="mt-5 text-3xl font-extrabold">The world's most trusted AI talent platform.</h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Redefine how the world connects talent, campuses, and employers — with intelligence,
              empathy, and uncompromising user experience.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-2/50">
        <SectionHeader eyebrow="Our Values" title={<>What we <span className="text-gradient">stand for.</span></>} />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl bg-surface border border-border p-7 glow-hover">
              <div className="h-12 w-12 rounded-2xl gradient-accent-bg flex items-center justify-center shadow-[var(--shadow-glow)]">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Our Journey" title={<>From vision to <span className="text-gradient">connected ecosystem.</span></>} />
        <div className="mt-16 relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.55_0.22_264)] via-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)]" />
          {timeline.map((m) => (
            <div key={m.y} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="relative z-10 h-12 w-12 shrink-0 rounded-full gradient-accent-bg flex items-center justify-center text-white text-xs font-bold shadow-[var(--shadow-glow)]">
                {m.y}
              </div>
              <div className="flex-1 rounded-2xl bg-surface border border-border p-6">
                <h3 className="text-lg font-bold">{m.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
