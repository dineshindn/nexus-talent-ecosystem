import { FileText, Target, MessageSquare, Linkedin, LayoutDashboard, Search } from "lucide-react";
import type { IconComponent } from "@/types";

export type ToolItem = {
  icon: IconComponent;
  t: string;
  d: string;
};

export const tools: ToolItem[] = [
  { icon: FileText,       t: "AI Resume Builder",   d: "Craft stunning, ATS-friendly resumes in minutes." },
  { icon: Target,         t: "ATS Score Checker",   d: "Know your match score and optimize before applying." },
  { icon: MessageSquare,  t: "Interview Prep",       d: "AI mock interviews with personalized feedback." },
  { icon: Linkedin,       t: "LinkedIn Optimizer",  d: "Get discovered by top recruiters and employers." },
  { icon: LayoutDashboard,t: "Career Dashboard",    d: "Track applications, interviews, and growth in one place." },
  { icon: Search,         t: "Smart Job Matches",   d: "Curated opportunities aligned to your goals." },
];
