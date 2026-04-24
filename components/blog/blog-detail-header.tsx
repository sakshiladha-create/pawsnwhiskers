import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-data";

export function BlogDetailHeader({ post }: { post: BlogPost }) {
  return (
    <section className="container-px py-10 md:py-12">
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm font-black text-ink/52">
          <Link href="/" className="focus-ring hover:text-brand">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/blog" className="focus-ring hover:text-brand">
            Blog
          </Link>{" "}
          / <span>{post.title}</span>
        </nav>

        <div className="mt-8 text-center">
          <span className="inline-flex rounded-full bg-[#FBE4D7] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-brand">
            {post.category}
          </span>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-ink/42">
            {post.date} / By {post.author} / {post.readTime}
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight text-ink md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-8 text-ink/62 md:text-lg">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[30px] bg-white shadow-soft">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1500}
            height={900}
            className="aspect-[1.9/1] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
