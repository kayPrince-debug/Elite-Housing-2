"use client";

import Link from "next/link";
import { useEffect } from "react";
import "./globals.css";
import { SITE_NAME } from "@/lib/site";
import styles from "./global-error.module.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Something went wrong</h1>
          <p className={styles.text}>
            {SITE_NAME} could not render this view. Try again, or return to the home page.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.button} onClick={reset}>
              Try again
            </button>
            <Link className={styles.link} href="/">
              Return home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
