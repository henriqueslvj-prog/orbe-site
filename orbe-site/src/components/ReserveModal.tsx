"use client";

import { useMemo, useState } from "react";
import { Product } from "@/lib/products";
import { buildReserveMessage, copyToClipboard } from "@/lib/utils";

const IG_URL = "https://www.instagram.com/orbe.world";

export default function ReserveModal({
  products,
  primaryLabel
}: {
  products: Product[];
  primaryLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const message = useMemo(() => buildReserveMessage(products), [products]);

  async function handleCopy() {
    await copyToClipboard(message);
    alert("Mensagem copiada! Agora é só colar no DM do Instagram.");
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
      >
        {primaryLabel}
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm">
          <div className="mx-auto mt-24 max-w-2xl px-4">
            <div className="rounded-3xl border border-white/10 bg-ink p-6 sm:p-8 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.35em] uppercase text-white/60">Reserva</p>
                  <h3 className="mt-2 text-2xl font-light">Mensagem para DM</h3>
                  <p className="mt-2 text-white/60">Copie o texto e cole no Instagram @orbe.world.</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/70 hover:border-white/30 hover:text-white transition"
                >
                  Fechar
                </button>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <pre className="whitespace-pre-wrap text-sm text-white/80 leading-relaxed">{message}</pre>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCopy}
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
                >
                  Copiar mensagem
                </button>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/85 hover:border-white/30 hover:text-white transition text-center"
                >
                  Abrir Instagram
                </a>
              </div>

              <p className="mt-4 text-xs text-white/45">
                Dica: se estiver no celular, abrir o Instagram e colar no DM funciona melhor.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
