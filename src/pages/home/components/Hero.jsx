"use client";

import React from "react";
import { motion } from "framer-motion";
import Buttonrgb from "@/components/Buttonrgb";
import { AnimatedGradientTextDemo } from "@/components/AnimatedGradientTextDemo";
import { Highlighter } from "@/components/magicui/highlighter";

const Hero = () => {
  return (
    <section className="relative w-full h-auto md:min-h-screen flex flex-col  px-4 sm:px-6  md:px-12 lg:px-24 bg-gradient-to-b from-purple-50 md:mt-0 to-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col mt-30 items-center text-center max-w-5xl mx-auto  md:mt-30">
        {/* Pain Point */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AnimatedGradientTextDemo className="font-extrabold tracking-tighter leading-none text-sm md:text-[clamp(1.8rem,4vw,rem)]  drop-shadow-sm" />
        </motion.div>

        {/* Sub-Tagline */}
        <motion.p className="mt-4 text-3xl w-full tracking-tighter sm:text-lg md:text-5xl text-gray-700/90 md:max-w-5xl">
          We help local businesses book{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              40–50
            </span>
          </Highlighter>
          appointments every month — no catch
        </motion.p>

        {/* Video Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mt-6 w-full max-w-3xl rounded-2xl overflow-hidden
             shadow-xl shadow-purple-500/30 border border-purple-200/40
             backdrop-blur-sm hover:scale-[1.02] transition-transform duration-500"
        >
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/lo8d0Cn8UZ4?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&loop=1&playlist=lo8d0Cn8UZ4"
              title="How we work - Leagun"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
            type: "spring",
            stiffness: 120,
          }}
          className="mt-10 mb-5"
        >
          <Buttonrgb
            txt="Schedule a Call →"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500
                       hover:from-purple-700 hover:via-purple-800 hover:to-purple-600
                       text-white shadow-lg shadow-purple-400/40 hover:shadow-purple-500/60
                       transition-all duration-300 px-8 py-4 text-lg font-semibold
                       rounded-full animate-glow"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
