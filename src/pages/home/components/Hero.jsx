import React from "react";
import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";
import { Highlighter } from "@/components/magicui/highlighter";
import Buttonrgb from "@/components/Buttonrgb";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AnimatedGradientTextDemo } from "@/components/AnimatedGradientTextDemo";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-30 bg-white">
    
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto mt-30">
        {/* Pain Point */}
        <AnimatedGradientTextDemo className="font-medium tracking-tight leading-none text-[clamp(1.2rem,4vw,1rem)]">
          
        </AnimatedGradientTextDemo>

        {/* Sub-Tagline / Solution */}
        <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-3xl">
          Our{" "}
          <Highlighter action="highlight" color="purple">
            <span className="text-white">AI Hybrid System</span>
          </Highlighter>{" "}
          delivers{" "}
          <Highlighter action="highlight" color="purple">
            <span className="text-white">75-100 qualified leads 🚀</span>
          </Highlighter>{" "}
          in just{" "}
          <span className="font-semibold text-gray-900">90 days ⚡</span>, so
          you can focus on{" "}
          <span className="font-semibold text-purple-600">closing deals</span>{" "}
          — not chasing prospects.
        </p>

        {/* Video */}
        <div className="mt-6 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl shadow-purple-600 ring-4 ring-purple-500/20 hover:ring-purple-500/40 transition-all duration-500">
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
            txt="🚀 Schedule a Call →"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500
                       hover:from-purple-700 hover:via-purple-800 hover:to-purple-600
                       text-white shadow-purple-400 shadow-lg hover:shadow-2xl
                       transition-all duration-300 px-8 py-4 text-lg font-semibold
                       rounded-full animate-glow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
