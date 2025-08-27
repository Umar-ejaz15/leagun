import BottomShape from "@/components/BottomShape";
import Buttonrgb from "@/components/Buttonrgb";
import { Highlighter } from "@/components/magicui/highlighter";
import TopShape from "@/components/TopShape";
import React from "react";

const About = () => {
  return (
    <section className="relative px-6 py-24 sm:py-32 lg:px-0 bg-white overflow-hidden">
      {/* Background Shapes (Subtle) */}
     

      <div className="relative z-20 mx-auto max-w-7xl grid gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-12">
        {/* Left Text */}
        <div className="max-w-lg">
          <p className="text-base font-semibold text-gray-500">
            AI + Human Intelligence
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Your{" "}
            <Highlighter action="underline" color="red">
              <span className="text-purple-600">Growth Engine</span>
            </Highlighter>{" "}
            for Leads & Revenue
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            At <span className="font-semibold text-red-600">LeaGun</span>, we
            help businesses scale faster by combining AI-driven strategies,
            human expertise, and proven systems. From generating high-quality
            leads to automating workflows, our AI-powered SaaS solutions keep
            your pipeline full and predictable.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li className="flex gap-x-3 items-start">
              <span className="text-blue-600 mt-1">✔</span>
              <span>
                <strong className="font-semibold text-gray-900">
                  AI-Powered Lead Generation.
                </strong>{" "}
                Predictable, qualified leads on autopilot.
              </span>
            </li>
            <li className="flex gap-x-3 items-start">
              <span className="text-blue-600 mt-1">✔</span>
              <span>
                <strong className="font-semibold text-gray-900">
                  Fully Integrated CRM.
                </strong>{" "}
                Automate follow-ups, track performance, and close deals faster.
              </span>
            </li>
            <li className="flex gap-x-3 items-start">
              <span className="text-blue-600 mt-1">✔</span>
              <span>
                <strong className="font-semibold text-gray-900">
                  Done-for-You Campaigns.
                </strong>{" "}
                We run ads, nurture leads, and set appointments so you can focus
                on closing deals.
              </span>
            </li>
          </ul>

          <p className="mt-8 text-gray-600">
            Growth isn’t a guessing game anymore. It’s a predictable system that
            works for you. Let us help you dominate your niche with AI.
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-12 lg:mt-0 lg:flex lg:justify-end">
          <img
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            alt="AI Dashboard"
            className="w-full max-w-lg rounded-xl shadow-lg ring-1 ring-gray-200"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gray-50 py-16 px-6 text-center rounded-xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Ready to skyrocket your leads?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Schedule a call and let our AI + human hybrid system supercharge your
          sales pipeline. No fluff, real results.
        </p>
        <div>
          <Buttonrgb txt="Schedule a Call →" />
        </div>
      </div>
    </section>
  );
};

export default About;
