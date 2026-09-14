"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import VideoBackground from "@/components/VideoBackground";
import WaveDivider from "@/components/WaveDivider";
import { site } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";

export default function ShipContent() {
  const { t } = useLang();

  return (
    <>
      <section className="relative h-[80svh] min-h-[420px] w-full overflow-hidden bg-sea-deep text-ivory">
        <VideoBackground src="/videos/seashore.mp4" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-ivory/80 mb-6">
            {t.ship.kicker}
          </p>
          <h1 className="font-display italic text-5xl sm:text-7xl md:text-8xl">
            {site.cruiseShip}
          </h1>
          <p className="mt-6 text-ivory/80 text-sm md:text-base max-w-md">
            {t.ship.subtitle}
          </p>
        </div>

        <div className="absolute bottom-0 inset-x-0 translate-y-[1px] z-10">
          <WaveDivider color="var(--color-ivory)" />
        </div>
      </section>

      <section className="bg-ivory py-24 px-6">
        <Reveal className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-ink-soft leading-relaxed text-lg">{t.ship.intro}</p>
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {t.ship.highlights.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="border border-line p-8 md:p-10"
            >
              <h3 className="font-display italic text-2xl mb-3 text-ink">
                {item.title}
              </h3>
              <p className="text-ink-soft leading-relaxed">{item.copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <p className="text-xs text-ink-soft max-w-md mx-auto">{t.ship.note}</p>
        </Reveal>

        <Reveal className="text-center mt-14">
          <Link
            href="/travel"
            className="text-[11px] tracking-label uppercase text-ink border-b border-ink pb-1 hover:text-sage hover:border-sage transition-colors"
          >
            {t.details.travelLink}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
