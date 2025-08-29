import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";
import React from "react";
import { Highlighter } from "@/components/magicui/highlighter";
import Buttonrgb from "@/components/Buttonrgb";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-30">
      {/* Background Shapes */}

      {/* Main Content */}
      <div className="relative z-10 flex  flex-col py-20 items-center text-center max-w-4xl mx-auto">
        {/* Pain Point */}
        <h1
          className="font-extrabold tracking-tight leading-none 
                     text-[clamp(1.8rem,4vw,2rem)] 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400"
        >
          Are you tired of wasting time and money on ads & cold emails that
          bring you inconsistent, low-quality leads? 😩
        </h1>

        {/* Sub-Tagline / Solution */}
        <p className="mt-2 text-lg sm:text-xl md:text-lg text-gray-700 max-w-3xl">
          Our{" "}
          <Highlighter action="underline" color="purple">
            AI Hybrid System
          </Highlighter>{" "}
          consistently delivers{" "}
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">
            75-100 qualified leads 🚀
          </span>{" "}
          in just{" "}
          <span className="font-semibold text-gray-900">90 days ⚡</span>, so
          you can focus on closing deals — not chasing prospects.
        </p>

        {/* Video */}
        <div className="mt-2 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl shadow-purple-600 ring-4 ring-purple-500/20 animate-pulse-slow">
          <div className="aspect-video">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Buttonrgb
            txt=" Schedule a Call →"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500 
                      hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 
                      text-white shadow-purple-400 shadow-lg hover:shadow-2xl 
                      transition-all duration-300 px-8 py-4 text-lg font-semibold 
                      rounded-full animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
