import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AnimateIn } from "@/components/shared";
import { Section, EyebrowChip, CTAButton } from "@/components/site/primitives";
import { aiFeatures } from "@/features/home/data";

export function AiIntelligenceSection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimateIn direction="left">
          <EyebrowChip>AI Talent Intelligence</EyebrowChip>
          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Smarter hiring starts with{" "}
            <span className="text-gradient">intelligent talent insights.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Move beyond traditional recruitment. Our platform leverages intelligent
            recommendations, resume analytics, ATS optimization, and smart matching
            to identify the right talent with speed and precision.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton variant="primary" as={Link} to="/employers">
              For Employers <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <CTAButton variant="ghost" as={Link} to="/talent">For Talent</CTAButton>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {aiFeatures.map(({ icon: Icon, t }, i) => (
            <AnimateIn key={t} delay={i * 80} direction="right">
              <div className="card-light p-6 h-full">
                <div className="h-11 w-11 rounded-xl icon-badge flex items-center justify-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground leading-tight">{t}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
