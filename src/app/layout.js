import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Self-hosted (next/font) — no render-blocking external request, no layout shift.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport = {
  themeColor: "#07160d",
};

// Default metadata (can be overridden per page)
export const metadata = {
  title:
    "Leagun Technologies — More Booked Jobs for Tree Service & Landscaping Companies",
  description:
    "Leagun builds and runs the system that keeps tree service, landscaping, and arborist companies booked — so you stop depending on referrals and word of mouth.",
  keywords: [
    "Tree Service Marketing",
    "Landscaping Lead Generation",
    "Arborist Marketing",
    "Lawn Care Leads",
    "Tree Service Leads",
    "Landscaping Growth Agency",
    "Booked Jobs",
    "Green Industry Marketing",
    "Leagun Technologies",
    "Leagun",
    "Leagun Tech",
  ],
  authors: [{ name: "Leagun Technologies" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.leagun.com"),
  alternates: {
    canonical: "https://www.leagun.com/",
  },
  openGraph: {
    title:
      "Leagun Technologies — We get tree & landscaping companies more booked jobs",
    description:
      "We aim. We fire. You get the jobs. The growth system built only for tree service, landscaping, and arborist companies.",
    url: "https://www.leagun.com/",
    siteName: "Leagun Technologies",
    images: [
      {
        url: "https://www.leagun.com/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Leagun Technologies — Growth for tree service & landscaping companies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@leagun_tech",
    title: "Leagun Technologies — More booked jobs for tree & landscaping pros",
    description:
      "The growth system built only for tree service, landscaping, and arborist companies.",
    images: ["https://www.leagun.com/og-banner.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD for Organization */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Leagun Technologies LLC",
              url: "https://www.leagun.com",
              logo: "https://www.leagun.com/android-chrome-512x512.png",
              image: "https://www.leagun.com/og-banner.jpg",
              description:
                "Leagun Technologies is a growth partner built only for tree service, landscaping, and arborist companies across the United States.",
              email: "contact@leagun.com",
              telephone: "+1-307-430-1754",
              address: {
                "@type": "PostalAddress",
                streetAddress: "30 N Gould St Ste R",
                addressLocality: "Sheridan",
                addressRegion: "WY",
                postalCode: "82801",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61580256073424",
                "https://www.linkedin.com/company/106195542/",
                "https://x.com/leagun_tech?s=21",
              ],
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
