import {
  Users,
  Briefcase,
  GraduationCap,
  Target,
  TrendingUp,
  Globe2,
  BarChart3,
  Workflow,
  Shield,
  Award,
} from "lucide-react";
import type { IconComponent } from "@/types";

export type ServiceItem = {
  icon: IconComponent;
  name: string;
  desc: string;
};

export const services: ServiceItem[] = [
  { icon: Users,         name: "Talent as a Service",      desc: "Scalable, deployment-ready talent for agile teams." },
  { icon: Briefcase,     name: "Recruitment as a Service",  desc: "Intelligent sourcing-to-onboarding that ships faster." },
  { icon: GraduationCap, name: "Campus Hiring",             desc: "Discover next-gen talent through smart campus engagement." },
  { icon: Target,        name: "Placement Services",        desc: "Modern ecosystem improving employability outcomes." },
  { icon: TrendingUp,    name: "Career Services",           desc: "Personalized guidance for life-changing careers." },
  { icon: Globe2,        name: "Event Services",            desc: "Hiring drives, fairs, hackathons end-to-end." },
  { icon: BarChart3,     name: "Assessments",               desc: "Evaluate skills, capability, and job readiness accurately." },
  { icon: Workflow,      name: "Train & Deploy",            desc: "Job-ready talent customised to your stack." },
  { icon: Shield,        name: "Background Verification",   desc: "Compliant, fast, and trusted BGV workflows." },
  { icon: Award,         name: "Training Services",         desc: "Industry-aligned upskilling and career readiness." },
];
