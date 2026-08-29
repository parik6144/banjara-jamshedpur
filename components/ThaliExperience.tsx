import Image from "next/image";
import { images } from "@/lib/site";
import { Button } from "./Button";
import { Motif } from "./Motif";
import { Reveal } from "./Reveal";

export function ThaliExperience() {
  return (
    <section
      id="experience"
      className="relative isolate min-h-[85svh] scroll-mt-20 overflow-hidden bg-brown"
    >
      <Image
        src={images.thali}
        alt="Brass thalis, goblets and colourful Banjara chairs around a wooden dining table"
        fill
        sizes="100vw"
        className="photo-grade object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(58,33,24,0.78)_0%,rgba(58,33,24,0.35)_55%,rgba(58,33,24,0.15)_100%)]"
        aria-hidden
      />
      <Motif className="pointer-events-none absolute right-6 top-10 h-40 w-40 text-gold/25 md:right-16 md:h-56 md:w-56" />

      <div className="relative z-10 mx-auto flex min-h-[85svh] max-w-7xl items-center px-5 py-24 sm:px-8">
        <Reveal className="max-w-lg">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-gold-soft">
            The Table
          </p>
          <h2 className="mb-5 font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
            A Table Set for Royalty
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-cream/85 sm:text-lg">
            Brass thalis, traditional details and an ambience designed to make
            every meal feel special.
          </p>
          <Button href="#gallery" variant="cream">
            Explore the Dining Experience
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
