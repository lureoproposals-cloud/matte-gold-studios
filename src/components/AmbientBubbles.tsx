/**
 * Ambientní pozadí — měkké, matné rozmazané bubliny v tónech starého zlata,
 * bronzu a tmavého antracitu. Každá bublina pomalu driftuje do strany
 * a nezávisle se objevuje / rozpouští (opacity 0 → peak → 0), takže působí,
 * jako by vznikaly a zase mizely. Cykly 18–30 s, různé délky i záporné delays,
 * aby se nikdy nepohybovaly synchronně.
 * Kontejner se sám odhaluje po skončení HeroIntro (~1 s), takže nesoutěží
 * s úvodní animací, ale bubliny jsou brzy viditelné. S prefers-reduced-motion
 * se pohyb vypne a bubliny zůstanou jako statické, jemné skvrny.
 *
 * Mobilní hodnoty (--m-*): velikosti zůstávají naladěné pro úzký viewport,
 * ale měkký okraj vytváří radiální gradient místo filter: blur(). Tím se mobilní
 * vykreslení vyhne problematické GPU kompozici v Samsung Internet / WebView.
 */

type BubbleVars =
  | "--peak"
  | "--m-peak"
  | "--m-min"
  | "--m-w"
  | "--m-h"
  | "--m-color";

type Bubble = {
  className: string;
  style: React.CSSProperties & Record<BubbleVars, string>;
};

const bubbles: Bubble[] = [
  {
    // Zlatá — levý horní roh, největší
    className: "bubble bubble-drift-a",
    style: {
      left: "-8%",
      top: "-8%",
      width: "36vw",
      height: "36vw",
      background: "#C9A24B",
      filter: "blur(110px)",
      animationDuration: "26s",
      animationDelay: "-4s",
      "--peak": "0.30",
      "--m-peak": "0.36",
      "--m-min": "0.16",
      "--m-w": "62vw",
      "--m-h": "62vw",
      "--m-color": "#C9A24B",
    },
  },
  {
    // Bronzová — pravá strana, střední výška
    className: "bubble bubble-drift-b",
    style: {
      right: "-8%",
      top: "14%",
      width: "32vw",
      height: "32vw",
      background: "#A87F45",
      filter: "blur(105px)",
      animationDuration: "30s",
      animationDelay: "-8s",
      "--peak": "0.28",
      "--m-peak": "0.34",
      "--m-min": "0.15",
      "--m-w": "56vw",
      "--m-h": "56vw",
      "--m-color": "#A87F45",
    },
  },
  {
    // Světlejší teplý bronz — levá dolní třetina, menší
    className: "bubble bubble-drift-a",
    style: {
      left: "12%",
      bottom: "-6%",
      width: "26vw",
      height: "26vw",
      background: "#B08D4F",
      filter: "blur(90px)",
      animationDuration: "22s",
      animationDelay: "-14s",
      "--peak": "0.25",
      "--m-peak": "0.31",
      "--m-min": "0.14",
      "--m-w": "46vw",
      "--m-h": "46vw",
      "--m-color": "#B08D4F",
    },
  },
  {
    // Zlatá — střed pravé poloviny, malá, krátký cyklus
    className: "bubble bubble-drift-b",
    style: {
      right: "20%",
      top: "50%",
      width: "22vw",
      height: "22vw",
      background: "#C9A24B",
      filter: "blur(80px)",
      animationDuration: "18s",
      animationDelay: "-2s",
      "--peak": "0.30",
      "--m-peak": "0.36",
      "--m-min": "0.16",
      "--m-w": "38vw",
      "--m-h": "38vw",
      "--m-color": "#C9A24B",
    },
  },
  {
    // Tmavý antracit — střed dolní plochy; sotva viditelná, spíš cítit (hloubka)
    className: "bubble bubble-drift-a",
    style: {
      left: "22%",
      bottom: "-14%",
      width: "40vw",
      height: "30vw",
      background: "#26201A",
      filter: "blur(120px)",
      animationDuration: "28s",
      animationDelay: "-10s",
      "--peak": "0.45",
      "--m-peak": "0.55",
      "--m-min": "0.24",
      "--m-w": "65vw",
      "--m-h": "49vw",
      "--m-color": "#26201A",
    },
  },
  {
    // Tmavá stínová — horní pravý roh; jemné ztmavení proti zlatým
    className: "bubble bubble-drift-b",
    style: {
      right: "-4%",
      top: "-8%",
      width: "29vw",
      height: "24vw",
      background: "#0D0B09",
      filter: "blur(120px)",
      animationDuration: "24s",
      animationDelay: "-20s",
      "--peak": "0.42",
      "--m-peak": "0.52",
      "--m-min": "0.23",
      "--m-w": "47vw",
      "--m-h": "39vw",
      "--m-color": "#0D0B09",
    },
  },
];

export function AmbientBubbles() {
  return (
    <div
      className="ambient-bubbles pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      {bubbles.map((b, i) => (
        <div key={i} className={b.className} style={b.style} />
      ))}
    </div>
  );
}
