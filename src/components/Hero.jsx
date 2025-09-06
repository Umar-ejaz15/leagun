import React from "react";
import Buttonrgb from "@/components/Buttonrgb";
import { Highlighter } from "@/components/magicui/highlighter";
import Script from "next/script";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-auto flex flex-col px-4 sm:px-6 md:px-12 lg:px-24
                 bg-gradient-to-br from-purple-200 via-white to-purple-200 overflow-hidden "
    >
      {/* Main Content */}
      <div className="relative z-10 mt-26 flex flex-col items-center text-center max-w-6xl mx-auto space-y-2">

        {/* Pain Point */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 tracking-tight">
      Struggling to increase sales and grow? 
        </h1>

        {/* Solution */}
        <h2 className="text-2xl sm:text-2xl md:text-3xl text-gray-900 leading-snug max-w-3xl">
           We help local businesses book { " "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
           40–50 
            </span>
          </Highlighter>{" "}
           ready-to-go appointments every month, no catch 
        </h2>

        {/* Video Section */}
        <div className="mt-2 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl shadow-purple-400/30 border border-purple-200/40 backdrop-blur-sm hover:scale-[1.03] transition-transform duration-500">
          <div className="relative aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lo8d0Cn8UZ4"
              title="How Leagun Technologies Works - Lead Generation Explainer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-2 mb-5">
          <Buttonrgb
            txt="Schedule a Free Strategy Call"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500
                       hover:from-purple-700 hover:via-purple-800 hover:to-purple-600
                       text-white shadow-lg shadow-purple-400/40 hover:shadow-purple-500/60
                       transition-all duration-300 px-10 py-5 text-lg md:text-xl font-semibold
                       rounded-full animate-glow"
          />
        </div>
      </div>

      {/* Structured Data for Video */}
      <Script id="video-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "How Leagun Technologies Works - Lead Generation Explainer",
          description:
            "Leagun helps local businesses in USA & Canada book 40–50 appointments monthly using proven lead generation & sales growth strategies.",
          thumbnailUrl: ["https://www.leagun.com/og-banner.jpg"],
          uploadDate: "2025-09-01",
          duration: "PT2M30S",
          contentUrl: "https://www.leagun.com/",
          embedUrl: "https://www.youtube.com/embed/lo8d0Cn8UZ4",
          publisher: {
            "@type": "Organization",
            name: "Leagun Technologies",
            logo: {
              "@type": "ImageObject",
              url: "https://www.leagun.com/logo.jpg",
            },
          },
        })}
      </Script>
    </section>
  );
};

export default Hero;
