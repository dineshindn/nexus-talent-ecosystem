import { SiteLayout } from "@/components/site/SiteLayout";
import { HeroSection } from "./HeroSection";
import { TrustedCompaniesSection } from "./TrustedCompaniesSection";
import { AiIntelligenceSection } from "./AiIntelligenceSection";
import { EcosystemSection } from "./EcosystemSection";
import { ServicesSection } from "./ServicesSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { StatsSection } from "./StatsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaBannerSection } from "./CtaBannerSection";

export function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <TrustedCompaniesSection />
      <AiIntelligenceSection />
      <EcosystemSection />
      <ServicesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBannerSection />
    </SiteLayout>
  );
}
