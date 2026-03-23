import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.title}>This page does not exist</h1>
        <p className={styles.lede}>
          The link may be outdated, or the page was moved. Everything you need is still on
          the home page.
        </p>
        <Link className={styles.cta} href="/">
          Return home
        </Link>
      </div>
    </div>
  );
}
