import React from "react";
import { Highlighter } from "@/components/magicui/highlighter";
import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";

const Mission = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 opacity-20 blur-3xl">
        <TopShape />
        <BottomShape />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight">
          Our{" "}
          <Highlighter action="underline" color="white">
            Mission
          </Highlighter>
        </h2>
        <p className="mt-4 text-purple-200 text-lg md:text-xl max-w-3xl mx-auto">
          We are on a mission to revolutionize lead generation. By combining AI intelligence with human expertise, we make growth predictable, scalable, and accessible for businesses of all sizes.
        </p>
      </div>

      {/* Mission Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
        {[
          {
            title: "Predictable Growth",
            desc: "Deliver consistent, measurable results for every client.",
          },
          {
            title: "AI + Human Expertise",
            desc: "Harness the perfect synergy of technology and human insight.",
          },
          {
            title: "Global Reach",
            desc: "Expand businesses into new markets with confidence.",
          },
          {
            title: "Innovate Constantly",
            desc: "Stay ahead of trends and drive smarter campaigns.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-purple-100 text-sm md:text-base leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
