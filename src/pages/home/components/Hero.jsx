import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";
import React from "react";
import Video from "./Video";
import { RocketIcon } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import Buttonrgb from "@/components/Buttonrgb";

const Hero = () => {
  return (
    <div className="relative bg-white w-full min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center pt-2 md:pt-30">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-x-0 -top-40 sm:-top-80 transform-gpu blur-3xl">
          <TopShape />
        </div>
        <div className="absolute inset-x-0 bottom-[-10rem] sm:bottom-[-15rem] transform-gpu blur-3xl">
          <BottomShape />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-50 text-center max-w-2/3 mx-auto px-6">
        {/* Banner */}
        <div className="hidden sm:mb-4 sm:flex sm:justify-center">
          <div className="relative flex justify-center items-center gap-2 rounded-full px-4 py-1 text-sm font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-md">
            <RocketIcon className="animate-spin" /> AI-Powered Lead Generation for Businesses
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Drive <Highlighter action="underline" color="#FF9800">
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
          with Our{" "}
          <span className="text-purple-600">AI Hybrid System</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-md leading-8 text-gray-700 max-w-2xl mx-auto">
          Leverage{" "}
          <span className="font-semibold text-purple-600">AI-driven Agents</span>,
          <span className="font-semibold text-blue-600"> Human Experts</span>,
          <span className="font-semibold text-pink-600"> Targeted Ads</span> &
          an <span className="font-semibold text-red-500">AI-Enhanced CRM</span> to
          boost your sales pipeline and maximize ROI.
        </p>

    
        {/* Video */}
        <div className="mt-8 w-full">
          <Video />
        </div>
        <div className=" py-5">

          <Buttonrgb txt="Schedule a Call →"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
