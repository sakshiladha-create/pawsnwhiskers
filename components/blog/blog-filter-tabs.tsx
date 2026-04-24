"use client";

import type { BlogCategory } from "@/data/blog-data";

type FilterValue = "All" | BlogCategory;

export function BlogFilterTabs({
  value,
  options,
  onChange
}: {
  value: FilterValue;
  options: FilterValue[];
  onChange: (value: FilterValue) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`focus-ring rounded-full px-4 py-2.5 text-sm font-black transition ${
            value === option ? "bg-brand text-white shadow-card" : "bg-white text-ink hover:bg-cream"
          }`}
          aria-pressed={value === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
