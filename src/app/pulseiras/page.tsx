import ProductGrid from "@/components/ProductGrid";
import { productsByCategory } from "@/lib/products";

export default function PulseirasPage() {
  const products = productsByCategory("pulseiras");
  return (
    <div className="py-10 pb-16">
      <p className="text-xs tracking-[0.35em] uppercase text-white/60">Categoria</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-light">Pulseiras</h1>
      <p className="mt-2 text-white/60 max-w-2xl">
        15 peças disponíveis no catálogo inicial. Sem preço no site — reserva exclusiva via Instagram.
      </p>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
