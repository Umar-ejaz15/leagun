import React from "react";
import { Brain, Target, Users, BarChart } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "AI Analysis",
      desc: "We use AI to analyze your audience and market for precision targeting.",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Strategy Setup",
      desc: "Custom campaigns crafted to dominate local searches and generate leads.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Lead Generation",
      desc: "AI agents + human experts drive high-quality, conversion-ready leads.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      title: "Scale & Optimize",
      desc: "Track KPIs, refine strategies, and scale revenue without limits.",
    },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center py-20 px-6 md:px-12 bg-white">
       <div className="absolute overflow-hidden blur-xl inset-0 z-0 opacity-20">
        <TopShape />
        <BottomShape />
      </div>
      <div className="max-w-6xl mx-auto text-center mb-14">

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 
                       drop-shadow-lg">
          How It{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              Works
            </span>
          </Highlighter>
        </h2>
        <p className="text-lg md:text-xl text-gray-800 mt-4 max-w-2xl mx-auto drop-shadow-sm">
          A clear, proven 4-step system to help you dominate local search and
          flood your inbox with leads.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-purple-200 ml-8 md:ml-16">
        {steps.map((step, i) => (
          <div key={i} className="mb-14 relative pl-10">
            {/* Connector Dot */}
            <div className="absolute -left-4 top-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400 
                              flex items-center justify-center shadow-lg">
                {step.icon}
              </div>
            </div>

            {/* Step Number */}
            <span className="text-4xl md:text-5xl font-extrabold 
                             bg-clip-text text-transparent 
                             bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 
                             absolute -left-16 top-0 hidden md:block drop-shadow-md">
              {i + 1}
            </span>

            {/* Step Content */}
            <h3 className="text-xl md:text-2xl font-semibold text-purple-700 drop-shadow-sm">
              {step.title}
            </h3>
            <p className="text-gray-700 md:text-lg mt-1">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
