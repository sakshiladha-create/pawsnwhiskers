import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { ProductTabs } from "@/components/product/product-tabs";
import { RelatedProducts } from "@/components/product/related-products";
import { getProductBySlug, getRelatedProducts, products } from "@/data/shop-data";
import { breadcrumbSchema, createSeoMetadata, productSchema, productSeoDescription } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ productSlug: product.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);

  if (!product) {
    return createSeoMetadata({
      title: "Pet Product",
      description: "Shop pet food, dog essentials, cat essentials, toys, beds, grooming supplies, wellness care, and flea and tick products.",
      path: `/product/${productSlug}`
    });
  }

  return createSeoMetadata({
    title: `${product.name} | ${product.categoryTitle}`,
    description: productSeoDescription(product).slice(0, 158),
    path: `/product/${product.slug}`,
    image: product.image
  });
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);
  const schemas = [
    productSchema(product),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Shop", path: "/shop" },
      { name: product.name, path: `/product/${product.slug}` }
    ])
  ];

  return (
    <>
      <TopBar />
      <Header />
      <main>
        <PageBanner
          title={product.name}
          subtitle="Premium pet essentials made for comfort, care, and everyday joy."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: product.name }
          ]}
          backgroundImage={product.image}
          variant="shop"
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
        <section className="container-px py-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>
          <ProductTabs product={product} />
        </section>
        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer />
    </>
  );
}
