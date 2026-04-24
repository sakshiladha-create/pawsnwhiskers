import { LayoutGrid } from "lucide-react";
import { sortOptions } from "@/data/shop-data";

type ProductToolbarProps = {
  total: number;
  sort: string;
  onSortChange: (value: string) => void;
  columns: 2 | 3 | 4;
  onColumnsChange: (value: 2 | 3 | 4) => void;
  onOpenFilters: () => void;
};

export function ProductToolbar({
  total,
  sort,
  onSortChange,
  columns,
  onColumnsChange,
  onOpenFilters
}: ProductToolbarProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-[26px] bg-white p-4 shadow-card lg:flex-row lg:items-center lg:justify-between">
      <p className="text-sm font-black text-ink/65">Showing 1–{Math.min(12, total)} of {total} Results</p>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onOpenFilters}
          className="focus-ring rounded-full bg-cream px-5 py-3 text-sm font-black text-ink transition hover:bg-brand hover:text-white lg:hidden"
        >
          Filters
        </button>
        <label className="sr-only" htmlFor="sort-products">
          Sort products
        </label>
        <select
          id="sort-products"
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          className="focus-ring min-h-12 rounded-full border border-black/10 bg-cream px-4 font-black text-ink"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="inline-flex items-center rounded-full bg-cream p-1">
          {[2, 3, 4].map((value) => (
            <button
              key={value}
              type="button"
              aria-label={`Show ${value} columns`}
              className={`focus-ring flex h-10 w-10 items-center justify-center rounded-full transition ${
                columns === value ? "bg-brand text-white" : "text-ink hover:bg-white"
              }`}
              onClick={() => onColumnsChange(value as 2 | 3 | 4)}
            >
              <LayoutGrid className="h-4 w-4" aria-hidden />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
