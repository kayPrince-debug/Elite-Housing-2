"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SITE_NAME } from "@/lib/site";
import styles from "./Navbar.module.css";

const SECTIONS = [
  { id: "trusted-by", label: "Partners" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How it works" },
  { id: "showcase", label: "Showcase" },
  { id: "testimonials", label: "Stories" },
  { id: "stats", label: "Results" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
] as const;

export function Navbar() {
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => onScroll());
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        queueMicrotask(() => menuButtonRef.current?.focus());
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const id = window.requestAnimationFrame(() =>
      firstNavLinkRef.current?.focus()
    );
    return () => window.cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    const nodes = ["hero", ...SECTIONS.map((s) => s.id), "cta"]
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMenu();
  };

  return (
    <header
      className={`${styles.nav} ${scrolled ? styles.navScrolled : styles.navTop}`}
    >
      <nav className={`container ${styles.navInner}`} aria-label="Primary">
        <a
          href="#hero"
          className={styles.brand}
          onClick={(e) => {
            e.preventDefault();
            scrollToId("hero");
          }}
        >
          <span className={styles.brandMark} aria-hidden="true" />
          {SITE_NAME}
        </a>

        <div
          className={`${styles.drawer} ${styles.linksWrap} ${open ? styles.drawerOpen : ""}`}
          id="mobile-menu"
        >
          <ul className={styles.links}>
            {SECTIONS.map((item, index) => (
              <li key={item.id}>
                <a
                  ref={index === 0 ? firstNavLinkRef : undefined}
                  href={`#${item.id}`}
                  className={`${styles.link} ${active === item.id ? styles.linkActive : ""}`}
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cta"
            className={`${styles.cta} ${styles.mobileCta}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToId("cta");
            }}
          >
            Get started
          </a>
        </div>

        <a
          href="#cta"
          className={`${styles.cta} ${styles.desktopCta}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToId("cta");
          }}
        >
          Get started
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className={`${styles.menuToggle} ${open ? styles.menuOpen : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={styles.menuIcon}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </nav>
    </header>
  );
}
