import { createFileRoute } from "@tanstack/react-router";
import { TalentPage } from "@/features/talent";

export const Route = createFileRoute("/talent")({
  head: () => ({
    meta: [
      { title: "For Talent — Build Your Career | G Talent Pro" },
      { name: "description", content: "AI Resume Builder, ATS Score Checker, Interview Prep, and curated opportunities for ambitious professionals." },
      { property: "og:title", content: "For Talent — G Talent Pro" },
      { property: "og:description", content: "Career growth tools and verified opportunities, powered by AI." },
    ],
  }),
  component: TalentPage,
});
