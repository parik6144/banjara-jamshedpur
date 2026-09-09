import Image from "next/image";
import { images, site } from "@/lib/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
  tone?: "light" | "dark";
};

export function Logo({
  className = "",
  priority = false,
  tone = "dark",
}: LogoProps) {
  const light = tone === "light";

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <Image
        src={images.emblem}
        alt=""
        width={256}
        height={256}
        className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
        priority={priority}
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display text-[1.65rem] tracking-wide sm:text-[1.85rem] ${
            light
              ? "text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
              : "text-maroon"
          }`}
        >
          {site.outletName}
        </span>
        <span
          className={`mt-1 text-[9px] font-medium tracking-[0.12em] sm:text-[10px] sm:tracking-[0.16em] ${
            light ? "text-gold-soft" : "text-gold"
          }`}
        >
          powered by {site.legalName}
        </span>
      </span>
    </span>
  );
}
