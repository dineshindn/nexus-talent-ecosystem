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

export type ServicePageItem = {
  icon: IconComponent;
  name: string;
  code: string;
  desc: string;
  grad: string;
};

export const services: ServicePageItem[] = [
  {
    icon: Users,
    name: "Talent as a Service",
    code: "TaaS",
    desc: "Flexible, scalable, deployment-ready talent — contract staffing, augmentation, and project-based hiring.",
    grad: "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.72 0.14 211))",
  },
  {
    icon: Briefcase,
    name: "Recruitment as a Service",
    code: "RaaS",
    desc: "Intelligent recruitment from sourcing to onboarding. Industry-focused experts build high-performing teams.",
    grad: "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.72 0.14 211))",
  },
  {
    icon: GraduationCap,
    name: "Campus Hiring",
    code: "CaaS",
    desc: "Connect campuses with opportunities through smart engagement, assessments, and placement-driven hiring.",
    grad: "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.71 0.16 162))",
  },
  {
    icon: Target,
    name: "Placement Services",
    code: "PaaS",
    desc: "Modern placement ecosystem improving employability and career outcomes for institutions and students.",
    grad: "linear-gradient(135deg, oklch(0.45 0.25 305), oklch(0.55 0.22 264))",
  },
  {
    icon: TrendingUp,
    name: "Career Services",
    code: "CS",
    desc: "Personalized guidance, smart opportunities, and continuous growth for freshers and experienced talent.",
    grad: "linear-gradient(135deg, oklch(0.50 0.28 310), oklch(0.45 0.25 305))",
  },
  {
    icon: Globe2,
    name: "Event Services",
    code: "EaaS",
    desc: "Hiring events, job drives, hackathons, and recruitment campaigns — seamless end-to-end execution.",
    grad: "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.72 0.14 211))",
  },
  {
    icon: BarChart3,
    name: "Assessments",
    code: "AaaS",
    desc: "Intelligent assessments evaluating skills, capabilities, and job-readiness accurately and at scale.",
    grad: "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.55 0.22 264))",
  },
  {
    icon: Workflow,
    name: "Train & Deploy",
    code: "TDaaS",
    desc: "Job-ready talent customized to your business. Reduce hiring risk and onboard contributors from day one.",
    grad: "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.72 0.14 211))",
  },
  {
    icon: Shield,
    name: "Background Verification",
    code: "BGVaaS",
    desc: "Fast, reliable, compliant background verification ensuring workforce integrity and trust at every level.",
    grad: "linear-gradient(135deg, oklch(0.45 0.25 305), oklch(0.38 0.17 264))",
  },
  {
    icon: Award,
    name: "Training",
    code: "TraaS",
    desc: "Industry-focused programs bridging skill gaps with expert-led tech, soft-skill, and career readiness training.",
    grad: "linear-gradient(135deg, oklch(0.71 0.16 162), oklch(0.72 0.14 211))",
  },
];

export const bannerStats = [
  { value: "10+",  label: "Service Models" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "95%",  label: "Client Retention" },
];
