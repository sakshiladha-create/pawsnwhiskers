import Link from "next/link";
import { utilityShortcuts } from "@/data/home-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function UtilityShortcuts() {
  return (
    <SectionReveal className="container-px py-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {utilityShortcuts.map((shortcut) => {
          const Icon = shortcut.icon;
          return (
            <Link key={shortcut.title} href={shortcut.href} className="focus-ring group flex items-center justify-between rounded-[26px] bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <span className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-lg font-black text-ink">{shortcut.title}</span>
              </span>
              <span className="text-sm font-black text-brand">Open</span>
            </Link>
          );
        })}
      </div>
    </SectionReveal>
  );
}
