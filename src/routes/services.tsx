import { createFileRoute } from "@tanstack/react-router";
import { Users, Briefcase, GraduationCap, Target, TrendingUp, Globe2, BarChart3, Workflow, Shield, Award, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, CTAButton } from "@/components/site/primitives";
import { Reveal, RevealStagger, staggerItem } from "@/components/site/Reveal";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Talent, Recruitment & Workforce | G Talent Pro" },
      { name: "description", content: "Talent, Recruitment, Campus Hiring, Placement, Career, Events, Assessments, Train & Deploy, BGV, and Training — flexible models built around outcomes." },
      { property: "og:title", content: "Services — G Talent Pro" },
      { property: "og:description", content: "Smart hiring solutions for the modern workforce." },
      { property: "og:image", content: servicesHero },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Users, name: "Talent as a Service", short: "TaaS", desc: "Flexible, scalable, deployment-ready talent — contract staffing, augmentation, project-based hiring.", accent: "from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)]" },
  { icon: Briefcase, name: "Recruitment as a Service", short: "RaaS", desc: "Intelligent recruitment from sourcing to onboarding. Industry-focused experts build high-performing teams.", accent: "from-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)]" },
  { icon: GraduationCap, name: "Campus Hiring", short: "CaaS", desc: "Connect campuses with opportunities through smart engagement, assessments, and placement-driven hiring.", accent: "from-[oklch(0.71_0.16_162)] to-[oklch(0.55_0.22_264)]" },
  { icon: Target, name: "Placement Services", short: "PaaS", desc: "Modern placement ecosystem improving employability and career outcomes for institutions and students.", accent: "from-[oklch(0.55_0.22_264)] to-[oklch(0.65_0.2_320)]" },
  { icon: TrendingUp, name: "Career Services", short: "CS", desc: "Personalized guidance, smart opportunities, and continuous growth for freshers and experienced talent.", accent: "from-[oklch(0.65_0.2_320)] to-[oklch(0.72_0.14_211)]" },
  { icon: Globe2, name: "Event Services", short: "EaaS", desc: "Hiring events, job drives, hackathons, and recruitment campaigns — seamless end-to-end execution.", accent: "from-[oklch(0.72_0.14_211)] to-[oklch(0.55_0.22_264)]" },
  { icon: BarChart3, name: "Assessments", short: "AaaS", desc: "Intelligent assessments evaluating skills, capabilities, and job readiness accurately.", accent: "from-[oklch(0.71_0.16_162)] to-[oklch(0.72_0.14_211)]" },
  { icon: Workflow, name: "Train & Deploy", short: "TDaaS", desc: "Job-ready talent customized to your business. Reduce hiring risk and onboard contributors from day one.", accent: "from-[oklch(0.55_0.22_264)] to-[oklch(0.71_0.16_162)]" },
  { icon: Shield, name: "Background Verification", short: "BGVaaS", desc: "Fast, reliable, compliant background verification ensuring workforce integrity and trust.", accent: "from-[oklch(0.65_0.2_320)] to-[oklch(0.55_0.22_264)]" },
  { icon: Award, name: "Training", short: "TraaS", desc: "Industry-focused programs bridging skill gaps with expert-led tech, soft-skill, and career readiness training.", accent: "from-[oklch(0.72_0.14_211)] to-[oklch(0.65_0.2_320)]" },
];

function ServicesPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-deep-bg text-white">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={servicesHero}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.08_264)]/95 via-[oklch(0.18_0.08_264)]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.08_264)] via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="blob top-0 -left-20 h-96 w-96 bg-[oklch(0.55_0.22_264)]" />
        <div className="blob -bottom-20 right-1/4 h-96 w-96 bg-[oklch(0.71_0.16_162)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-28 lg:py-40">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium border border-white/10">
                <Sparkles className="h-3.5 w-3.5 text-[oklch(0.85_0.15_180)]" />
                Our Services
              </span>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
                Smart hiring solutions <br />
                <span className="text-gradient-light">for the modern workforce.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg text-white/75 leading-relaxed">
                From talent and recruitment to placement, training, and verification —
                ten flexible service models engineered around your outcomes.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton variant="primary">
                  Explore services <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <CTAButton variant="ghost" className="!bg-white/5 !border-white/15 !text-white hover:!bg-white/10">
                  Talk to an expert
                </CTAButton>
              </div>

              {/* mini stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
                {[
                  { v: "10+", l: "Service models" },
                  { v: "500+", l: "Enterprise clients" },
                  { v: "95%", l: "Client retention" },
                ].map((s, i) => (
                  <motion.div
                    key={s.l}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  >
                    <div className="text-3xl font-extrabold text-gradient-light">{s.v}</div>
                    <div className="mt-1 text-xs text-white/60 uppercase tracking-wider">{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* curved divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* CARDS */}
      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full gradient-accent-bg animate-glow-pulse" />
              Complete Service Suite
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Built for every <span className="text-gradient">hiring challenge.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Pick a single capability or compose a full ecosystem — every service is modular, measurable, and outcome-driven.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.06}>
          {services.map(({ icon: Icon, name, short, desc, accent }, idx) => (
            <motion.div
              key={name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative rounded-3xl bg-surface border border-border p-7 overflow-hidden cursor-pointer"
            >
              {/* gradient border on hover */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${accent} p-[1.5px]`}>
                <div className="h-full w-full rounded-3xl bg-surface" />
              </div>

              {/* glow blob */}
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-3xl group-hover:opacity-40 group-hover:scale-125 transition-all duration-700`} />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-[var(--shadow-glow)] group-hover:shadow-[var(--shadow-glow-cyan)] transition-shadow`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <span className="text-[10px] font-bold tracking-widest text-muted-foreground/60 bg-background/50 border border-border rounded-full px-2.5 py-1">
                    {short}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold leading-tight group-hover:text-gradient transition-all">
                  {name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>

                <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">0{idx + 1} / {String(services.length).padStart(2, "0")}</span>
                  <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal direction="scale">
          <div className="relative rounded-[2rem] gradient-hero-bg p-12 lg:p-16 text-white text-center overflow-hidden">
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <div className="blob top-0 left-1/4 h-72 w-72 bg-[oklch(0.71_0.16_162)]" />
            <div className="blob bottom-0 right-1/4 h-72 w-72 bg-[oklch(0.55_0.22_264)]" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Not sure which service fits? <span className="text-gradient-light">Let's talk.</span>
              </h2>
              <p className="mt-5 text-white/70 max-w-xl mx-auto">
                Our team will design a tailored hiring strategy for your goals — no commitment required.
              </p>
              <div className="mt-8 flex justify-center">
                <CTAButton variant="primary">
                  Talk to an expert <ArrowRight className="h-4 w-4" />
                </CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </SiteLayout>
  );
}
