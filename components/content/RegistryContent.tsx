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
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {site.registries.map((registry, i) => (
            <Reveal
              key={registry.name}
              delay={i * 100}
              className="border border-line p-10 text-center flex flex-col items-center"
            >
              <h2 className="font-display italic text-2xl mb-6 text-ink">
                {registry.name}
              </h2>
              <a
                href={registry.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-[11px] tracking-label uppercase px-6 py-3 border border-ink text-ink hover:bg-ink hover:text-ivory transition-colors"
              >
                {t.registry.viewButton}
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
