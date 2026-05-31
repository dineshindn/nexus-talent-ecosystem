import { Sparkles, Target, Heart, Rocket } from "lucide-react";
import type { IconComponent } from "@/types";

export type ValueItem = {
  icon: IconComponent;
  t: string;
  d: string;
};

export type TimelineItem = {
  y: string;
  t: string;
  d: string;
};

export const values: ValueItem[] = [
  { icon: Sparkles, t: "Intelligence first", d: "Every workflow powered by smart, explainable AI." },
  { icon: Heart,    t: "Human at the core",  d: "Technology amplifies people — never replaces them." },
  { icon: Target,   t: "Outcome-driven",     d: "Measured in real hires, real placements, real careers." },
  { icon: Rocket,   t: "Built to scale",     d: "From startup to enterprise — one connected platform." },
];

export const timeline: TimelineItem[] = [
  { y: "2022", t: "The vision",         d: "G Talent Pro is founded with a mission to humanize recruitment with AI." },
  { y: "2023", t: "First 1,000 hires",  d: "Launched the matching engine; partnered with leading enterprises." },
  { y: "2024", t: "Campus ecosystem",   d: "Rolled out PAN India campus placement workflows." },
  { y: "2025", t: "AI intelligence",    d: "Released ATS optimizer, resume builder, and interview prep suite." },
  { y: "2026", t: "Connected ecosystem",d: "Unified employers, campuses, and talent in one platform." },
];
