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
      icon: LineChart,
    },
    {
      title: "Local SEO Experts",
      desc: "Specialized in plumbing, HVAC, electrical, and contractor SEO to win in your market.",
      icon: MapPin,
    },
    {
      title: "Google Business Profile Optimization",
      desc: "Optimize your GBP for maximum visibility in Google Maps and local packs.",
      icon: CheckCircle,
    },
    {
      title: "High-Authority Content Creation",
      desc: "Engaging, local-focused content that converts visitors into paying customers.",
      icon: FileText,
    },
    {
      title: "Backlink Building & Authority",
      desc: "Build a strong domain authority to outrank competitors and own your niche.",
      icon: Link,
    },
    {
      title: "Dedicated Account Managers",
      desc: "One-on-one support from SEO specialists who understand your trade.",
      icon: UserCheck,
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Shapes */}
      <div className="absolute blur-3xl inset-0 -z-10 opacity-15">
        <TopShape />
        <BottomShape />
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-sm mb-6">
          Why Choose{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              Our SEO Agency
            </span>
          </Highlighter>{" "}
          for Your Service Business?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We understand blue-collar industries. Our strategies are built to get real,
          local customers for your plumbing, HVAC, electrical, and contractor business.
          From optimizing your Google Business Profile to building authority with
          backlinks, we help you dominate local search.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl mx-auto">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-md hover:bg-purple-50/90 transition-all duration-300 rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center mb-5">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
