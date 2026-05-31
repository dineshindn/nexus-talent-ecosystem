import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AnimateIn } from "@/components/shared";
import { Section, EyebrowChip, CTAButton } from "@/components/site/primitives";
import { faqs } from "@/features/home/data";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-12">
        <AnimateIn direction="left" className="lg:col-span-4">
          <EyebrowChip>FAQ</EyebrowChip>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground">
            Questions?{" "}
            <span className="text-gradient">We've got you.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Can't find an answer? Reach out — our team replies within 24 hours.
          </p>
          <CTAButton variant="ghost" as={Link} to="/contact" className="mt-6">
            Contact us <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </AnimateIn>

        <div className="lg:col-span-8 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <AnimateIn key={f.q} delay={i * 70} direction="right">
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300 bg-surface"
                  style={{
                    border: `1px solid ${isOpen ? "oklch(0.71 0.16 162 / 0.50)" : "oklch(0.91 0.014 255)"}`,
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-semibold text-foreground">{f.q}</span>
                    <ChevronDown
                      className="h-5 w-5 flex-shrink-0 transition-transform duration-300"
                      style={{
                        color: isOpen ? "oklch(0.71 0.16 162)" : "oklch(0.52 0.04 257)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{ maxHeight: isOpen ? "400px" : "0px" }}
                  >
                    <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
