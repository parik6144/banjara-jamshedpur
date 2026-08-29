"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { galleryItems } from "@/lib/site";

type ImageLightboxProps = {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function ImageLightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  const item = galleryItems[index];

  const onKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onKey]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-brown/92 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center text-cream"
        aria-label="Close gallery"
      >
        <span className="text-3xl leading-none">×</span>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-cream/80 hover:text-cream sm:left-6"
        aria-label="Previous image"
      >
        ‹
      </button>

      <figure
        className="relative h-[78svh] w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="100vw"
          className="object-contain"
        />
        <figcaption className="absolute inset-x-0 -bottom-10 text-center text-[11px] uppercase tracking-[0.24em] text-cream/80">
          {item.caption}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-cream/80 hover:text-cream sm:right-6"
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
}
