import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/features/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G Talent Pro — Powering the Future of Talent & Opportunity" },
      {
        name: "description",
        content:
          "AI-powered talent ecosystem connecting employers, campuses, and professionals. Smart hiring, intelligent matching, and career growth — built for the modern workforce.",
      },
    ],
  }),
  component: HomePage,
});
