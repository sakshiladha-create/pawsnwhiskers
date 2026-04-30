import type { Metadata } from "next";
import type { BlogPost } from "@/data/blog-data";
import type { ShopCollection, ShopProduct } from "@/data/shop-data";
import { formatCurrency, getDisplayPrice } from "@/data/shop-data";

export const siteConfig = {
  name: "Paws & Whiskers",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pawsnwhiskers.com",
  defaultImage: "/images/slider_1.webp",
  description:
    "Shop pet food, dog essentials, cat essentials, toys, beds, flea and tick care, and wellness supplies from a friendly online pet store."
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return new URL(path, siteConfig.url).toString();
}

type SeoMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  absoluteTitle?: boolean;
};

export function createSeoMetadata({ title, description, path = "/", image = siteConfig.defaultImage, noIndex, absoluteTitle }: SeoMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    },
    robots: noIndex ? { index: false, follow: false } : undefined
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/images/Pawlogo.png"),
    sameAs: []
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/shop?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function productSchema(product: ShopProduct) {
  const price = getDisplayPrice(product);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.gallery.map((image) => absoluteUrl(image)),
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: siteConfig.name
    },
    category: `${product.categoryTitle} > ${product.subcategoryTitle}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/product/${product.slug}`),
      priceCurrency: "USD",
      price: price.toFixed(2),
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition"
    }
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/Pawlogo.png")
      }
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };
}

export function collectionDescription(collection: ShopCollection) {
  return `${collection.description} Shop ${collection.title.toLowerCase()} with pet-parent approved quality, easy returns, and secure checkout.`;
}

export function productSeoDescription(product: ShopProduct) {
  return `${product.shortDescription} Shop ${product.name} for ${product.categoryTitle.toLowerCase()} with secure checkout, easy returns, and pet-parent approved care.`;
}

export function productPriceLabel(product: ShopProduct) {
  return formatCurrency(getDisplayPrice(product));
}
