"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FilterDrawer } from "@/components/shop/filter-drawer";
import { CategorySidebar } from "@/components/shop/category-sidebar";
import { ProductToolbar } from "@/components/shop/product-toolbar";
import { ProductGrid } from "@/components/shop/product-grid";
import {
  formatCurrency,
  getCollection,
  getDisplayPrice,
  type ProductType,
  type ShopCategorySlug,
  type ShopProduct
} from "@/data/shop-data";

type CategoryPageContentProps = {
  categorySlug: ShopCategorySlug;
  subcategorySlug: string;
  products: ShopProduct[];
};

export function CategoryPageContent({ categorySlug, subcategorySlug, products }: CategoryPageContentProps) {
  const collection = getCollection(categorySlug, subcategorySlug);
  const [selectedTypes, setSelectedTypes] = useState<ProductType[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);
  const [minimumRating, setMinimumRating] = useState(0);
  const [sort, setSort] = useState("featured");
  const [columns, setColumns] = useState<2 | 3 | 4>(3);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let next = [...products];

    next = next.filter((product) => {
      const price = getDisplayPrice(product);
      if (price < minPrice || price > maxPrice) return false;
      if (selectedTypes.length && !selectedTypes.includes(product.productType)) return false;
      if (selectedAvailability.includes("in-stock") && !product.inStock) return false;
      if (selectedAvailability.includes("out-of-stock") && product.inStock) return false;
      if (product.rating < minimumRating) return false;
      return true;
    });

    switch (sort) {
      case "price-low":
        next.sort((a, b) => getDisplayPrice(a) - getDisplayPrice(b));
        break;
      case "price-high":
        next.sort((a, b) => getDisplayPrice(b) - getDisplayPrice(a));
        break;
      case "newest":
        next.sort((a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)));
        break;
      case "best-rated":
        next.sort((a, b) => b.rating - a.rating);
        break;
      default:
        next.sort((a, b) => Number(Boolean(b.bestSeller)) - Number(Boolean(a.bestSeller)));
    }

    return next;
  }, [products, minPrice, maxPrice, selectedTypes, selectedAvailability, minimumRating, sort]);

  const sidebar = (
    <CategorySidebar
      activeCategorySlug={categorySlug}
      activeSubcategorySlug={subcategorySlug}
      selectedTypes={selectedTypes}
      selectedAvailability={selectedAvailability}
      minPrice={minPrice}
      maxPrice={maxPrice}
      minimumRating={minimumRating}
      onTypeToggle={(value) => setSelectedTypes((current) => (current.includes(value) ? current.filter((item) => item !== value) : [...current, value]))}
      onAvailabilityToggle={(value) =>
        setSelectedAvailability((current) => (current.includes(value) ? current.filter((item) => item !== value) : [...current, value]))
      }
      onMinPriceChange={setMinPrice}
      onMaxPriceChange={setMaxPrice}
      onRatingChange={setMinimumRating}
    />
  );

  return (
    <section className="container-px py-10">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm font-black text-ink/52">
        <Link href="/" className="focus-ring hover:text-brand">Home</Link> /{" "}
        <Link href="/shop" className="focus-ring hover:text-brand">Shop</Link> /{" "}
        <span>{collection?.categoryTitle}</span> / <span>{collection?.title}</span>
      </nav>

      <div className="mb-8 overflow-hidden rounded-[34px] bg-white shadow-soft lg:grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="p-6 md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-brand">{collection?.categoryTitle}</p>
          <h1 className="mt-3 text-4xl font-black text-ink md:text-5xl">{collection?.title}</h1>
          <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-ink/62">{collection?.description}</p>
          <p className="mt-6 text-sm font-black text-ink/55">Price range: {formatCurrency(minPrice)} - {formatCurrency(maxPrice)}</p>
        </div>
        {collection ? (
          <div className="min-h-[260px] bg-cover bg-center" style={{ backgroundImage: `url(${collection.image})` }} aria-hidden />
        ) : null}
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <div className="hidden lg:block">{sidebar}</div>
        <div>
          <ProductToolbar
            total={filteredProducts.length}
            sort={sort}
            onSortChange={setSort}
            columns={columns}
            onColumnsChange={setColumns}
            onOpenFilters={() => setDrawerOpen(true)}
          />
          {filteredProducts.length ? (
            <ProductGrid products={filteredProducts} columns={columns} />
          ) : (
            <div className="rounded-[30px] bg-white p-10 text-center shadow-card">
              <h2 className="text-2xl font-black text-ink">No products match your filters</h2>
              <p className="mt-3 text-sm font-semibold text-ink/58">Try adjusting filters or browse another collection.</p>
            </div>
          )}
        </div>
      </div>

      <FilterDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {sidebar}
      </FilterDrawer>
    </section>
  );
}
