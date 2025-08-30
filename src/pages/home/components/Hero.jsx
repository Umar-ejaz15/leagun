"use client";

import React from "react";
import { motion } from "framer-motion";
import Buttonrgb from "@/components/Buttonrgb";
import { AnimatedGradientTextDemo } from "@/components/AnimatedGradientTextDemo";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto mt-20 md:mt-28">
        {/* Pain Point */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AnimatedGradientTextDemo className="font-bold tracking-tight leading-tight text-[clamp(1.5rem,4vw,2.5rem)]" />
        </motion.div>

        {/* Sub-Tagline / Solution */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl"
        >
          We help local businesses book{" "}
          <span className="font-semibold text-purple-600">40–50 appointments</span>{" "}
          every month — no catch 🚀
        </motion.p>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/50 
                     ring-4 ring-purple-500/20 hover:ring-purple-500/40 transition-all duration-500"
        >
          <div className="aspect-video">
            <video
              autoPlay
              loop
              controls
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 120 }}
          className="mt-10"
        >
          <Buttonrgb
            txt="🚀 Schedule a Call →"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500
                       hover:from-purple-700 hover:via-purple-800 hover:to-purple-600
                       text-white shadow-purple-400 shadow-lg hover:shadow-2xl
                       transition-all duration-300 px-8 py-4 text-lg font-semibold
                       rounded-full animate-glow"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
