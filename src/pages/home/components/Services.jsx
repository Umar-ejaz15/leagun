import React from "react";
import { Search, LineChart, Users, Globe } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";

const services = [
  {
    title: "Local SEO for Service Businesses",
    desc: "Appear where it matters most — top local search results. Optimize your Google Business Profile and build local citations for real traffic.",
    icon: <Search className="w-6 h-6 text-white" />,
  },
  {
    title: "AI-Powered Lead Generation",
    desc: "Generate high-converting leads with AI-driven data analysis and human expertise targeting the right audience at the right time.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    title: "Paid Ads Management",
    desc: "Maximize ROI with precise targeting, optimized campaigns, and continuous ad performance tracking.",
    icon: <LineChart className="w-6 h-6 text-white" />,
  },
  {
    title: "Website & Funnel Optimization",
    desc: "Lightning-fast, conversion-optimized websites that rank higher and convert better.",
    icon: <Globe className="w-6 h-6 text-white" />,
  },
  {
    title: "Social Media Management",
    desc: "Boost engagement with AI-driven content scheduling and analytics.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Optimize funnels, landing pages, and checkout for maximum conversions.",
    icon: <LineChart className="w-6 h-6 text-white" />,
  },
];

const Services = () => {
  return (
    <section className="relative  py-20 px-6 md:px-12">
       <div className="absolute overflow-hidden blur-xl inset-0 -z-10 opacity-20">
        <BottomShape />
        <TopShape />
      </div>
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 
                       drop-shadow-lg">
          Our{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              Services
            </span>
          </Highlighter>
        </h2>
        <p className="mt-4 text-gray-800 md:text-lg drop-shadow-sm max-w-2xl mx-auto">
          Everything you need to grow your business — powered by AI + human expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white hover:bg-purple-50 transition shadow-purple-200 shadow-md hover:shadow-lg rounded-xl p-6 text-left border border-purple-100"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400 flex items-center justify-center shadow-lg">
                {item.icon}
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-purple-700 mb-2 drop-shadow-sm">
              {item.title}
            </h3>
            <p className="text-gray-700 md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
