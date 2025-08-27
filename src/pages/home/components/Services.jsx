import React from "react";
import { Search, LineChart, Users, Globe } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";

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
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Our{" "}
          <Highlighter action="underline" color="red">
            <span className="text-purple-600">
              Services
            </span>
          </Highlighter>
        </h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Everything you need to grow your business — powered by AI + human expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white hover:bg-gray-50 transition shadow-sm hover:shadow-md rounded-sm p-6 text-left border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full  bg-purple-600 flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
