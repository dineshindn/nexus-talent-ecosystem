import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Target, Heart, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionHeader, EyebrowChip } from "@/components/site/primitives";
import { Reveal, RevealStagger, staggerItem } from "@/components/site/Reveal";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Humanizing Recruitment with AI | G Talent Pro" },
      { name: "description", content: "G Talent Pro builds the AI-powered ecosystem connecting employers, campuses and professionals — humanizing recruitment at scale." },
      { property: "og:title", content: "About G Talent Pro" },
      { property: "og:description", content: "Humanizing recruitment with artificial intelligence." },
      { property: "og:image", content: aboutHero },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, t: "Intelligence first", d: "Every workflow powered by smart, explainable AI.", accent: "from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)]" },
  { icon: Heart, t: "Human at the core", d: "Technology amplifies people — never replaces them.", accent: "from-[oklch(0.65_0.2_320)] to-[oklch(0.55_0.22_264)]" },
  { icon: Target, t: "Outcome-driven", d: "Measured in real hires, real placements, real careers.", accent: "from-[oklch(0.71_0.16_162)] to-[oklch(0.72_0.14_211)]" },
  { icon: Rocket, t: "Built to scale", d: "From startup to enterprise — one connected platform.", accent: "from-[oklch(0.78_0.16_85)] to-[oklch(0.71_0.16_162)]" },
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
      {/* HERO */}
      <section className="relative overflow-hidden gradient-deep-bg text-white">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.08_264)]/90 via-[oklch(0.18_0.08_264)]/70 to-[oklch(0.18_0.08_264)]" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="blob top-0 -left-20 h-96 w-96 bg-[oklch(0.55_0.22_264)]" />
        <div className="blob -bottom-20 -right-20 h-96 w-96 bg-[oklch(0.71_0.16_162)]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 py-28 lg:py-40 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-[oklch(0.85_0.15_180)]" /> About Us
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
              Humanizing recruitment with <span className="text-gradient-light">artificial intelligence.</span>
            </h1>
            <p className="mt-7 text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              We believe hiring isn't about filling positions — it's about building futures, empowering businesses, and transforming careers.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* MISSION + VISION */}
      <Section>
        <RevealStagger className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={staggerItem} whileHover={{ y: -4 }} className="rounded-3xl bg-surface border border-border p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)] opacity-10 blur-3xl" />
            <div className="relative">
              <EyebrowChip>Our mission</EyebrowChip>
              <h2 className="mt-5 text-3xl font-extrabold">Connect every ambition to the right opportunity.</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Bridge ambition and opportunity through a connected ecosystem where hiring becomes faster, smarter, transparent, and outcome-driven.
              </p>
            </div>
          </motion.div>
          <motion.div variants={staggerItem} whileHover={{ y: -4 }} className="rounded-3xl gradient-hero-bg text-white p-10 relative overflow-hidden">
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <div className="blob top-0 right-0 h-48 w-48 bg-[oklch(0.71_0.16_162)]" />
            <div className="relative">
              <EyebrowChip>Our vision</EyebrowChip>
              <h2 className="mt-5 text-3xl font-extrabold">The world's most trusted AI talent platform.</h2>
              <p className="mt-5 text-white/80 leading-relaxed">
                Redefine how the world connects talent, campuses, and employers — with intelligence, empathy, and uncompromising user experience.
              </p>
            </div>
          </motion.div>
        </RevealStagger>
      </Section>

      {/* VALUES */}
      <Section className="bg-surface-2/50">
        <Reveal>
          <SectionHeader eyebrow="Our values" title={<>What we <span className="text-gradient">stand for.</span></>} />
        </Reveal>
        <RevealStagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
          {values.map(({ icon: Icon, t, d, accent }, idx) => (
            <motion.div key={t} variants={staggerItem} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="group relative rounded-3xl bg-surface border border-border p-7 overflow-hidden">
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${accent} p-[1.5px]`}>
                <div className="h-full w-full rounded-3xl bg-surface" />
              </div>
              <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-3xl group-hover:opacity-40 transition-all duration-700`} />
              <div className="relative">
                <motion.div whileHover={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 0.5 }} className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-[var(--shadow-glow)]`}>
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="mt-5 text-lg font-bold group-hover:text-gradient transition-all">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                <div className="mt-5 text-[10px] font-bold tracking-widest text-muted-foreground/50">0{idx + 1} / 04</div>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </Section>

      {/* TIMELINE */}
      <Section>
        <Reveal>
          <SectionHeader eyebrow="Our journey" title={<>From vision to <span className="text-gradient">connected ecosystem.</span></>} />
        </Reveal>
        <div className="mt-16 relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.55_0.22_264)] via-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)]" />
          <RevealStagger stagger={0.1}>
            {timeline.map((m) => (
              <motion.div key={m.y} variants={staggerItem} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="relative z-10 h-12 w-12 shrink-0 rounded-full gradient-accent-bg flex items-center justify-center text-white text-xs font-bold shadow-[var(--shadow-glow)]">{m.y}</div>
                <div className="flex-1 rounded-2xl bg-surface border border-border p-6 hover:shadow-[var(--shadow-lift)] transition-shadow">
                  <h3 className="text-lg font-bold">{m.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </Section>
    </SiteLayout>
  );
}
