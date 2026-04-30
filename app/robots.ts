import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/wishlist"]
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url
  };
}
