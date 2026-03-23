import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { SITE_NAME } from "@/lib/site";
import styles from "./Legal.module.css";

export function Legal() {
  return (
    <section className={styles.section} aria-labelledby="legal-heading">
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <h2 id="legal-heading" className={styles.intro}>
            Legal information
          </h2>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal variant="fadeUp" delayMs={80}>
            <article id="privacy" className={styles.block} aria-labelledby="privacy-title">
              <h3 id="privacy-title" className={styles.title}>
                Privacy
              </h3>
              <p className={styles.text}>
                {SITE_NAME} collects only the information needed to respond to inquiries,
                operate this site, and improve clarity for owners and residents. We do not
                sell personal data. Analytics, if enabled, is aggregated. Replace this
                summary with counsel-reviewed language before launch.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delayMs={140}>
            <article id="terms" className={styles.block} aria-labelledby="terms-title">
              <h3 id="terms-title" className={styles.title}>
                Terms
              </h3>
              <p className={styles.text}>
                This site describes services at a high level. Nothing here forms a lease,
                management agreement, or offer until executed in writing by authorized
                parties. <strong>Replace this summary</strong> with jurisdiction-appropriate
                terms before binding use.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
