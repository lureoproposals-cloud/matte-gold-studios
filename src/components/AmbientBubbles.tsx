/**
 * Ambientní pozadí — měkké, matné rozmazané bubliny v tónech starého zlata,
 * bronzu a tmavého antracitu. Každá bublina pomalu driftuje do strany
 * a nezávisle se objevuje / rozpouští (opacity 0 → peak → 0), takže působí,
 * jako by vznikaly a zase mizely. Cykly 18–30 s, různé délky i záporné delays,
 * aby se nikdy nepohybovaly synchronně.
 * Kontejner se sám odhaluje po skončení HeroIntro (~1 s), takže nesoutěží
 * s úvodní animací, ale bubliny jsou brzy viditelné. S prefers-reduced-motion
 * se pohyb vypne a bubliny zůstanou jako statické, jemné skvrny.
 */

type Bubble = {
  className: string;
  style: React.CSSProperties & Record<"--peak", string>;
};

const bubbles: Bubble[] = [
  {
    // Zlatá — levý horní roh, největší
    className: "bubble bubble-drift-a",
    style: {
      left: "-12%",
      top: "-14%",
      width: "46vw",
      height: "46vw",
      background: "#C9A24B",
      filter: "blur(110px)",
      animationDuration: "26s",
      animationDelay: "-2s",
      "--peak": "0.24",
    },
  },
  {
    // Bronzová — pravá strana, střední výška
    className: "bubble bubble-drift-b",
    style: {
      right: "-14%",
      top: "18%",
      width: "40vw",
      height: "40vw",
      background: "#A87F45",
      filter: "blur(100px)",
      animationDuration: "30s",
      animationDelay: "-12s",
      "--peak": "0.22",
    },
  },
  {
    // Světlejší teplý bronz — levá dolní čtvrtina, menší
    className: "bubble bubble-drift-a",
    style: {
      left: "6%",
      bottom: "-8%",
      width: "30vw",
      height: "30vw",
      background: "#B08D4F",
      filter: "blur(90px)",
      animationDuration: "22s",
      animationDelay: "-18s",
      "--peak": "0.20",
    },
  },
  {
    // Zlatá — střed pravé poloviny, malá, krátký cyklus
    className: "bubble bubble-drift-b",
    style: {
      right: "18%",
      top: "55%",
      width: "24vw",
      height: "24vw",
      background: "#C9A24B",
      filter: "blur(80px)",
      animationDuration: "18s",
      animationDelay: "-7s",
      "--peak": "0.26",
    },
  },
  {
    // Tmavý antracit — střed dolní plochy; sotva viditelná, spíš cítit (hloubka)
    className: "bubble bubble-drift-a",
    style: {
      left: "28%",
      bottom: "-22%",
      width: "52vw",
      height: "40vw",
      background: "#26201A",
      filter: "blur(120px)",
      animationDuration: "28s",
      animationDelay: "-9s",
      "--peak": "0.65",
    },
  },
  {
    // Tmavá stínová — horní pravý roh; jemné ztmavení proti zlatým
    className: "bubble bubble-drift-b",
    style: {
      right: "-6%",
      top: "-10%",
      width: "34vw",
      height: "28vw",
      background: "#0D0B09",
      filter: "blur(120px)",
      animationDuration: "24s",
      animationDelay: "-22s",
      "--peak": "0.65",
    },
  },
];

export function AmbientBubbles() {
  return (
    <div
      className="ambient-bubbles pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {bubbles.map((b, i) => (
        <div key={i} className={b.className} style={b.style} />
      ))}
    </div>
  );
}
