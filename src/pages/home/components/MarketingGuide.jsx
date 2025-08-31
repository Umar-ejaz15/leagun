"use client";

import React from "react";
import { Highlighter } from "@/components/magicui/highlighter";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const MarketingGuide = () => {
  return (
    <section className="py-10 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[clamp(1.6rem,5vw,3rem)] font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-lg"
        >
          Get Your{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              Free Marketing Guide
            </span>
          </Highlighter>
        </motion.h2>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto drop-shadow-sm"
        >
          Unlock proven strategies on how to{" "}
          <span className="font-semibold text-purple-700">grow your business</span>, 
          increase leads, and maximize conversions. 📈✨
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8"
        >
          <a
            href="/freeguide.pdf"
            download
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-lg font-semibold 
                       bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400 text-white shadow-md 
                       hover:shadow-xl hover:scale-105 hover:shadow-purple-400/40
                       transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download PDF Guide
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingGuide;
