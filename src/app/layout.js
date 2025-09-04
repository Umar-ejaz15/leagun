import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Leagun Technologies | Lead Generation & Sales Growth Agency for USA & Global Markets",
  description:
    "Leagun Technologies helps businesses in USA, Canada, UK, and worldwide scale with high-quality B2B & B2C lead generation, marketing automation, and ROI-driven growth strategies.",
  keywords: [
    "Lead Generation Agency",
    "Sales Growth Agency",
    "B2B Lead Generation",
    "B2C Lead Generation",
    "Marketing Automation",
    "Conversion Optimization",
    "Customer Acquisition",
    "ROI-Driven Marketing",
    "Sales Funnel Optimization",
    "High-Quality Leads",
    "Business Growth Services USA",
    "Digital Marketing Solutions",
    "Leagun Technologies",
  ],
  authors: [{ name: "Leagun" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.leagun.com"),
  alternates: {
    canonical: "https://www.leagun.com/",
  },
  openGraph: {
    title:
      "Leagun Technologies | Driving Business Growth with High-Quality Leads & Marketing Automation",
    description:
      "Trusted lead generation & sales growth agency serving USA, Canada, UK & global businesses with B2B/B2C lead gen, automation, and growth solutions.",
    url: "https://www.leagun.com/",
    siteName: "Leagun Technologies",
    images: [
      {
        url: "https://www.leagun.com/og-banner.jpg", // ✅ create this banner instead of just logo
        width: 1200,
        height: 630,
        alt: "Leagun Technologies - Lead Generation & Sales Growth Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@leagun", // even if you don’t have, you can leave null or brand it later
    title: "Leagun Technologies | Lead Generation & Growth Experts",
    description:
      "We help businesses worldwide grow with B2B & B2C lead generation, automation, and ROI-driven marketing strategies.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* ✅ JSON-LD Organization Schema for Google Rich Results */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Leagun Technologies",
              url: "https://www.leagun.com",
              logo: "https://www.leagun.com/logo.jpg",
              image: "https://www.leagun.com/og-banner.jpg",
              description:
                "Leagun Technologies is a trusted lead generation and sales growth agency helping businesses in the USA, Canada, and worldwide scale effectively. We specialize in B2B and B2C lead generation, marketing automation, conversion optimization, and growth strategies.",
              email: "contact@leagun.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Remote Office",
                addressLocality: "Online Business",
                addressRegion: "Global",
                postalCode: "00000",
                addressCountry: "Worldwide",
              },
              sameAs: [
                "https://www.linkedin.com/company/leagun-technologies", // ✅ add your socials
              ],
              areaServed: [
                { "@type": "Country", name: "USA" },
                { "@type": "Country", name: "Canada" },
                { "@type": "Country", name: "United Kingdom" },
                { "@type": "Country", name: "Australia" },
                { "@type": "Country", name: "Germany" },
                { "@type": "Country", name: "United Arab Emirates" },
                { "@type": "Country", name: "India" },
                { "@type": "Country", name: "Pakistan" },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
