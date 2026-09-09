import Image from "next/image";
import { images, site } from "@/lib/site";
import { Button } from "./Button";
import { ImageReveal, Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  "Royal-inspired interiors",
  "Traditional Indian décor",
  "Warm hospitality",
  "Family dining",
  "Multicuisine experience",
];

export function Experience() {
  return (
    <section id="story" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <ImageReveal className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
          <Image
            src={images.experience}
            alt="Decorative Indian wall art and patterned seating inside Banjara"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="photo-grade object-cover object-center"
          />
        </ImageReveal>

        <Reveal>
          <SectionHeading
            eyebrow="The Banjara Experience"
            title="More Than a Meal. An Indian Celebration."
          />
          <p className="mt-6 max-w-md text-base leading-relaxed text-brown-soft sm:text-lg">
            {site.outletName} is the dining outlet of {site.legalName} in{" "}
            {site.place}, Jamshedpur. The house brings together vibrant Indian
            décor, warm hospitality, traditional influences and a memorable
            dining atmosphere under one roof.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-brown-soft sm:text-lg">
            {site.legalName} is the name behind the experience. {site.outletName}{" "}
            is where it is served — table by table, evening by evening.
          </p>
          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm tracking-wide text-brown"
              >
                <span className="h-px w-6 bg-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="#experience" variant="primary">
              Discover Our Story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
