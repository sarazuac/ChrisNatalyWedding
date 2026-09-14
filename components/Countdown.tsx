"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site-config";
import { useLang } from "@/lib/i18n";

function getTimeLeft() {
  const total = +new Date(site.weddingDateISO) - +new Date();
  const clamped = Math.max(total, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function Countdown() {
  const { t } = useLang();
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const tick = () => setTime(getTimeLeft());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: t.countdown.days, value: time?.days },
    { label: t.countdown.hours, value: time?.hours },
    { label: t.countdown.minutes, value: time?.minutes },
    { label: t.countdown.seconds, value: time?.seconds },
  ];

  return (
    <div className="flex justify-center gap-6 md:gap-14">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="font-display text-4xl md:text-6xl tabular-nums text-ink">
            {unit.value !== undefined ? String(unit.value).padStart(2, "0") : "--"}
          </span>
          <span className="mt-3 text-[10px] md:text-[11px] tracking-label uppercase text-ink-soft">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
