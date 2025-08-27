import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";
import React from "react";
import Video from "./Video";
import { RocketIcon } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import Buttonrgb from "@/components/Buttonrgb";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center pt-4 sm:pt-16 md:pt-28 bg-white overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute blur-xl inset-0 z-0 opacity-20">
        <BottomShape />
        <TopShape />
      </div>

      <div className="absolute inset-0 z-10">
        <div className="absolute inset-x-0 -top-40 sm:-top-80 transform-gpu blur-3xl overflow-hidden opacity-20">
          <TopShape />
        </div>
        <div className="absolute inset-x-0 bottom-[-10rem] sm:bottom-[-15rem] transform-gpu blur-3xl overflow-hidden opacity-20">
          <BottomShape />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-50 flex flex-col items-center text-center max-w-full px-4 sm:px-6 md:px-12 lg:px-24">
        
        {/* Banner */}
        <div className="hidden sm:flex justify-center mb-6">
          <div className="flex items-center gap-2 rounded-full px-4 py-1 text-xs sm:text-sm font-medium bg-purple-100 text-purple-900 shadow-purple-300 shadow-md">
            <RocketIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-700" />
            AI-Powered Lead Generation for Businesses
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight md:leading-tight lg:leading-tight max-w-4xl mx-auto">
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
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-gray-800 drop-shadow-sm">
          Leverage{" "}
          <span className="font-semibold text-purple-700">AI-driven Agents</span>
          , <span className="font-semibold text-purple-700">Human Experts</span>
          , <span className="font-semibold text-purple-700">Targeted Ads</span>{" "}
          & <span className="font-semibold text-purple-700">AI-Enhanced CRM</span>{" "}
          to boost your sales pipeline and maximize ROI.
        </p>

        {/* Secondary Tagline */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl">
          Imagine consistently filling your calendar with qualified leads, without wasting time or money on guesswork. Our AI + human hybrid ensures precision targeting every time.
        </p>

        {/* Video */}
        <div className="mt-6 sm:mt-8  shadow-purple-600 shadow-2xl rounded-3xl overflow-hidden">
          <Video />
        </div>

        {/* CTA Button */}
        <div className="mt-6 mb-6">
          <Buttonrgb
            txt="Schedule a Call →"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500 
                       hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 
                       text-white shadow-purple-400 shadow-lg hover:shadow-2xl transition-all duration-300 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
