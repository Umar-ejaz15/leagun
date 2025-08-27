import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";
import React from "react";
import Video from "./Video";
import { RocketIcon } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import Buttonrgb from "@/components/Buttonrgb";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center pt-2 sm:pt-16 md:pt-28 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-x-0 -top-40 sm:-top-80 transform-gpu blur-3xl overflow-hidden">
          <TopShape />
        </div>
        <div className="absolute inset-x-0 bottom-[-10rem] sm:bottom-[-15rem] transform-gpu blur-3xl overflow-hidden">
          <BottomShape />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-50 text-center max-w-3xl mx-auto px-6">
        {/* Banner */}
        <div className="hidden sm:flex justify-center mb-6">
          <div className="flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-md">
            <RocketIcon className="animate-spin w-5 h-5" />
            AI-Powered Lead Generation for Businesses
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Drive{" "}
          <Highlighter action="underline" color="#FF9800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              75-100
            </span>
          </Highlighter>{" "}
          Qualified Leads
          <br />
          in the Next{" "}
          <Highlighter action="underline" color="#FF9800">
            <span className="text-red-500">90 Days</span>
          </Highlighter>{" "}
          with Our <span className="text-purple-600">AI Hybrid System</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Leverage{" "}
          <span className="font-semibold text-purple-600">AI-driven Agents</span>,{" "}
          <span className="font-semibold text-blue-600">Human Experts</span>,{" "}
          <span className="font-semibold text-pink-600">Targeted Ads</span> &{" "}
          <span className="font-semibold text-red-500">AI-Enhanced CRM</span> to boost your sales pipeline and maximize ROI.
        </p>

        {/* Video */}
        <div className="mt-8 w-full">
          <Video />
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <Buttonrgb txt="Schedule a Call →" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
