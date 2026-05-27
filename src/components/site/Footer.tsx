import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Clock, Linkedin, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-deep-bg text-white">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="blob top-0 -left-32 h-96 w-96 bg-[oklch(0.55_0.22_264)]" />
      <div className="blob bottom-0 -right-32 h-96 w-96 bg-[oklch(0.72_0.14_211)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl gradient-accent-bg flex items-center justify-center">
                <span className="text-white font-display font-extrabold text-lg">G</span>
              </div>
              <span className="font-display font-extrabold text-xl">
                G Talent <span className="text-gradient-light">Pro</span>
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/70 max-w-sm">
              Next-Gen Talent Platform — your AI-powered gateway connecting employers,
              campuses, and professionals through one intelligent ecosystem.
            </p>

            <form className="mt-8 glass rounded-full p-1.5 flex items-center max-w-sm">
              <input
                type="email"
                placeholder="Your work email"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 outline-none"
              />
              <button
                type="button"
                className="rounded-full gradient-accent-bg px-4 py-2 text-sm font-semibold text-white inline-flex items-center gap-1"
              >
                Join <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-light">
              Platform
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/employers" className="hover:text-white transition-colors">Employers</Link></li>
              <li><Link to="/campus" className="hover:text-white transition-colors">Campus</Link></li>
              <li><Link to="/talent" className="hover:text-white transition-colors">Talent</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-light">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-light">
              Get In Touch
            </h4>
            <div className="glass rounded-2xl p-5 space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[oklch(0.72_0.14_211)] mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">info@gtalentpro.com</div>
                  <div className="text-xs text-white/60">Email support</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[oklch(0.71_0.16_162)] mt-0.5" />
                <div className="text-xs text-white/70">Mon – Sat · 9:00 AM – 6:00 PM IST</div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[oklch(0.72_0.14_211)] mt-0.5" />
                <div className="text-xs text-white/70">
                  Embassy TechVillage, Outer Ring Rd, Bellandur,<br />
                  Bengaluru-560103, Karnataka, India
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/50">© 2026 G Talent Pro. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:gradient-accent-bg transition-all"
                aria-label="social"
              >
                <Icon className="h-4 w-4 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
