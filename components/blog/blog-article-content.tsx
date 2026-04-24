import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog-data";

export function BlogArticleContent({
  post,
  latestPosts,
  categories,
  previousPost,
  nextPost
}: {
  post: BlogPost;
  latestPosts: BlogPost[];
  categories: Array<{ category: string; count: number }>;
  previousPost?: BlogPost | null;
  nextPost?: BlogPost | null;
}) {
  return (
    <section className="container-px pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 xl:grid-cols-[minmax(0,780px)_300px]">
        <article className="min-w-0">
          <div className="rounded-[30px] bg-white p-7 shadow-card md:p-10">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2 key={index} className="mt-12 text-3xl font-black leading-tight text-ink first:mt-0 md:text-4xl">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <p key={index} className="mt-6 text-[17px] font-medium leading-9 text-ink/72">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={index} className="mt-7 space-y-4">
                    {block.items.map((item) => (
                      <li key={item} className="rounded-[24px] bg-[#FFF7F0] px-5 py-4 text-base font-semibold leading-7 text-ink/74">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "tip") {
                return (
                  <div key={index} className="mt-8 rounded-[26px] border border-brand/10 bg-[#FBE4D7] px-6 py-6">
                    <p className="text-sm font-black uppercase tracking-[0.14em] text-brand">{block.title}</p>
                    <p className="mt-3 text-base font-medium leading-8 text-ink/72">{block.text}</p>
                  </div>
                );
              }

              return (
                <blockquote key={index} className="mt-8 rounded-[26px] border-l-4 border-brand bg-[#FFF7F0] px-6 py-6 text-lg font-black italic leading-8 text-ink">
                  {block.text}
                </blockquote>
              );
            })}
          </div>

          {(previousPost || nextPost) ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div>
                {previousPost ? (
                  <Link href={`/blog/${previousPost.slug}`} className="focus-ring block ">
                    <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-brand">
                      <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
                      Previous Article
                    </p>
                  </Link>
                ) : null}
              </div>
              <div>
                {nextPost ? (
                  <Link href={`/blog/${nextPost.slug}`} className="focus-ring block text-left  md:text-right">
                    <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-brand md:ml-auto">
                      Next Article
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </p>
                  </Link>
                ) : null}
              </div>
            </div>
          ) : null}
        </article>

        <aside className="space-y-5 xl:sticky xl:top-28 xl:self-start">
          <div className="rounded-[26px] bg-white p-5 shadow-card">
            <h2 className="text-lg font-black text-ink">Latest Posts</h2>
            <div className="mt-4 space-y-4">
              {latestPosts.map((entry) => (
                <div key={entry.id} className="border-b border-black/6 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-[11px] font-black uppercase tracking-[0.12em] text-brand">{entry.date}</p>
                  <Link href={`/blog/${entry.slug}`} className="focus-ring mt-1 block text-sm font-black leading-6 text-ink transition hover:text-brand">
                    {entry.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] bg-white p-5 shadow-card">
            <h2 className="text-lg font-black text-ink">Categories</h2>
            <div className="mt-4 space-y-3">
              {categories.map((entry) => (
                <div key={entry.category} className="flex items-center justify-between text-sm font-semibold text-ink/70">
                  <span>{entry.category}</span>
                  <span className="rounded-full bg-cream px-3 py-1 text-xs font-black text-ink">{entry.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] bg-white p-5 shadow-card">
            <h2 className="text-lg font-black text-ink">Tags</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#FFF7F0] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-brand">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
