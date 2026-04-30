import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-data";

export function LatestPostsSidebar({ posts, title = "Latest Posts" }: { posts: BlogPost[]; title?: string }) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-28">
      <div className="rounded-[28px] bg-white p-5 shadow-card">
        <h2 className="text-xl font-black text-ink">{title}</h2>
        <div className="mt-5 space-y-4">
          {posts.map((post) => (
            <article key={post.id} className="grid grid-cols-[88px_1fr] gap-3">
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-[18px]">
                <Image src={post.image} alt={post.imageAlt} width={176} height={176} className="h-[88px] w-[88px] object-cover transition duration-300 hover:scale-105" />
              </Link>
              <div className="min-w-0">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-brand">{post.category}</p>
                <h3 className="mt-1 line-clamp-2 text-sm font-black leading-5 text-ink">
                  <Link href={`/blog/${post.slug}`} className="focus-ring transition hover:text-brand">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-1 text-xs font-bold text-ink/45">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
