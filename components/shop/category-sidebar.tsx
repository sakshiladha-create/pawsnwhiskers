import Image from "next/image";
import Link from "next/link";
import {
  formatCurrency,
  getBestSellerProducts,
  getCollection,
  getDisplayPrice,
  getNewArrivalProducts,
  shopCategories,
  type ProductType,
  type ShopCategorySlug
} from "@/data/shop-data";

type CategorySidebarProps = {
  activeCategorySlug: ShopCategorySlug;
  activeSubcategorySlug: string;
  selectedTypes: ProductType[];
  selectedAvailability: string[];
  minPrice: number;
  maxPrice: number;
  minimumRating: number;
  onTypeToggle: (value: ProductType) => void;
  onAvailabilityToggle: (value: "in-stock" | "out-of-stock") => void;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
  onRatingChange: (value: number) => void;
};

const productTypes: ProductType[] = ["Food", "Toys", "Beds", "Accessories", "Health", "Grooming"];

export function CategorySidebar(props: CategorySidebarProps) {
  const bestSellers = getBestSellerProducts();
  const newArrivals = getNewArrivalProducts();

  return (
    <aside className="space-y-5">
      <div className="rounded-[28px] bg-white p-5 shadow-card">
        <h2 className="text-lg font-black text-ink">Categories</h2>
        <div className="mt-4 space-y-4">
          {shopCategories.map((category) => (
            <div key={category.slug}>
              <h3 className="text-sm font-black uppercase tracking-[0.12em] text-brand">{category.title}</h3>
              <ul className="mt-2 space-y-1">
                {category.subcategories.map((sub) => {
                  const collection = getCollection(category.slug, sub.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
                  const subSlug = collection?.subcategorySlug ?? sub.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                  const isActive = props.activeCategorySlug === category.slug && props.activeSubcategorySlug === subSlug;
                  return (
                    <li key={sub}>
                      <Link
                        href={`/category/${category.slug}/${subSlug}`}
                        className={`focus-ring block rounded-2xl px-3 py-2 text-sm font-bold transition ${
                          isActive ? "bg-cream text-ink" : "text-ink/65 hover:bg-cream hover:text-ink"
                        }`}
                      >
                        {sub}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {[{ title: "Best Sellers", items: bestSellers }, { title: "New Arrivals", items: newArrivals }].map((group) => (
        <div key={group.title} className="rounded-[28px] bg-white p-5 shadow-card">
          <h2 className="text-lg font-black text-ink">{group.title}</h2>
          <div className="mt-4 space-y-4">
            {group.items.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="focus-ring flex gap-3">
                <Image src={product.image} alt={product.alt} width={80} height={80} className="h-20 w-20 rounded-2xl object-cover" />
                <div>
                  <p className="text-sm font-black leading-5 text-ink">{product.name}</p>
                  <p className="mt-2 text-sm font-black text-brand">{formatCurrency(getDisplayPrice(product))}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-[28px] bg-white p-5 shadow-card">
        <h2 className="text-lg font-black text-ink">Filter By</h2>
        <div className="mt-5 space-y-5">
          <div>
            <label className="text-sm font-black text-ink" htmlFor="min-price">
              Min Price
            </label>
            <input
              id="min-price"
              type="range"
              min={0}
              max={150}
              value={props.minPrice}
              onChange={(event) => props.onMinPriceChange(Number(event.target.value))}
              className="mt-2 w-full accent-brand"
            />
            <p className="text-sm font-bold text-ink/55">{formatCurrency(props.minPrice)}</p>
          </div>
          <div>
            <label className="text-sm font-black text-ink" htmlFor="max-price">
              Max Price
            </label>
            <input
              id="max-price"
              type="range"
              min={0}
              max={150}
              value={props.maxPrice}
              onChange={(event) => props.onMaxPriceChange(Number(event.target.value))}
              className="mt-2 w-full accent-brand"
            />
            <p className="text-sm font-bold text-ink/55">{formatCurrency(props.maxPrice)}</p>
          </div>
          <fieldset>
            <legend className="text-sm font-black text-ink">Availability</legend>
            <div className="mt-3 space-y-2">
              {[
                { value: "in-stock", label: "In stock" },
                { value: "out-of-stock", label: "Out of stock" }
              ].map((item) => (
                <label key={item.value} className="flex items-center gap-2 text-sm font-bold text-ink/65">
                  <input
                    type="checkbox"
                    checked={props.selectedAvailability.includes(item.value)}
                    onChange={() => props.onAvailabilityToggle(item.value as "in-stock" | "out-of-stock")}
                    className="accent-brand"
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-sm font-black text-ink">Product Type</legend>
            <div className="mt-3 space-y-2">
              {productTypes.map((type) => (
                <label key={type} className="flex items-center gap-2 text-sm font-bold text-ink/65">
                  <input type="checkbox" checked={props.selectedTypes.includes(type)} onChange={() => props.onTypeToggle(type)} className="accent-brand" />
                  {type}
                </label>
              ))}
            </div>
          </fieldset>
          <div>
            <label className="text-sm font-black text-ink" htmlFor="rating-filter">
              Rating
            </label>
            <select
              id="rating-filter"
              className="focus-ring mt-2 min-h-12 w-full rounded-2xl border border-black/10 bg-cream px-4 font-bold text-ink"
              value={props.minimumRating}
              onChange={(event) => props.onRatingChange(Number(event.target.value))}
            >
              <option value={0}>All ratings</option>
              <option value={4}>4 stars & up</option>
              <option value={4.5}>4.5 stars & up</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
