"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dict, type Lang } from "./dictionary";

const STORAGE_KEY = "site-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof dict)["en"];
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    function syncFromBrowser() {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === "en" || saved === "es") {
          setLangState(saved);
          return;
        }
        if (navigator.language?.toLowerCase().startsWith("es")) {
          setLangState("es");
        }
      } catch {
        // localStorage unavailable — fall back to English
      }
    }
    syncFromBrowser();
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore write failures (private browsing, etc.)
    }
  };

  const value = useMemo(
    () => ({ lang, setLang, t: dict[lang] }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
