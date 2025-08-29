import React from "react";
import { Highlighter } from "@/components/magicui/highlighter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 py-24 bg-white overflow-hidden">
      {/* Content */}
      <motion.div
        className="relative z-20 max-w-6xl text-center flex flex-col space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold leading-tight text-gray-900">
          Welcome to{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800">
              LeaGun
            </span>
          </Highlighter>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At{" "}
          <span className="font-semibold text-purple-600">LeaGun</span>, we fuse{" "}
          <span className="font-semibold text-purple-600">AI precision</span>{" "}
          with{" "}
          <span className="font-semibold text-purple-600">
            human intelligence
          </span>{" "}
          to build systems that don’t just work—they evolve with you.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Every{" "}
          <span className="font-semibold text-purple-600">workflow</span>,{" "}
          <span className="font-semibold text-purple-600">automation</span>, and{" "}
          <span className="font-semibold text-purple-600">strategy</span> we
          design is engineered for{" "}
          <span className="font-semibold text-purple-600">
            measurable, repeatable, unstoppable growth
          </span>
          .
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We turn{" "}
          <span className="font-semibold text-purple-600">chaos into clarity</span>{" "}
          and{" "}
          <span className="font-semibold text-purple-600">
            potential into profits
          </span>
          . From lead generation to scaling globally, your brand becomes{" "}
          <span className="font-semibold text-purple-600">
            the next category leader
          </span>
          .
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          With us, it’s not just about numbers—it’s about{" "}
          <span className="font-semibold text-purple-600">vision</span>,{" "}
          <span className="font-semibold text-purple-600">innovation</span>, and{" "}
          <span className="font-semibold text-purple-600">lasting impact</span>.
        </p>

        <div className="pt-4">
          <Button className="cursor-pointer bg-purple-600 text-white px-10 py-5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-purple-700">
            Schedule a Free Consultation →
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
