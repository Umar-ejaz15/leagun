import BottomShape from "@/components/BottomShape";
import Buttonrgb from "@/components/Buttonrgb";
import { Highlighter } from "@/components/magicui/highlighter";
import TopShape from "@/components/TopShape";
import React from "react";

const About = () => {
  return (
    <div className="relative px-6 py-24 sm:py-32 lg:px-0">
      <div className=" absolute overflow-hidden blur-xl left-0  ">
        
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Left Text Section */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold text-purple-600">
                AI + Human Intelligence
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight bg-clip-text text-zinc-900 sm:text-4 xl">
                Your{" "}
                <Highlighter action="underline" color="#FF9800">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                    Growth Engine
                  </span>
                </Highlighter>{" "}
                for Leads & Revenue
              </h1>
              <p className="mt-6 text-lg text-gray-700">
                At{" "}
                <span className="font-semibold text-red-600">
                  {"  "}LeadGun{"  "}
                </span>
                ,{"  "}we help businesses scale faster by combining AI-driven
                strategies, human expertise, and proven systems. From generating
                high-quality leads to automating workflows, our AI-powered SaaS
                solutions keep your pipeline full and predictable.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky right-0 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            alt="AI Dashboard"
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-200 "
          />
        </div>

        {/* Bottom Section */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-gray-600 lg:max-w-lg">
              <p>
                We simplify growth for modern businesses by merging cutting-edge
                AI with human intelligence. No more guesswork—just a system
                designed to deliver results on autopilot.
              </p>

              <ul role="list" className="mt-8 space-y-8">
                <li className="flex gap-x-3">
                  <span className="text-purple-600 mt-1 size-5">✔</span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      AI-Powered Lead Generation.
                    </strong>{" "}
                    Predictable, qualified leads for your business on autopilot.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-purple-600 mt-1 size-5">✔</span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Fully Integrated CRM.
                    </strong>{" "}
                    Automate follow-ups, track performance, and close deals
                    faster.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-purple-600 mt-1 size-5">✔</span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Done-for-You Campaigns.
                    </strong>{" "}
                    We run ads, nurture leads, and set appointments so you can
                    focus on closing deals.
                  </span>
                </li>
              </ul>

              <p className="mt-8">
                Growth isn’t a guessing game anymore. It’s a predictable system
                that works for you. Let us help you dominate your niche with AI.
              </p>

              {/* CTA */}
              <div className="mt-6 w-full">
                <Buttonrgb className="" txt="Schedule a Free Strategy Call →" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
