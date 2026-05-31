import { createFileRoute } from "@tanstack/react-router";
import { CampusPage } from "@/features/campus";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "For Campus — Placement Ecosystem | G Talent Pro" },
      { name: "description", content: "Transform campus placements with AI-powered student profiling, employer connectivity, and centralized placement insights." },
      { property: "og:title", content: "For Campus — G Talent Pro" },
      { property: "og:description", content: "Industry-connected placement ecosystem for campuses." },
    ],
  }),
  component: CampusPage,
});
