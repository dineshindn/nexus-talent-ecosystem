import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock, Send, Linkedin, Twitter, Instagram, Youtube, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, CTAButton } from "@/components/site/primitives";
import { Reveal, RevealStagger, staggerItem } from "@/components/site/Reveal";
import contactHero from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — G Talent Pro" },
      { name: "description", content: "Talk to our team. Email, visit, or send us a message — we reply within 24 hours." },
      { property: "og:title", content: "Contact G Talent Pro" },
      { property: "og:description", content: "Let's connect — our team replies within 24 hours." },
      { property: "og:image", content: contactHero },
    ],
  }),
  component: ContactPage,
});

const contactCards = [
  { icon: Mail, t: "Email Us", d: "info@gtalentpro.com", s: "Our friendly team is here to help.", accent: "from-[oklch(0.55_0.22_264)] to-[oklch(0.72_0.14_211)]" },
  { icon: MapPin, t: "Visit Us", d: "Embassy TechVillage, Outer Ring Rd,", s: "Bellandur, Bengaluru-560103, India", accent: "from-[oklch(0.72_0.14_211)] to-[oklch(0.71_0.16_162)]" },
  { icon: Clock, t: "Business Hours", d: "Monday – Saturday", s: "9:00 AM – 6:00 PM IST", accent: "from-[oklch(0.71_0.16_162)] to-[oklch(0.55_0.22_264)]" },
];

function ContactPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-deep-bg text-white">
        <div className="absolute inset-0">
          <img src={contactHero} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.08_264)]/90 via-[oklch(0.18_0.08_264)]/70 to-[oklch(0.18_0.08_264)]" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="blob top-0 -left-20 h-96 w-96 bg-[oklch(0.55_0.22_264)]" />
        <div className="blob -bottom-20 -right-20 h-96 w-96 bg-[oklch(0.71_0.16_162)]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 py-24 lg:py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-[oklch(0.85_0.15_180)]" /> Contact Us
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
              Let's <span className="text-gradient-light">connect.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
              Fill the form — our team replies within 24 hours.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      <Section>
        <div className="grid lg:grid-cols-5 gap-8">
          <aside className="lg:col-span-2 space-y-4">
            <RevealStagger stagger={0.08} className="space-y-4">
              {contactCards.map(({ icon: Icon, t, d, s, accent }) => (
                <motion.div key={t} variants={staggerItem} whileHover={{ y: -4 }} className="group relative rounded-2xl bg-surface border border-border p-6 overflow-hidden">
                  <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-3xl group-hover:opacity-30 transition-all duration-700`} />
                  <div className="relative flex items-start gap-4">
                    <motion.div whileHover={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 0.5 }} className={`h-12 w-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-[var(--shadow-glow)]`}>
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-foreground">{t}</h3>
                      <p className="mt-1 text-sm font-semibold text-primary">{d}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{s}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </RevealStagger>
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-surface border border-border p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Follow Us</h3>
                <div className="mt-4 flex gap-3">
                  {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                    <motion.a key={i} href="#" whileHover={{ y: -3, scale: 1.05 }} className="h-10 w-10 rounded-xl border border-border bg-surface-2 flex items-center justify-center hover:gradient-accent-bg hover:text-white hover:border-transparent transition-all" aria-label="social">
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>

          <Reveal direction="left" className="lg:col-span-3">
            <form className="relative rounded-3xl bg-surface border border-border p-8 shadow-[var(--shadow-card)] space-y-5 overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-[oklch(0.55_0.22_264)] to-[oklch(0.71_0.16_162)] opacity-10 blur-3xl" />
              <div className="relative space-y-5">
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
                  <textarea rows={5} placeholder="Tell us a bit about what you're looking for…" className="mt-2 w-full rounded-xl border border-input bg-surface-2 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                </div>
                <CTAButton variant="primary" type="submit" className="w-full">Send Message <Send className="h-4 w-4" /></CTAButton>
              </div>
            </form>
          </Reveal>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-input bg-surface-2 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-all focus:border-primary/50" />
    </div>
  );
}
