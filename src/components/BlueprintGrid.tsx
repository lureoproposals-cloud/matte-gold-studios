/**
 * Matné "blueprint" pozadí — velmi jemná zlatá mřížka (1px linky, ~5% opacita)
 * fixovaná ve viewportu za veškerým obsahem. Pomalý, sotva postřehnutelný drift
 * pro pocit tichého pohybu; s prefers-reduced-motion se animace vypne (viz styles.css).
 * Žádné glow, žádné gradienty — jen čisté tenké linky.
 */
export function BlueprintGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="blueprint-grid" />
    </div>
  );
}
