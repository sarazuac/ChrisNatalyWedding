"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import Countdown from "@/components/Countdown";
import { site } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";

export default function Home() {
  const { t, lang } = useLang();
  const dateDisplay = lang === "es" ? site.weddingDateDisplayEs : site.weddingDateDisplayEn;

  return (
    <>
      <Hero />

      {/* Welcome */}
      <section className="bg-ivory pt-24 pb-20 px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] tracking-label uppercase text-sage mb-6">
            {t.welcome.kicker}
          </p>
          <p className="font-display italic text-2xl md:text-3xl leading-relaxed text-ink">
            {t.welcome.quote}
          </p>
          <p className="mt-8 text-sm tracking-label uppercase text-ink-soft">
            {site.partnerOne} &amp; {site.partnerTwo}
          </p>
        </Reveal>
      </section>

      {/* Countdown */}
      <section className="bg-sand py-20 px-6">
        <Reveal>
          <p className="text-center text-[11px] tracking-label uppercase text-ink-soft mb-10">
            {t.countdown.kicker}
          </p>
          <Countdown />
        </Reveal>
      </section>

      <WaveDivider color="var(--color-ivory)" />

      {/* Cruise Details */}
      <section className="bg-ivory pt-4 pb-24 px-6">
        <Reveal className="text-center mb-16">
          <p className="text-[11px] tracking-label uppercase text-sage mb-4">
            {t.details.kicker}
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl text-ink">
            {t.details.title}
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-px overflow-hidden border border-line md:grid-cols-2 bg-line">
          <Reveal className="bg-ivory p-8 md:p-12">
            <p className="text-[11px] tracking-label uppercase text-sage mb-3">
              {t.details.cruiseLine}
            </p>
            <h3 className="font-display italic text-2xl mb-2 text-ink">
              {site.cruiseShip}
            </h3>
            <p className="text-ink-soft text-sm">
              {site.cruiseLine} &middot; {t.details.durationValue}
            </p>
          </Reveal>
          <Reveal delay={120} className="bg-ivory p-8 md:p-12">
            <p className="text-[11px] tracking-label uppercase text-sage mb-3">
              {t.details.embarkation}
            </p>
            <h3 className="font-display italic text-2xl mb-2 text-ink">
              {site.embarkPort}
            </h3>
            <p className="text-ink-soft text-sm">{dateDisplay}</p>
          </Reveal>
        </div>

        <Reveal className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-12">
          <Link
            href="/ship"
            className="text-[11px] tracking-label uppercase text-ink border-b border-ink pb-1 hover:text-sage hover:border-sage transition-colors"
          >
            {t.nav.ship}
          </Link>
          <Link
            href="/travel"
            className="text-[11px] tracking-label uppercase text-ink border-b border-ink pb-1 hover:text-sage hover:border-sage transition-colors"
          >
            {t.details.travelLink}
          </Link>
        </Reveal>
      </section>

      {/* CTA band */}
      <section className="relative bg-sea-deep text-ink py-24 px-6 text-center overflow-hidden">
        <Reveal className="relative z-10">
          <p className="text-[11px] tracking-label uppercase text-ink/60 mb-5">
            {t.ctaBand.kicker}
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl mb-8 text-ink">
            {t.ctaBand.title}
          </h2>
          <Link
            href="/rsvp"
            className="inline-block text-xs tracking-label uppercase px-8 py-4 border border-ink hover:bg-ink hover:text-sea-deep transition-colors"
          >
            {t.ctaBand.button}
          </Link>
        </Reveal>
      </section>

      {/* Stay Connected */}
      <section className="bg-sand py-20 px-6 text-center">
        <Reveal>
          <p className="text-[11px] tracking-label uppercase text-sage mb-4">
            {t.connect.kicker}
          </p>
          <h2 className="font-display italic text-3xl md:text-4xl mb-5 text-ink">
            {t.connect.title}
          </h2>
          <p className="text-ink-soft leading-relaxed max-w-md mx-auto mb-8">
            {t.connect.body}
          </p>
          <a
            href={site.facebookGroupUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-xs tracking-label uppercase px-8 py-4 border border-ink text-ink hover:bg-ink hover:text-ivory transition-colors"
          >
            {t.connect.button}
          </a>
        </Reveal>
      </section>
    </>
  );
}
