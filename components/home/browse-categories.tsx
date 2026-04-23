import Image from "next/image";
import Link from "next/link";
import { browseCategories } from "@/data/home-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function BrowseCategories() {
  return (
    <SectionReveal className="container-px py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Browse By Categories</p>
          <h2 className="mt-2 text-4xl font-black text-ink md:text-5xl">Shop by pet mood</h2>
        </div>
        <Link href="/shop" className="focus-ring hidden rounded-full bg-ink px-6 py-3 text-sm font-black text-white transition hover:bg-brand sm:inline-flex">
          View All
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {browseCategories.map((category) => (
          <Link key={category.title} href={category.href} className="focus-ring group overflow-hidden rounded-[28px] bg-white p-3 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
            <div className="overflow-hidden rounded-[23px]">
              <Image src={category.image} alt={category.title} width={420} height={360} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <h3 className="px-2 py-4 text-center text-lg font-black text-ink">{category.title}</h3>
          </Link>
        ))}
      </div>
    </SectionReveal>
  );
}
