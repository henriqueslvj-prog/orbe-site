import Hero from "@/components/Hero";
import CategoryTiles from "@/components/CategoryTiles";
import ProductGrid from "@/components/ProductGrid";
import { featuredProducts } from "@/lib/products";

export default function HomePage() {
  return (
    <div className="pb-16">
      <Hero />

      <section className="mt-10">
        <h2 className="text-sm tracking-[0.35em] uppercase text-white/60">Coleções</h2>
        <div className="mt-4">
          <CategoryTiles />
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-sm tracking-[0.35em] uppercase text-white/60">Seleção curada</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-light">Pulseiras em destaque</p>
            <p className="mt-2 max-w-2xl text-white/60">
              Sem preços no site. Você escolhe suas peças e reserva com exclusividade no Instagram.
            </p>
          </div>
          <a
            href="/pulseiras"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white transition"
          >
            Ver catálogo
          </a>
        </div>

        <div className="mt-6">
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-white/60">Reserva VIP</p>
            <p className="mt-2 text-xl font-light">Canal exclusivo</p>
            <p className="mt-2 text-white/60">
              Atendimento direto no Instagram para confirmar disponibilidade e reservar sua peça.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-white/60">Curadoria</p>
            <p className="mt-2 text-xl font-light">Seleção limitada</p>
            <p className="mt-2 text-white/60">
              Peças com acabamento premium e presença. Rotatividade constante do catálogo.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-white/60">Experiência</p>
            <p className="mt-2 text-xl font-light">Luxo discreto</p>
            <p className="mt-2 text-white/60">
              Design limpo, visual forte, foco total nas peças e nos detalhes.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="/selecao"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
          >
            Minha Seleção
          </a>
          <a
            href="/atendimento"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm text-white/85 hover:border-white/30 hover:text-white transition"
          >
            Como reservar
          </a>
        </div>
      </section>
    </div>
  );
}
