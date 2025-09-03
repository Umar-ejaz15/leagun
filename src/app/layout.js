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
    "Leagun | Top Lead Generation & Sales Growth Agency for Businesses in USA & Canada",
  description:
    "Leagun is a professional lead generation and sales growth agency helping businesses in the USA and Canada scale faster. We specialize in B2B and B2C lead generation, conversion optimization, marketing automation, and growth strategies that drive high-quality leads, increase revenue, and maximize ROI.",
  keywords: [
    "Leagun",
    "Leagun Tech",
    "Leagun Technology",
    "Lead Generation Agency",
    "Sales Growth Agency",
    "B2B Lead Generation",
    "B2C Lead Generation",
    "Business Growth USA",
    "Business Growth Canada",
    "Marketing Technology",
    "Digital Marketing Solutions",
    "Conversion Optimization",
    "Marketing Automation",
    "Revenue Growth Strategies",
    "High-Quality Leads",
    "Performance Marketing",
    "Sales Funnel Optimization",
    "Growth Hacking",
    "Lead Nurturing",
    "Customer Acquisition",
    "ROI Optimization",
    "Online Marketing Services",
  ],
  authors: [{ name: "Leagun" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.leagun.com"),
  alternates: {
    canonical: "https://www.leagun.com/",
  },
  openGraph: {
    title:
      "Leagun | Top Lead Generation & Sales Growth Agency for Businesses in USA & Canada",
    description:
      "Boost your business growth with Leagun’s professional lead generation and sales growth strategies. Our agency delivers high-quality leads, conversion optimization, marketing automation, and growth solutions to help businesses dominate the market and maximize ROI in the USA & Canada.",
    url: "https://www.leagun.com/",
    siteName: "Leagun Technologies",
    images: [
      {
        url: "https://www.leagun.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Leagun Logo - Lead Generation & Sales Growth Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
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
        {/* ✅ Sitemap reference */}
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* ✅ JSON-LD Organization Schema for Google Rich Results */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Leagun",
              url: "https://www.leagun.com",
              logo: "https://www.leagun.com/logo.jpg",
              description:
                "Leagun is a professional lead generation and sales growth agency helping businesses scale with high-quality leads, conversion optimization, and marketing automation in the USA & Canada.",
              sameAs: [
                "https://www.facebook.com/leagun",
                "https://www.linkedin.com/company/leagun-technologies/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
