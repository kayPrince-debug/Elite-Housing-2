import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    n: "01",
    title: "Diagnose your portfolio",
    body: "We review units, leases, vendors, and resident sentiment. You get a clear baseline and a prioritized plan with timelines tied to revenue impact.",
  },
  {
    n: "02",
    title: "Install the operating system",
    body: "Workflows go live: maintenance routing, rent ops, inspections, and reporting. Owners keep visibility. Residents get faster responses.",
  },
  {
    n: "03",
    title: "Compound outcomes quarterly",
    body: "We run weekly operating reviews, track KPIs, and iterate. The goal is simple: fewer surprises, higher retention, better unit economics.",
  },
] as const;

function StepIcon({ step }: { step: string }) {
  return (
    <div className={styles.icon} aria-hidden="true">
      <span className={styles.num}>{step}</span>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={styles.section}
      aria-labelledby="how-heading"
    >
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <header className={styles.header}>
            <p className={styles.kicker}>How it works</p>
            <h2 id="how-heading" className={styles.title}>
              A clean onboarding path. A disciplined operating rhythm.
            </h2>
            <p className={styles.lede}>
              No theater, no bloated timelines. We ship the fundamentals fast, then refine
              with data.
            </p>
          </header>
        </ScrollReveal>

        <div className={styles.grid}>
          <div className={styles.connector} aria-hidden="true" />
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.title} variant="scale" delayMs={i * 120}>
              <article className={styles.step}>
                <StepIcon step={step.n} />
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
