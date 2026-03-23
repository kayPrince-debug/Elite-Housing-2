"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import styles from "./CountdownBar.module.css";

const LAUNCH_MS = new Date("2026-09-11T09:00:00").getTime();

function getRemaining() {
  const diff = Math.max(0, LAUNCH_MS - Date.now());
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds };
}

export function CountdownBar() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [remaining, setRemaining] = useState(getRemaining);
  const [pastLaunch, setPastLaunch] = useState(false);

  useEffect(() => {
    if (!mounted) return;
    const tick = () => {
      const done = Date.now() >= LAUNCH_MS;
      setPastLaunch(done);
      setRemaining(getRemaining());
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.style.setProperty(
      "--countdown-bar-height",
      pastLaunch ? "0px" : "44px"
    );
  }, [mounted, pastLaunch]);

  if (!mounted) {
    return (
      <div
        className={styles.wrap}
        style={{ minHeight: 44 }}
        aria-hidden="true"
      />
    );
  }

  if (pastLaunch) {
    return null;
  }

  return (
    <div className={styles.wrap} role="timer" aria-live="polite">
      <div className={styles.inner}>
        <span className={styles.label}>Platform launch</span>
        <div className={styles.timer} aria-label="Time until September 11, 2026">
          <div className={styles.unit}>
            <span className={styles.value}>{remaining.days}</span>
            <span className={styles.caption}>Days</span>
          </div>
          <div className={styles.unit}>
            <span className={styles.value}>{remaining.hours}</span>
            <span className={styles.caption}>Hours</span>
          </div>
          <div className={styles.unit}>
            <span className={styles.value}>{remaining.minutes}</span>
            <span className={styles.caption}>Minutes</span>
          </div>
          <div className={styles.unit}>
            <span className={styles.value}>{remaining.seconds}</span>
            <span className={styles.caption}>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
