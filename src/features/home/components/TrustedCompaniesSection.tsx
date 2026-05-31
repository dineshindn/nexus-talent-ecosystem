import { AnimateIn } from "@/components/shared";

export function TrustedCompaniesSection() {
  const logos = ["Microsoft", "Infosys", "Deloitte", "Accenture", "TCS", "Cognizant", "Wipro", "HCL", "Capgemini", "IBM"];
  return (
    <div className="overflow-hidden py-10 bg-surface-2">
      <AnimateIn>
        <p className="text-center text-xs font-bold uppercase tracking-[0.22em] mb-7 text-muted-foreground">
          Trusted by 8,400+ companies worldwide
        </p>
      </AnimateIn>
      <div className="relative">
        <div className="flex animate-marquee gap-16 w-max">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="text-xl font-display font-bold whitespace-nowrap transition-colors duration-300 cursor-default text-foreground/25 hover:text-primary"
            >
              {l}
            </span>
          ))}
        </div>
        <div
          className="absolute inset-y-0 left-0 w-24 pointer-events-none"
          style={{ background: "linear-gradient(to right, oklch(0.97 0.006 250), transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 pointer-events-none"
          style={{ background: "linear-gradient(to left, oklch(0.97 0.006 250), transparent)" }}
        />
      </div>
    </div>
  );
}
