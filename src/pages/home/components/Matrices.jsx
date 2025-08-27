import React from "react";
import { Highlighter } from "@/components/magicui/highlighter";

const stats = [
  { label: "Leads Generated", value: "12,500+" },
  { label: "Businesses Served", value: "350+" },
  { label: "Avg. Conversion Rate", value: "68%" },
  { label: "Countries Reached", value: "15+" },
];

const Matrices = () => {
  return (
    <section className=" py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Our{" "}
          <Highlighter action="underline" color="#FF9800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Impact
            </span>
          </Highlighter>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          These numbers tell the story of how our AI + human expertise helps
          businesses scale faster and smarter.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-4xl font-extrabold text-purple-600">
              {stat.value}
            </h3>
            <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Matrices;
