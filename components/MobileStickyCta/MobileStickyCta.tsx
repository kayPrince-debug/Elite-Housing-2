"use client";

import { useEffect, useState } from "react";
import styles from "./MobileStickyCta.module.css";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const threshold = hero ? hero.offsetHeight * 0.65 : 520;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      className={`${styles.bar} ${visible ? styles.barVisible : ""}`}
      aria-label="Quick call to action"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.kicker}>Ready to move</span>
          <span className={styles.title}>Get a tailored plan</span>
        </div>
        <a className={styles.cta} href="#cta">
          Get started
        </a>
      </div>
    </aside>
  );
}
