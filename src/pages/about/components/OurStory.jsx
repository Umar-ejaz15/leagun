import React from "react";
import { Highlighter } from "@/components/magicui/highlighter";
import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";
import Buttonrgb from "@/components/Buttonrgb";

const OurStory = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 opacity-10 blur-xl">
        <TopShape />
        <BottomShape />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-[clamp(3rem,6vw,5rem)] font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400">
          The{" "}
          <Highlighter action="underline" color="purple">
            <span className="text-[clamp(3rem,6vw,5rem)] font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400">Story</span>
          </Highlighter>{" "}
          Behind LeaGun
        </h2>
        <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          From a daring startup to a global AI SaaS leader, LeaGun’s journey is one of innovation, persistence, and bold ideas that changed the lead generation landscape forever.
        </p>
      </div>

      {/* Story Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Founded in 2020 with a small team and a massive vision, LeaGun started with one goal: to make lead generation predictable, scalable, and powered by AI.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Through innovation, experimentation, and a relentless focus on delivering results, we rapidly scaled, onboarded hundreds of clients, and expanded to over 30 countries.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Today, our AI + human intelligence system continues to drive $12M+ in revenue for clients worldwide, making growth a predictable game, not a gamble.
          </p>

          <div className="mt-8">
            <Buttonrgb
              txt="Schedule My Free Call →"
              className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500 
                         hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 
                         text-white shadow-md hover:shadow-xl transition-all duration-300 px-8 py-4 rounded-full text-base font-semibold"
            />
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md h-96 bg-purple-100 rounded-3xl shadow-lg border border-purple-200 flex items-center justify-center text-purple-700 font-bold text-xl md:text-2xl">
           <img src="/pic.png" className="w-full h-full object-center object-cover" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
