import { useState, useEffect, useRef } from "react";

export function TypingText({
  text,
  className = "",
  speed = 36,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState(text); // full text for SSR
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayed("");
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    let i = 0;
    const id = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, ++i));
      } else {
        clearInterval(id);
      }
    }, speed);
    return () => clearInterval(id);
  }, [active, text, speed]);

  const done = displayed.length === text.length;

  return (
    <span ref={ref} className={className}>
      {displayed}
      {active && !done && (
        <span
          className="inline-block animate-pulse ml-0.5 align-baseline rounded-sm"
          style={{ width: "2px", height: "0.85em", background: "oklch(0.71 0.16 162)", verticalAlign: "middle" }}
        />
      )}
    </span>
  );
}
