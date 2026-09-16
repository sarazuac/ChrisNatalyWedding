"use client";

import { site } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";
import VideoBackground from "./VideoBackground";

export default function Hero() {
  const { t, lang } = useLang();
  const dateDisplay = lang === "es" ? site.weddingDateDisplayEs : site.weddingDateDisplayEn;

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-sea-deep text-ivory">
      <VideoBackground src="/videos/ocean.mp4" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-ivory/80 mb-6">
          {t.hero.kicker}
        </p>

        <h1 className="font-display flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-5 md:gap-7 leading-[0.95]">
          <span className="italic text-[16vw] sm:text-7xl md:text-8xl lg:text-9xl">
            {site.partnerOne}
          </span>
          <span className="not-italic text-[#4a5c42] text-[9vw] sm:text-5xl md:text-6xl lg:text-7xl">
            &amp;
          </span>
          <span className="italic text-[16vw] sm:text-7xl md:text-8xl lg:text-9xl">
            {site.partnerTwo}
          </span>
        </h1>

        <div className="mt-8 flex items-center gap-4 text-ivory/90">
          <span className="h-px w-8 bg-ivory/50" />
          <p className="text-sm md:text-base tracking-[0.2em] uppercase">
            {dateDisplay}
          </p>
          <span className="h-px w-8 bg-ivory/50" />
        </div>
        <p className="mt-3 text-ivory/70 text-sm md:text-base">
          {t.hero.aboard}
        </p>

        <a
          href={site.rsvpFormUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block text-xs tracking-label uppercase px-9 py-4 bg-sage text-ink hover:bg-ivory transition-colors"
        >
          {t.ctaBand.button}
        </a>
      </div>

      <div className="absolute bottom-8 inset-x-0 z-10 flex flex-col items-center gap-2 text-ivory/70">
        <span className="text-[10px] tracking-label uppercase">Scroll</span>
        <span className="h-10 w-px bg-ivory/40 animate-pulse" />
      </div>
    </section>
  );
}
