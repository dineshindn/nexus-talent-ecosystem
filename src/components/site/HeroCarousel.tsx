import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Brain, Globe2, Users } from "lucide-react";
import { CTAButton } from "./primitives";
import banner1 from "@/assets/banner-1.jpg";
import banner2 from "@/assets/banner-2.jpg";
import banner3 from "@/assets/banner-3.jpg";

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
  icon: typeof Brain;
  accent: string;
};

const slides: Slide[] = [
  {
    eyebrow: "AI-Powered Talent Ecosystem · v2026",
    title: (
      <>
        Powering the <span className="text-gradient-light">Future of Talent</span> &amp; Opportunity.
      </>
    ),
    desc: "AI-driven ecosystem connecting employers, campuses, and professionals. Hire smarter, place faster, grow careers — all on one intelligent platform.",
    primaryCta: "Explore Platform",
    secondaryCta: "Request a Demo",
    image: banner1,
    icon: Brain,
    accent: "AI Match Score",
  },
  {
    eyebrow: "Recruitment as a Service",
    title: (
      <>
        Hire <span className="text-gradient-light">10x faster</span> with intelligent matching.
      </>
    ),
    desc: "From sourcing to onboarding, our AI workflows surface the right candidates and remove the noise — so your team can focus on what matters most.",
    primaryCta: "For Employers",
    secondaryCta: "See Pricing",
    image: banner2,
    icon: Users,
    accent: "Candidates Matched",
  },
  {
    eyebrow: "Connected Global Network",
    title: (
      <>
        One platform. <span className="text-gradient-light">Unlimited reach.</span>
      </>
    ),
    desc: "Tap into 200K+ verified professionals, 1,200+ campuses, and a worldwide employer network — all unified by a single intelligent talent graph.",
    primaryCta: "Join the Network",
    secondaryCta: "Talk to Sales",
    image: banner3,
    icon: Globe2,
    accent: "Global Reach",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 32 },
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section className="relative overflow-hidden gradient-deep-bg text-white">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <motion.div
        className="blob top-20 -left-32 h-[500px] w-[500px] bg-[oklch(0.55_0.22_264)]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob -bottom-20 -right-20 h-[500px] w-[500px] bg-[oklch(0.72_0.14_211)]"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob top-1/3 left-1/2 h-[300px] w-[300px] bg-[oklch(0.71_0.16_162)] opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-24 lg:pt-28 lg:pb-32">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%]">
                <SlideContent slide={slide} active={i === selected} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative h-1.5 overflow-hidden rounded-full bg-white/15 transition-all"
              style={{ width: i === selected ? 56 : 24 }}
            >
              {i === selected && (
                <motion.div
                  key={`bar-${selected}`}
                  className="absolute inset-0 gradient-accent-bg"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function SlideContent({ slide, active }: { slide: Slide; active: boolean }) {
  const Icon = slide.icon;
  return (
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={slide.eyebrow}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/90">
                <Sparkles className="h-3.5 w-3.5 text-[oklch(0.72_0.14_211)]" />
                {slide.eyebrow}
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                {slide.title}
              </h1>

              <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed">
                {slide.desc}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CTAButton variant="primary">
                  {slide.primaryCta} <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <button className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition">
                  {slide.secondaryCta}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="lg:col-span-5 relative">
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={slide.image}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={slide.image}
                  alt={typeof slide.title === "string" ? slide.title : "Hero banner"}
                  className="w-full h-auto"
                  width={1536}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.05_260)] via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -left-4 top-10 glass rounded-2xl p-4 w-52 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl gradient-accent-bg flex items-center justify-center">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">{slide.accent}</div>
                    <div className="text-lg font-bold text-white">96.4%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="absolute -right-4 bottom-8 glass rounded-2xl p-4 w-56 shadow-xl"
              >
                <div className="text-xs text-white/60">Hires this week</div>
                <div className="mt-1 flex items-end justify-between">
                  <div className="text-2xl font-extrabold text-white">+128</div>
                  <div className="flex items-end gap-1 h-8">
                    {[3, 5, 4, 7, 6, 8, 9].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5 rounded-full gradient-accent-bg"
                        style={{ height: `${h * 4}px` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
