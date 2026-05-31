import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AnimateIn } from "@/components/shared";
import { Section, SectionHeader, CTAButton } from "@/components/site/primitives";
import { services } from "@/features/home/data";

export function ServicesSection() {
  return (
    <Section>
      <AnimateIn>
        <SectionHeader
          eyebrow="Services"
          title={<>Smart hiring solutions <span className="text-gradient">for the modern workforce.</span></>}
          subtitle="Flexible models built around outcomes — from talent and recruitment to placement, training, and verification."
        />
      </AnimateIn>
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {services.map(({ icon: Icon, name, desc }, i) => (
          <AnimateIn key={name} delay={i * 45}>
            <div className="group card-light p-6 h-full">
              <div className="h-10 w-10 rounded-xl icon-badge flex items-center justify-center text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all duration-300">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
      <AnimateIn delay={200}>
        <div className="mt-10 text-center">
          <CTAButton variant="ghost" as={Link} to="/services">
            View all services <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </div>
      </AnimateIn>
    </Section>
  );
}
