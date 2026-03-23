"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/5990041/5990041-hd_1920_1080_25fps.mp4";

export function Hero() {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onScroll = () => setParallax(window.scrollY * 0.12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className={styles.section} aria-labelledby="hero-heading">
      <div className={styles.videoWrap} aria-hidden="true">
        <div
          className={styles.videoParallax}
          style={{ transform: `translate3d(0, ${parallax}px, 0)` }}
        >
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            poster="https://picsum.photos/id/48/1920/1080"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.grid}`}>
        <div>
          <div className={`${styles.badgeRow} ${styles.enterBadge}`}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon} aria-hidden="true" />
              <span>
                <strong>Featured on Product Hunt</strong> — Top 5 of the day
              </span>
            </div>
          </div>

          <h1 id="hero-heading" className={`${styles.headline} ${styles.enterTitle}`}>
            Elevate your living experience with management that puts residents first
            and owners at ease.
          </h1>

          <p className={`${styles.sub} ${styles.enterSub}`}>
            From proactive maintenance to seamless rent collection, we handle every
            detail so you can enjoy stress-free ownership and a better place to call
            home.
          </p>

          <div className={`${styles.actions} ${styles.enterActions}`}>
            <a className={styles.primary} href="#cta">
              Get started
            </a>
            <a className={styles.secondary} href="#how-it-works">
              See how it works
            </a>
          </div>
        </div>

        <div className={`${styles.mock} ${styles.enterMock}`}>
          <div className={styles.mockFrame}>
            <div className={styles.mockBar}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.mockScreen}>
              <div className={styles.mockImage}>
                <Image
                  src="https://picsum.photos/id/48/1200/750"
                  alt="Dashboard preview showing occupancy, rent collection, and maintenance requests for a managed portfolio"
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                  priority
                />
              </div>
              <aside className={styles.floatingCard}>
                <div className={styles.floatingLabel}>Portfolio health</div>
                <div className={styles.floatingValue}>98.4% on-time rent</div>
                <p className={styles.floatingHint}>
                  Automated reminders, clear resident comms, faster resolutions.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
