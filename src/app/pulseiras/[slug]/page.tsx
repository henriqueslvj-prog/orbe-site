import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import ReserveModal from "@/components/ReserveModal";
import { getProductBySlug } from "@/lib/products";

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <div className="py-10 pb-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <ProductGallery images={product.images} />
        </div>

        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-white/60">{product.categoryLabel}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-light">{product.name}</h1>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-white/70">
              Código: <span className="text-white/90">{product.sku}</span>
            </span>
            <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-white/70">
              Disponibilidade: <span className="text-white/90">{product.availability}</span>
            </span>
            <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-white/70">
              Acabamento premium
            </span>
          </div>

          <p className="mt-6 text-white/65 leading-relaxed">{product.description}</p>

          <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-white/50">Materiais</p>
                <p className="mt-1 text-white/80">{product.material}</p>
              </div>
              <div>
                <p className="text-white/50">Medidas</p>
                <p className="mt-1 text-white/80">{product.size}</p>
              </div>
              <div>
                <p className="text-white/50">Cor</p>
                <p className="mt-1 text-white/80">{product.color}</p>
              </div>
              <div>
                <p className="text-white/50">Cuidados</p>
                <p className="mt-1 text-white/80">{product.care}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <ReserveModal products={[product]} primaryLabel="Reservar no Instagram" />
            <a
              href="/selecao"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm text-white/85 hover:border-white/30 hover:text-white transition"
            >
              Ir para Minha Seleção
            </a>
          </div>

          <p className="mt-4 text-xs text-white/45">Sem preços no site. Reserva exclusiva via Instagram.</p>
        </div>
      </div>
    </div>
  );
}
