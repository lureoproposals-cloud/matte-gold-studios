/**
 * Ambientní "glow" pozadí — jemné rozmazané zlaté kruhy fixované ve viewportu
 * za veškerým obsahem. Pomalá pulzní animace, čistě dekorativní.
 * S prefers-reduced-motion se animace vypne (viz styles.css).
 */
export function AmbientGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
    </div>
  );
}
