import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/employers", label: "Employers" },
  { to: "/campus", label: "Campus" },
  { to: "/talent", label: "Talent" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_20px_-4px_oklch(0.21_0.07_257/0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 rounded-xl gradient-accent-bg flex items-center justify-center shadow-[var(--shadow-glow)] group-hover:scale-105 transition-transform">
            <span className="text-white font-display font-extrabold text-lg">G</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-foreground tracking-tight">
              G Talent <span className="text-gradient">Pro</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
              Next-Gen Talent Platform
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 gradient-accent-bg" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Sign In
          </button>
          <button className="group relative inline-flex items-center gap-2 rounded-full gradient-accent-bg px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-cyan)] transition-all hover:-translate-y-0.5">
            <Sparkles className="h-4 w-4" />
            Request Demo
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 flex gap-2">
              <button className="flex-1 rounded-full border border-border px-4 py-2.5 text-sm font-medium">
                Sign In
              </button>
              <button className="flex-1 rounded-full gradient-accent-bg px-4 py-2.5 text-sm font-semibold text-white">
                Request Demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
