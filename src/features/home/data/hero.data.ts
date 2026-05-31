import type { HeroSlide } from "@/features/home/types/hero.types";
import banner1 from "@/assets/banner-1.jpg";
import banner2 from "@/assets/banner-2.jpg";
import banner3 from "@/assets/banner-3.jpg";

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Connected Global Network",
    title: ["One platform.", "Unlimited reach."],
    desc: "Tap into 200K+ verified professionals, 1,200+ campuses, and a worldwide employer network — all unified by a single intelligent talent graph.",
    cta1: "Join the Network",
    cta2: "Talk to Sales",
    tag: "employers",
    image: banner1,
    stats: [
      { label: "Global Reach", value: "96.4%" },
      { label: "Hires this week", value: "+128" },
    ],
  },
  {
    eyebrow: "Career Intelligence Platform",
    title: ["Your Dream Career.", "Starts Here."],
    desc: "Personalized AI recommendations, resume optimization, and direct connections to 8,400+ verified companies. Your next opportunity is waiting.",
    cta1: "Build Your Profile",
    cta2: "Browse Jobs",
    tag: "talent",
    image: banner2,
    stats: [
      { label: "AI Match Score", value: "94%" },
      { label: "Jobs Matched", value: "2.4K+" },
    ],
  },
  {
    eyebrow: "Campus Placement Hub",
    title: ["Elevate Campus", "Placements."],
    desc: "Smart placement operations for 1,200+ campuses across India. AI-powered analytics, employer engagement, and student career readiness — all in one.",
    cta1: "For Institutions",
    cta2: "View Campus Portal",
    tag: "campus",
    image: banner3,
    stats: [
      { label: "Placement Rate", value: "89%" },
      { label: "Active Campuses", value: "1,200+" },
    ],
  },
];
