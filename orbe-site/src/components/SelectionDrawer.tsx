"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSelectionCount } from "@/lib/selection";

export default function SelectionDrawer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getSelectionCount());
    const onStorage = () => setCount(getSelectionCount());
    window.addEventListener("storage", onStorage);

    const interval = window.setInterval(() => setCount(getSelectionCount()), 700);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <Link
      href="/selecao"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:border-white/30 hover:text-white transition"
    >
      <span>Minha Seleção</span>
      <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white/10 px-2 text-[11px] text-white/80">
        {count}
      </span>
    </Link>
  );
}
