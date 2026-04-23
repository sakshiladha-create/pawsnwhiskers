import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function SupportStrip() {
  return (
    <section className="container-px py-12" aria-label="Newsletter and support">
      <div className="relative overflow-hidden rounded-[34px] shadow-soft min-h-[420px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bg-3.jpg"
            alt="Joyful pets"
            fill
            className="object-cover  "
            priority={false}
          />
        </div>

        {/* Base tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#DA8A70]/92 via-[#DA8A70]/72 to-[#f2c8d6]/40" />

        {/* Stronger left readable overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(107_111_116)_0%,rgb(83_86_88/0.5)_38%,rgb(80_83_86/0.27)_60%,rgba(255,255,255,0.08)_100%)]" />

        {/* Soft glow */}
        <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 flex min-h-[420px] max-w-3xl flex-col justify-center px-6 py-10 text-white lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-white/80">
            Stay in the loop
          </p>

          <h2 className="mt-3 text-2xl font-black leading-tight md:text-3xl lg:text-4xl">
            Happy pets, happy you
          </h2>

          <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/85 md:text-base">
            Get joyful pet tips, exclusive deals, and adorable updates delivered straight to your inbox.
          </p>

          {/* Newsletter moved below text */}
          <div className="mt-8 max-w-xl">
            <form className="flex flex-col gap-3 sm:flex-row" aria-label="Page newsletter signup">
              <label className="sr-only" htmlFor="page-newsletter-email">
                Email address
              </label>
              <input
                id="page-newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                className="focus-ring min-h-14 flex-1 rounded-full border-0 bg-white px-5 font-bold text-ink placeholder:text-ink/45"
              />
              <button
                type="submit"
                className="focus-ring min-h-14 rounded-full bg-ink px-7 font-black text-white transition hover:bg-white hover:text-ink"
              >
                Join Now
              </button>
            </form>

            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social profile"
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-white/16 transition bg-brand"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}