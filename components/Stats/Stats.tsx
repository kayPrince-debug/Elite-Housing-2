"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Stats.module.css";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

const STATS: Stat[] = [
  { label: "Average owner response time for portfolio questions", value: 2, suffix: "h" },
  { label: "On-time rent collection across managed units (rolling 90 days)", value: 98, suffix: "%" },
  { label: "Work orders closed within SLA", value: 91, suffix: "%" },
  { label: "Average resident satisfaction score", value: 4.8, suffix: "/5" },
];

function easeOutCubic(t: number) {
  const p = 1 - t;
  return 1 - p * p * p;
}

function AnimatedValue({
  target,
  prefix,
  suffix,
  active,
  reducedMotion,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
  reducedMotion: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  const decimals = Number.isInteger(target) ? 0 : 1;

  useEffect(() => {
    if (!active || reducedMotion) return;

    const duration = 2000;
    startRef.current = null;

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const t = Math.min(1, (now - startRef.current) / duration);
      const eased = easeOutCubic(t);
      setDisplay(target * eased);
      if (t < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [active, reducedMotion, target]);

  const value = reducedMotion && active ? target : display;
  const text =
    decimals === 0
      ? `${Math.round(value)}`
      : value.toFixed(1).replace(/\.0$/, "");

  return (
    <div className={styles.value}>
      {prefix}
      {text}
      {suffix}
    </div>
  );
}

export function Stats() {
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    queueMicrotask(() => setReducedMotion(mq.matches));
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" className={styles.section} aria-labelledby="stats-heading">
      <div className="container">
        <div ref={ref}>
          <ScrollReveal variant="fadeUp">
            <h2 id="stats-heading" className={styles.heading}>
              Outcomes we track every week
            </h2>
          </ScrollReveal>

          <div className={styles.grid}>
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} variant="fadeUp" delayMs={i * 90}>
                <article className={styles.card}>
                  <AnimatedValue
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    active={active}
                    reducedMotion={reducedMotion}
                  />
                  <p className={styles.label}>{stat.label}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
