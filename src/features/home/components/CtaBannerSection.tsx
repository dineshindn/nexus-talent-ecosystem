import { ArrowRight, Search } from "lucide-react";
import { AnimateIn } from "@/components/shared";
import { Section } from "@/components/site/primitives";

export function CtaBannerSection() {
  return (
    <Section>
      <AnimateIn>
        <div
          className="relative overflow-hidden rounded-[2rem] p-12 lg:p-20 text-center text-white"
          style={{ background: "linear-gradient(135deg, oklch(0.18 0.08 264) 0%, oklch(0.38 0.17 264) 40%, oklch(0.55 0.20 200) 70%, oklch(0.68 0.17 162) 100%)" }}
        >
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="blob -top-20 -left-20 h-72 w-72" style={{ background: "oklch(0.71 0.16 162)", opacity: 0.25 }} />
          <div className="blob -bottom-20 -right-20 h-72 w-72" style={{ background: "oklch(0.38 0.17 264)", opacity: 0.30 }} />

          <div className="relative max-w-3xl mx-auto">
            <AnimateIn>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                Ready to transform how you{" "}
                <span className="text-gradient-light">hire and grow?</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={150}>
              <p className="mt-5 text-lg text-white/72">
                Join 8,400+ companies and 200K+ professionals building the future of work on G Talent Pro.
              </p>
            </AnimateIn>
            <AnimateIn delay={280}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <button
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "oklch(1 0 0)",
                    color: "oklch(0.38 0.17 264)",
                    boxShadow: "0 8px 30px oklch(0 0 0 / 0.20)",
                  }}
                >
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300"
                  style={{ border: "2px solid oklch(1 0 0 / 0.35)" }}
                >
                  <Search className="h-4 w-4" /> Talk to Sales
                </button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
}
