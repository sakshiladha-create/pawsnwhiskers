import type { ShopProduct } from "@/data/shop-data";
import { ProductCard } from "@/components/shop/product-card";

export function ProductGrid({ products, columns }: { products: ShopProduct[]; columns: 2 | 3 | 4 }) {
  const columnsClass =
    columns === 2 ? "sm:grid-cols-2" : columns === 3 ? "sm:grid-cols-2 xl:grid-cols-3" : "sm:grid-cols-2 xl:grid-cols-4";

  return (
    <div className={`grid gap-5 ${columnsClass}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
