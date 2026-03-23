import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  return (
    <section id="cta" className={styles.section} aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles.grid}>
          <ScrollReveal variant="fadeLeft">
            <div>
              <h2 id="cta-heading" className={styles.title}>
                Management simplified. Living refined.
              </h2>
              <p className={styles.sub}>
                If you are an owner scaling up, or a resident looking for a better-run
                home, start here. Tell us what you need. We will respond with a clear plan,
                timeline, and owners who can speak to the work.
              </p>
              <div className={styles.actions}>
                <a className={styles.primary} href="#contact-form">
                  Get started
                </a>
              </div>
              <p className={styles.note}>
                Prefer email? Use the form. Prefer speed? We will route you to the right
                lead within one business day.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delayMs={120}>
            <div className={styles.panel} id="contact-form">
              <h3 className={styles.panelTitle}>Request a conversation</h3>
              <p className={styles.panelText}>
                Front-end only demo: this form validates locally and confirms submission.
              </p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
