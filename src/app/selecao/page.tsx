"use client";

import { useEffect, useMemo, useState } from "react";
import ReserveModal from "@/components/ReserveModal";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/lib/products";
import { getSelection, removeFromSelection, clearSelection } from "@/lib/selection";

export default function SelecaoPage() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    setIds(getSelection());
  }, []);

  const products = useMemo(() => {
    const set = new Set(ids);
    return allProducts.filter((p) => set.has(p.id));
  }, [ids]);

  function handleRemove(id: string) {
    removeFromSelection(id);
    setIds(getSelection());
  }

  function handleClear() {
    clearSelection();
    setIds([]);
  }

  return (
    <div className="py-10 pb-16">
      <p className="text-xs tracking-[0.35em] uppercase text-white/60">Wishlist</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-light">Minha Seleção</h1>
      <p className="mt-2 text-white/60 max-w-2xl">
        Revise suas peças e reserve com exclusividade no Instagram @orbe.world.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <ReserveModal products={products} primaryLabel="Reservar no Instagram" />
        <button
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm text-white/85 hover:border-white/30 hover:text-white transition"
        >
          Limpar seleção
        </button>
      </div>

      {products.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-white/70">Sua seleção está vazia.</p>
          <a
            href="/pulseiras"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
          >
            Explorar pulseiras
          </a>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.id} className="relative">
              <ProductCard product={p} />
              <button
                onClick={() => handleRemove(p.id)}
                className="mt-3 w-full rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-white/70 hover:border-white/25 hover:text-white transition"
              >
                Remover da Seleção
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
