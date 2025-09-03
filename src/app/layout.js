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
    "Leagun Technologies | Driving Business Growth with High-Quality Leads & Marketing Automation",
  description:
    "Leagun Technologies is a trusted lead generation and sales growth agency helping businesses in the USA and Canada scale effectively. We specialize in B2B and B2C lead generation, marketing automation, conversion optimization, and strategic growth solutions that drive high-quality leads, boost revenue, and maximize ROI.",

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
    "Lead Generation Services",
    "Sales Leads Provider",
    "Top Lead Generation Company",
    "Sales Acceleration",
    "Business Expansion Services",
    "Digital Lead Generation",
    "Lead Management Solutions",
    "Targeted Lead Generation",
    "B2B Sales Leads",
    "B2C Sales Leads",
    "Marketing & Sales Growth",
    "Lead Conversion Strategies",
    "Client Acquisition Solutions",
    "Automated Lead Generation",
    "Marketing Analytics Tools",
    "Revenue Growth Consulting",
    "Sales Performance Optimization",
    "Lead Growth Engine",
    "Business Development Solutions",
    "Digital Sales Optimization",
    "Lead Prospecting Agency",
    "Qualified Leads Provider",
    "Sales Pipeline Optimization",
    "Lead Generation Strategies USA",
    "Lead Generation Strategies Canada",
    "Enterprise Lead Generation",
    "SMB Lead Generation Services",
    "High-Intent Leads",
    "Lead Generation Experts",
    "Growth Marketing Agency",
    "Sales Funnel Management",
    "ROI-Driven Marketing",
    "Digital Marketing Growth",
    "Customer Acquisition Strategies",
    "Leagun Growth Engine",
    "Leagun Sales Solutions",
    "Lead Generation Platform",
    "Business Lead Accelerator",
    "Sales & Marketing Consulting",
    "B2B Marketing Solutions",
    "B2C Marketing Solutions",
    "Performance-Driven Lead Gen",
    "Lead Generation Optimization",
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
      "Leagun Technologies is a trusted lead generation and sales growth agency helping businesses in the USA and Canada scale effectively. We specialize in B2B and B2C lead generation, marketing automation, conversion optimization, and strategic growth solutions that drive high-quality leads, boost revenue, and maximize ROI.",
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
              name: "Leagun Technologies",
              url: "https://www.leagun.com",
              logo: "https://www.leagun.com/logo.jpg",
              description:
                "Leagun Technologies is a trusted lead generation and sales growth agency helping businesses in the USA and Canada scale effectively. We specialize in B2B and B2C lead generation, marketing automation, conversion optimization, and strategic growth solutions that drive high-quality leads, boost revenue, and maximize ROI.",
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
