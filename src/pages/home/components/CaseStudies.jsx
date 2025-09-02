"use client";
import React from "react";
import { motion } from "framer-motion";

const caseStudies = {
  google: [
    {
      title: "Farming Equipment Company",
      desc: "We executed a highly targeted Google Ads campaign driving strong visibility and conversions for tractors & equipment.",
      img: "/c1.png",
      highlights: [
        "1.5K Clicks from highly relevant traffic",
        "127 Conversions at $27.15 per conversion",
        "Total Spend: $3.45K",
      ],
    },
    {
      title: "HVAC Business",
      desc: "Optimized local HVAC campaigns to generate high-quality leads efficiently.",
      img: "/c2.png",
      highlights: [
        "514 Clicks generated",
        "62 Conversions",
        "Avg CPC: $3.44",
        "Total Spend: $1.77K",
      ],
    },
  ],
  meta: [
    {
      title: "Chiropractic Clinic",
      desc: "Facebook Ads focused on ‘Dinner with Doc’ event registrations & lead generation across multiple regions.",
      img: "/c3.png",
      highlights: [
        "Total Reach: 330,342",
        "99 Submissions at $1.77 CPL",
        "Cost per Result range: $1.77 – $11.41",
        "Top Campaigns: Greensboro, High Point, Newman",
      ],
    },
    {
      title: "Finance & Credit (Special Ads)",
      desc: "Meta Ads for a compliance-heavy niche delivering leads, traffic, and conversions.",
      img: "/c4.png",
      highlights: [
        "26 + 37 + 28 Website Leads across campaigns",
        "CPL Range: $42 – $45",
        "Traffic campaign: 1,744 landing page views at $1.10 each",
        "Retargeting purchases: 195 at $12.93 per conversion",
        "Total Spend: $14K+ (Tu1), $30K+ (Hassan), $16K+ (American 1st)",
      ],
    },
  ],
};

const CaseStudies = () => {
  return (
    <section className="relative py-10 px-6 md:px-12 bg-gradient-to-br from-purple-200 via-white md:mt-0 to-purple-200 overflow-hidden">
      {/* Decorative background gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[400px] bg-purple-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow mb-4"
        >
          Real Case Studies, Real Results
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto"
        >
          We’ve helped businesses in home services, healthcare, finance, and more dominate with
          Google Ads & Meta Ads. Here’s how our campaigns performed:
        </motion.p>
      </div>

      {/* Google Ads Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-8 text-center">
          Google Ads Case Studies
        </h3>
        <div className="space-y-12">
          {caseStudies.google.map((item, i) => (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } bg-white/70 backdrop-blur-lg rounded-xl shadow-md p-6 border border-purple-100`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-base mb-4">{item.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {item.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm shadow-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Meta Ads Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-8 text-center">
          Meta Ads Case Studies
        </h3>
        <div className="space-y-12">
          {caseStudies.meta.map((item, i) => (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } bg-white/70 backdrop-blur-lg rounded-xl shadow-md p-6 border border-purple-100`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-base mb-4">{item.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {item.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm shadow-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
