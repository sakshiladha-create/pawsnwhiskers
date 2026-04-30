import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageBanner } from "@/components/layout/page-banner";
import { TopBar } from "@/components/layout/top-bar";
import { CategoryPageContent } from "@/components/shop/category-page-content";
import { collections, getCollection, getProductsByCollection } from "@/data/shop-data";
import { breadcrumbSchema, collectionDescription, createSeoMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return collections.map((collection) => ({
    categorySlug: collection.categorySlug,
    subcategorySlug: collection.subcategorySlug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>;
}) {
  const { categorySlug, subcategorySlug } = await params;
  const collection = getCollection(categorySlug, subcategorySlug);

  if (!collection) {
    return createSeoMetadata({
      title: "Pet Supplies Collection",
      description: "Shop pet supplies, dog essentials, cat essentials, pet food, toys, beds, wellness products, and everyday care picks.",
      path: `/category/${categorySlug}/${subcategorySlug}`
    });
  }

  return createSeoMetadata({
    title: `${collection.title} | ${collection.categoryTitle}`,
    description: collectionDescription(collection).slice(0, 158),
    path: `/category/${collection.categorySlug}/${collection.subcategorySlug}`,
    image: collection.image
  });
}

export default async function CategoryCollectionPage({
  params
}: {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>;
}) {
  const { categorySlug, subcategorySlug } = await params;
  const collection = getCollection(categorySlug, subcategorySlug);
  if (!collection) notFound();

  const products = getProductsByCollection(categorySlug, subcategorySlug);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: collection.title, path: `/category/${collection.categorySlug}/${collection.subcategorySlug}` }
  ];

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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
        />
        <CategoryPageContent categorySlug={collection.categorySlug} subcategorySlug={collection.subcategorySlug} products={products} />
      </main>
      <Footer />
    </>
  );
}
