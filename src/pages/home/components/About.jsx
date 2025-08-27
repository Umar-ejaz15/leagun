import BottomShape from "@/components/BottomShape";
import Buttonrgb from "@/components/Buttonrgb";
import { Highlighter } from "@/components/magicui/highlighter";
import TopShape from "@/components/TopShape";
import React from "react";

const About = () => {
  return (
    <section className="relative px-6  py-10 sm:py-10 lg:px-0  overflow-hidden">
      {/* Background Shapes (Subtle) */}
      <div className="absolute blur-xl inset-0 -z-10 opacity-20">
        <TopShape />
        <BottomShape />
      </div>

      <h1
        className="text-4xl sm:text-5xl md:text-5xl font-extrabold 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 
                       drop-shadow-lg mb-10 w-full mx-auto text-center"
      >
        Your{" "}
        <Highlighter action="underline" color="purple">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
            Growth Engine
          </span>
        </Highlighter>{" "}
        for Leads & Revenue
      </h1>
      <div className="relative z-20 mx-auto max-w-6xl grid gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-12">
        {/* Left Text */}
        <div className="">
          <p className="text-base font-semibold text-purple-700 drop-shadow-sm">
            AI + Human Intelligence
          </p>
          <p className="mt-6 text-lg md:text-xl text-gray-800 drop-shadow-sm">
            At <span className="font-semibold text-purple-700">LeaGun</span>, we
            help businesses scale faster by combining AI-driven strategies,
            human expertise, and proven systems. From generating high-quality
            leads to automating workflows, our AI-powered SaaS solutions keep
            your pipeline full and predictable.
          </p>

          <ul className="mt-8 space-y-4 text-gray-800">
            <li className="flex gap-x-3 items-start">
              <span className="text-purple-600 mt-1">✔</span>
              <span>
                <strong className="font-semibold text-purple-700">
                  AI-Powered Lead Generation.
                </strong>{" "}
                Predictable, qualified leads on autopilot.
              </span>
            </li>
            <li className="flex gap-x-3 items-start">
              <span className="text-purple-600 mt-1">✔</span>
              <span>
                <strong className="font-semibold text-purple-700">
                  Fully Integrated CRM.
                </strong>{" "}
                Automate follow-ups, track performance, and close deals faster.
              </span>
            </li>
            <li className="flex gap-x-3 items-start">
              <span className="text-purple-600 mt-1">✔</span>
              <span>
                <strong className="font-semibold text-purple-700">
                  Done-for-You Campaigns.
                </strong>{" "}
                We run ads, nurture leads, and set appointments so you can focus
                on closing deals.
              </span>
            </li>
          </ul>

          <p className="mt-8 text-gray-800 text-lg md:text-xl drop-shadow-sm">
            Growth isn’t a guessing game anymore. It’s a predictable system that
            works for you. Let us help you dominate your niche with AI.
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-12 lg:mt-0 lg:flex lg:justify-end">
          <img
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            alt="AI Dashboard"
            className="w-full max-w-lg rounded-xl shadow-purple-300 shadow-2xl ring-1 ring-purple-200"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 z-[200] bg-purple-50 py-16 px-6 text-center rounded-xl shadow-purple-200 shadow-lg">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 
                       drop-shadow-lg mb-4"
        >
          Ready to skyrocket your leads?
        </h2>
        <p className="text-gray-800 text-lg md:text-xl mb-8 drop-shadow-sm max-w-2xl mx-auto">
          Schedule a call and let our AI + human hybrid system supercharge your
          sales pipeline. No fluff, real results.
        </p>
        <div>
          <Buttonrgb
            txt="Schedule a Call →"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500 
                       hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 
                       text-white shadow-purple-400 shadow-lg hover:shadow-2xl transition-all duration-300 "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
