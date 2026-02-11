import { Product } from "./products";

export function buildReserveMessage(products: Product[]) {
  const header = "Olá, ORBE. Quero reservar as peças abaixo:";
  const items =
    products.length > 0
      ? products.map((p, idx) => `${idx + 1}) ${p.name} — ${p.sku}`).join("\n")
      : "• (Escolha uma peça no catálogo e adicione à sua Seleção.)";

  const footer = "\n\nPode me confirmar disponibilidade e prazo? Obrigado!";
  return `${header}\n${items}${footer}`;
}

export async function copyToClipboard(text: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
}
