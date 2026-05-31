import {
  Brain, Workflow, BarChart3, Users, Zap,
  TrendingDown, Share2, Clock, LineChart,
} from "lucide-react";
import type { IconComponent } from "@/types";

export type ReasonItem = {
  icon: IconComponent;
  t: string;
  d: string;
};

export const reasons: ReasonItem[] = [
  {
    icon: Brain,
    t: "AI-powered talent discovery and recommendations",
    d: "Smart AI recommendations across freshers, professionals, campus talent, and specialized workforce pools — matched to your exact requirements.",
  },
  {
    icon: Workflow,
    t: "Centralized Vendor & Recruitment Agency Management",
    d: "Unify all staffing partners, agencies, and freelancers in one intelligent workspace with full visibility and control.",
  },
  {
    icon: BarChart3,
    t: "Unified hiring insights across all workforce channels",
    d: "Complete visibility across internal teams, vendors, campus pipelines, and contingent workforce from a single intelligent dashboard.",
  },
  {
    icon: Users,
    t: "Access verified professionals, freshers, and campus talent",
    d: "Tap into a diverse, verified talent network spanning all experience levels, industries, and education backgrounds.",
  },
  {
    icon: Zap,
    t: "Faster screening and intelligent candidate shortlisting",
    d: "AI shortlisting reduces screening effort by up to 70% with bias-aware recommendations and smart priority queuing.",
  },
  {
    icon: TrendingDown,
    t: "Reduce overall recruitment and resourcing costs",
    d: "Optimize spend with intelligent vendor performance analytics, smart procurement, and data-driven hiring decisions.",
  },
  {
    icon: Share2,
    t: "Streamline collaboration between internal teams and vendors",
    d: "One workspace for hiring managers, HR, and external partners to collaborate, review, and act in real-time.",
  },
  {
    icon: Clock,
    t: "Improve hiring efficiency and accelerate time-to-hire",
    d: "Automate workflows, eliminate repetitive tasks, and reduce administrative overhead for faster offer closures.",
  },
  {
    icon: LineChart,
    t: "Scale hiring with intelligent workforce analytics",
    d: "Data-driven insights to plan, forecast, and scale your workforce with confidence across all hiring channels.",
  },
];
