import { Users, GraduationCap, Building2 } from "lucide-react";
import type { IconComponent } from "@/types";

export type EcosystemItem = {
  icon: IconComponent;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  color: string;
  grad: string;
};

export const ecosystem: EcosystemItem[] = [
  {
    icon: Users,
    tag: "Connected Talent",
    title: "One Platform. Unlimited Talent Possibilities.",
    desc: "Access a verified network across freshers, professionals, freelancers, contract and executive talent.",
    bullets: ["AI Resume Builder", "ATS Scoring", "Interview Prep", "Career Consulting"],
    color: "oklch(0.71 0.16 162)",
    grad: "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.72 0.14 211))",
  },
  {
    icon: GraduationCap,
    tag: "Connected Campus",
    title: "Future-Ready Campus Talent Hubs",
    desc: "Connected placement ecosystem unlocking student opportunity across PAN India.",
    bullets: ["PAN India Access", "Smart Placement Ops", "Industry-Aligned Hiring", "Engagement Programs"],
    color: "oklch(0.55 0.22 264)",
    grad: "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.72 0.14 211))",
  },
  {
    icon: Building2,
    tag: "Connected Employer",
    title: "Hiring Without Boundaries",
    desc: "Global employer network designed for speed, scalability, and workforce transformation.",
    bullets: ["Global Network", "Faster Acquisition", "Flexible Workforce", "Scalable Models"],
    color: "oklch(0.38 0.17 264)",
    grad: "linear-gradient(135deg, oklch(0.38 0.17 264), oklch(0.71 0.16 162))",
  },
];
