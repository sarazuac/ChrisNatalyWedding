"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";

export default function TravelContent() {
  const { t, lang } = useLang();
  const dateDisplay = lang === "es" ? site.weddingDateDisplayEs : site.weddingDateDisplayEn;

  return (
    <>
      <PageHeader
        kicker={t.travel.kicker}
        title={t.travel.title}
        subtitle={t.travel.subtitle}
      />

      {/* Embarkation */}
      <section className="bg-ivory py-24 px-6">
        <div className="mx-auto max-w-4xl grid gap-px overflow-hidden border border-line md:grid-cols-2 bg-line">
          <Reveal className="bg-ivory p-10 md:p-12">
            <p className="text-[11px] tracking-label uppercase text-sage mb-3">
              {t.travel.embarkKicker}
            </p>
            <h2 className="font-display italic text-2xl mb-2 text-ink">
              {site.cruiseLine}
            </h2>
            <p className="text-ink-soft text-sm mb-6">
              {t.travel.embarkPortLabel}: {site.embarkPort}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(site.embarkPort)}`}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] tracking-label uppercase text-ink border-b border-ink pb-1 hover:text-sage hover:border-sage transition-colors"
            >
              {t.travel.mapLink}
            </a>
          </Reveal>
          <Reveal delay={100} className="bg-ivory p-10 md:p-12">
            <p className="text-[11px] tracking-label uppercase text-sage mb-3">
              {t.details.duration}
            </p>
            <h2 className="font-display italic text-2xl mb-2 text-ink">
              {t.details.durationValue}
            </h2>
            <p className="text-ink-soft text-sm">
              {t.details.sailDates}: {dateDisplay}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-sand py-24 px-6">
        <Reveal className="text-center mb-14">
          <p className="text-[11px] tracking-label uppercase text-sage mb-4">
            {t.travel.itineraryKicker}
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl text-ink">
            {t.travel.itineraryTitle}
          </h2>
        </Reveal>

        <Reveal className="mx-auto max-w-3xl mb-14 border border-line overflow-hidden">
          <Image
            src="/images/itinerary.jpg"
            alt="Full cruise itinerary map and schedule"
            width={692}
            height={687}
            className="w-full h-auto"
          />
        </Reveal>

        <Reveal className="mx-auto max-w-3xl overflow-x-auto">
          <table className="w-full border-collapse bg-ivory text-sm">
            <thead>
              <tr className="border-b border-line">
                {[
                  t.travel.tableHeaders.day,
                  t.travel.tableHeaders.date,
                  t.travel.tableHeaders.port,
                  t.travel.tableHeaders.arrival,
                  t.travel.tableHeaders.departure,
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left py-4 px-4 text-[11px] tracking-label uppercase text-ink-soft whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {site.itinerary.map((stop) => (
                <tr key={stop.date} className="border-b border-line last:border-0">
                  <td className="py-4 px-4 font-display italic text-ink whitespace-nowrap">
                    {t.travel.days[stop.day]}
                  </td>
                  <td className="py-4 px-4 text-ink-soft whitespace-nowrap">
                    {stop.date}
                  </td>
                  <td className="py-4 px-4 text-ink-soft">{stop.port}</td>
                  <td className="py-4 px-4 text-ink-soft whitespace-nowrap">
                    {stop.arrival}
                  </td>
                  <td className="py-4 px-4 text-ink-soft whitespace-nowrap">
                    {stop.departure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="text-center mt-8">
          <p className="text-xs text-ink-soft max-w-lg mx-auto">
            {t.travel.itineraryNote}
          </p>
        </Reveal>
      </section>

      {/* Hotels */}
      <section className="bg-ivory py-24 px-6">
        <Reveal className="text-center mb-6">
          <p className="text-[11px] tracking-label uppercase text-sage mb-4">
            {t.travel.hotelsKicker}
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl text-ink">
            {t.travel.hotelsTitle}
          </h2>
        </Reveal>
        <Reveal className="text-center mb-16">
          <p className="text-ink-soft max-w-lg mx-auto">{t.travel.hotelsNote}</p>
        </Reveal>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {site.hotels.map((hotel, i) => (
            <Reveal
              key={hotel.name}
              delay={i * 100}
              className="bg-sand border border-line p-8 flex flex-col"
            >
              <h3 className="font-display italic text-xl mb-4 text-ink">
                {hotel.name}
              </h3>
              <a
                href={hotel.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-[11px] tracking-label uppercase text-ink border-b border-ink pb-1 self-start hover:text-sage hover:border-sage transition-colors"
              >
                {t.travel.learnMore}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Good to know */}
      <section className="bg-sand py-24 px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] tracking-label uppercase text-sage mb-4">
            {t.travel.goodToKnowKicker}
          </p>
          <h2 className="font-display italic text-3xl md:text-4xl mb-6 text-ink">
            {t.travel.goodToKnowTitle}
          </h2>
          <p className="text-ink-soft leading-relaxed">
            {t.travel.goodToKnowBody}
          </p>
        </Reveal>
      </section>
    </>
  );
}
