import Link from "next/link";

export default function Page() {
  return (
    <div className="py-12 pb-16">
      <p className="text-xs tracking-[0.35em] uppercase text-white/60">Categoria</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-light">Colares</h1>
      <p className="mt-3 text-white/60 max-w-2xl">
        Em breve. Explore as pulseiras e reserve pelo Instagram.
      </p>
      <div className="mt-8 flex gap-3">
        <Link className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition" href="/pulseiras">
          Ver pulseiras
        </Link>
        <Link className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/85 hover:border-white/30 hover:text-white transition" href="/selecao">
          Minha Seleção
        </Link>
      </div>
    </div>
  );
}
