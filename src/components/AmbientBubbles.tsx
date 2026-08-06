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
      left: "-6%",
      top: "-6%",
      width: "44vw",
      height: "44vw",
      background: "#C9A24B",
      filter: "blur(100px)",
      animationDuration: "26s",
      animationDelay: "-2s",
      "--peak": "0.40",
    },
  },
  {
    // Bronzová — pravá strana, střední výška
    className: "bubble bubble-drift-b",
    style: {
      right: "-6%",
      top: "18%",
      width: "38vw",
      height: "38vw",
      background: "#A87F45",
      filter: "blur(95px)",
      animationDuration: "30s",
      animationDelay: "-12s",
      "--peak": "0.38",
    },
  },
  {
    // Světlejší teplý bronz — levá dolní čtvrtina, menší
    className: "bubble bubble-drift-a",
    style: {
      left: "8%",
      bottom: "-4%",
      width: "28vw",
      height: "28vw",
      background: "#B08D4F",
      filter: "blur(85px)",
      animationDuration: "22s",
      animationDelay: "-18s",
      "--peak": "0.34",
    },
  },
  {
    // Zlatá — střed pravé poloviny, malá, krátký cyklus
    className: "bubble bubble-drift-b",
    style: {
      right: "16%",
      top: "55%",
      width: "22vw",
      height: "22vw",
      background: "#C9A24B",
      filter: "blur(75px)",
      animationDuration: "18s",
      animationDelay: "-7s",
      "--peak": "0.42",
    },
  },
  {
    // Tmavý antracit — střed dolní plochy; sotva viditelná, spíš cítit (hloubka)
    className: "bubble bubble-drift-a",
    style: {
      left: "28%",
      bottom: "-12%",
      width: "48vw",
      height: "36vw",
      background: "#26201A",
      filter: "blur(110px)",
      animationDuration: "28s",
      animationDelay: "-9s",
      "--peak": "0.75",
    },
  },
  {
    // Tmavá stínová — horní pravý roh; jemné ztmavení proti zlatým
    className: "bubble bubble-drift-b",
    style: {
      right: "-3%",
      top: "-6%",
      width: "32vw",
      height: "26vw",
      background: "#0D0B09",
      filter: "blur(110px)",
      animationDuration: "24s",
      animationDelay: "-22s",
      "--peak": "0.80",
    },
  },
];

export function AmbientBubbles() {
  return (
    <div
      className="ambient-bubbles pointer-events-none fixed inset-0 -z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {bubbles.map((b, i) => (
        <div key={i} className={b.className} style={b.style} />
      ))}
    </div>
  );
}
