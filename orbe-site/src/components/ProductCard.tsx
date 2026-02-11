"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { addToSelection, isSelected, removeFromSelection } from "@/lib/selection";
import { useEffect, useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(isSelected(product.id));
  }, [product.id]);

  function toggle() {
    if (selected) {
      removeFromSelection(product.id);
      setSelected(false);
    } else {
      addToSelection(product.id);
      setSelected(true);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/25 transition">
      <Link href={product.href} className="block">
        <div className="aspect-[4/3] w-full bg-black/20 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover opacity-95 hover:scale-[1.02] transition duration-700"
          />
        </div>
        <div className="p-5">
          <p className="text-xs tracking-[0.35em] uppercase text-white/60">{product.categoryLabel}</p>
          <p className="mt-2 text-lg font-light text-white/85">{product.name}</p>
          <p className="mt-2 text-sm text-white/55">
            Código: <span className="text-white/75">{product.sku}</span>
          </p>
        </div>
      </Link>

      <div className="px-5 pb-5">
        <button
          onClick={toggle}
          className={`w-full rounded-full px-4 py-2 text-xs transition ${
            selected
              ? "border border-white/20 bg-white/10 text-white/85 hover:bg-white/15"
              : "border border-white/12 bg-white/5 text-white/70 hover:border-white/25 hover:text-white"
          }`}
        >
          {selected ? "Adicionado à Seleção" : "Adicionar à Seleção"}
        </button>
      </div>
    </div>
  );
}
