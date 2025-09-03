"use client"
import React from "react";
import {
  Globe,
  Target,
  MousePointerClick,
  Bot,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import { motion } from "framer-motion"


const HowItWorks = () => {
  const steps = [
    {
      icon: Globe,
      title: "Step 1",
      desc: "We access 300+ listing platforms on Google and across the web.",
    },
    {
      icon: Target,
      title: "Step 2",
      desc: "We run highly targeted ads to bring in quality traffic.",
    },
    {
      icon: MousePointerClick,
      title: "Step 3",
      desc: "Leads land on your website and get captured through our system.",
    },
    {
      icon: Bot,
      title: "Step 4",
      desc: "Automation kicks in, nurturing and qualifying those leads.",
    },
    {
      icon: Calendar,
      title: "Step 5",
      desc: "You get booked, qualified appointments directly in your calendar.",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-white overflow-hidden">
      {/* Background Glow */} 
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Heading */} 
      <div className="max-w-5xl mx-auto text-center mb-12 relative z-10">
        <motion.h2
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It{" "}
          <Highlighter action="underline" color="white">
            Works
          </Highlighter>
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-purple-100 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A simple 5-step process to take you from visibility to booked appointments.
        </motion.p>
      </div>

      {/* Steps with Arrows */} 
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 max-w-6xl mx-auto relative z-10 flex-wrap">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex items-center">
              {/* Step Card */} 
              <motion.div
                className="relative bg-white/10 backdrop-blur-xl rounded-xl p-10 text-center border border-purple-300 shadow-lg hover:shadow-xl h transition-all duration-300 w-76"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.1 }}
               
              >
                {/* Step Number */} 
                <div className="absolute -top-5 left-4 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-purple-100 opacity-50">
                  {i + 1}
                </div>

                {/* Icon */} 
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mb-4 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-purple-100 text-md leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>

              {/* Arrow (only show if not the last step) */} 
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden md:flex items-center justify-center mx-3"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 + 0.1, duration: 0.4 }}
                 
                >
                  <ArrowRight className="w-7 h-7 text-purple-200" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
