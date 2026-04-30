"use client";

import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import type { BlogCategory } from "@/data/blog-data";

type FilterValue = "All" | BlogCategory;

const tabStyles: Record<string, { inactive: string; active: string; hover: string }> = {
  All: {
    inactive: "bg-[#FFF5EE] text-[#4C6795]",
    active: "bg-[#4C6795]",
    hover: "hover:bg-[#4C6795] hover:text-white"
  },
  "Cat Care": {
    inactive: "bg-[#F3E8FF] text-[#7C3AED]",
    active: "bg-[#7C3AED]",
    hover: "hover:bg-[#7C3AED] hover:text-white"
  },
  "Dog Care": {
    inactive: "bg-[#E0F2FE] text-[#0284C7]",
    active: "bg-[#0284C7]",
    hover: "hover:bg-[#0284C7] hover:text-white"
  },
  Nutrition: {
    inactive: "bg-[#ECFDF5] text-[#059669]",
    active: "bg-[#059669]",
    hover: "hover:bg-[#059669] hover:text-white"
  },
  Grooming: {
    inactive: "bg-[#FFF5EE] text-[#DA8A70]",
    active: "bg-[#DA8A70]",
    hover: "hover:bg-[#DA8A70] hover:text-white"
  },
  Training: {
    inactive: "bg-[#FEF3C7] text-[#F59E0B]",
    active: "bg-[#F59E0B]",
    hover: "hover:bg-[#F59E0B] hover:text-white"
  }
};

export function BlogFilterTabs({
  value,
  options,
  onChange
}: {
  value: FilterValue;
  options: Array<{ label: string; value: FilterValue }>;
  onChange: (value: FilterValue) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 rounded-[28px]  md:justify-start">
      {options.map((option) => {
        const isActive = value === option.value;
        const style = tabStyles[option.label] ?? tabStyles.All;

        return (
          <motion.button
            key={option.label}
            type="button"
            onClick={() => onChange(option.value)}
            className={`relative flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition ${
              isActive
                ? "text-white shadow-[0_6px_18px_rgba(0,0,0,0.12)]"
                : `${style.inactive} ${style.hover} shadow-[0_6px_18px_rgba(0,0,0,0.06)]`
            }`}
            aria-pressed={isActive}
            whileHover={{ scale: 1.04, rotate: isActive ? 0 : -1.5 }}
            whileTap={{ scale: 0.96 }}
          >
            {isActive ? (
              <motion.span
                className={`absolute inset-0 rounded-full ${style.active}`}
                layoutId="blog-filter-active"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            <PawPrint className="relative z-10 h-4 w-4 fill-current" aria-hidden />
            <span className="relative z-10">{option.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
