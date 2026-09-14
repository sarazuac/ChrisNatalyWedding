"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

// Add more photos to /public/gallery and list them here (with their real
// pixel dimensions, so the masonry layout and next/image sizing stay correct).
const photos = [
  { src: "/gallery/photo-01.jpg", width: 2048, height: 1365 },
  { src: "/gallery/photo-02.jpg", width: 1366, height: 2049 },
  { src: "/gallery/photo-03.jpg", width: 1024, height: 1536 },
  { src: "/gallery/photo-04.jpg", width: 1366, height: 2049 },
  { src: "/gallery/photo-05.jpg", width: 1690, height: 2048 },
  { src: "/gallery/photo-06.jpg", width: 1024, height: 1536 },
  { src: "/gallery/photo-07.jpg", width: 1366, height: 2049 },
  { src: "/gallery/photo-08.jpg", width: 1366, height: 2049 },
  { src: "/gallery/photo-09.jpg", width: 1366, height: 2049 },
  { src: "/gallery/photo-10.jpg", width: 1366, height: 2049 },
  { src: "/gallery/photo-11.jpg", width: 1366, height: 2049 },
  { src: "/gallery/photo-12.jpg", width: 1366, height: 2048 },
  { src: "/gallery/photo-13.jpg", width: 1366, height: 2049 },
];

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
              <Image
                src={photo.src}
                alt="Nataly and Christian"
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
