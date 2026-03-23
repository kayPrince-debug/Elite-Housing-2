import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./TrustedBy.module.css";

const ITEMS = [
  { name: "Northline Estates", caption: "Portfolio partner since 2019" },
  { name: "Harbor & Co.", caption: "Investor program" },
  { name: "Urban Ledger", caption: "Press feature" },
  { name: "Atlas REIT", caption: "Institutional owners" },
  { name: "Kinfolk Living", caption: "Resident experience" },
  { name: "Foundry Bank", caption: "Lending collaboration" },
] as const;

export function TrustedBy() {
  return (
    <section
      id="trusted-by"
      className={styles.section}
      aria-labelledby="trusted-heading"
    >
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <h2 id="trusted-heading" className={styles.label}>
            Trusted by teams who treat housing like a product
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delayMs={90}>
          <div className={styles.desktopOnly}>
            <div className={styles.desktopGrid}>
              {ITEMS.map((item) => (
                <div key={item.name} className={styles.item}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.caption}>{item.caption}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delayMs={90} className={styles.mobileOnly}>
          <div className={styles.track}>
            <div className={styles.marqueeInner}>
              {[...ITEMS, ...ITEMS].map((item, idx) => (
                <div key={`${item.name}-${idx}`} className={styles.item}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.caption}>{item.caption}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
