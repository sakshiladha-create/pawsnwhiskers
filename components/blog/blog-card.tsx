import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import type { BlogPost } from "@/data/blog-data";

export function BlogCard({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  return (
    <article className="group h-full overflow-hidden rounded-[30px] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          width={820}
          height={560}
          className={`w-full object-cover transition duration-500 group-hover:scale-105 ${compact ? "h-56" : "h-64"}`}
        />
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-ink/48">
          <span className="rounded-full bg-[#FBE4D7] px-3 py-1.5 text-brand">{post.category}</span>
          <span>{post.date}</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" aria-hidden />
            {post.readTime}
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-black leading-tight text-ink">
          <Link href={`/blog/${post.slug}`} className="focus-ring transition hover:text-brand">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-ink/62">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-black text-ink">{post.author}</p>
            <p className="truncate text-xs font-bold text-ink/48">{post.authorRole}</p>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-ink"
          >
            Read More
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
