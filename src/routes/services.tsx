import { createFileRoute } from "@tanstack/react-router";
import { Users, Briefcase, GraduationCap, Target, TrendingUp, Globe2, BarChart3, Workflow, Shield, Award, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionHeader, CTAButton } from "@/components/site/primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Talent, Recruitment & Workforce | G Talent Pro" },
      { name: "description", content: "Talent, Recruitment, Campus Hiring, Placement, Career, Events, Assessments, Train & Deploy, BGV, and Training — flexible models built around outcomes." },
      { property: "og:title", content: "Services — G Talent Pro" },
      { property: "og:description", content: "Smart hiring solutions for the modern workforce." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Users, name: "Talent as a Service (TaaS)", desc: "Flexible, scalable, deployment-ready talent — contract staffing, augmentation, project-based hiring." },
  { icon: Briefcase, name: "Recruitment as a Service (RaaS)", desc: "Intelligent recruitment from sourcing to onboarding. Industry-focused experts build high-performing teams." },
  { icon: GraduationCap, name: "Campus Hiring (CaaS)", desc: "Connect campuses with opportunities through smart engagement, assessments, and placement-driven hiring." },
  { icon: Target, name: "Placement Services (PaaS)", desc: "Modern placement ecosystem improving employability and career outcomes for institutions and students." },
  { icon: TrendingUp, name: "Career Services", desc: "Personalized guidance, smart opportunities, and continuous growth for freshers and experienced talent." },
  { icon: Globe2, name: "Event Services (EaaS)", desc: "Hiring events, job drives, hackathons, and recruitment campaigns — seamless end-to-end execution." },
  { icon: BarChart3, name: "Assessments (AaaS)", desc: "Intelligent assessments evaluating skills, capabilities, and job readiness accurately." },
  { icon: Workflow, name: "Train & Deploy (TDaaS)", desc: "Job-ready talent customized to your business. Reduce hiring risk and onboard contributors from day one." },
  { icon: Shield, name: "Background Verification (BGVaaS)", desc: "Fast, reliable, compliant background verification ensuring workforce integrity and trust." },
  { icon: Award, name: "Training (TraaS)", desc: "Industry-focused programs bridging skill gaps with expert-led tech, soft-skill, and career readiness training." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-deep-bg text-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="blob top-0 -left-20 h-96 w-96 bg-[oklch(0.55_0.22_264)]" />
        <div className="blob -bottom-20 -right-20 h-96 w-96 bg-[oklch(0.71_0.16_162)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">Our Services</span>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Smart hiring solutions <span className="text-gradient-light">for the modern workforce.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75">
              From talent and recruitment to placement, training, and verification —
              flexible models designed around your outcomes.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="group relative rounded-3xl bg-surface border border-border p-8 glow-hover overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)] opacity-10 blur-3xl group-hover:opacity-30 transition-opacity" />
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] gradient-hero-bg p-12 lg:p-16 text-white text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Not sure which service fits? <span className="text-gradient-light">Let's talk.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <CTAButton variant="primary">Talk to an expert <ArrowRight className="h-4 w-4" /></CTAButton>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
