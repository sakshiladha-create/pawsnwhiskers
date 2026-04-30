import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-data";
import { collections, products } from "@/data/shop-data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about-us"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact-us"), changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/shop"), changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/blog"), changeFrequency: "weekly", priority: 0.8 }
  ];

  const categoryRoutes: MetadataRoute.Sitemap = collections.map((collection) => ({
    url: absoluteUrl(`/category/${collection.categorySlug}/${collection.subcategorySlug}`),
    changeFrequency: "weekly",
    priority: 0.75
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: absoluteUrl(`/product/${product.slug}`),
    changeFrequency: "weekly",
    priority: product.bestSeller ? 0.85 : 0.7
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: post.featured ? 0.75 : 0.65
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
