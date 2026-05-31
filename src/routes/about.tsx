import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/features/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Humanizing Recruitment with AI | G Talent Pro" },
      { name: "description", content: "G Talent Pro builds the AI-powered ecosystem connecting employers, campuses and professionals — humanizing recruitment at scale." },
      { property: "og:title", content: "About G Talent Pro" },
      { property: "og:description", content: "Humanizing recruitment with artificial intelligence." },
    ],
  }),
  component: AboutPage,
});
