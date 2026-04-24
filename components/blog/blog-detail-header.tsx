import Image from "next/image";
import Link from "next/link";
import { Clock3 } from "lucide-react";
import type { BlogPost } from "@/data/blog-data";

export function BlogDetailHeader({ post }: { post: BlogPost }) {
  return (
    <section className="container-px py-10">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm font-black text-ink/52">
        <Link href="/" className="focus-ring hover:text-brand">Home</Link> / <Link href="/blog" className="focus-ring hover:text-brand">Blog</Link> /{" "}
        <span>{post.title}</span>
      </nav>

      <div className="overflow-hidden rounded-[34px] bg-white shadow-soft">
        <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-ink/50">
              <span className="rounded-full bg-[#FBE4D7] px-3 py-1.5 text-brand">{post.category}</span>
              <span>{post.date}</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" aria-hidden />
                {post.readTime}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-ink md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-base font-semibold leading-8 text-ink/62">{post.excerpt}</p>
            <div className="mt-6 flex items-center gap-4">
              <Image src={post.authorAvatar} alt={post.author} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="text-sm font-black text-ink">{post.author}</p>
                <p className="text-sm font-bold text-ink/48">{post.authorRole}</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px]">
            <Image src={post.image} alt={post.imageAlt} width={1100} height={760} className="h-full min-h-[320px] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
