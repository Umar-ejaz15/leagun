import React, { useEffect, useState } from "react";
import { Highlighter } from "@/components/magicui/highlighter";

const stats = [
  { label: "Leads Generated", value: 12500, suffix: "+" },
  { label: "Businesses Served", value: 350, suffix: "+" },
  { label: "Avg. Conversion Rate", value: 68, suffix: "%" },
  { label: "Countries Reached", value: 15, suffix: "+" },
];

const Matrices = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) =>
      setInterval(() => {
        setCounts((prev) => {
          const increment = Math.ceil(stat.value / 150);
          const newCount = prev[i] + increment;
          return prev.map((c, idx) => (idx === i ? Math.min(newCount, stat.value) : c));
        });
      }, 25)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Our{" "}
          <Highlighter action="underline" color="red">
            <span className="bg-clip-text text-purple-600">
              Impact
            </span>
          </Highlighter>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Numbers that tell how our AI + human expertise scales businesses effortlessly.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-md bg-white transition-all duration-300 flex flex-col items-center justify-center"
          >
            <div className="flex gap-2">

            <h3 className="text-4xl font-extrabold">

              {counts[index]}
            </h3>
            <h3 className="text-4xl font-extrabold text-purple-900">
              {stat.suffix}
            </h3>
            </div>
            <p className="mt-2 text-gray-500 font-medium text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Matrices;
