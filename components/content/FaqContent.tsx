"use client";

import PageHeader from "@/components/PageHeader";
import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

export default function FaqContent() {
  const { t } = useLang();

  return (
    <>
      <PageHeader kicker={t.faq.kicker} title={t.faq.title} />

      <section className="bg-ivory py-24 px-6">
        <Reveal className="mx-auto max-w-2xl">
          <Accordion items={t.faq.items} />
        </Reveal>
      </section>
    </>
  );
}
