/**
 * Jednorázový intro overlay při načtení stránky:
 * nakreslí se obrys prohlížečového okna a wireframe linky,
 * po ~1.5 s se rozpustí do finálního hero obsahu.
 * Čistě CSS animace — s prefers-reduced-motion se vůbec nerenderuje viditelně.
 */
export function HeroIntro() {
  return (
    <div
      className="hero-intro pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-background"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 500"
        className="w-[min(88vw,700px)]"
        fill="none"
        strokeLinecap="round"
      >
        {/* Obrys okna prohlížeče */}
        <rect
          className="hi-draw hi-d1"
          x="30"
          y="30"
          width="740"
          height="440"
          rx="4"
          stroke="var(--gold)"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
        {/* Semaforová tlačítka */}
        <circle className="hi-dot" cx="62" cy="58" r="4" stroke="rgba(255,255,255,0.35)" />
        <circle className="hi-dot" cx="80" cy="58" r="4" stroke="rgba(255,255,255,0.35)" />
        <circle className="hi-dot" cx="98" cy="58" r="4" stroke="rgba(255,255,255,0.35)" />
        {/* Adresní řádek */}
        <line className="hi-draw hi-d2" x1="140" y1="58" x2="520" y2="58" stroke="rgba(255,255,255,0.22)" />
        {/* Hrana chromu okna */}
        <line className="hi-draw hi-d2" x1="30" y1="86" x2="770" y2="86" stroke="rgba(255,255,255,0.15)" />
        {/* Eyebrow label */}
        <line className="hi-draw hi-d3" x1="90" y1="152" x2="238" y2="152" stroke="var(--gold)" strokeOpacity="0.6" strokeWidth="2" />
        {/* Nadpis — dva silné tahy */}
        <line className="hi-draw hi-d4" x1="90" y1="206" x2="580" y2="206" stroke="rgba(245,240,230,0.5)" strokeWidth="10" />
        <line className="hi-draw hi-d4" x1="90" y1="246" x2="440" y2="246" stroke="rgba(245,240,230,0.5)" strokeWidth="10" />
        {/* Zlatá podtržítka pod nadpisem */}
        <line className="hi-draw hi-d4" x1="90" y1="284" x2="220" y2="284" stroke="var(--gold)" strokeOpacity="0.5" strokeWidth="1.5" />
        {/* Odstavec — tři tenké linky */}
        <line className="hi-draw hi-d5" x1="90" y1="322" x2="480" y2="322" stroke="rgba(138,131,120,0.6)" />
        <line className="hi-draw hi-d5" x1="90" y1="342" x2="520" y2="342" stroke="rgba(138,131,120,0.6)" />
        <line className="hi-draw hi-d5" x1="90" y1="362" x2="380" y2="362" stroke="rgba(138,131,120,0.6)" />
        {/* CTA tlačítko */}
        <rect className="hi-draw hi-d5" x="90" y="396" width="188" height="42" stroke="var(--gold)" strokeOpacity="0.55" />
      </svg>
    </div>
  );
}
