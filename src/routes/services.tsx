import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/features/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Talent, Recruitment & Workforce | G Talent Pro" },
      { name: "description", content: "Talent, Recruitment, Campus Hiring, Placement, Career, Events, Assessments, Train & Deploy, BGV, and Training — flexible models built around outcomes." },
      { property: "og:title", content: "Services — G Talent Pro" },
      { property: "og:description", content: "Smart hiring solutions for the modern workforce." },
    ],
  }),
  component: ServicesPage,
});
