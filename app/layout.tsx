import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { CountdownBar } from "@/components/CountdownBar/CountdownBar";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { CookieConsent } from "@/components/CookieConsent/CookieConsent";
import { MobileStickyCta } from "@/components/MobileStickyCta/MobileStickyCta";
import { Navbar } from "@/components/Navbar/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import { WhatsAppFloat } from "@/components/WhatsAppFloat/WhatsAppFloat";
import "./globals.css";
import styles from "./layout.module.css";
import {
  DEFAULT_PAGE_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  THEME_COLOR,
} from "@/lib/site";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_PAGE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: DEFAULT_PAGE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_PAGE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className={styles.body}>
        <JsonLd />
        <CountdownBar />
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className={styles.main}>
          {children}
        </main>
        <ScrollToTop />
        <WhatsAppFloat />
        <MobileStickyCta />
        <CookieConsent />
      </body>
    </html>
  );
}
