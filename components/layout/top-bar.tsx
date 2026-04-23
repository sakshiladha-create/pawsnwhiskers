import { Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden border-b border-black/5 bg-ink text-white md:block">
      <div className="container-px flex h-10 items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <a className="flex items-center gap-2 transition-colors hover:text-peach focus-ring" href="tel:+18005550198">
            <Phone className="h-4 w-4 text-brand" aria-hidden />
            +1 (800) 555-0198
          </a>
          <a className="flex items-center gap-2 transition-colors hover:text-peach focus-ring" href="mailto:hello@pawsnwhiskers.com">
            <Mail className="h-4 w-4 text-brand" aria-hidden />
            hello@pawsnwhiskers.com
          </a>
        </div>
        <p className="font-semibold text-peach">35% Off! Your first auto delivery</p>
        {/* <div className="flex items-center gap-3">
          <label className="sr-only" htmlFor="language">
            Select language
          </label>
          <select
            id="language"
            className="focus-ring rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white"
            defaultValue="en"
          >
            <option className="text-ink" value="en">
              English
            </option>
            <option className="text-ink" value="es">
              Espanol
            </option>
          </select>
          <label className="sr-only" htmlFor="currency">
            Select currency
          </label>
          <select
            id="currency"
            className="focus-ring rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white"
            defaultValue="usd"
          >
            <option className="text-ink" value="usd">
              USD
            </option>
            <option className="text-ink" value="eur">
              EUR
            </option>
          </select>
        </div> */}
      </div>
    </div>
  );
}
