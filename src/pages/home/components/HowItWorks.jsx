import React from "react";
import { Brain, Target, Users, BarChart } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";

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
    <section className="relative flex flex-col justify-center items-center py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          How It{" "}
          <Highlighter action="underline" color="red">
            <span className="text-purple-600"> Works </span>
          </Highlighter>
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          A clear, proven 4-step system to help you dominate local search and
          flood your inbox with leads.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-200 ml-8 md:ml-16">
        {steps.map((step, i) => (
          <div key={i} className="mb-14 relative pl-10">
            {/* Connector Dot */}
            <div className="absolute -left-4 top-0">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shadow-sm">
                {step.icon}
              </div>
            </div>

            {/* Step Number */}
            <span className="text-4xl font-extrabold text-gray-200 absolute -left-16 top-0 hidden md:block">
              {i + 1}
            </span>

            {/* Step Content */}
            <h3 className="text-xl font-semibold text-gray-900">
              {step.title}
            </h3>
            <p className="text-gray-600 mt-1">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
