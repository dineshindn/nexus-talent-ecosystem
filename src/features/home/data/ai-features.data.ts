import { Brain, FileText, Target, Award, Zap, BarChart3 } from "lucide-react";
import type { IconComponent } from "@/types";

export type AiFeatureItem = {
  icon: IconComponent;
  t: string;
};

export const aiFeatures: AiFeatureItem[] = [
  { icon: Brain,     t: "Intelligent Talent Recommendations" },
  { icon: FileText,  t: "ATS & Resume Optimization" },
  { icon: Target,    t: "Smart Candidate Matching" },
  { icon: Award,     t: "Skill-Based Hiring Intelligence" },
  { icon: Zap,       t: "Faster Screening & Shortlisting" },
  { icon: BarChart3, t: "Data-Driven Hiring Decisions" },
];
