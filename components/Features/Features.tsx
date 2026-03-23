import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { SITE_NAME } from "@/lib/site";
import styles from "./Features.module.css";

const FEATURES = [
  {
    title: "Operations that stay ahead of problems",
    body: "Inspections, vendor coordination, and resident messaging live in one system. Issues get triaged before they become emergencies, and owners get clear reporting without chasing updates.",
    image: "https://picsum.photos/id/193/900/700",
    alt: "Property manager reviewing maintenance schedules on a laptop in a bright office",
    pills: ["24/7 intake", "SLA-based routing"],
  },
  {
    title: "Rent collection that feels effortless",
    body: "Automated reminders, flexible payment options, and transparent ledgers reduce delinquency while keeping residents informed. You see cash flow clearly, week by week.",
    image: "https://picsum.photos/id/201/900/700",
    alt: "Financial dashboard showing rent payments and occupancy metrics",
    pills: ["Real-time reporting", "Owner-ready exports"],
  },
  {
    title: "Resident experience that protects your brand",
    body: "Move-in checklists, noise policies, and community updates are consistent and on-brand. Happy residents renew. Renewals protect NOI.",
    image: "https://picsum.photos/id/164/900/700",
    alt: "Modern apartment living room with warm lighting and clean furnishings",
    pills: ["Renewal playbooks", "Concierge comms"],
  },
] as const;

export function Features() {
  return (
    <section id="features" className={styles.section} aria-labelledby="features-heading">
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <header className={styles.header}>
            <p className={styles.kicker}>Why {SITE_NAME}</p>
            <h2 id="features-heading" className={styles.title}>
              Property management built for performance, not paperwork.
            </h2>
            <p className={styles.lede}>
              We align owner outcomes with resident quality of life. That means disciplined
              operations, modern tooling, and communication that feels human.
            </p>
          </header>
        </ScrollReveal>

        {FEATURES.map((feature, index) => {
          const reverse = index % 2 === 1;
          return (
            <div
              key={feature.title}
              className={`${styles.row} ${reverse ? styles.rowReverse : ""}`}
            >
              <ScrollReveal variant={reverse ? "fadeRight" : "fadeLeft"} delayMs={80}>
                <div className={styles.copy}>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                  <div className={styles.meta}>
                    {feature.pills.map((pill) => (
                      <span key={pill} className={styles.pill}>
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant={reverse ? "fadeLeft" : "fadeRight"} delayMs={160}>
                <div
                  className={`${styles.visual} ${reverse ? styles.visualAlt : ""}`}
                >
                  <div className={styles.visualInner}>
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
