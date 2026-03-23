"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "elite-housing-cookie-consent";

export function CookieConsent() {
  const [render, setRender] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;

    queueMicrotask(() => {
      if (cancelled) return;
      try {
        if (window.localStorage.getItem(STORAGE_KEY)) return;
      } catch {
        /* ignore */
      }

      setRender(true);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setVisible(true));
    });

    return () => {
      cancelled = true;
      document.body.style.overflow = "";
    };
  }, []);

  function accept() {
    setVisible(false);
    window.setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setRender(false);
      document.body.style.overflow = "";
    }, 320);
  }

  function goToPrivacy(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setVisible(false);
    window.setTimeout(() => {
      setRender(false);
      document.body.style.overflow = "";
      document.getElementById("privacy")?.scrollIntoView({ behavior: "smooth" });
    }, 320);
  }

  if (!render) return null;

  return (
    <>
      <div
        className={`${styles.overlay} ${visible ? styles.overlayOpen : ""}`}
        aria-hidden="true"
      />
      <div
        className={`${styles.panel} ${visible ? styles.panelOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
      >
        <h2 id="cookie-title" className={styles.title}>
          Cookies and analytics
        </h2>
        <p className={styles.text}>
          We use essential cookies to keep this experience stable, and optional analytics
          to understand what content helps owners and residents most. You can accept
          analytics or continue with essentials only.
        </p>
        <div className={styles.actions}>
          <a className={styles.link} href="#privacy" onClick={goToPrivacy}>
            Privacy policy
          </a>
          <button type="button" className={styles.accept} onClick={accept}>
            Accept and continue
          </button>
        </div>
      </div>
    </>
  );
}
