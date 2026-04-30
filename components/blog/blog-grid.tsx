"use client";

import { useMemo, useState } from "react";
import { PawPrint, Send } from "lucide-react";
import { type BlogCategory, type BlogPost } from "@/data/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogFilterTabs } from "@/components/blog/blog-filter-tabs";
import { LatestPostsSidebar } from "@/components/blog/latest-posts-sidebar";
import { SectionReveal } from "@/components/home/section-reveal";

type FilterValue = "All" | BlogCategory;

const filterTabs: Array<{ label: string; value: FilterValue }> = [
  { label: "All", value: "All" },
  { label: "Cat Care", value: "Cat Essentials" },
  { label: "Dog Care", value: "Dog Essentials" },
  { label: "Nutrition", value: "Food" },
  { label: "Grooming", value: "Grooming" },
  { label: "Training", value: "Travel" }
];

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
          <div className="mb-8 flex flex-col gap-5">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Browse articles</p>
              <h2 className="mt-2 text-4xl font-black text-[#4C6795] md:text-5xl">Fresh ideas for everyday pet care</h2>
            </div>
            <BlogFilterTabs value={activeFilter} options={filterTabs} onChange={setActiveFilter} />
          </div>
          <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-2">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} compact />
            ))}
          </div>
          <div className="relative mt-10 overflow-hidden rounded-[30px] bg-[#4C6795] p-7 text-white shadow-soft md:p-9">
            <PawPrint className="absolute right-6 top-5 h-20 w-20 rotate-12 fill-current text-white/10" aria-hidden />
            <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Pet parent notes</p>
            <h3 className="mt-2 text-3xl font-black">Get cheerful care tips in your inbox.</h3>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-white/78">
              Snack ideas, grooming reminders, travel prep, and playful reads for easier everyday pet care.
            </p>
            <a href="/contact-us" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#4C6795] transition hover:bg-brand hover:text-white">
              Ask Our Team
              <Send className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
        <div>
          <LatestPostsSidebar posts={latestPosts} />
        </div>
      </div>
    </SectionReveal>
  );
}
