import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/features/privacy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | G Talent Pro" },
      { name: "description", content: "Learn how G Talent Pro collects, uses, and protects your personal information. Privacy Policy for G Talent Pro — a registered trademark of SK Labs." },
      { property: "og:title", content: "Privacy Policy | G Talent Pro" },
      { property: "og:description", content: "How G Talent Pro handles and protects your personal data." },
    ],
  }),
  component: PrivacyPage,
});
