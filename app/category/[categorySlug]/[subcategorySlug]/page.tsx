import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
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
        <CategoryPageContent categorySlug={collection.categorySlug} subcategorySlug={collection.subcategorySlug} products={products} />
      </main>
      <Footer />
    </>
  );
}
