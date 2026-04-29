import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { ProductTabs } from "@/components/product/product-tabs";
import { RelatedProducts } from "@/components/product/related-products";
import { getProductBySlug, getRelatedProducts } from "@/data/shop-data";

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);

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
        <section className="container-px py-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
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
