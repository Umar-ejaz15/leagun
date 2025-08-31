import React from "react";
import { Users, Globe, DollarSign, Briefcase } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import BottomShape from "@/components/BottomShape";
import TopShape from "@/components/TopShape";

const Milestones = () => {
  const milestones = [
    {
      year: "2020",
      title: "Founded",
      desc: "Started with 3 people and one bold idea to revolutionize lead generation.",
      icon: <Users className="w-8 h-8 " />,
    },
    {
      year: "2021",
      title: "First 100 Clients",
      desc: "Refined our AI systems and earned trust from businesses worldwide.",
      icon: <Briefcase className="w-8 h-8 " />,
    },
    {
      year: "2022",
      title: "Global Expansion",
      desc: "Launched AI-powered campaigns across 30+ countries.",
      icon: <Globe className="w-8 h-8 " />,
    },
    {
      year: "2023",
      title: "$12M+ Revenue",
      desc: "Achieved predictable results and became a global SaaS leader.",
      icon: <DollarSign className="w-8 h-8 " />,
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 bg-purple-50 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 opacity-10 blur-xl">
        <TopShape />
        <BottomShape />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-md">
          Our{" "}
          <Highlighter action="underline" color="purple">
            <span className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-md">Milestones</span>
          </Highlighter>
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mt-4">
          A visual timeline of key achievements that showcase our growth, impact, and global presence.
        </p>
      </div>

      {/* Milestones Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 max-w-6xl mx-auto">
        {milestones.map((item, i) => (
          <div
            key={i}
            className="relative bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
              {item.icon}
            </div>
            <span className="text-purple-700 font-bold text-lg">{item.year}</span>
            <h3 className="text-xl font-extrabold text-gray-900 mt-2 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;
