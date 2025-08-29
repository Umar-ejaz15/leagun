import React from "react";
import { Highlighter } from "@/components/magicui/highlighter";
import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";
import Buttonrgb from "@/components/Buttonrgb";

const OurStory = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 opacity-10 blur-3xl">
        <TopShape />
        <BottomShape />
      </div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-tight text-gray-900">
          The{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800">
            Story

            </span>
          </Highlighter>{" "}
          Behind{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800">
            LeaGun
          </span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Built on bold ideas, relentless innovation, and a belief that growth
          should be predictable—not a gamble.
        </p>
      </div>

      {/* Story Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Founded in 2020, LeaGun began as a small team with a big mission:
            make lead generation smarter, scalable, and powered by AI.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            In just a few years, we expanded into 30+ countries, serving
            hundreds of clients with strategies that blend{" "}
            <span className="font-semibold text-purple-600">
              AI precision
            </span>{" "}
            and{" "}
            <span className="font-semibold text-purple-600">
              human creativity
            </span>
            .
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Today, we drive{" "}
            <span className="font-semibold text-purple-600">
              $12M+ in client revenue
            </span>
            , transforming growth from guesswork into a predictable system.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Buttonrgb
              txt="Schedule My Free Call →"
              className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500 
                         hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 
                         text-white shadow-md hover:shadow-xl transition-all duration-300 px-8 py-4 rounded-full text-base font-semibold"
            />
         
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/pic.png"
              className="w-full h-full object-cover"
              alt="Our story visual"
            />
            {/* Decorative Overlay */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
