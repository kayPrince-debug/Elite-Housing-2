"use client";

import { useId, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./FAQ.module.css";

const ITEMS = [
  {
    q: "How fast can you onboard a new portfolio?",
    a: "Most owners go live in two to four weeks. The first milestone is operational clarity: leases, vendors, resident comms, and reporting. We parallelize where it matters and avoid ceremonial meetings that do not move KPIs.",
  },
  {
    q: "Do you replace our onsite staff?",
    a: "No. We strengthen the operating system around your team. If you need onsite coverage, we help you hire and train against clear playbooks. If you are fully remote, we coordinate vendors and residents with accountable workflows.",
  },
  {
    q: "What does success look like in the first 90 days?",
    a: "You should see fewer escalations, faster work order closure, cleaner rent reporting, and residents describing communication as consistent. We track leading indicators weekly, not vanity metrics.",
  },
] as const;

export function FAQ() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <header className={styles.header}>
            <p className={styles.kicker}>FAQ</p>
            <h2 id="faq-heading" className={styles.title}>
              Straight answers. No jargon theater.
            </h2>
            <p className={styles.lede}>
              If you are actively evaluating managers, these are the questions that
              separate operators from brochures.
            </p>
          </header>
        </ScrollReveal>

        <div className={styles.list}>
          {ITEMS.map((item, index) => {
            const isOpen = open === index;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <ScrollReveal key={item.q} variant="fadeUp" delayMs={index * 90}>
                <div className={styles.item}>
                  <button
                    type="button"
                    id={`${baseId}-trigger-${index}`}
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className={styles.question}>{item.q}</span>
                    <span
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                      aria-hidden="true"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M7 10l5 5 5-5H7z"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={panelId}
                    className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                    role="region"
                    aria-labelledby={`${baseId}-trigger-${index}`}
                  >
                    <div className={styles.panelInner}>
                      <p
                        className={`${styles.answer} ${isOpen ? styles.answerVisible : ""}`}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
