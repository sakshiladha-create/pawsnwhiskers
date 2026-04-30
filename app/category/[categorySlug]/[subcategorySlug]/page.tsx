import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { CategoryPageContent } from "@/components/shop/category-page-content";
import { getCollection, getProductsByCollection } from "@/data/shop-data";

export default async function CategoryCollectionPage({
  params
}: {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>;
}) {
  const { categorySlug, subcategorySlug } = await params;
  const collection = getCollection(categorySlug, subcategorySlug);
  if (!collection) notFound();

  const products = getProductsByCollection(categorySlug, subcategorySlug);

  return (
    <>
      <TopBar />
      <Header />
      <main>
        <PageBanner
          title={collection.title}
          subtitle={collection.description}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: collection.title }
          ]}
          backgroundImage={collection.image}
          variant="shop"
        />
        <CategoryPageContent categorySlug={collection.categorySlug} subcategorySlug={collection.subcategorySlug} products={products} />
      </main>
      <Footer />
    </>
  );
}
