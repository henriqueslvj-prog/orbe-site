export type Category = "pulseiras" | "aneis" | "colares" | "carteiras" | "cintos";

export type Product = {
  id: string;
  slug: string;
  href: string;
  name: string;
  sku: string;
  category: Category;
  categoryLabel: string;
  availability: string;
  material: string;
  size: string;
  color: string;
  care: string;
  description: string;
  images: string[];
};

function uimg(query: string) {
  return `https://images.unsplash.com/${query}?auto=format&fit=crop&w=1400&q=80`;
}

export const bracelets: Product[] = Array.from({ length: 15 }).map((_, i) => {
  const num = String(i + 1).padStart(3, "0");
  const slug = `pulseira-${num}`;
  const sku = `ORB-PUL-${num}`;

  const names = [
    "Pulseira Atlas",
    "Pulseira Ônix",
    "Pulseira Titan",
    "Pulseira Ícaro",
    "Pulseira Aurora",
    "Pulseira Sombra",
    "Pulseira Imperial",
    "Pulseira Vórtice",
    "Pulseira Nobre",
    "Pulseira Eclipse",
    "Pulseira Aço Noir",
    "Pulseira Minimal",
    "Pulseira Carbon",
    "Pulseira Clássica",
    "Pulseira Prime"
  ];

  const imgSets: string[][] = [
    [uimg("photo-1522312346375-d1a52e2b99b3"), uimg("photo-1518548419970-58e3b4079ab2"), uimg("photo-1523275335684-37898b6baf30"), uimg("photo-1511379938547-c1f69419868d"), uimg("photo-1520975958225-6f1a1d7c1e56")],
    [uimg("photo-1518548419970-58e3b4079ab2"), uimg("photo-1522312346375-d1a52e2b99b3"), uimg("photo-1511379938547-c1f69419868d"), uimg("photo-1523275335684-37898b6baf30"), uimg("photo-1520975958225-6f1a1d7c1e56")],
    [uimg("photo-1523275335684-37898b6baf30"), uimg("photo-1522312346375-d1a52e2b99b3"), uimg("photo-1518548419970-58e3b4079ab2"), uimg("photo-1511379938547-c1f69419868d"), uimg("photo-1520975958225-6f1a1d7c1e56")]
  ];

  const material =
    i % 3 === 0
      ? "Aço inox + acabamento premium"
      : i % 3 === 1
      ? "Couro + detalhes metálicos"
      : "Trama premium + fecho metálico";

  const color = i % 2 === 0 ? "Preto / Grafite" : "Azul-marinho / Grafite";

  return {
    id: `pul_${num}`,
    slug,
    href: `/pulseiras/${slug}`,
    name: names[i] ?? `Pulseira ORBE ${num}`,
    sku,
    category: "pulseiras",
    categoryLabel: "Pulseiras",
    availability: "Sob reserva",
    material,
    size: "Ajustável / consultar",
    color,
    care: "Evite água e produtos químicos",
    description:
      "Uma peça de presença. Design limpo, acabamento premium e estética discreta para elevar qualquer composição.",
    images: imgSets[i % imgSets.length]
  };
});

export const allProducts: Product[] = [...bracelets];
export const featuredProducts: Product[] = bracelets.slice(0, 6);

export function productsByCategory(category: Category): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}
