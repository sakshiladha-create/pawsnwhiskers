import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import type { BlogPost } from "@/data/blog-data";

export function BlogCard({
  post,
  compact = false,
}: {
  post: BlogPost;
  compact?: boolean;
}) {
  return (
    <article className="group h-full overflow-hidden rounded-[30px] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative overflow-hidden">
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={820}
            height={800}
            className={`w-full object-cover  ${
              compact ? "h-72" : "h-72 md:h-80 lg:h-[360px]"
            }`}
          />
        </Link>

        <svg
          viewBox="0 0 500 60"
          preserveAspectRatio="none"
          className="absolute bottom-[-1px] left-0 z-10 h-12 w-full"
          aria-hidden
        >
          <path
            d="M0,35 C80,55 150,10 250,32 C340,52 420,18 500,35 L500,60 L0,60 Z"
            className="fill-[#EAF3FF] transition-colors duration-300 group-hover:fill-[#4A5D8C]"
          />
        </svg>
      </div>

      <div className="relative bg-[#EAF3FF] px-6 pb-6 pt-4 transition-colors duration-300 group-hover:bg-[#4A5D8C]">
        <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-ink/48 transition-colors duration-300 group-hover:text-white/75">
          <span className="rounded-full bg-white px-3 py-1.5 text-brand transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
            {post.category}
          </span>

          <span className="transition-colors duration-300 group-hover:text-white/75">
            {post.date}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-black leading-tight text-ink transition-colors duration-300 group-hover:text-white">
          <Link
            href={`/blog/${post.slug}`}
            className="focus-ring transition-colors duration-300 group-hover:text-white hover:text-white"
          >
            {post.title}
          </Link>
        </h3>

        <div className="mt-5 flex items-center justify-between gap-4">
          <Link
            href={`/blog/${post.slug}`}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#4A5D8C]"
          >
            Read More
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>

          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.14em] text-ink/35 transition-colors duration-300 group-hover:text-white/70">
            <Clock3 className="h-3.5 w-3.5" aria-hidden />
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}