"use client";

import { useLang } from "@/lib/i18n";

export default function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang();

  const border = dark ? "border-ivory/50" : "border-ink/30";
  const inactive = dark
    ? "text-ivory/70 hover:text-ivory"
    : "text-ink-soft hover:text-ink";
  const active = dark ? "bg-ivory text-ink" : "bg-ink text-ivory";

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border p-0.5 text-[11px] tracking-label uppercase ${border}`}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3.5 py-1.5 transition-colors ${
          lang === "en" ? active : inactive
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`rounded-full px-3.5 py-1.5 transition-colors ${
          lang === "es" ? active : inactive
        }`}
      >
        ES
      </button>
    </div>
  );
}
