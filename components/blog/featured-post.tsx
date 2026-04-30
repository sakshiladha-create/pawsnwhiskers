import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, PawPrint, Sparkles } from "lucide-react";
import type { BlogPost } from "@/data/blog-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <SectionReveal className="container-px py-14">
      <div className="mb-7 text-center">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Featured Story</p>
        <h2 className="mt-2 text-4xl font-black text-[#4C6795] md:text-5xl">Fresh reads from our pet desk</h2>
      </div>
      <article className="group overflow-hidden rounded-[32px] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,17,17,0.14)] lg:grid lg:grid-cols-[1.06fr_0.94fr]">
        <Link href={`/blog/${post.slug}`} className="relative block min-h-[320px] overflow-hidden">
          <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4C6795]/75 via-[#4C6795]/15 to-transparent" />
          <PawPrint className="absolute bottom-6 left-6 h-14 w-14 rotate-[-18deg] fill-current text-white/28" aria-hidden />
        </Link>
        <div className="relative flex flex-col justify-center overflow-hidden p-6 md:p-8 lg:p-10">
          <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-brand/12" />
          <Sparkles className="absolute right-8 top-8 h-8 w-8 text-brand/35" aria-hidden />
          <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-ink/50">
            <span className="rounded-full bg-[#FBE4D7] px-3 py-1.5 text-brand">Pet Care</span>
            <span className="rounded-full bg-[#E0F2FE] px-3 py-1.5 text-[#0284C7]">{post.category}</span>
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" aria-hidden />
              {post.readTime}
            </span>
          </div>
          <h3 className="mt-4 text-3xl font-black leading-tight text-ink md:text-4xl">
            <Link href={`/blog/${post.slug}`} className="focus-ring transition hover:text-brand">
              {post.title}
            </Link>
          </h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-ink/62">{post.excerpt}</p>
          <div className="mt-6">
            <Link href={`/blog/${post.slug}`} className="focus-ring relative inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:scale-[1.02] hover:bg-[#4C6795]">
              <span className="pointer-events-none absolute inset-[4px] rounded-full border-2 border-dotted border-white/80" />
              <span className="relative z-10">Read More</span>
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </article>
    </SectionReveal>
  );
}
