"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";

export default function RsvpContent() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        kicker={t.rsvp.kicker}
        title={t.rsvp.title}
        subtitle={t.rsvp.subtitle}
      />

      <section className="bg-ivory py-24 px-6">
        <Reveal className="mx-auto max-w-lg border border-line p-10 md:p-14 text-center">
          <p className="text-[11px] tracking-label uppercase text-sage mb-4">
            {t.rsvp.cardKicker}
          </p>
          <h2 className="font-display italic text-3xl md:text-4xl mb-6 text-ink">
            {t.rsvp.cardTitle}
          </h2>
          <p className="text-ink-soft leading-relaxed mb-10">{t.rsvp.body}</p>
          <a
            href={site.rsvpFormUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-xs tracking-label uppercase px-8 py-4 bg-ink text-ivory hover:bg-sage transition-colors"
          >
            {t.rsvp.button}
          </a>
          <p className="mt-8 text-xs text-ink-soft">
            {t.rsvp.questions}{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="underline hover:text-sage"
            >
              {site.contactEmail}
            </a>
          </p>
        </Reveal>
      </section>
    </>
  );
}
