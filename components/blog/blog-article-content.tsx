import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog-data";

export function BlogArticleContent({
  post,
  latestPosts,
  categories
}: {
  post: BlogPost;
  latestPosts: BlogPost[];
  categories: Array<{ category: string; count: number }>;
}) {
  return (
    <section className="container-px pb-12">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
        <article className="rounded-[34px] bg-white p-6 shadow-card md:p-8 lg:p-10">
          <div className="max-w-none">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2 key={index} className="mt-10 text-3xl font-black text-ink first:mt-0">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <p key={index} className="mt-5 text-base font-semibold leading-8 text-ink/70">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={index} className="mt-5 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="rounded-[22px] bg-[#FFF7F0] px-5 py-4 text-sm font-bold text-ink/72">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "tip") {
                return (
                  <div key={index} className="mt-6 rounded-[26px] bg-[#FBE4D7] p-5">
                    <p className="text-sm font-black uppercase tracking-[0.14em] text-brand">{block.title}</p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-ink/72">{block.text}</p>
                  </div>
                );
              }

              return (
                <blockquote key={index} className="mt-6 rounded-[26px] border border-brand/15 bg-white px-6 py-5 text-lg font-black italic leading-8 text-ink">
                  {block.text}
                </blockquote>
              );
            })}
          </div>
        </article>

        <aside className="space-y-5 xl:sticky xl:top-28 xl:self-start">
          <div className="rounded-[28px] bg-white p-5 shadow-card">
            <h2 className="text-xl font-black text-ink">Latest Posts</h2>
            <div className="mt-4 space-y-4">
              {latestPosts.map((entry) => (
                <div key={entry.id}>
                  <p className="text-[11px] font-black uppercase tracking-[0.12em] text-brand">{entry.category}</p>
                  <Link href={`/blog/${entry.slug}`} className="focus-ring mt-1 block text-sm font-black leading-5 text-ink transition hover:text-brand">
                    {entry.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-5 shadow-card">
            <h2 className="text-xl font-black text-ink">Categories</h2>
            <div className="mt-4 space-y-3">
              {categories.map((entry) => (
                <div key={entry.category} className="flex items-center justify-between text-sm font-bold text-ink/68">
                  <span>{entry.category}</span>
                  <span className="rounded-full bg-cream px-3 py-1 text-xs font-black text-ink">{entry.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-5 shadow-card">
            <h2 className="text-xl font-black text-ink">Popular Tags</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#FFF7F0] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-brand">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-brand p-5 text-white shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-white/72">Shop Essentials</p>
            <h2 className="mt-2 text-2xl font-black">Bring the article to life at home.</h2>
            <p className="mt-3 text-sm font-semibold leading-7 text-white/86">Browse elevated beds, feeders, toys, and grooming picks chosen for real daily routines.</p>
            <Link href="/shop" className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-white">
              Explore Shop
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
