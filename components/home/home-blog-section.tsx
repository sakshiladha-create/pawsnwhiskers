import { ArrowRight, ChevronLeft, ChevronRight, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getLatestBlogPosts } from "@/data/blog-data";
import { SectionReveal } from "@/components/home/section-reveal";

export function HomeBlogSection() {
  const posts = getLatestBlogPosts(3);

  return (
    <SectionReveal className="container-px py-12">
      <section className="relative overflow-hidden rounded-[36px] bg-[#FFF7F0] px-6 py-10 shadow-soft md:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-brand shadow-card">
              <span className="h-2.5 w-2.5 rounded-full bg-brand" aria-hidden />
              Our Blogs
            </div>
            <h2 className="mt-4 text-4xl font-black text-ink md:text-5xl">Helpful reads for happier pets.</h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            {[ChevronLeft, ChevronRight].map((Icon, index) => (
              <button
                key={index}
                type="button"
                aria-label={index === 0 ? "Previous articles" : "Next articles"}
                className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-card transition hover:bg-brand hover:text-white"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group h-full overflow-hidden rounded-[30px] bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-[26px]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={820}
                  height={620}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="px-2 pb-2 pt-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-brand">{post.category}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-ink">
                  <Link href={`/blog/${post.slug}`} className="focus-ring transition hover:text-brand">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-ink/60">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-ink"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-4 left-4 hidden items-end gap-2 lg:flex" aria-hidden>
          <PawPrint className="h-8 w-8 text-brand/25" />
          <div className="h-16 w-16 rounded-full bg-[#F8D8C8]" />
        </div>
      </section>
    </SectionReveal>
  );
}
