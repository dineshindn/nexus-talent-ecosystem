import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "@/features/terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | G Talent Pro" },
      { name: "description", content: "Read the Terms of Service, Payment Gateway Terms, Shipping & Delivery, and Return Policy for G Talent Pro — a registered trademark of SK Labs." },
      { property: "og:title", content: "Terms & Conditions | G Talent Pro" },
      { property: "og:description", content: "Terms of Service, Payment Terms, Shipping and Return Policy for G Talent Pro." },
    ],
  }),
  component: TermsPage,
});
