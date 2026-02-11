import ReserveModal from "@/components/ReserveModal";

export default function AtendimentoPage() {
  return (
    <div className="py-10 pb-16">
      <p className="text-xs tracking-[0.35em] uppercase text-white/60">Atendimento</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-light">Reserva exclusiva</h1>
      <p className="mt-3 text-white/60 max-w-2xl">
        O site ORBE funciona como catálogo premium. Você seleciona suas peças e reserva com exclusividade no Instagram.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs tracking-[0.35em] uppercase text-white/60">Passo 1</p>
          <p className="mt-2 text-xl font-light">Escolha</p>
          <p className="mt-2 text-white/60">Navegue pelas peças e adicione à sua Seleção.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs tracking-[0.35em] uppercase text-white/60">Passo 2</p>
          <p className="mt-2 text-xl font-light">Copie a mensagem</p>
          <p className="mt-2 text-white/60">Gere uma mensagem com os códigos das peças para agilizar o atendimento.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs tracking-[0.35em] uppercase text-white/60">Passo 3</p>
          <p className="mt-2 text-xl font-light">Reserve no Instagram</p>
          <p className="mt-2 text-white/60">Envie no DM e confirme disponibilidade.</p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs tracking-[0.35em] uppercase text-white/60">Canal exclusivo</p>
        <p className="mt-2 text-xl font-light">@orbe.world</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.instagram.com/orbe.world"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
          >
            Abrir Instagram
          </a>

          <ReserveModal products={[]} primaryLabel="Copiar mensagem padrão" />
        </div>
      </div>
    </div>
  );
}
