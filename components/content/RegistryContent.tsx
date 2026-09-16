"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";

export default function RegistryContent() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        kicker={t.registry.kicker}
        title={t.registry.title}
        subtitle={t.registry.subtitle}
      />

      <section className="bg-ivory py-24 px-6">
        <Reveal className="mx-auto max-w-xl border border-line p-10 md:p-16 text-center">
          <h2 className="font-display italic text-3xl md:text-4xl mb-6 text-ink">
            {t.registry.cardTitle}
          </h2>
          <p className="text-ink-soft leading-relaxed mb-10 max-w-md mx-auto">
            {t.registry.cardBody}
          </p>
          <a
            href={site.honeyfundUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-xs tracking-label uppercase px-10 py-4 bg-sage text-ink hover:bg-[#4a5c42] hover:text-ivory transition-colors"
          >
            {t.registry.button}
          </a>
          <p className="mt-6 text-xs text-ink-soft max-w-sm mx-auto">
            {t.registry.feeNote}
          </p>
        </Reveal>
      </section>
    </>
  );
}
