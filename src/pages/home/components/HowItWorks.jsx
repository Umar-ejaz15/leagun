import React from "react";
import { Brain, Target, Users, BarChart } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: Brain,
      title: "AI Analysis",
      desc: "We use AI to analyze your audience and market for precision targeting.",
    },
    {
      icon: Target,
      title: "Strategy Setup",
      desc: "Custom campaigns crafted to dominate local searches and generate leads.",
    },
    {
      icon: Users,
      title: "Lead Generation",
      desc: "AI agents + human experts drive high-quality, conversion-ready leads.",
    },
    {
      icon: BarChart,
      title: "Scale & Optimize",
      desc: "Track KPIs, refine strategies, and scale revenue without limits.",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight mb-6">
          How It{" "}
          <Highlighter action="underline" color="white">
            Works
          </Highlighter>
        </h2>
        <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
          A simple, powerful 4-step process to dominate local search and flood your inbox with quality leads.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-purple-300 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
             
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-6 text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-500 opacity-20">
                {i + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-purple-100 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
