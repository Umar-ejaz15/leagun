import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      style={{
        background: `url("/pic.png") no-repeat center center`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 py-24 overflow-hidden"
    >
      {/* Overlay with duotone gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-black/60 to-purple-800/50 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-6xl text-center flex flex-col space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Headline */}
        <h1 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-tight text-white">
          Bold Ideas. <br /> Smarter{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-400 to-purple-600">
            Growth.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          We fuse{" "}
          <span className="font-semibold text-purple-300">AI precision</span> +
          <span className="font-semibold text-purple-300"> human creativity</span>{" "}
          to help brands scale with clarity, confidence & measurable results.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button className="cursor-pointer bg-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-purple-700">
            Start Your Project →
          </Button>
          <Button className="cursor-pointer border border-white text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:text-purple-700">
            View Our Work
          </Button>
        </div>

        {/* Trust signals */}
        <div className="pt-10 text-gray-300 text-sm uppercase tracking-wide">
          Trusted by <span className="text-white font-semibold">500+ clients</span> across 10+ industries
        </div>
      </motion.div>

      {/* Decorative Shape / Depth Element */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      ></motion.div>
    </section>
  );
};

export default Hero;
