import Link from "next/link";
import { BlogArticleContent } from "@/components/blog/blog-article-content";
import { BlogDetailHeader } from "@/components/blog/blog-detail-header";
import { RelatedPosts } from "@/components/blog/related-posts";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { getAllBlogPosts, getBlogCategoriesWithCount, getBlogPostBySlug, getLatestBlogPosts, getRelatedBlogPosts } from "@/data/blog-data";

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

  return (
    <>
      <TopBar />
      <Header />
      <main>
        {post ? (
          <>
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
