import Image from "next/image";
import { images, site } from "@/lib/site";
import { Button } from "./Button";
import { Motif } from "./Motif";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section
      id="visit"
      className="relative isolate min-h-[80svh] scroll-mt-20 overflow-hidden bg-maroon-dark"
    >
      <Image
        src={images.front}
        alt="Storefront of Banjara at Bindal Mall, Sonari, Jamshedpur"
        fill
        sizes="100vw"
        className="photo-grade object-cover object-center"
      />
      <div className="absolute inset-0 bg-maroon/78" aria-hidden />
      <Motif className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 text-gold/20" />

      <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-7xl items-center px-5 py-24 sm:px-8">
        <Reveal className="max-w-xl">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-gold-soft">
            Visit Banjara
          </p>
          <h2 className="mb-8 font-display text-4xl leading-tight text-cream sm:text-5xl">
            Your Royal Dining Experience Awaits
          </h2>

          <address className="mb-8 not-italic text-cream/90">
            <p className="max-w-md text-base leading-relaxed sm:text-lg">
              {site.address.line}
            </p>
            <p className="mt-5">
              <a
                href={site.phoneHref}
                className="text-lg tracking-wide text-cream transition-colors hover:text-gold-soft"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-gold-soft">
              {site.hours}
            </p>
          </address>

          <Button href={site.mapsUrl} variant="cream">
            Get Directions
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
