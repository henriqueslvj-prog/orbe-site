import Link from "next/link";
import SelectionDrawer from "./SelectionDrawer";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="h-8 w-8 rounded-full border border-white/15 bg-gradient-to-b from-white/10 to-white/0" />
            <div className="leading-tight">
              <div className="text-sm tracking-[0.35em] uppercase text-white/80">ORBE</div>
              <div className="text-[11px] text-white/45">Acessórios masculinos</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm text-white/70">
            <Link className="hover:text-white transition" href="/colecoes">Coleções</Link>
            <Link className="hover:text-white transition" href="/pulseiras">Pulseiras</Link>
            <Link className="hover:text-white transition" href="/aneis">Anéis</Link>
            <Link className="hover:text-white transition" href="/colares">Colares</Link>
            <Link className="hover:text-white transition" href="/carteiras">Carteiras</Link>
            <Link className="hover:text-white transition" href="/cintos">Cintos</Link>
            <Link className="hover:text-white transition" href="/atendimento">Atendimento</Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/orbe.world"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:border-white/30 hover:text-white transition"
            >
              Instagram
            </a>
            <SelectionDrawer />
          </div>
        </div>
      </div>
    </header>
  );
}
