import { Globe, BarChart2, ArrowRight, ChevronLeft, ChevronRight, Network } from "lucide-react";
import { useCarousel } from "@/features/home/hooks";
import { heroSlides } from "@/features/home/data";

const BG_GRADS = [
  "linear-gradient(135deg, #0B1A4A 0%, #163280 38%, #135C52 72%, #0D6B5A 100%)",
  "linear-gradient(135deg, #0E2050 0%, #1E3A8A 42%, #1565A0 72%, #1A7A6A 100%)",
  "linear-gradient(135deg, #0D1E4F 0%, #1F3580 40%, #1E5F96 68%, #1A7A8A 100%)",
];

export function HeroSection() {
  const { current, setCurrent, prev, next, progress, dir } =
    useCarousel(heroSlides.length, 5500);
  const slide = heroSlides[current];

  return (
    <section className="relative overflow-hidden text-white">
      {/* Gradient background — transitions between slides */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{ background: BG_GRADS[current] }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-overlay opacity-10" />

      {/* Ambient blobs */}
      <div
        className="blob -top-40 -left-40 h-[560px] w-[560px]"
        style={{ background: "#1E3A8A", opacity: 0.32 }}
      />
      <div
        className="blob bottom-0 right-0 h-[440px] w-[440px]"
        style={{ background: "#0F9B7A", opacity: 0.24 }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[460px]">

          {/* ── Left: slide text ── */}
          <div
            key={`text-${current}`}
            className="lg:col-span-6"
            style={{
              animation: `${dir > 0 ? "slide-from-right" : "slide-from-left"} 0.65s cubic-bezier(0.16,1,0.3,1) both`,
            }}
          >
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-7 px-4 py-2"
              style={{
                background: "rgba(255,255,255,0.11)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Network className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "#7FEDC4" }} />
              {slide.eyebrow}
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold leading-[1.04] tracking-tight">
              <span className="text-white">{slide.title[0]}</span>
              <br />
              <span className="text-gradient-light">{slide.title[1]}</span>
            </h1>

            {/* Description */}
            <p
              className="mt-6 text-base lg:text-[17px] leading-relaxed max-w-[480px]"
              style={{ color: "rgba(255,255,255,0.63)" }}
            >
              {slide.desc}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "oklch(0.71 0.16 162)", color: "#fff" }}
              >
                {slide.cta1}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                className="inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.38)",
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {slide.cta2}
              </button>
            </div>
          </div>

          {/* ── Right: banner image ── */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                maxWidth: "580px",
                height: "390px",
                boxShadow:
                  "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)",
              }}
            >
              {/* Sliding image — key forces remount, triggering animation */}
              <div
                key={`img-${current}`}
                className="absolute inset-0"
                style={{
                  animation: `${dir > 0 ? "slide-from-right" : "slide-from-left"} 0.75s cubic-bezier(0.16,1,0.3,1) both`,
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.eyebrow}
                  className="w-full h-full object-cover"
                  draggable={false}
                />

                {/* Subtle vignette overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,0,0,0.18) 0%, transparent 55%, rgba(0,0,0,0.38) 100%)",
                  }}
                />

                {/* Floating stat card — top left */}
                <div
                  className="absolute top-4 left-4 flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(8,16,48,0.78)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.13)",
                  }}
                >
                  <div
                    className="h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(69,189,126,0.22)",
                      border: "1px solid rgba(69,189,126,0.55)",
                    }}
                  >
                    <Globe className="h-4 w-4" style={{ color: "#45BD7E" }} />
                  </div>
                  <div>
                    <div
                      className="text-[11px] font-medium"
                      style={{ color: "rgba(255,255,255,0.52)" }}
                    >
                      {slide.stats[0].label}
                    </div>
                    <div className="text-xl font-extrabold text-white leading-tight">
                      {slide.stats[0].value}
                    </div>
                  </div>
                </div>

                {/* Floating stat card — bottom right */}
                <div
                  className="absolute bottom-4 right-4 rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(8,16,48,0.78)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.13)",
                  }}
                >
                  <div
                    className="text-[11px] font-medium mb-1"
                    style={{ color: "rgba(255,255,255,0.52)" }}
                  >
                    {slide.stats[1].label}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-white">
                      {slide.stats[1].value}
                    </span>
                    <BarChart2 className="h-5 w-5" style={{ color: "#45BD7E" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="mt-10 flex flex-col items-center gap-4">
          {/* Progress bar */}
          <div
            className="w-full h-0.5 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.16)" }}
          >
            <div
              className="h-full rounded-full transition-none"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(to right, #45BD7E, #a0f0d4)",
              }}
            />
          </div>

          {/* Dots + arrow buttons */}
          <div className="flex items-center gap-5">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="h-9 w-9 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.20)",
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="rounded-full transition-all duration-400"
                  style={{
                    height: "7px",
                    width: i === current ? "28px" : "7px",
                    background:
                      i === current ? "#fff" : "rgba(255,255,255,0.30)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next slide"
              className="h-9 w-9 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.20)",
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-14"
          style={{ fill: "oklch(0.99 0.003 250)" }}
        >
          <path d="M0,30 C300,60 600,0 900,40 C1100,65 1280,20 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
