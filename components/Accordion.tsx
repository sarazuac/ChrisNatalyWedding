"use client";

import { useState } from "react";

export default function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-7 text-left"
            >
              <span className="font-display italic text-xl md:text-2xl text-ink">
                {item.q}
              </span>
              <span
                className={`shrink-0 text-sage text-2xl leading-none transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <p className="text-ink-soft leading-relaxed max-w-xl">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
