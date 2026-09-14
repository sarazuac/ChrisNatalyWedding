"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

export default function OurStoryContent() {
  const { t } = useLang();
  const milestones = t.ourStory.milestones;

  return (
    <>
      <PageHeader
        kicker={t.ourStory.kicker}
        title={t.ourStory.title}
        subtitle={t.ourStory.subtitle}
      />

      <section className="bg-ivory py-24 px-6">
        <div className="mx-auto max-w-3xl">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <div className="flex gap-x-8 md:gap-x-12">
                <div className="w-28 sm:w-32 md:w-36 shrink-0 flex flex-col items-center text-center">
                  <span className="font-display italic text-xl text-sage">
                    {m.year}
                  </span>
                  <span className="mt-3 h-3 w-3 shrink-0 rounded-full border-2 border-sage" />
                  {i < milestones.length - 1 && (
                    <span className="w-px flex-1 bg-line my-2" />
                  )}
                </div>
                <div className={`flex-1 min-w-0 ${i < milestones.length - 1 ? "pb-14" : ""}`}>
                  <h2 className="font-display italic text-3xl mb-3 text-ink">
                    {m.title}
                  </h2>
                  <p className="text-ink-soft leading-relaxed max-w-md">
                    {m.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
