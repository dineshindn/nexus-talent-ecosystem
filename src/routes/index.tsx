import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Brain, Users, Building2, GraduationCap,
  Briefcase, Target, Award, TrendingUp, Shield, Zap, BarChart3,
  CheckCircle2, FileText, Search, ChevronDown, Star, Globe2, Workflow,
  UserPlus, Sparkles, Send, Rocket,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionHeader, EyebrowChip, CTAButton } from "@/components/site/primitives";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { Reveal, RevealStagger, staggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G Talent Pro — Powering the Future of Talent & Opportunity" },
      { name: "description", content: "AI-powered talent ecosystem connecting employers, campuses, and professionals. Smart hiring, intelligent matching, and career growth — built for the modern workforce." },
      { property: "og:title", content: "G Talent Pro — Powering the Future of Talent & Opportunity" },
      { property: "og:description", content: "AI-driven recruitment platform built for employers, campuses & professionals." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Users, name: "Talent as a Service", desc: "Scalable, deployment-ready talent for agile teams." },
  { icon: Briefcase, name: "Recruitment as a Service", desc: "Intelligent sourcing-to-onboarding that ships faster." },
  { icon: GraduationCap, name: "Campus Hiring", desc: "Discover next-gen talent through smart campus engagement." },
  { icon: Target, name: "Placement Services", desc: "Modern ecosystem improving employability outcomes." },
  { icon: TrendingUp, name: "Career Services", desc: "Personalized guidance for life-changing careers." },
  { icon: Globe2, name: "Event Services", desc: "Hiring drives, fairs, hackathons end-to-end." },
  { icon: BarChart3, name: "Assessments", desc: "Evaluate skills, capability, and job readiness accurately." },
  { icon: Workflow, name: "Train & Deploy", desc: "Job-ready talent customised to your stack." },
  { icon: Shield, name: "Background Verification", desc: "Compliant, fast, and trusted BGV workflows." },
  { icon: Award, name: "Training Services", desc: "Industry-aligned upskilling and career readiness." },
];

const ecosystem = [
  {
    icon: Users, tag: "Connected Talent", title: "One Platform. Unlimited Talent Possibilities.",
    desc: "Access a verified network across freshers, professionals, freelancers, contract and executive talent.",
    bullets: ["AI Resume Builder", "ATS Scoring", "Interview Prep", "Career Consulting"],
    accent: "from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)]",
  },
  {
    icon: GraduationCap, tag: "Connected Campus", title: "Future-Ready Campus Talent Hubs",
    desc: "Connected placement ecosystem unlocking student opportunity across PAN India.",
    bullets: ["PAN India Access", "Smart Placement Ops", "Industry-Aligned Hiring", "Engagement Programs"],
    accent: "from-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)]",
  },
  {
    icon: Building2, tag: "Connected Employer", title: "Hiring Without Boundaries",
    desc: "Global employer network designed for speed, scalability, and workforce transformation.",
    bullets: ["Global Network", "Faster Acquisition", "Flexible Workforce", "Scalable Models"],
    accent: "from-[oklch(0.71_0.16_162)] to-[oklch(0.55_0.22_264)]",
  },
];

const aiFeatures = [
  { icon: Brain, t: "Intelligent Talent Recommendations" },
  { icon: FileText, t: "ATS & Resume Optimization" },
  { icon: Target, t: "Smart Candidate Matching" },
  { icon: Award, t: "Skill-Based Hiring Intelligence" },
  { icon: Zap, t: "Faster Screening & Shortlisting" },
  { icon: BarChart3, t: "Data-Driven Hiring Decisions" },
];

const steps = [
  { n: "01", t: "Create Smart Profile", d: "Upload resume, showcase skills, experience, and career goals.", icon: UserPlus },
  { n: "02", t: "Get AI Insights", d: "Receive matching jobs, skill suggestions, profile enhancements.", icon: Sparkles },
  { n: "03", t: "Connect Employers", d: "Apply to verified employers and become visible to hiring teams.", icon: Send },
  { n: "04", t: "Get Hired & Grow", d: "Track interviews, get updates, and grow your career.", icon: Rocket },
];

const stats = [
  { v: "8,400+", l: "Companies" },
  { v: "200K+", l: "Active Talent" },
  { v: "1,200+", l: "Campuses" },
  { v: "20+", l: "Industries" },
];

const testimonials = [
  { quote: "G Talent Pro cut our time-to-hire by 47%. The AI matching is genuinely intelligent.", name: "Priya Menon", role: "VP Talent, Fintech Co" },
  { quote: "Our placement ratio jumped 32% after onboarding. The campus dashboard is brilliant.", name: "Dr. Arjun Rao", role: "Placement Director" },
  { quote: "Finally — a career platform that feels built for ambitious professionals.", name: "Karthik S.", role: "Senior Engineer" },
];

const faqs = [
  { q: "What makes G Talent Pro different?", a: "We unify employers, campuses, and talent into one AI-powered ecosystem — replacing fragmented tools with intelligent workflows that drive measurable hiring outcomes." },
  { q: "How does AI matching work?", a: "Our models evaluate skills, context, experience, and intent beyond keywords — surfacing candidates that truly fit role and culture, with explainable recommendations." },
  { q: "Do you support campus placements?", a: "Yes. PAN India campus access, student profiling, placement workflows, employer engagement programs, and analytics for placement officers and deans." },
  { q: "Is there a free tier for job seekers?", a: "Absolutely. Talent gets free access to AI Resume Builder, ATS Scoring, Interview Prep, and curated opportunities." },
];

function Home() {
  return (
    <SiteLayout>
      <HeroCarousel />
      <TrustedStrip />
      <AIIntelligence />
      <Ecosystem />
      <Services />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </SiteLayout>
  );
}


function TrustedStrip() {
  const logos = ["Microsoft", "Infosys", "Deloitte", "Accenture", "TCS", "Cognizant", "Wipro", "HCL", "Capgemini"];
  return (
    <div className="border-y border-border bg-surface-2/60 py-10 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
        Trusted by 8,400+ companies worldwide
      </p>
      <div className="relative">
        <div className="flex animate-marquee gap-16 w-max">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="text-xl font-display font-bold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AIIntelligence() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <EyebrowChip>AI Talent Intelligence</EyebrowChip>
          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Smarter hiring starts with <span className="text-gradient">intelligent talent insights.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Move beyond traditional recruitment. Our platform leverages intelligent
            recommendations, resume analytics, ATS optimization, and smart matching
            to identify the right talent with speed and precision.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton variant="primary" as={Link} to="/employers">
              For Employers <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <CTAButton variant="ghost" as={Link} to="/talent">For Talent</CTAButton>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {aiFeatures.map(({ icon: Icon, t }, i) => (
            <div
              key={t}
              className="gradient-border p-6 glow-hover"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <p className="mt-4 text-sm font-semibold text-foreground leading-tight">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Ecosystem() {
  return (
    <Section className="bg-surface-2/50">
      <SectionHeader
        eyebrow="Connected Talent Ecosystem"
        title={<>One ecosystem. <span className="text-gradient">Three powerful experiences.</span></>}
        subtitle="We don't just help organizations hire — we help them build future-ready teams faster, smarter, and more effectively."
      />
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {ecosystem.map(({ icon: Icon, tag, title, desc, bullets, accent }) => (
          <div key={tag} className="group relative rounded-3xl bg-surface border border-border p-8 glow-hover overflow-hidden">
            <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
            <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-[var(--shadow-glow)]`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{tag}</div>
            <h3 className="mt-2 text-xl font-bold text-foreground leading-snug">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <ul className="mt-5 space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-[oklch(0.71_0.16_162)]" /> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Services"
        title={<>Smart hiring solutions <span className="text-gradient">for the modern workforce.</span></>}
        subtitle="Flexible models built around outcomes — from talent and recruitment to placement, training, and verification."
      />
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {services.map(({ icon: Icon, name, desc }) => (
          <div key={name} className="group rounded-2xl bg-surface border border-border p-6 glow-hover">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)] flex items-center justify-center text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-foreground">{name}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
              Learn more <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <CTAButton variant="ghost" as={Link} to="/services">
          View all services <ArrowRight className="h-4 w-4" />
        </CTAButton>
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section className="bg-surface-2/50">
      <SectionHeader
        eyebrow="How It Works"
        title={<>Your career journey <span className="text-gradient">in 4 simple steps.</span></>}
      />
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.n} className="relative">
            <div className="rounded-3xl bg-surface border border-border p-7 h-full glow-hover">
              <div className="text-5xl font-display font-extrabold text-gradient">{s.n}</div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 h-px w-8 bg-gradient-to-r from-border to-transparent" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Stats() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] gradient-deep-bg p-12 lg:p-16 text-white">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="blob top-0 right-0 h-72 w-72 bg-[oklch(0.72_0.14_211)]" />
        <div className="relative grid md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="text-5xl lg:text-6xl font-display font-extrabold text-gradient-light">{s.v}</div>
              <div className="mt-2 text-sm text-white/70 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section className="bg-surface-2/50">
      <SectionHeader
        eyebrow="Loved by teams"
        title={<>Built for ambitious <span className="text-gradient">people & companies.</span></>}
      />
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-3xl bg-surface border border-border p-8 glow-hover">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[oklch(0.72_0.14_211)] text-[oklch(0.72_0.14_211)]" />
              ))}
            </div>
            <p className="mt-5 text-base text-foreground leading-relaxed">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full gradient-accent-bg flex items-center justify-center text-white font-bold">
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <EyebrowChip>FAQ</EyebrowChip>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight">
            Questions? <span className="text-gradient">We've got you.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Can't find an answer? Reach out — our team replies within 24 hours.
          </p>
          <CTAButton variant="ghost" as={Link} to="/contact" className="mt-6">
            Contact us <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </div>
        <div className="lg:col-span-8 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-border bg-surface overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-semibold text-foreground">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed -mt-2">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function CTABanner() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] gradient-hero-bg p-12 lg:p-20 text-center text-white">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="blob -top-20 -left-20 h-80 w-80 bg-[oklch(0.71_0.16_162)]" />
        <div className="blob -bottom-20 -right-20 h-80 w-80 bg-[oklch(0.72_0.14_211)]" />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Ready to transform how you <span className="text-gradient-light">hire and grow?</span>
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Join 8,400+ companies and 200K+ professionals building the future of work on G Talent Pro.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton variant="primary">Get Started Free <ArrowRight className="h-4 w-4" /></CTAButton>
            <button className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition">
              <Search className="h-4 w-4" /> Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
