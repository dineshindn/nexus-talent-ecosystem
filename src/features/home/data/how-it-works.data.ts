import { UserCircle2, Sparkles, Building2, TrendingUp } from "lucide-react";
import type { StepItem } from "@/features/home/types/how-it-works.types";

export const stepsData: StepItem[] = [
  {
    n: "01",
    icon: UserCircle2,
    t: "Create Smart Profile",
    d: "Upload your resume and let AI showcase your skills, experience, and career goals in minutes.",
    tag: "2 min",
    accent: "#10b981",
  },
  {
    n: "02",
    icon: Sparkles,
    t: "Get AI Insights",
    d: "Receive personalized job matches, skill recommendations, and profile enhancements tailored to you.",
    tag: "Instant",
    accent: "#3b82f6",
  },
  {
    n: "03",
    icon: Building2,
    t: "Connect Employers",
    d: "Apply to verified employers and become visible to hiring teams at 8,400+ companies.",
    tag: "1-Click",
    accent: "#8b5cf6",
  },
  {
    n: "04",
    icon: TrendingUp,
    t: "Get Hired & Grow",
    d: "Track interviews, receive offers, and grow your career with continuous AI guidance.",
    tag: "Real-time",
    accent: "#f59e0b",
  },
];
