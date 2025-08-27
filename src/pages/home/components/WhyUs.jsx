import React from "react";
import {
  CheckCircle,
  LineChart,
  MapPin,
  FileText,
  Link,
  UserCheck,
} from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import TopShape from "@/components/TopShape";
import BottomShape from "@/components/BottomShape";

const WhyUs = () => {
  const features = [
    {
      title: "Proven SEO Strategies",
      desc: "Data-driven SEO campaigns that increase your rankings and attract high-quality local leads.",
      icon: <LineChart className="w-6 h-6 text-white" />,
    },
    {
      title: "Local SEO Experts",
      desc: "Specialized in plumbing, HVAC, electrical, and contractor SEO to win in your market.",
      icon: <MapPin className="w-6 h-6 text-white" />,
    },
    {
      title: "Google Business Profile Optimization",
      desc: "Optimize your GBP for maximum visibility in Google Maps and local packs.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
    },
    {
      title: "High-Authority Content Creation",
      desc: "Engaging, local-focused content that converts visitors into paying customers.",
      icon: <FileText className="w-6 h-6 text-white" />,
    },
    {
      title: "Backlink Building & Authority",
      desc: "Build a strong domain authority to outrank competitors and own your niche.",
      icon: <Link className="w-6 h-6 text-white" />,
    },
    {
      title: "Dedicated Account Managers",
      desc: "One-on-one support from SEO specialists who understand your trade.",
      icon: <UserCheck className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12  overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute overflow-hidden blur-3xl inset-0 -z-10 opacity-20">
        <BottomShape />
        <TopShape />
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight
                       bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-lg w-full">
          Why Choose{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              Our SEO Agency
            </span>
          </Highlighter>{" "}
          for Your Service Business?
        </h2>
        <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto drop-shadow-sm">
          We understand blue-collar industries. Our strategies are built to get
          real, local customers for your plumbing, HVAC, electrical, and
          contractor business. From optimizing your Google Business Profile to
          building authority with backlinks, we help you dominate local search.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, i) => (
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
            <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
