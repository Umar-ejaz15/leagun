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

const WhyUs = () => {
  const features = [
    {
      title: "Proven SEO Strategies",
      desc: "Data-driven SEO campaigns that increase your rankings and attract high-quality local leads.",
      icon: <LineChart className="w-6 h-6 text-gray-100" />,
    },
    {
      title: "Local SEO Experts",
      desc: "Specialized in plumbing, HVAC, electrical, and contractor SEO to win in your market.",
      icon: <MapPin className="w-6 h-6 text-gray-100" />,
    },
    {
      title: "Google Business Profile Optimization",
      desc: "Optimize your GBP for maximum visibility in Google Maps and local packs.",
      icon: <CheckCircle className="w-6 h-6 text-gray-100" />,
    },
    {
      title: "High-Authority Content Creation",
      desc: "Engaging, local-focused content that converts visitors into paying customers.",
      icon: <FileText className="w-6 h-6 text-gray-100" />,
    },
    {
      title: "Backlink Building & Authority",
      desc: "Build a strong domain authority to outrank competitors and own your niche.",
      icon: <Link className="w-6 h-6 text-gray-100" />,
    },
    {
      title: "Dedicated Account Managers",
      desc: "One-on-one support from SEO specialists who understand your trade.",
      icon: <UserCheck className="w-6 h-6 text-gray-100" />,
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Why Choose{" "}
          <Highlighter action="underline" color="red">
            <span className="text-purple-600">Our SEO Agency</span>
          </Highlighter>
          {" "}for Your Service Business?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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

export default WhyUs;
