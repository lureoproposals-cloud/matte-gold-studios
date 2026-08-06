import { useEffect, useState } from "react";

const STORAGE_KEY = "lureo-cookie-consent";

/**
 * GDPR cookie lišta — objeví se po ~1 s při první návštěvě,
 * po volbě se uloží do localStorage a znovu se nezobrazí.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    const t = window.setTimeout(() => setVisible(true), 1000);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* soukromý režim apod. — lištu jen skryjeme */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-card/95 backdrop-blur-sm animate-fade-in">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-xs leading-relaxed text-mute md:text-sm">
          Používáme pouze technické cookies nezbytné pro fungování kontaktního formuláře.
          Nesledujeme vás a nepředáváme žádná data reklamním sítím.
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={() => dismiss("accepted")}
            className="border border-gold bg-gold px-6 py-2.5 text-[0.65rem] uppercase tracking-[0.22em] text-[#141210] transition-opacity duration-200 hover:opacity-90"
          >
            Přijmout
          </button>
          <button
            type="button"
            onClick={() => dismiss("declined")}
            className="border border-white/20 px-6 py-2.5 text-[0.65rem] uppercase tracking-[0.22em] text-mute transition-colors duration-200 hover:border-white/50 hover:text-foreground"
          >
            Odmítnout
          </button>
        </div>
      </div>
    </div>
  );
}
