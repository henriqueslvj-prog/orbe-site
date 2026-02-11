const tiles = [
  { name: "Pulseiras", href: "/pulseiras", note: "Disponíveis" },
  { name: "Anéis", href: "/aneis", note: "Em breve" },
  { name: "Colares", href: "/colares", note: "Em breve" },
  { name: "Carteiras", href: "/carteiras", note: "Em breve" },
  { name: "Cintos", href: "/cintos", note: "Em breve" }
];

export default function CategoryTiles() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {tiles.map((t) => (
        <a
          key={t.name}
          href={t.href}
          className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:border-white/25 transition"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-white/60">{t.note}</p>
          <p className="mt-2 text-lg font-light text-white/85 group-hover:text-white transition">{t.name}</p>
          <p className="mt-2 text-sm text-white/55">Explorar</p>
        </a>
      ))}
    </div>
  );
}
