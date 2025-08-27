import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";
import React from "react";
import Video from "./Video";
import { RocketIcon } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import Buttonrgb from "@/components/Buttonrgb";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center pt-2 sm:pt-16 md:pt-28 bg-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-x-0 -top-40 sm:-top-80 transform-gpu blur-3xl overflow-hidden opacity-10">
          <TopShape />
        </div>
        <div className="absolute inset-x-0 bottom-[-10rem] sm:bottom-[-15rem] transform-gpu blur-3xl overflow-hidden opacity-10">
          <BottomShape />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-50 text-center max-w-3xl mx-auto px-6">
        {/* Banner */}
        <div className="hidden sm:flex justify-center mb-6">
          <div className="flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium bg-gray-100 text-gray-900 shadow-sm">
            <RocketIcon className="w-5 h-5 text-purple-700 " />
            AI-Powered Lead Generation for Businesses
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Drive{" "}
          <Highlighter action="underline" color="red">
            <span className="text-purple-600">75-100</span>
          </Highlighter>{" "}
          Qualified Leads
          <br />
          in the Next{" "}
          <Highlighter action="underline" color="red">
            <span className="text-purple-600">90 Days</span>
          </Highlighter>{" "}
          with Our <span className="text-gray-900 font-semibold">AI Hybrid System</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Leverage{" "}
          <span className="font-semibold text-gray-900">AI-driven Agents</span>,{" "}
          <span className="font-semibold text-gray-900">Human Experts</span>,{" "}
          <span className="font-semibold text-gray-900">Targeted Ads</span> &{" "}
          <span className="font-semibold text-gray-900">AI-Enhanced CRM</span> to boost your sales pipeline and maximize ROI.
        </p>

        {/* Video */}
        <div className="mt-8 w-full">
          <Video />
        </div>

        {/* CTA Button */}
        <div className="mt-6 mb-6">
          <Buttonrgb txt="Schedule a Call →" className="bg-purple-600 hover:bg-purple-700 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
