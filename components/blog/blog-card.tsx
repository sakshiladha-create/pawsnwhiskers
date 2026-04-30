"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, PawPrint } from "lucide-react";
import type { BlogPost } from "@/data/blog-data";

const categoryStyles: Record<string, string> = {
  "Cat Essentials": "bg-[#F3E8FF] text-[#7C3AED]",
  "Dog Essentials": "bg-[#E0F2FE] text-[#0284C7]",
  Food: "bg-[#ECFDF5] text-[#059669]",
  Grooming: "bg-[#FFF5EE] text-[#DA8A70]",
  Health: "bg-[#FBE4D7] text-brand",
  Travel: "bg-[#FEF3C7] text-[#F59E0B]"
};

export function BlogCard({
  post,
  compact = false
}: {
  post: BlogPost;
  compact?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const badgeClassName = categoryStyles[post.category] ?? "bg-cream text-brand";

  return (
    <motion.article
      className="group relative h-full overflow-hidden rounded-[28px] bg-white shadow-soft"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 z-0 h-28 w-28 rounded-full bg-brand/10" />
      <div className="relative overflow-hidden">
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={820}
            height={800}
            className={`w-full object-cover transition duration-700 group-hover:scale-105 ${compact ? "h-[220px]" : "h-72 md:h-80 lg:h-[360px]"}`}
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-[#4C6795]/45 via-transparent to-transparent" />
        <PawPrint className="absolute right-5 top-5 h-10 w-10 rotate-12 fill-current text-white/35" aria-hidden />
      </div>

      <div className="relative z-10 p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-ink/48">
          <span className={`rounded-full px-3 py-1.5 ${badgeClassName}`}>{post.category}</span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden />
            {post.date}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 text-2xl font-black leading-tight text-ink">
          <Link href={`/blog/${post.slug}`} className="focus-ring transition hover:text-brand">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm font-semibold leading-7 text-ink/62">{post.excerpt}</p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-ink/42">By {post.author}</p>
          <Link href={`/blog/${post.slug}`} className="focus-ring inline-flex items-center gap-2 text-sm font-black text-brand transition hover:text-[#4C6795]">
            Read more
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
