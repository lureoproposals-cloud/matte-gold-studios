import { useCallback, useRef, useState } from "react";
import { GripVertical } from "lucide-react";

/**
 * Interaktivní posuvník "před / po".
 * Vlevo generická (šedá, rozostřená) verze, vpravo finální design.
 * Ovládání tažením (myš i dotyk) nebo šipkami na klávesnici.
 */
export function BeforeAfter({
  image,
  name,
  tag,
}: {
  image: string;
  name: string;
  tag: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(94, Math.max(6, pct)));
  }, []);

  return (
    <div
      ref={ref}
      role="slider"
      aria-label={`Porovnání před a po — ${name}`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setPos((p) => Math.max(6, p - 6));
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setPos((p) => Math.min(94, p + 6));
        }
      }}
      className="relative cursor-ew-resize touch-pan-y overflow-hidden bg-[#1a1714] select-none focus-visible:outline-1 focus-visible:outline-ring"
    >
      {/* PO — finální design (základní vrstva, vpravo).
          Obrázek je v normálním toku dokumentu (ne absolutně pozicovaný),
          takže výška karty vychází přímo z něj. Díky tomu se obsah vykreslí
          i v prohlížečích/WebView, kde selže aspect-ratio na kontejneru
          s pouze absolutně pozicovanými potomky. */}
      <img
        src={image}
        alt={`Web ${name} — finální design`}
        className="block aspect-[4/5] w-full object-cover"
        loading="lazy"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-[#141210]/45" />

      {/* PŘED — generická verze (ořezaná levá vrstva) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={image}
          alt=""
          aria-hidden
          className="ba-before-img absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-[#141210]/55" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #ffffff 0 1px, transparent 1px 26px)",
          }}
        />
      </div>

      {/* Popisky vrstev */}
      <span className="pointer-events-none absolute left-4 top-4 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-white/50">
        Před
      </span>
      <span className="pointer-events-none absolute right-4 top-4 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-white/50">
        Po
      </span>

      {/* Tag dole uprostřed */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
        <span className="font-serif text-sm italic text-white/60">{tag}</span>
      </div>

      {/* Dělící linka s perforací filmového pásu */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute inset-y-0 w-px -translate-x-1/2 bg-white/40" />
        <div className="absolute inset-y-3 flex -translate-x-1/2 flex-col justify-between">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="h-[3px] w-[3px] rounded-full bg-white/45" />
          ))}
        </div>
        <div className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/70 bg-[#141210]/85 text-gold">
          <GripVertical size={16} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
