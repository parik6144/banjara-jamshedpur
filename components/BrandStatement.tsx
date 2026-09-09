import { site } from "@/lib/site";
import { Motif } from "./Motif";
import { Reveal } from "./Reveal";

export function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-maroon py-20 sm:py-28">
      <Motif className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 text-gold/15" />
      <Motif className="pointer-events-none absolute -left-10 top-6 h-28 w-28 text-gold/25" />
      <Motif className="pointer-events-none absolute -right-8 bottom-4 h-24 w-24 text-gold/25" />

      <Reveal className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <span className="mx-auto mb-8 block h-px w-16 bg-gold/70" />
        <blockquote className="font-display text-3xl italic leading-snug text-cream sm:text-4xl md:text-5xl">
          “Taste the tradition. Feel the grandeur.”
        </blockquote>
        <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.32em] text-gold-soft">
          {site.attribution}
        </p>
        <span className="mx-auto mt-8 block h-px w-16 bg-gold/70" />
      </Reveal>
    </section>
  );
}
