import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  // Pozn.: vždy renderujeme motion.div se stejným `initial`, aby se SSR HTML
  // shodovalo s prvním klientským renderem (hydration). Reduced motion řešíme
  // pouze přes transition (nemění renderované atributy) — obsah se ukáže okamžitě.
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={
        reduce
          ? { duration: 0, delay: 0 }
          : { duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay }
      }
    >
      {children}
    </motion.div>
  );
}
