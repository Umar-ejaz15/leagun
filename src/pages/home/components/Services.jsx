import React from "react";
import { Search, LineChart, Users, Globe } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";

const services = [
  {
    title: "Local SEO for Service Businesses",
    desc: "Appear where it matters most — top local search results. Optimize your Google Business Profile and build local citations for real traffic.",
    icon: Search,
  },
  {
    title: "AI-Powered Lead Generation",
    desc: "Generate high-converting leads with AI-driven data analysis and human expertise targeting the right audience at the right time.",
    icon: Users,
  },
  {
    title: "Paid Ads Management",
    desc: "Maximize ROI with precise targeting, optimized campaigns, and continuous ad performance tracking.",
    icon: LineChart,
  },
  {
    title: "Website & Funnel Optimization",
    desc: "Lightning-fast, conversion-optimized websites that rank higher and convert better.",
    icon: Globe,
  },
  {
    title: "Social Media Management",
    desc: "Boost engagement with AI-driven content scheduling and analytics.",
    icon: Users,
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Optimize funnels, landing pages, and checkout for maximum conversions.",
    icon: LineChart,
  },
];

const Services = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 blur-3xl opacity-20 -z-10">
        <BottomShape />
        <TopShape />
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-md">
          Our{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              Services
            </span>
          </Highlighter>
        </h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Everything you need to grow your business — powered by AI + human expertise.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl mx-auto">
        {services.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-purple-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>

              {/* Accent Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/50 transition-all duration-300"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
