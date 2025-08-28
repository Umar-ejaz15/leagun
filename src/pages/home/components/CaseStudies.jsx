import React from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Boosted Local SEO for HVAC Company",
    desc: "Increased organic traffic by 150% and generated 200+ new leads in 3 months.",
    img: "https://via.placeholder.com/600x400", // Replace with real dashboard/chart image
    metrics: ["+150% Traffic", "200+ Leads", "Top 3 on Google"],
  },
  {
    title: "Plumbing Business Domination",
    desc: "Ranked #1 for local keywords, increasing revenue by 80% within 90 days.",
    img: "https://via.placeholder.com/600x400",
    metrics: ["#1 Rankings", "+80% Revenue", "50% Lower Ad Spend"],
  },
  {
    title: "Electrical Contractor Growth",
    desc: "Scaled client acquisition with GBP optimization and backlink strategy.",
    img: "https://via.placeholder.com/600x400",
    metrics: ["+120% Calls", "10K Monthly Visits", "High DA Backlinks"],
  },
];

const CaseStudies = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-md mb-4">
          Case Studies That Speak for Themselves
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          See how we’ve helped service businesses dominate local search, increase conversions, and grow revenue with AI + human strategies.
        </p>
      </div>

      <motion.div 
        className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {caseStudies.map((item, i) => (
          <motion.div
            key={i}
            className="group relative bg-white/20 backdrop-blur-xl border border-purple-200 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tr from-purple-500 to-purple-300 rounded-full blur-3xl opacity-30"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.metrics.map((metric, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100/40 text-purple-900 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CaseStudies;
