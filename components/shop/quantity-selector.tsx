"use client";

import { Minus, Plus } from "lucide-react";

type QuantitySelectorProps = {
  value: number;
  onChange: (value: number) => void;
};

export function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-black/10 bg-white p-1 shadow-card">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-cream"
        onClick={() => onChange(value - 1)}
      >
        <Minus className="h-4 w-4" aria-hidden />
      </button>
      <span className="min-w-10 text-center text-sm font-black text-ink">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-cream"
        onClick={() => onChange(value + 1)}
      >
        <Plus className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
