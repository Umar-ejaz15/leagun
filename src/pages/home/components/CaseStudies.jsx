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
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-md mb-4">
          Real Case Studies, Real Results
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          We’ve helped businesses in home services, healthcare, finance, and more dominate with
          Google Ads & Meta Ads. Here’s how our campaigns performed:
        </p>
      </div>

      {/* Google Ads Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-3xl font-bold text-purple-700 mb-12 text-center">
          Google Ads Case Studies
        </h3>
        <div className="space-y-20">
          {caseStudies.google.map((item, i) => (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-base mb-4">{item.desc}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm md:text-base">
                  {item.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Meta Ads Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-purple-700 mb-12 text-center">
          Meta Ads Case Studies
        </h3>
        <div className="space-y-20">
          {caseStudies.meta.map((item, i) => (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-base mb-4">{item.desc}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm md:text-base">
                  {item.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
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
