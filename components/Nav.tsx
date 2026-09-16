"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Nav() {
  const pathname = usePathname();
  const { t } = useLang();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome || open;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          solid ? "bg-ivory/95 backdrop-blur border-b border-line" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-20 flex items-center justify-between gap-x-10">
        <Link
          href="/"
          className={`shrink-0 whitespace-nowrap font-display italic text-2xl tracking-wide transition-colors ${
            solid ? "text-ink" : "text-ivory"
          }`}
        >
          {site.monogram}
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 whitespace-nowrap text-[11px] tracking-label uppercase transition-colors ${
                solid ? "text-ink-soft hover:text-ink" : "text-ivory/85 hover:text-ivory"
              } ${pathname === item.href ? (solid ? "text-sage" : "text-ivory") : ""}`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <a
            href={site.rsvpFormUrl}
            target="_blank"
            rel="noreferrer"
            className={`shrink-0 whitespace-nowrap text-[11px] tracking-label uppercase px-5 py-2.5 border transition-colors ${
              solid
                ? "border-ink text-ink hover:bg-ink hover:text-ivory"
                : "border-ivory text-ivory hover:bg-ivory hover:text-ink"
            }`}
          >
            {t.nav.rsvp}
          </a>
          <div className="shrink-0">
            <LanguageToggle dark={!solid} />
          </div>
        </nav>

        <div className="xl:hidden flex items-center gap-3">
          <LanguageToggle dark={!solid} />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 h-9 w-9 flex flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                solid ? "bg-ink" : "bg-ivory"
              } ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-opacity duration-300 ${
                solid ? "bg-ink" : "bg-ivory"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                solid ? "bg-ink" : "bg-ivory"
              } ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>
      </header>

      {/* Rendered outside <header> deliberately: header can get backdrop-blur
          applied (via `solid`), and a backdrop-filter ancestor becomes the
          containing block for `fixed` descendants, which would collapse this
          panel's positioning. Keeping it as a sibling avoids that. */}
      {open && (
        <div className="xl:hidden fixed inset-0 top-20 z-40 bg-ivory overflow-y-auto">
          <nav className="flex flex-col items-center justify-center gap-7 min-h-full py-16">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display italic text-3xl text-ink"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <a
              href={site.rsvpFormUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 text-xs tracking-label uppercase px-7 py-3 border border-ink text-ink"
            >
              {t.nav.rsvp}
            </a>

            <div className="mt-6 flex flex-col items-center gap-3">
              <span className="text-[10px] tracking-label uppercase text-ink-soft">
                {t.langToggle.label}
              </span>
              <LanguageToggle />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
