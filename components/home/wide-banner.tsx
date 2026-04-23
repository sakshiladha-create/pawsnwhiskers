import { ArrowRight, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/home/section-reveal";

export function WideBanner() {
  return (
    <SectionReveal className="container-px pt-6">
      <div className="relative overflow-hidden rounded-[38px] bg-[#F3D8C8] p-7 shadow-soft md:p-12">
        <PawPrint className="absolute left-8 top-8 h-16 w-16 -rotate-12 text-brand/18" aria-hidden />
        <PawPrint className="absolute bottom-8 right-1/2 h-12 w-12 rotate-12 text-ink/10" aria-hidden />
        <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Weekend Savings</p>
            <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight text-ink md:text-6xl">
              Save more on bowls, beds, toys, and treats.
            </h2>
            <p className="mt-4 max-w-lg text-base font-semibold leading-7 text-ink/62">
              Bundle your pet&apos;s everyday essentials and unlock exclusive auto-delivery discounts.
            </p>
            <Link href="/shop" className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-black text-white transition hover:bg-brand">
              Shop Savings
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
          <Image
            src="https://images.pexels.com/photos/4587955/pexels-photo-4587955.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Happy dog with pet products"
            width={1000}
            height={620}
            className="h-[360px] w-full rounded-[32px] object-cover object-[center_80%] shadow-soft"
          />
        </div>
      </div>
    </SectionReveal>
  );
}
