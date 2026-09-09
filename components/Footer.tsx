import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Ornament } from "./Motif";

export function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3 md:gap-8">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            {site.outletName} is the dining outlet of {site.legalName} — a royal
            Indian experience in {site.place}, Jamshedpur.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold">
            Explore
          </p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold">
            Contact
          </p>
          <a
            href={site.phoneHref}
            className="block text-sm text-cream/90 hover:text-cream"
          >
            {site.phoneDisplay}
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            {site.address.short}
          </p>
        </div>
      </div>

      <Ornament className="pb-8 opacity-80" />

      <p className="border-t border-cream/10 px-5 py-6 text-center text-[11px] uppercase tracking-[0.2em] text-cream/50">
        © {site.legalName} · {site.outletName}, {site.place}
      </p>
    </footer>
  );
}
