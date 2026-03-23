import { SITE_NAME, SOCIAL_LINKS } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.brand}>{SITE_NAME}</div>

          <nav className={styles.links} aria-label="Footer">
            <a className={styles.link} href="#cta">
              Contact
            </a>
            <a className={styles.link} href="#faq">
              FAQ
            </a>
            <a className={styles.link} href="#pricing">
              Pricing
            </a>
            <a className={styles.link} href="#privacy">
              Privacy
            </a>
            <a className={styles.link} href="#terms">
              Terms
            </a>
          </nav>

          <div className={styles.social}>
            <a
              href={SOCIAL_LINKS.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.94 4.5a2.14 2.14 0 1 1 0 4.28 2.14 2.14 0 0 1 0-4.28ZM4.5 20.5h4.88V9.64H4.5V20.5ZM14.8 9.3c-1.5 0-2.45.82-2.86 1.42l-.04-1.08H8.5V20.5h4.88v-6.2c0-2.05.78-3.2 2.4-3.2 1.38 0 1.94 1.04 1.94 3.05V20.5H22v-7.4c0-3.1-1.65-4.8-4.6-4.8Z"
                />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.x}
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M4 4h4.2l3.4 4.6L15.3 4H20l-5.8 7.8L20 20h-4.2l-3.8-5.1L7.7 20H3l6.3-8.4L4 4Z"
                />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M8.5 4h7A4.5 4.5 0 0 1 20 8.5v7A4.5 4.5 0 0 1 15.5 20h-7A4.5 4.5 0 0 1 4 15.5v-7A4.5 4.5 0 0 1 8.5 4Zm0 2A2.5 2.5 0 0 0 6 8.5v7A2.5 2.5 0 0 0 8.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 6h-7Zm3.5 2.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 2a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM17.3 7.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <p className={styles.copy}>
          &copy; {year} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
