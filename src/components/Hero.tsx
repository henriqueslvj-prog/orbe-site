export default function Hero() {
  return (
    <section className="pt-10 sm:pt-14">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-56 right-0 h-[620px] w-[620px] rounded-full bg-[#223BFF]/10 blur-3xl" />
        </div>

        <div className="relative p-8 sm:p-12">
          <p className="text-xs tracking-[0.35em] uppercase text-white/60">Acessórios masculinos</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-light leading-[1.05]">ORBE</h1>
          <p className="mt-4 max-w-2xl text-white/65 text-base sm:text-lg">
            Presença em cada detalhe. Escolha suas peças e reserve com exclusividade no Instagram.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="/colecoes"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
            >
              Explorar coleções
            </a>
            <a
              href="/selecao"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm text-white/85 hover:border-white/30 hover:text-white transition"
            >
              Minha Seleção
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs tracking-[0.35em] uppercase text-white/60">Curadoria</p>
              <p className="mt-2 text-white/80">Seleção limitada</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs tracking-[0.35em] uppercase text-white/60">Reserva</p>
              <p className="mt-2 text-white/80">Instagram exclusivo</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs tracking-[0.35em] uppercase text-white/60">Estética</p>
              <p className="mt-2 text-white/80">Luxo discreto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
