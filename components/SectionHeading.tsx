import { Motif } from "./Motif";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const light = tone === "light";

  return (
    <div
      className={`${isCenter ? "text-center items-center" : "text-left items-start"} flex flex-col gap-4 ${className}`}
    >
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.32em] ${light ? "text-gold-soft" : "text-gold"}`}
      >
        {eyebrow}
      </p>
      <div className={`flex ${isCenter ? "justify-center" : ""}`} aria-hidden>
        <Motif className={`h-8 w-8 ${light ? "text-gold/70" : "text-maroon/70"}`} />
      </div>
      <h2
        className={`max-w-xl text-4xl leading-[1.15] sm:text-5xl ${light ? "text-cream" : "text-brown"}`}
      >
        {title}
      </h2>
    </div>
  );
}
