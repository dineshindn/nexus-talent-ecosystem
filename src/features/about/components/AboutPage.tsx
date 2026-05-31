import { Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionHeader, EyebrowChip } from "@/components/site/primitives";
import { values, timeline } from "@/features/about/data";
import aboutBanner from "@/assets/about-banner.jpg";

export function AboutPage() {
  return (
    <SiteLayout>

      {/* ── Banner ── */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: "480px" }}>
        <img
          src={aboutBanner}
          alt="About banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
        />
        {/* Dark overlay with white fade at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.09 0.05 264 / 0.88) 0%, oklch(0.11 0.06 264 / 0.80) 55%, oklch(0.99 0.003 250 / 0.85) 100%)",
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-32 pb-28 lg:pt-40 lg:pb-32 text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-7 px-4 py-2"
            style={{ background: "oklch(1 0 0 / 0.10)", border: "1px solid oklch(1 0 0 / 0.22)", backdropFilter: "blur(12px)" }}
          >
            <Sparkles className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "oklch(0.71 0.16 162)" }} />
            <span style={{ color: "oklch(0.90 0.08 162)" }}>About Us</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold leading-[1.04] tracking-tight">
            Humanizing recruitment with{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient-light">artificial intelligence.</span>
          </h1>

          <p className="mt-6 text-base lg:text-[17px] leading-relaxed max-w-2xl mx-auto" style={{ color: "oklch(1 0 0 / 0.65)" }}>
            We believe hiring isn't about filling positions — it's about building futures,
            empowering businesses, and transforming careers.
          </p>
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-6">
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

      {/* ── Values ── */}
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

      {/* ── Timeline ── */}
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
