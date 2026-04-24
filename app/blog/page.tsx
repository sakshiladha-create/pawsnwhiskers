import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogHero } from "@/components/blog/blog-hero";
import { FeaturedPost } from "@/components/blog/featured-post";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
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
        <BlogHero />
        <FeaturedPost post={featuredPost} />
        <BlogGrid posts={posts} latestPosts={latestPosts} />
      </main>
      <Footer />
    </>
  );
}
