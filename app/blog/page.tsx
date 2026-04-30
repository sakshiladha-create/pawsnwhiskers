import { BlogGrid } from "@/components/blog/blog-grid";
import { FeaturedPost } from "@/components/blog/featured-post";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { getAllBlogPosts, getFeaturedBlogPost, getLatestBlogPosts } from "@/data/blog-data";

export default function BlogPage() {
  const featuredPost = getFeaturedBlogPost();
  const posts = getAllBlogPosts().filter((post) => post.id !== featuredPost.id);
  const latestPosts = getLatestBlogPosts(4);

  return (
    <>
      <TopBar />
      <Header />
      <main>
        <PageBanner
          title="Blog"
          subtitle="Pet care tips, product guides, and playful ideas for everyday pet parents."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          variant="blog"
        />
        <FeaturedPost post={featuredPost} />
        <BlogGrid posts={posts} latestPosts={latestPosts} />
      </main>
      <Footer />
    </>
  );
}
