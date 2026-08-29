"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems } from "@/lib/site";
import { ImageLightbox } from "./ImageLightbox";
import { Reveal } from "./Reveal";
import { Ornament } from "./Motif";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-col items-center">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
            Gallery
          </p>
          <h2 className="font-display text-4xl text-brown sm:text-5xl">
            The house, as it lives
          </h2>
          <Ornament className="mt-5" />
        </Reveal>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:grid-rows-[auto]">
          {galleryItems.map((item, index) => (
            <button
              key={item.src + item.caption}
              type="button"
              onClick={() => setActive(index)}
              className={`group relative overflow-hidden ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                className="photo-grade object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
              />
              <span className="absolute inset-0 bg-brown/0 transition-colors duration-500 group-hover:bg-brown/25" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-brown/75 to-transparent px-5 py-5 text-left text-[11px] uppercase tracking-[0.22em] text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <ImageLightbox
          index={active}
          onClose={() => setActive(null)}
          onPrev={() =>
            setActive((i) =>
              i === null ? 0 : (i + galleryItems.length - 1) % galleryItems.length,
            )
          }
          onNext={() =>
            setActive((i) =>
              i === null ? 0 : (i + 1) % galleryItems.length,
            )
          }
        />
      )}
    </section>
  );
}
