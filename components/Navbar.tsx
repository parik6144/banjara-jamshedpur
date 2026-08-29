"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-gold/35 bg-cream/92 shadow-[0_1px_0_rgba(201,149,53,0.2)] backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-brown/45 to-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="#home"
          className="relative z-10 shrink-0"
          aria-label="Banjara home"
          onClick={() => setOpen(false)}
        >
          <Logo priority tone={scrolled || open ? "dark" : "light"} />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                  scrolled
                    ? "text-brown/80 hover:text-maroon"
                    : "text-cream/90 hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            href={site.phoneHref}
            variant={scrolled ? "primary" : "cream"}
          >
            Reserve a Table
          </Button>
        </div>

        <button
          type="button"
          className={`relative z-10 flex h-12 w-12 items-center justify-center lg:hidden ${
            scrolled || open ? "text-brown" : "text-cream"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-6 flex-col gap-1.5">
            <span
              className={`block h-px w-full bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-full bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-full bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[100svh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex min-h-[calc(100svh-4.5rem)] flex-col bg-cream px-6 pb-10 pt-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-3xl text-brown"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Button href={site.phoneHref} variant="primary" className="w-full">
              Reserve a Table
            </Button>
            <p className="text-center text-sm text-brown-soft">{site.phoneDisplay}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
