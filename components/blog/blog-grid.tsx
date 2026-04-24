"use client";

import { useMemo, useState } from "react";
import { blogFilterCategories, type BlogCategory, type BlogPost } from "@/data/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogFilterTabs } from "@/components/blog/blog-filter-tabs";
import { LatestPostsSidebar } from "@/components/blog/latest-posts-sidebar";
import { SectionReveal } from "@/components/home/section-reveal";

type FilterValue = "All" | BlogCategory;

export function BlogGrid({ posts, latestPosts }: { posts: BlogPost[]; latestPosts: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const filteredPosts = useMemo(() => {
    if (activeFilter === "All") return posts;
    return posts.filter((post) => post.category === activeFilter);
  }, [activeFilter, posts]);

  return (
    <SectionReveal className="container-px py-12">
      <div className="grid gap-8 xl:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-6 flex flex-col gap-5 ">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Browse articles</p>
              <h2 className="mt-2 text-4xl font-black text-ink md:text-5xl">Fresh ideas for everyday pet care</h2>
            </div>
            <BlogFilterTabs value={activeFilter} options={blogFilterCategories} onChange={setActiveFilter} />
          </div>
          <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-2">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} compact />
            ))}
          </div>
        </div>
        <div>
          <LatestPostsSidebar posts={latestPosts} />
        </div>
      </div>
    </SectionReveal>
  );
}
