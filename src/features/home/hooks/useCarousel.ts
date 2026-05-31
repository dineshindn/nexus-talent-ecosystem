import { useState, useEffect } from "react";

export function useCarousel(count: number, interval = 6000) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused]   = useState(false);
  const [progress, setProgress] = useState(0);
  const [dir, setDir]         = useState<1 | -1>(1);

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const startTime = Date.now();
    let animId: number;
    const tick = () => {
      const pct = Math.min(((Date.now() - startTime) / interval) * 100, 100);
      setProgress(pct);
      if (pct < 100) animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    const timer = setTimeout(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % count);
    }, interval);
    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timer);
    };
  }, [current, paused, count, interval]);

  const prev = () => { setDir(-1); setCurrent((c) => (c - 1 + count) % count); };
  const next = () => { setDir(1);  setCurrent((c) => (c + 1) % count); };

  return { current, setCurrent, prev, next, setPaused, progress, dir };
}
