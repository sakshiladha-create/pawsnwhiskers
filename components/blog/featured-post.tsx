import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import type { BlogPost } from "@/data/blog-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <SectionReveal className="container-px py-12">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Recent Post</p>
        <h2 className="mt-2 text-4xl font-black text-ink md:text-5xl">Fresh reads from our pet desk</h2>
      </div>
      <article className="overflow-hidden rounded-[34px] bg-white shadow-soft lg:grid lg:grid-cols-[1.06fr_0.94fr]">
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
          <Image src={post.image} alt={post.imageAlt} width={1000} height={760} className="h-full min-h-[320px] w-full object-cover transition duration-500 hover:scale-105" />
        </Link>
        <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-ink/50">
            <span className="rounded-full bg-[#FBE4D7] px-3 py-1.5 text-brand">{post.category}</span>
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
            <Link href={`/blog/${post.slug}`} className="focus-ring inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-brand transition hover:text-ink">
              Read Article
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </article>
    </SectionReveal>
  );
}
