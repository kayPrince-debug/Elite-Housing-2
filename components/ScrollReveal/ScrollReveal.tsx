"use client";

import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./ScrollReveal.module.css";

export type RevealVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "blur";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delayMs?: number;
};

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function ScrollReveal({
  children,
  className,
  variant = "fadeUp",
  delayMs = 0,
}: ScrollRevealProps) {
  const { ref, isVisible, prefersReducedMotion } = useScrollReveal();

  const variantClass =
    variant === "fadeLeft"
      ? styles.fadeLeft
      : variant === "fadeRight"
        ? styles.fadeRight
        : variant === "scale"
          ? styles.scale
          : variant === "blur"
            ? styles.blur
            : "";

  const style =
    prefersReducedMotion || delayMs === 0
      ? undefined
      : { transitionDelay: `${delayMs}ms` };

  return (
    <div
      ref={ref}
      className={cx(
        styles.root,
        variantClass,
        isVisible && styles.visible,
        prefersReducedMotion && styles.instant,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
