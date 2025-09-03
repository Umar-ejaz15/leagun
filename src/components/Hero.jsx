import React from "react";

import Buttonrgb from "@/components/Buttonrgb";
import { AnimatedGradientTextDemo } from "@/components/AnimatedGradientTextDemo";
import { Highlighter } from "@/components/magicui/highlighter";
const Hero = () => {
  return (
    <section className="relative w-full h-auto flex flex-col px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-br from-purple-200 via-white md:mt-0 to-purple-200 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col mt-30 items-center text-center max-w-5xl mx-auto md:mt-30">
        {/* Pain Point */}
        <div
        >
          <AnimatedGradientTextDemo className="font-extrabold tracking-tighter leading-none text-sm md:text-[clamp(1.8rem,4vw,rem)] drop-shadow-sm" />
        </div>

        {/* Sub-Tagline */}
        <p
          className="mt-4 text-3xl w-full tracking-tighter sm:text-lg md:text-5xl text-gray-700/90 md:max-w-5xl"
        >
          We help local businesses book{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              40–50{" "}
            </span>
          </Highlighter>
          appointments every month — no catch
        </p>

        {/* Video Showcase */}
        <div
          className="mt-6 w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl shadow-purple-500/30 border border-purple-200/40 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-500"
        >
          <div className="relative aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lo8d0Cn8UZ4"
              title="How we work"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 mb-5">
          <Buttonrgb
            txt="Schedule a Call →"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500
                       hover:from-purple-700 hover:via-purple-800 hover:to-purple-600
                       text-white shadow-lg shadow-purple-400/40 hover:shadow-purple-500/60
                       transition-all duration-300 px-8 py-4 text-lg font-semibold
                       rounded-full animate-glow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
