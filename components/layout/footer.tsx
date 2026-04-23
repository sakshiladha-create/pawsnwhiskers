import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { footerLinks } from "@/data/home-data";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-px py-14">
        <div className="grid gap-8 rounded-[32px] bg-brand p-6 shadow-soft md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-white/75">Newsletter</p>
            <h2 className="mt-2 text-4xl font-black leading-tight md:text-5xl">Fresh deals for happy paws.</h2>
            <p className="mt-3 max-w-xl text-white/86">
              Get new arrivals, auto-delivery offers, and seasonal wellness reminders in your inbox.
            </p>
          </div>
          <form className="flex flex-col gap-3 self-center sm:flex-row" aria-label="Newsletter signup">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="focus-ring min-h-14 flex-1 rounded-full border-0 bg-white px-5 font-bold text-ink placeholder:text-ink/45"
            />
            <button type="submit" className="focus-ring min-h-14 rounded-full bg-ink px-7 font-black text-white transition hover:bg-white hover:text-ink">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <h3 className="text-3xl font-black">Paws N Whiskers</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/68">
              Premium playful pet essentials for cats, dogs, and homes that love good design.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#" aria-label="Social profile" className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand">
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer quick links">
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-brand">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-3 text-sm font-bold text-white/72">
              {footerLinks.map((link) => (
                <li key={link}>
                  <Link className="focus-ring transition hover:text-brand" href={`/${link.toLowerCase().replaceAll(" ", "-")}`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic">
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-brand">Contact</h4>
            <div className="space-y-3 text-sm font-bold text-white/72">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand" aria-hidden />
                248 Market Paw Lane, Austin, TX
              </p>
              <a className="focus-ring flex gap-3 transition hover:text-brand" href="tel:+18005550198">
                <Phone className="mt-0.5 h-4 w-4 text-brand" aria-hidden />
                +1 (800) 555-0198
              </a>
              <a className="focus-ring flex gap-3 transition hover:text-brand" href="mailto:hello@pawsnwhiskers.com">
                <Mail className="mt-0.5 h-4 w-4 text-brand" aria-hidden />
                hello@pawsnwhiskers.com
              </a>
            </div>
          </address>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs font-bold text-white/50">
          © 2026 Paws N Whiskers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
