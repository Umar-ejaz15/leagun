import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";
import React from "react";
import Video from "./Video";
import { RocketIcon } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import Buttonrgb from "@/components/Buttonrgb";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-white overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 pt-8 sm:pt-16 md:pt-24">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 opacity-10 blur-3xl">
        <TopShape />
        <BottomShape />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-7xl mx-auto">
        {/* Banner */}
        <div className="hidden sm:flex justify-center mb-6">
          <div className="flex items-center gap-2 rounded-full px-5 py-1.5 text-sm font-medium bg-purple-100 text-purple-800 shadow-md">
            <RocketIcon className="w-4 h-4 text-purple-600" />
            AI-Powered Lead Generation for Businesses
          </div>
        </div>

        {/* Heading */}
        <h1
          className="font-extrabold tracking-tight leading-snug text-gray-900 
                      text-[clamp(1.75rem,4vw,3.5rem)] max-w-4xl"
        >
          Drive{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              75-100
            </span>
          </Highlighter>{" "}
          Qualified Leads
          <br />
          in the Next{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              90 Days
            </span>
          </Highlighter>{" "}
          with Our{" "}
          <span className="text-gray-900 font-semibold">AI Hybrid System</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
          Leverage{" "}
          <span className="font-semibold text-purple-700">
            AI-driven Agents
          </span>
          , <span className="font-semibold text-purple-700">Human Experts</span>
          , <span className="font-semibold text-purple-700">Targeted Ads</span>{" "}
          &{" "}
          <span className="font-semibold text-purple-700">AI-Enhanced CRM</span>{" "}
          to boost your sales pipeline and maximize ROI.
        </p>

        {/* Secondary Line */}
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl">
          Imagine consistently filling your calendar with qualified leads
          without guesswork. Our AI + Human Hybrid ensures precision targeting
          every time.
        </p>

        {/* Video */}
        <div className="mt-8 w-full max-w-3xl rounded-3xl overflow-hidden  shadow-2xl shadow-purple-400 ">
          <div className="aspect-w-16 aspect-h-9">
            <Video />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 mb-8">
          <Buttonrgb
            txt="Schedule a Call →"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500 
                      hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 
                      text-white shadow-purple-400 shadow-lg hover:shadow-2xl transition-all duration-300 
                      px-8 py-4 text-base font-semibold rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
