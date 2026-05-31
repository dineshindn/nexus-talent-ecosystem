import { CheckCircle2 } from "lucide-react";
import { AnimateIn } from "@/components/shared";
import { SectionHeader } from "@/components/site/primitives";
import { ecosystem } from "@/features/home/data";

export function EcosystemSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-surface-2 dot-grid-dark overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateIn>
          <SectionHeader
            eyebrow="Connected Talent Ecosystem"
            title={<>One ecosystem. <span className="text-gradient">Three powerful experiences.</span></>}
            subtitle="We don't just help organizations hire — we help them build future-ready teams faster, smarter, and more effectively."
          />
        </AnimateIn>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {ecosystem.map(({ icon: Icon, tag, title, desc, bullets, color, grad }, i) => (
            <AnimateIn key={tag} delay={i * 120}>
              <div className="card-light p-8 h-full group">
                <div
                  className="h-12 w-12 rounded-2xl flex items-center justify-center"
                  style={{ background: grad, boxShadow: `0 4px 16px ${color} / 0.25` }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{tag}</div>
                <h3 className="mt-2 text-xl font-bold text-foreground leading-snug">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <ul className="mt-5 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
