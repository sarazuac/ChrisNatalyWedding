"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

// Placeholder tiles — replace the files in /public/gallery with your own
// photos (same filenames, or update this list) to swap them in.
const photos = Array.from({ length: 8 }, (_, i) => ({
  src: `/gallery/placeholder-${i + 1}.svg`,
  tall: [0, 2, 4, 6].includes(i),
}));

export default function GalleryContent() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        kicker={t.gallery.kicker}
        title={t.gallery.title}
        subtitle={t.gallery.subtitle}
      />

      <section className="bg-ivory py-24 px-6">
        <div className="mx-auto max-w-6xl columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {photos.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 3) * 90}
              className="mb-4 break-inside-avoid overflow-hidden"
            >
              <div
                className={`relative w-full ${photo.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={photo.src}
                  alt="Nataly and Christian"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
