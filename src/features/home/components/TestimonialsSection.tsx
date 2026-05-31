import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Network } from "lucide-react";
import { AnimateIn } from "@/components/shared";
import { Section } from "@/components/site/primitives";
import { testimonials } from "@/features/home/data";

const CARD_POSITIONS = [
  // Active — front, slight right-lean
  {
    zIndex: 30,
    transform: "translateX(55px) translateY(-8px) rotate(-3deg) scale(1)",
    opacity: 1,
    boxShadow:
      "0 0 0 1.5px oklch(0.71 0.16 162 / 0.75), 0 20px 70px oklch(0 0 0 / 0.5), 0 0 40px oklch(0.71 0.16 162 / 0.18)",
  },
  // One behind — left-leaning fan
  {
    zIndex: 20,
    transform: "translateX(-35px) translateY(0px) rotate(-11deg) scale(0.93)",
    opacity: 0.82,
    boxShadow:
      "0 0 0 1px oklch(0.71 0.16 162 / 0.30), 0 8px 32px oklch(0 0 0 / 0.45)",
  },
  // Two behind — right-leaning, furthest back
  {
    zIndex: 10,
    transform: "translateX(20px) translateY(4px) rotate(5deg) scale(0.87)",
    opacity: 0.65,
    boxShadow:
      "0 0 0 1px oklch(0.71 0.16 162 / 0.15), 0 4px 16px oklch(0 0 0 / 0.4)",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const n = testimonials.length;

  // Auto-cycle
  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % n), 3800);
    return () => clearInterval(id);
  }, [n]);

  // Pointer drag state (works for mouse + touch via pointer events)
  const drag = useRef({ startX: 0, wasDrag: false, captured: false });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current = { startX: e.clientX, wasDrag: false, captured: true };
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.captured) return;
    if (Math.abs(e.clientX - drag.current.startX) > 8) {
      drag.current.wasDrag = true;
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.captured) return;
    drag.current.captured = false;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 60) {
      if (dx < 0) setActive((p) => (p + 1) % n);   // swipe left → next
      else         setActive((p) => (p - 1 + n) % n); // swipe right → prev
    }
  };

  const onCardClick = (i: number) => {
    if (drag.current.wasDrag) { drag.current.wasDrag = false; return; }
    setActive(i);
  };

  return (
    <Section className="gradient-hero-bg overflow-hidden">
      {/* Subtle dot overlay */}
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      <div className="relative grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ── Left: text + CTA ── */}
        <AnimateIn direction="left">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 rounded-full text-xs font-semibold mb-6 px-4 py-2"
            style={{
              background: "oklch(1 0 0 / 0.10)",
              border: "1px solid oklch(1 0 0 / 0.22)",
              backdropFilter: "blur(10px)",
              color: "oklch(0.90 0.10 162)",
            }}
          >
            <Network className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "oklch(0.71 0.16 162)" }} />
            Testimonial
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
            Trusted by Leading Brands:{" "}
            <span className="text-gradient-light">Success Snapshots</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed max-w-sm" style={{ color: "oklch(1 0 0 / 0.60)" }}>
            Real results from employers, campuses, and professionals who scaled
            with G Talent Pro.
          </p>

          <div className="mt-8">
            <Link to="/contact">
              <button
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-105 active:scale-100"
                style={{ background: "oklch(0.71 0.16 162)" }}
              >
                Get Started
                <span
                  className="h-6 w-6 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(1 0 0 / 0.20)" }}
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </Link>
          </div>

          {/* Dot indicators */}
          <div className="mt-10 flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "8px",
                  background:
                    i === active
                      ? "oklch(0.71 0.16 162)"
                      : "oklch(1 0 0 / 0.28)",
                }}
              />
            ))}
          </div>
        </AnimateIn>

        {/* ── Right: draggable stacked card fan ── */}
        <AnimateIn direction="right">
          <div
            className="relative select-none"
            style={{ height: "320px", cursor: "grab" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {testimonials.map((t, i) => {
              const offset = (i - active + n) % n;
              const pos = CARD_POSITIONS[offset];
              return (
                <div
                  key={t.name}
                  className="absolute inset-0 rounded-2xl p-7 flex flex-col justify-between"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.20 0.09 264) 0%, oklch(0.28 0.12 264) 55%, oklch(0.22 0.07 220) 100%)",
                    border: "1px solid oklch(0.71 0.16 162 / 0.32)",
                    transition: "all 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
                    ...pos,
                  }}
                  onClick={() => onCardClick(i)}
                >
                  {/* Quote */}
                  <div>
                    <p
                      className="text-xl lg:text-2xl font-bold leading-snug"
                      style={{ color: "oklch(0.71 0.16 162)" }}
                    >
                      "{t.headline}"
                    </p>
                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{ color: "oklch(1 0 0 / 0.62)" }}
                    >
                      {t.quote}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-11 w-11 rounded-full object-cover flex-shrink-0"
                      style={{ border: "2px solid oklch(0.71 0.16 162 / 0.65)" }}
                      draggable={false}
                    />
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(0.71 0.16 162)" }}
                      >
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Drag hint */}
          <p
            className="mt-6 text-center text-xs"
            style={{ color: "oklch(1 0 0 / 0.35)" }}
          >
            ← drag to browse →
          </p>
        </AnimateIn>
      </div>
    </Section>
  );
}
