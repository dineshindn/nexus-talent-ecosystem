import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock, Send, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, EyebrowChip, CTAButton } from "@/components/site/primitives";

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

function ContactPage() {
  return (
    <SiteLayout>
      <Section className="pt-24">
        <div className="text-center max-w-2xl mx-auto">
          <EyebrowChip>Contact Us</EyebrowChip>
          <h1 className="mt-5 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Let's <span className="text-gradient">connect.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Fill the form — our team replies within 24 hours.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <aside className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, t: "Email Us", d: "info@gtalentpro.com", s: "Our friendly team is here to help." },
              { icon: MapPin, t: "Visit Us", d: "Embassy TechVillage, Outer Ring Rd,", s: "Bellandur, Bengaluru-560103, India" },
              { icon: Clock, t: "Business Hours", d: "Monday – Saturday", s: "9:00 AM – 6:00 PM IST" },
            ].map(({ icon: Icon, t, d, s }) => (
              <div key={t} className="rounded-2xl bg-surface border border-border p-6 glow-hover">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl gradient-accent-bg flex items-center justify-center shadow-[var(--shadow-glow)]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{t}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{d}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-surface border border-border p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Follow Us</h3>
              <div className="mt-4 flex gap-3">
                {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="h-10 w-10 rounded-xl border border-border bg-surface-2 flex items-center justify-center hover:gradient-accent-bg hover:text-white transition-all" aria-label="social">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <form className="lg:col-span-3 rounded-3xl bg-surface border border-border p-8 shadow-[var(--shadow-card)] space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First Name" placeholder="Jane" />
              <Field label="Last Name" placeholder="Doe" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Email" type="email" placeholder="jane@company.com" />
              <Field label="Mobile" placeholder="+91 98765 43210" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Request Type</label>
              <select className="mt-2 w-full rounded-xl border border-input bg-surface-2 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30">
                <option>General inquiry</option>
                <option>Request a demo</option>
                <option>Partnership</option>
                <option>Campus collaboration</option>
                <option>Support</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Message</label>
              <textarea
                rows={5}
                placeholder="Tell us a bit about what you're looking for…"
                className="mt-2 w-full rounded-xl border border-input bg-surface-2 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>
            <CTAButton variant="primary" type="submit" className="w-full">
              Send Message <Send className="h-4 w-4" />
            </CTAButton>
          </form>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-surface-2 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
