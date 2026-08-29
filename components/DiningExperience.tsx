import Image from "next/image";
import { images } from "@/lib/site";
import { ImageReveal, Reveal } from "./Reveal";
import { Ornament } from "./Motif";

const frames = [
  {
    src: images.diningArt,
    alt: "Patterned seating and traditional wall artefacts at Banjara",
    caption: "Crafted Ambience",
    className: "lg:col-span-5 lg:row-span-2 min-h-[280px] lg:min-h-full",
  },
  {
    src: images.diningTable,
    alt: "Warmly lit tables set with brass thalis at Banjara",
    caption: "Warm Hospitality",
    className: "min-h-[240px] lg:col-span-7 lg:min-h-[280px]",
  },
  {
    src: images.diningHall,
    alt: "Chandeliers, arches and the scale of the Banjara dining hall",
    caption: "A Royal Setting",
    className: "min-h-[240px] lg:col-span-7 lg:min-h-[280px]",
  },
] as const;

export function DiningExperience() {
  return (
    <section className="bg-cream-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-col items-center">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
            Inside Banjara
          </p>
          <h2 className="max-w-2xl text-center font-display text-4xl leading-tight text-brown sm:text-5xl">
            A room made for lingering
          </h2>
          <Ornament className="mt-5" />
        </Reveal>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:grid-rows-2 lg:gap-4 lg:h-[720px]">
          {frames.map((frame, i) => (
            <ImageReveal
              key={frame.caption}
              delay={i * 0.08}
              className={`relative ${frame.className}`}
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="photo-grade object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown/70 to-transparent px-5 py-5"
                aria-hidden
              />
              <p className="absolute bottom-4 left-5 text-[11px] uppercase tracking-[0.24em] text-cream">
                {frame.caption}
              </p>
            </ImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
