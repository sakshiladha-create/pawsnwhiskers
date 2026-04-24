import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
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
        <section className="container-px py-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm font-black text-ink/52">
            <Link href="/" className="focus-ring hover:text-brand">Home</Link> /{" "}
            <Link href="/shop" className="focus-ring hover:text-brand">Shop</Link> /{" "}
            <Link href={`/category/${product.categorySlug}/${product.subcategorySlug}`} className="focus-ring hover:text-brand">
              {product.subcategoryTitle}
            </Link> / <span>{product.name}</span>
          </nav>
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
