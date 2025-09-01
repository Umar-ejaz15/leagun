"use client";

import BottomShape from "@/components/BottomShape";
import Buttonrgb from "@/components/Buttonrgb";
import { Highlighter } from "@/components/magicui/highlighter";
import TopShape from "@/components/TopShape";
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const About = () => {
  return (
    <section className="relative py-5 lg:px-0 overflow-hidden bg-gradient-to-b from-white to-purple-50">
      {/* Heading */}
      <motion.h1
        className="text-[clamp(1.5rem,4vw,3.2rem)] font-extrabold text-center bg-clip-text text-transparent 
                   bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-sm mb-5 max-w-4xl mx-auto leading-snug"
      >
        About{" "}
        <Highlighter action="underline" color="purple">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
            <b>Leagun Technologies</b>
          </span>
        </Highlighter>
      </motion.h1>

      {/* Company Section */}
      <div className="relative px-6 z-10 max-w-5xl mx-auto mb-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:text-xl md:text-2xl text-gray-900 leading-relaxed"
        >
          <span className="font-bold">Leagun Technologies</span>, formerly Soft
          Stone Technologies, has been pushing boundaries for 3 years. We’ve
          tested a lot, failed a lot, and figured out what actually works.
          That’s how our <span className="font-bold">Sales Growth Engine</span>{" "}
          was born — not theory, but real strategies tested in the field.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 sm:text-xl md:text-2xl text-gray-700 leading-relaxed"
        >
          Founded by <span className="font-bold">Zain Noor</span>, we focus on
          helping local businesses across the{" "}
          <span className="font-semibold">USA and Canada</span> grow their
          sales. From HVAC companies to remodelers, dental clinics, med spas,
          electricians, and more, we partner with small and mid-sized businesses
          that want predictable, repeatable revenue.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 sm:text-xl md:text-2xl text-gray-900 leading-relaxed"
        >
          Our mission is simple: to make sure local businesses don’t just{" "}
          <span className="font-bold">survive</span>, but{" "}
          <span className="font-bold">grow</span>, with systems that deliver
          visibility, leads, and consistent sales.
        </motion.p>
      </div>

      {/* Leadership Section */}
      <div className="relative px-6 bg-purple-50 py-10 z-10 mx-auto">
        <div className="flex justify-center mb-10">
          <Highlighter action="underline" color="purple">
            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-center bg-clip-text text-transparent 
                         bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-sm max-w-4xl mx-auto leading-snug"
            >
              Leadership
            </motion.h2>
          </Highlighter>
        </div>

        <div className="grid lg:grid-cols-2 max-w-6xl justify-center mx-auto items-center gap-10">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Zain Noor</h3>
            <p className="text-purple-700 font-semibold text-xl mb-3">
              Founder, Leagun Technologies | Sales Growth Specialist
            </p>

            <p className="text-gray-700 sm:text-lg md:text-xl">
              Zain has spent <span className="font-bold">5+ years</span> selling
              in some of the toughest markets — USA, UK, and UAE — working with
              global companies and leading Mid-Market sales at the
              multi-billion-dollar{" "}
              <span className="font-bold">Motive Technologies</span>.
            </p>

            <p className="mt-6 text-gray-700 sm:text-lg md:text-xl">
              His edge? Taking messy, underperforming pipelines and turning them
              into <span className="font-bold">predictable sales engines</span>.
              Not theory, not fluff, just systems proven to win more deals,
              generate repeatable revenue, and actually{" "}
              <span className="font-bold">grow businesses</span>.
            </p>

            {/* Contact Section */}
            <div className="mt-10">
              <h4 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Mail className="w-6 h-6 text-purple-600" /> Contact Me
              </h4>
              <a
                href="mailto:workwithzain@yahoo.com"
                className="text-purple-600 font-semibold text-lg underline hover:text-purple-800 transition"
              >
                workwithzain@yahoo.com
              </a>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <img
              src="/pic.jpg"
              alt="Zain Noor"
              className="rounded-md w-full md:w-2/4 object-cover border-4 border-purple-200 shadow-lg transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-5xl mx-auto text-center bg-gradient-to-r from-purple-50 to-white 
                   backdrop-blur-xl rounded-2xl shadow-lg px-10 py-12 border border-purple-100"
        >
          <h2
            className="text-[clamp(1.8rem,4vw,2.5rem)] bg-clip-text text-transparent bg-gradient-to-r 
                       from-purple-500 via-purple-600 to-purple-400 font-extrabold mb-4"
          >
            Ready to Scale with Us?
          </h2>
          <p className="text-gray-700 sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Let’s build a predictable system for your sales growth. Book a free
            consultation with Zain and discover how{" "}
            <span className="font-bold">Leagun Technologies</span> can help your
            business thrive.
          </p>
          <Buttonrgb
            txt="Book My Free Consultation →"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500 
                     hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 
                     text-white shadow-md hover:shadow-xl hover:shadow-purple-400/40
                     transition-all duration-300 px-10 py-5 rounded-full text-lg font-semibold"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
