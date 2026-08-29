import { Reveal } from "./Reveal";
import { Motif } from "./Motif";

const reasons = [
  {
    n: "01",
    title: "Royal Ambience",
    copy: "A vibrant setting inspired by Indian design and hospitality.",
  },
  {
    n: "02",
    title: "Indian Soul",
    copy: "Traditional visual elements woven into a contemporary dining environment.",
  },
  {
    n: "03",
    title: "Warm Hospitality",
    copy: "A welcoming setting designed for families, friends and celebrations.",
  },
  {
    n: "04",
    title: "Memorable Dining",
    copy: "An experience that combines food, atmosphere and presentation.",
  },
] as const;

export function WhyBanjara() {
  return (
    <section className="relative overflow-hidden bg-cream-dark py-20 sm:py-28">
      <Motif className="pointer-events-none absolute -right-16 top-10 h-64 w-64 text-maroon/10" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
            Why Banjara
          </p>
          <h2 className="font-display text-4xl leading-tight text-brown sm:text-5xl">
            Four reasons the evening stays with you
          </h2>
        </Reveal>

        <div className="grid gap-px bg-gold/30 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.n}
              delay={i * 0.08}
              className="bg-cream-dark p-8 sm:p-10"
            >
              <p className="mb-6 font-display text-2xl text-gold">{reason.n}</p>
              <h3 className="mb-3 font-display text-2xl text-brown sm:text-3xl">
                {reason.title}
              </h3>
              <p className="max-w-sm text-base leading-relaxed text-brown-soft">
                {reason.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
