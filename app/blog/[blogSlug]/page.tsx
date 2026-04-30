import Link from "next/link";
import { BlogArticleContent } from "@/components/blog/blog-article-content";
import { BlogDetailHeader } from "@/components/blog/blog-detail-header";
import { RelatedPosts } from "@/components/blog/related-posts";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { blogPosts, getAllBlogPosts, getBlogCategoriesWithCount, getBlogPostBySlug, getLatestBlogPosts, getRelatedBlogPosts } from "@/data/blog-data";
import { blogPostingSchema, breadcrumbSchema, createSeoMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ blogSlug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const { blogSlug } = await params;
  const post = getBlogPostBySlug(blogSlug);

  if (!post) {
    return createSeoMetadata({
      title: "Pet Care Article",
      description: "Browse helpful pet care articles about dog essentials, cat essentials, nutrition, grooming, travel, and pet wellness.",
      path: `/blog/${blogSlug}`
    });
  }

  return createSeoMetadata({
    title: post.title,
    description: post.excerpt.slice(0, 158),
    path: `/blog/${post.slug}`,
    image: post.image
  });
}

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const { blogSlug } = await params;
  const post = getBlogPostBySlug(blogSlug);
  const orderedPosts = getAllBlogPosts();
  const currentIndex = post ? orderedPosts.findIndex((entry) => entry.slug === post.slug) : -1;
  const previousPost = currentIndex >= 0 ? orderedPosts[currentIndex + 1] ?? null : null;
  const nextPost = currentIndex > 0 ? orderedPosts[currentIndex - 1] ?? null : null;
  const schemas = post
    ? [
        blogPostingSchema(post),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` }
        ])
      ]
    : null;

  return (
    <>
      <TopBar />
      <Header />
      <main>
        {post ? (
          <>
            <PageBanner
              title={post.title}
              subtitle={post.excerpt}
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title }
              ]}
              backgroundImage={post.image}
              variant="blog"
            />
            <script
              type="application/ld+json"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <BlogDetailHeader post={post} />
            <BlogArticleContent
              post={post}
              latestPosts={getLatestBlogPosts(4)}
              categories={getBlogCategoriesWithCount()}
              previousPost={previousPost}
              nextPost={nextPost}
            />
            <RelatedPosts posts={getRelatedBlogPosts(post, 3)} />
          </>
        ) : (
          <section className="container-px py-20">
            <div className="mx-auto max-w-3xl rounded-[34px] bg-white p-10 text-center shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">Blog not found</p>
              <h1 className="mt-3 text-4xl font-black text-ink">We could not find that article.</h1>
              <p className="mt-4 text-sm font-semibold text-ink/60">Try browsing the latest pet care stories instead.</p>
              <Link href="/blog" className="focus-ring mt-6 inline-flex rounded-full bg-brand px-6 py-3 font-black text-white transition hover:bg-ink">
                Back to Blog
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
