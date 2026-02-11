import ProductGrid from "@/components/ProductGrid";
import { allProducts } from "@/lib/products";

export default function ColecoesPage() {
  return (
    <div className="py-10 pb-16">
      <div className="flex flex-col gap-2">
        <p className="text-xs tracking-[0.35em] uppercase text-white/60">Catálogo</p>
        <h1 className="text-3xl sm:text-4xl font-light">Coleções</h1>
        <p className="mt-1 text-white/60 max-w-2xl">
          Explore a seleção ORBE. Adicione peças à sua Seleção e reserve no Instagram.
        </p>
      </div>

      <div className="mt-8">
        <ProductGrid products={allProducts} />
      </div>
    </div>
  );
}
