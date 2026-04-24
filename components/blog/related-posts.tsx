import type { BlogPost } from "@/data/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import { SectionReveal } from "@/components/home/section-reveal";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;

  return (
    <SectionReveal className="container-px pb-14">
      <div className="mb-7">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Related Posts</p>
        <h2 className="mt-2 text-4xl font-black text-ink md:text-5xl">More helpful pet reads</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} compact />
        ))}
      </div>
    </SectionReveal>
  );
}
