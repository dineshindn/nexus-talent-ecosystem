import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, Wand2 } from "lucide-react";
import logoSrc from "@/assets/logo/logo.svg";

const navLinks = [
  { to: "/",          label: "Home" },
  // { to: "/services",  label: "Services" },
  { to: "/employers", label: "Employers" },
  { to: "/campus",    label: "Campus" },
  { to: "/talent",    label: "Talent" },
  { to: "/talent",    label: "Jobs" },
  // { to: "/about",     label: "About Us" },
  // { to: "/contact",   label: "Contact Us" },
] satisfies { to: string; label: string }[];

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
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-[0_4px_24px_-4px_oklch(0.38_0.17_264/0.10)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src={logoSrc} alt="G Talent Pro" className="h-9 w-auto object-contain" draggable={false} />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="relative px-3 py-2 text-[13px] font-medium text-foreground/75 hover:text-foreground transition-colors group whitespace-nowrap"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 gradient-accent-bg" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          {/* AI Resume Builder — special animated pill */}
          <Link
            to="/talent"
            className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "oklch(0.71 0.16 162 / 0.10)",
              border: "1px solid oklch(0.71 0.16 162 / 0.40)",
              color: "oklch(0.55 0.20 162)",
            }}
          >
            <Wand2
              className="h-3.5 w-3.5 flex-shrink-0"
              style={{
                color: "oklch(0.71 0.16 162)",
                animation: "glow-pulse 2s ease-in-out infinite",
              }}
            />
            AI Resume Builder
            <span
              className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full text-white leading-none"
              style={{ background: "oklch(0.71 0.16 162)" }}
            >
              AI
            </span>
          </Link>

          <button className="text-sm font-medium text-foreground/75 hover:text-foreground transition-colors px-2">
            Sign In
          </button>
          <button className="group inline-flex items-center gap-1.5 rounded-full gradient-accent-bg px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-cyan)] transition-all hover:-translate-y-0.5">
            <Sparkles className="h-4 w-4" />
            Request Demo
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* AI Resume Builder — mobile */}
            <li>
              <Link
                to="/talent"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold"
                style={{ color: "oklch(0.55 0.20 162)" }}
              >
                <Wand2
                  className="h-4 w-4"
                  style={{
                    color: "oklch(0.71 0.16 162)",
                    animation: "glow-pulse 2s ease-in-out infinite",
                  }}
                />
                AI Resume Builder
                <span
                  className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full text-white"
                  style={{ background: "oklch(0.71 0.16 162)" }}
                >
                  AI
                </span>
              </Link>
            </li>

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
