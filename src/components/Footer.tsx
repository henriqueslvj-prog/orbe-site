export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-white/60">ORBE</p>
            <p className="mt-2 text-white/60">Presença em cada detalhe.</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-white/60">Reserva</p>
            <p className="mt-2 text-white/60">Canal exclusivo via Instagram.</p>
            <a
              href="https://www.instagram.com/orbe.world"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm text-white/80 hover:text-white transition"
            >
              @orbe.world
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-white/60">Políticas</p>
            <p className="mt-2 text-white/60">Trocas e prazos são confirmados no atendimento.</p>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/35">
          © {new Date().getFullYear()} ORBE. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
