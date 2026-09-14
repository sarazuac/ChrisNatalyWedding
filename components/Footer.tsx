"use client";

import Link from "next/link";
import { site } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t, lang } = useLang();
  const dateDisplay = lang === "es" ? site.weddingDateDisplayEs : site.weddingDateDisplayEn;

  return (
    <footer className="bg-sea-deep text-ivory">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 flex flex-col items-center text-center gap-6">
        <span className="font-display italic text-4xl">{site.monogram}</span>
        <p className="text-[11px] tracking-label uppercase text-ivory/60">
          {dateDisplay} &middot; {site.embarkPort}
        </p>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-2">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-label uppercase text-ivory/70 hover:text-ivory transition-colors"
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <Link
            href="/rsvp"
            className="text-[11px] tracking-label uppercase text-sage hover:text-ivory transition-colors"
          >
            {t.nav.rsvp}
          </Link>
          <a
            href={site.facebookGroupUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-label uppercase text-ivory/70 hover:text-ivory transition-colors"
          >
            {t.footer.facebook}
          </a>
        </nav>

        <div className="w-10 h-px bg-ivory/25 my-2" />

        <p className="text-[11px] tracking-label uppercase text-ivory/50">
          {site.hashtag}
        </p>
      </div>
    </footer>
  );
}
