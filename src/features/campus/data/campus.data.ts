import {
  Building2, TrendingUp, Target, LayoutDashboard, Sparkles,
  Handshake, BarChart3, GraduationCap, Share2, Globe2,
} from "lucide-react";
import type { IconComponent } from "@/types";

export type AdvantageItem = {
  icon: IconComponent;
  t: string;
  d: string;
};

export const advantages: AdvantageItem[] = [
  {
    icon: Building2,
    t: "Connect directly with verified employers and recruiters",
    d: "Access a curated network of 8,400+ verified hiring organizations across industries looking for campus talent.",
  },
  {
    icon: TrendingUp,
    t: "Increase placement ratios with smarter talent visibility",
    d: "AI-powered student profiles surface the right candidates to the right recruiters — automatically and at scale.",
  },
  {
    icon: Target,
    t: "Create industry-focused training and hiring demand",
    d: "Align curriculum and training programs with real-time employer demand signals to close the skill gap faster.",
  },
  {
    icon: LayoutDashboard,
    t: "Simplify campus placement coordination and reporting",
    d: "Manage drives, assessments, offer letters, and reporting from a single, intuitive placement dashboard.",
  },
  {
    icon: Sparkles,
    t: "AI-powered student profiling and skill recommendations",
    d: "Automatically map student strengths, identify skill gaps, and recommend personalized career pathways.",
  },
  {
    icon: Handshake,
    t: "Strengthen employer engagement and campus partnerships",
    d: "Build long-term industry relationships with structured engagement tools, event management, and follow-up workflows.",
  },
  {
    icon: BarChart3,
    t: "Centralized placement insights and hiring analytics",
    d: "Track placement rates, package trends, employer reach, and student readiness through intelligent dashboards.",
  },
  {
    icon: GraduationCap,
    t: "Improve student career readiness and employability",
    d: "Equip students with AI resume tools, interview prep, ATS scoring, and personalized job match recommendations.",
  },
  {
    icon: Share2,
    t: "Enable seamless collaboration between campuses and industry",
    d: "Bridge the gap between placement teams and recruiters with shared pipelines, real-time communication, and workflows.",
  },
  {
    icon: Globe2,
    t: "Build a future-ready campus hiring ecosystem",
    d: "Create a scalable, data-driven placement operation that grows stronger with every hire, every cohort, every year.",
  },
];
