import React from "react";
import { Highlighter } from "@/components/magicui/highlighter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
   <section className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 py-24 bg-white overflow-hidden">
  <motion.div
    className="relative z-20 max-w-6xl text-center flex flex-col space-y-4"
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
      At <span className="font-semibold text-purple-600">LeaGun</span>, we fuse{" "}
      <span className="font-semibold text-purple-600">AI precision</span> with{" "}
      <span className="font-semibold text-purple-600">human intelligence</span>{" "}
      to build systems that don’t just work—they evolve with you.
    </p>

    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
      Our mission is simple: empower{" "}
      <span className="font-semibold text-purple-600">businesses that dare to
      grow</span>. From startups finding their first customers to enterprises
      scaling globally, we’ve been the silent force behind transformations that
      looked impossible on paper.
    </p>

    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
      We believe in <span className="font-semibold text-purple-600">clarity over chaos</span> 
      and <span className="font-semibold text-purple-600">results over vanity metrics</span>. 
      Every strategy we craft is built on data, sharpened with creativity, and 
      executed with precision—so you can focus on building your vision, not fighting the noise.
    </p>

    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
      When you partner with us, you don’t just get{" "}
      <span className="font-semibold text-purple-600">a service provider</span>—you gain a{" "}
      <span className="font-semibold text-purple-600">dedicated growth ally</span>, 
      obsessed with turning your potential into lasting impact.
    </p>

    <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
      Because in a world of ordinary,{" "}
      <span className="font-semibold text-purple-600">LeaGun clients are extraordinary</span>.
    </p>

    <div className="pt-6">
      <Button className="cursor-pointer bg-purple-600 text-white px-10 py-5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-purple-700">
        Schedule a Free Consultation →
      </Button>
    </div>
  </motion.div>
</section>

  );
};

export default Hero;
