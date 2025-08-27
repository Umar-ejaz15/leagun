import React from "react";
import { Search, LineChart, Users, Globe } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";

const services = [
  {
    title: "Local SEO for Service Businesses",
    desc: "Your local customers are searching for you every day. We ensure your business appears where it matters most — on top of local search results. From optimizing your Google Business Profile to building local citations, our strategies are proven to drive real traffic.",
    icon: <Search className="w-8 h-8 text-white" />,
    img: "https://static.vecteezy.com/system/resources/thumbnails/008/506/590/small_2x/3d-seo-search-engine-optimization-concept-3d-rendering-png.png",
  },
  {
    title: "AI-Powered Lead Generation",
    desc: "We combine AI-driven data analysis with human creativity to generate high-converting leads. Our system targets the right audience at the right time using predictive analytics.",
    icon: <Users className="w-8 h-8 text-white" />,
    img: "https://static.vecteezy.com/system/resources/thumbnails/021/358/803/small_2x/artificial-intelligence-icon-element-design-illustration-ai-technology-and-cyber-icon-element-futuristic-technology-service-and-communication-artificial-intelligence-concept-png.png",
  },
  {
    title: "Paid Ads Management",
    desc: "Stop wasting money on ads that don’t convert. Our paid ad strategies focus on maximizing your ROI through advanced targeting and continuous optimization.",
    icon: <LineChart className="w-8 h-8 text-white" />,
    img: "https://static.vecteezy.com/system/resources/thumbnails/035/201/012/small/3d-ads-chat-with-transparent-background-marketing-and-advertising-png.png",
  },
  {
    title: "Website & Funnel Optimization",
    desc: "A slow or poorly designed website kills conversions. We create lightning-fast, conversion-optimized websites that rank higher and convert better.",
    icon: <Globe className="w-8 h-8 text-white" />,
    img: "https://cdn-icons-png.flaticon.com/512/8743/8743996.png",
  },
  {
    title: "Social Media Management",
    desc: "Boost engagement and reach with AI-driven content scheduling and analytics.",
    icon: <Users className="w-8 h-8 text-white" />,
    img: "https://cdn-icons-png.flaticon.com/512/1077/1077042.png",
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Optimize your funnels, landing pages, and checkout process for maximum conversions.",
    icon: <LineChart className="w-8 h-8 text-white" />,
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Our{" "}
          <Highlighter action="underline" color="#FF9800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Services
            </span>
          </Highlighter>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Everything you need to dominate local search and generate more revenue — powered by AI + human expertise.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid gap-10">
        {/* First Row: 2/3 + 1/3 */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex flex-col gap-4 p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-xl">
              {services[0].icon}
              <h3 className="text-2xl font-bold text-white">{services[0].title}</h3>
            </div>
            <p className="text-gray-700">{services[0].desc}</p>
          </div>

          <div className="flex flex-col gap-4 p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-xl">
              {services[1].icon}
              <h3 className="text-2xl font-bold text-white">{services[1].title}</h3>
            </div>
            <p className="text-gray-700">{services[1].desc}</p>
          </div>
        </div>

        {/* Second Row: Full width */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-xl">
            {services[2].icon}
            <h3 className="text-2xl font-bold text-white">{services[2].title}</h3>
          </div>
          <p className="text-gray-700">{services[2].desc}</p>
        </div>

        {/* Third Row: 3-column for 4th, 5th, 6th services */}
        <div className="grid md:grid-cols-3 gap-6">
          {[3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-xl">
                {services[i].icon}
                <h3 className="text-2xl font-bold text-white">{services[i].title}</h3>
              </div>
              <p className="text-gray-700">{services[i].desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
