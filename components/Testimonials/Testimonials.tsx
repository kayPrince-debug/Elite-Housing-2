"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { SITE_NAME } from "@/lib/site";
import styles from "./Testimonials.module.css";

const ITEMS = [
  {
    quote: `${SITE_NAME} runs our portfolio like a product team. Maintenance response times dropped, renewals improved, and I finally trust the monthly numbers.`,
    name: "Jordan Avery",
    role: "Principal, Avery Capital Partners",
  },
  {
    quote:
      "Residents notice the difference immediately: clearer communication, fewer loose ends, and a team that follows through. That translates directly to retention.",
    name: "Priya Desai",
    role: "Director of Operations, Kinfolk Living",
  },
  {
    quote:
      "We onboarded in weeks, not quarters. The operating cadence is disciplined without feeling corporate. It feels like a partner, not a vendor.",
    name: "Marcus Nguyen",
    role: "Founder, Harbor & Co.",
  },
] as const;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => {
      const len = ITEMS.length;
      const wrapped = (next + len) % len;
      setIndex(wrapped);
    },
    []
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % ITEMS.length);
    }, 5000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section
      id="testimonials"
      className={styles.section}
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <header className={styles.header}>
            <div>
              <p className={styles.kicker}>Proof</p>
              <h2 id="testimonials-heading" className={styles.title}>
                Owners stay for the outcomes. Residents stay for the experience.
              </h2>
            </div>
            <div className={styles.controls} aria-label="Testimonial navigation">
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => go(index - 1)}
                aria-label="Previous testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M15.5 19.5 8 12l7.5-7.5 1.4 1.4L10.8 12l6.1 6.1-1.4 1.4Z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => go(index + 1)}
                aria-label="Next testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M8.5 19.5 7.1 18.1 13.2 12 7.1 5.9 8.5 4.5 16 12l-7.5 7.5Z"
                  />
                </svg>
              </button>
            </div>
          </header>
        </ScrollReveal>

        <ScrollReveal variant="scale" delayMs={90}>
          <div
            className={styles.viewport}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className={styles.track}
              style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
            >
              {ITEMS.map((item) => (
                <article key={item.name} className={styles.slide} aria-hidden="false">
                  <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
                  <div className={styles.meta}>
                    <div className={styles.person}>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.role}>{item.role}</span>
                    </div>
                    <div className={styles.dots} role="tablist" aria-label="Slides">
                      {ITEMS.map((_, i) => (
                        <button
                          key={`testimonial-dot-${i}`}
                          type="button"
                          role="tab"
                          aria-selected={i === index}
                          className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                          onClick={() => go(i)}
                          aria-label={`Show testimonial ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
