import { createFileRoute } from "@tanstack/react-router";
import { EmployersPage } from "@/features/employers";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "For Employers — Hire Smarter | G Talent Pro" },
      { name: "description", content: "AI-powered talent intelligence for employers. Centralized vendor management, smart matching, and unified hiring insights." },
      { property: "og:title", content: "For Employers — G Talent Pro" },
      { property: "og:description", content: "Hire smarter with AI-powered talent intelligence." },
    ],
  }),
  component: EmployersPage,
});
