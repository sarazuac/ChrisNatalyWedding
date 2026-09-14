"use client";

import Link from "next/link";
import { site } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t, lang } = useLang();
  const dateDisplay = lang === "es" ? site.weddingDateDisplayEs : site.weddingDateDisplayEn;

  return (
    <footer className="bg-sea-deep text-ink">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 flex flex-col items-center text-center gap-6">
        <span className="font-display italic text-4xl">{site.monogram}</span>
        <p className="text-[11px] tracking-label uppercase text-ink/60">
          {dateDisplay} &middot; {site.embarkPort}
        </p>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-2">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-label uppercase text-ink/70 hover:text-ink transition-colors"
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <Link
            href="/rsvp"
            className="text-[11px] tracking-label uppercase text-ink font-medium hover:opacity-70 transition-opacity"
          >
            {t.nav.rsvp}
          </Link>
          <a
            href={site.facebookGroupUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-label uppercase text-ink/70 hover:text-ink transition-colors"
          >
            {t.footer.facebook}
          </a>
        </nav>

        <div className="w-10 h-px bg-ink/20 my-2" />

        <p className="text-[11px] tracking-label uppercase text-ink/50">
          {site.hashtag}
        </p>
      </div>
    </footer>
  );
}
