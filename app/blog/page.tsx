import { BlogGrid } from "@/components/blog/blog-grid";
import { FeaturedPost } from "@/components/blog/featured-post";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { getAllBlogPosts, getFeaturedBlogPost, getLatestBlogPosts } from "@/data/blog-data";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Pet Care Blog | Tips for Dogs, Cats & Pet Parents",
  description: "Read helpful pet care tips for dog essentials, cat essentials, nutrition, grooming, flea and tick care, travel, and pet wellness.",
  path: "/blog"
});

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
          title="Happy Tails & Pet Stories"
          subtitle="Tips, treats, and playful ideas to make every pet moment better."
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
