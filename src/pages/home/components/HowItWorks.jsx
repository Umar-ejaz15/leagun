import React from "react";
import { Brain, Target, Users, BarChart } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import TopShape from "@/components/TopShape";
import BottomShape from "@/components/BottomShape";

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
    <section className="relative  flex flex-col justify-center items-center  py-20 px-6 md:px-12">
      <div className=" absolute blur-3xl overflow-hidden">
        <BottomShape />
        <TopShape />
      </div>
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          How It{" "}
          <Highlighter action="underline" color="#FF9800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Works
            </span>
          </Highlighter>
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          A clear, proven 4-step system to help you dominate local search and
          flood your inbox with leads.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-gradient-to-b from-blue-500 via-purple-500 to-pink-500 ml-8 md:ml-16">
        {steps.map((step, i) => (
          <div key={i} className="mb-14 relative pl-10">
            {/* Connector Line Dot */}
            <div className="absolute -left-[1.3rem] top-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                {step.icon}
              </div>
            </div>

            {/* Step Number */}
            <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 absolute -left-16 top-0 hidden md:block">
              {i + 1}
            </span>

            {/* Step Content */}
            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
