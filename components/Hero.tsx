import Image from "next/image";
import { images, site } from "@/lib/site";
import { Button } from "./Button";
import { Motif } from "./Motif";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-brown"
    >
      <Image
        src={images.hero}
        alt="Warm dining room at Banjara Sonari with brass tableware, patterned chairs and a chandelier"
        fill
        priority
        sizes="100vw"
        className="hero-image photo-grade object-cover object-[center_42%]"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(58,33,24,0.72)_0%,rgba(58,33,24,0.28)_48%,rgba(58,33,24,0.12)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,33,24,0.35)_0%,transparent_28%,rgba(58,33,24,0.55)_100%)]"
        aria-hidden
      />

      <Motif className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-gold/20 md:right-8 md:top-24 md:h-96 md:w-96" />
      <Motif className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 text-cream/10" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-32">
        <div className="hero-animate max-w-xl">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.34em] text-gold-soft">
            Banjara • Sonari
          </p>

          <h1 className="mb-5 font-display text-[2.35rem] leading-[1.12] text-cream sm:text-5xl lg:text-[3.6rem]">
            A Royal Indian Dining Experience
          </h1>

          <p className="mb-8 hidden max-w-md text-base leading-relaxed text-cream/85 sm:block sm:text-lg">
            Where Rajasthani warmth, vibrant flavours and timeless Indian
            hospitality come together.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#story" variant="cream">
              Explore Banjara
            </Button>
            <Button href={site.phoneHref} variant="secondary">
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
