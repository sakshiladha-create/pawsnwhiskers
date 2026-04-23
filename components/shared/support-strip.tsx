import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

export function SupportStrip() {
  return (
    <section className="container-px py-12" aria-label="Newsletter and support">
      <div className="grid gap-6 rounded-[34px] bg-brand p-6 text-white shadow-soft lg:grid-cols-[1fr_0.85fr] lg:p-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-white/72">Stay in the loop</p>
          <h2 className="mt-2 text-4xl font-black leading-tight md:text-5xl">Fresh pet tips, deals, and support.</h2>
          <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-white/78">
            Join the newsletter for new arrivals and reach our care team whenever your cart needs a second opinion.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-black">
            <a className="focus-ring inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 transition hover:bg-ink" href="tel:+18005550198">
              <Phone className="h-4 w-4" aria-hidden />
              +1 (800) 555-0198
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 transition hover:bg-ink" href="mailto:hello@pawsnwhiskers.com">
              <Mail className="h-4 w-4" aria-hidden />
              hello@pawsnwhiskers.com
            </a>
          </div>
        </div>
        <div className="self-center">
          <form className="flex flex-col gap-3 sm:flex-row" aria-label="Page newsletter signup">
            <label className="sr-only" htmlFor="page-newsletter-email">
              Email address
            </label>
            <input
              id="page-newsletter-email"
              type="email"
              required
              placeholder="Email address"
              className="focus-ring min-h-14 flex-1 rounded-full border-0 bg-white px-5 font-bold text-ink placeholder:text-ink/45"
            />
            <button type="submit" className="focus-ring min-h-14 rounded-full bg-ink px-7 font-black text-white transition hover:bg-white hover:text-ink">
              Subscribe
            </button>
          </form>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <a key={index} href="#" aria-label="Social profile" className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-white/12 transition hover:bg-ink">
                <Icon className="h-5 w-5" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
