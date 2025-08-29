import React from "react";
import { Heart, Shield, Globe, CloudLightning } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import { motion } from "framer-motion";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    desc: "We prioritize your success and create solutions that truly impact your business growth.",
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    desc: "Transparent processes, ethical strategies, and accountability at every step.",
  },
  {
    icon: CloudLightning,
    title: "Innovation",
    desc: "Leveraging AI + human creativity to bring cutting-edge solutions to the table.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    desc: "Scaling businesses worldwide while keeping local relevance intact.",
  },
];

const Values = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-md">
          Our{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              Core Values
            </span>
          </Highlighter>
        </h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Everything we do is guided by principles that drive results and trust. These values shape our work and define our commitment to you.
        </p>
      </div>

      {/* Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 max-w-6xl mx-auto">
        {values.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              className="relative bg-white/80 backdrop-blur-xl rounded-xl p-10 border border-purple-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <Icon className="w-8 h-8" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Values;
