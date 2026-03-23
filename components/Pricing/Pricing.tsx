"use client";

import { useMemo, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Pricing.module.css";

type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Owner",
    monthly: 149,
    yearly: 129,
    blurb: "For single-property owners who want professional ops without hiring a full team.",
    features: [
      "Resident messaging and ticketing",
      "Rent collection and owner reporting",
      "Vendor coordination and SLA tracking",
    ],
    cta: "Talk to sales",
  },
  {
    name: "Portfolio",
    monthly: 399,
    yearly: 349,
    blurb: "For growing investors who need portfolio visibility and repeatable workflows.",
    features: [
      "Multi-asset dashboards",
      "Inspections and compliance checklists",
      "Dedicated account lead",
      "Quarterly business reviews",
    ],
    cta: "Book a walkthrough",
    featured: true,
  },
  {
    name: "Institutional",
    monthly: 980,
    yearly: 890,
    blurb: "For operators who need custom integrations and governance across regions.",
    features: [
      "Custom workflows and approvals",
      "Advanced analytics exports",
      "Security review support",
      "On-call escalation paths",
    ],
    cta: "Request a proposal",
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  const label = useMemo(() => (yearly ? "Billed yearly" : "Billed monthly"), [yearly]);

  return (
    <section id="pricing" className={styles.section} aria-labelledby="pricing-heading">
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <header className={styles.header}>
            <div>
              <p className={styles.kicker}>Pricing</p>
              <h2 id="pricing-heading" className={styles.title}>
                Plans that scale with the size of your ambition.
              </h2>
            </div>
            <div className={styles.toggle} role="group" aria-label="Billing period">
              <button
                type="button"
                className={!yearly ? styles.toggleActive : ""}
                onClick={() => setYearly(false)}
                aria-pressed={!yearly}
              >
                Monthly
              </button>
              <button
                type="button"
                className={yearly ? styles.toggleActive : ""}
                onClick={() => setYearly(true)}
                aria-pressed={yearly}
              >
                Yearly
              </button>
              <span className={styles.hint}>{label}</span>
            </div>
          </header>
        </ScrollReveal>

        <div className={styles.grid}>
          {PLANS.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <ScrollReveal key={plan.name} variant="scale" delayMs={i * 110}>
                <article
                  className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
                >
                  {plan.featured ? (
                    <span className={styles.badge} aria-hidden="true">
                      Most popular
                    </span>
                  ) : null}
                  <div>
                    <h3 className={styles.plan}>{plan.name}</h3>
                    <p className={styles.price}>
                      <span className={styles.amount}>${price}</span>
                      <span className={styles.cycle}>/ mo</span>
                    </p>
                    <p className={styles.blurb}>{plan.blurb}</p>
                  </div>
                  <ul className={styles.list}>
                    {plan.features.map((f) => (
                      <li key={f}>
                        <span className={styles.check} aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`${styles.cta} ${plan.featured ? styles.ctaPrimary : ""}`}
                    href="#cta"
                  >
                    {plan.cta}
                  </a>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
