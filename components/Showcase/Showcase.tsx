import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Showcase.module.css";

export function Showcase() {
  return (
    <section id="showcase" className={styles.section} aria-labelledby="showcase-heading">
      <div className="container">
        <div className={styles.inner}>
          <ScrollReveal variant="fadeLeft">
            <div className={styles.copy}>
              <h2 id="showcase-heading">One command center for owners and onsite teams</h2>
              <p>
                Portfolio snapshots, work orders, and resident comms stay connected. The
                interface is calm on purpose: fewer tabs, faster decisions, cleaner
                accountability.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delayMs={120}>
            <div className={styles.frame}>
              <div className={styles.frameInner}>
                <Image
                  src="https://picsum.photos/id/49/1400/880"
                  alt="Wide product screenshot of a property operations dashboard with task queues and occupancy charts"
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
