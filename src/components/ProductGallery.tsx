"use client";

import { useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[active]} alt="ORBE" className="h-full w-full object-cover aspect-[4/3]" />
      </div>

      <div className="mt-3 grid grid-cols-5 gap-2">
        {images.slice(0, 5).map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className={`overflow-hidden rounded-2xl border ${i === active ? "border-white/30" : "border-white/10"} bg-white/5`}
            aria-label={`Imagem ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="h-full w-full object-cover aspect-square opacity-90" />
          </button>
        ))}
      </div>
    </div>
  );
}
