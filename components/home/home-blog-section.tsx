import { getLatestBlogPosts } from "@/data/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import { SectionReveal } from "@/components/home/section-reveal";

export function HomeBlogSection() {
  const posts = getLatestBlogPosts(3);

  return (
    <SectionReveal className="relative overflow-hidden bg-white py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 120"
          className="h-full w-full fill-[#EAF3FF]"
          preserveAspectRatio="none"
        >
          <path d="M0,35 C240,85 420,80 680,40 C920,5 1120,35 1440,25 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container-px relative z-10">
        <div className="text-center">
          <p className="mx-auto inline-block border-b-2 border-[#8DB9FF] text-lg font-black text-[#8DB9FF]">
            Our Blogs
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#4C6795] md:text-5xl">
            Latest News
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1440px] gap-7 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} compact />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}