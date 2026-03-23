import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ/FAQ";
import { Features } from "@/components/Features/Features";
import { FinalCTA } from "@/components/FinalCTA/FinalCTA";
import { Footer } from "@/components/Footer/Footer";
import { Legal } from "@/components/Legal/Legal";
import { Hero } from "@/components/Hero/Hero";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { Pricing } from "@/components/Pricing/Pricing";
import { Showcase } from "@/components/Showcase/Showcase";
import { Stats } from "@/components/Stats/Stats";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { TrustedBy } from "@/components/TrustedBy/TrustedBy";
import styles from "./page.module.css";
import {
  DEFAULT_PAGE_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: DEFAULT_PAGE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: DEFAULT_PAGE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "https://picsum.photos/id/48/1200/630",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} property management preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_PAGE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["https://picsum.photos/id/48/1200/630"],
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Showcase />
      <Testimonials />
      <Stats />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Legal />
      <Footer />
    </div>
  );
}
