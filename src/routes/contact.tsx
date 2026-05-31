import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/features/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — G Talent Pro" },
      { name: "description", content: "Talk to our team. Email, visit, or send us a message — we reply within 24 hours." },
      { property: "og:title", content: "Contact G Talent Pro" },
      { property: "og:description", content: "Let's connect — our team replies within 24 hours." },
    ],
  }),
  component: ContactPage,
});
