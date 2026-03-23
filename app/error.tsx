"use client";

import Link from "next/link";
import { useEffect } from "react";
import { SITE_NAME } from "@/lib/site";
import styles from "./error.module.css";

export default function Error({
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
    <div className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.code} aria-hidden="true">
          !
        </p>
        <h1 className={styles.title}>Something went wrong</h1>
        <p className={styles.lede}>
          {SITE_NAME} hit an unexpected error. You can try again or return to the home page.
          Details are logged for debugging.
        </p>
        <div className={styles.actions}>
          <button type="button" className={styles.cta} onClick={reset}>
            Try again
          </button>
          <Link className={styles.secondary} href="/">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
