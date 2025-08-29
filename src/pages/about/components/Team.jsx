import React from "react";
import { Highlighter } from "@/components/magicui/highlighter";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Umar Ejaz", role: "Frontend & Backend Developer", img: "/pic.png" },
  { name: "Usaid Hassan", role: "UI/UX Designer", img: "/pic.png" },
  { name: "Ali Zafar", role: "Backend Developer", img: "/pic.png" },
  { name: "Okasha", role: "Flutter Developer", img: "/pic.png" },
  { name: "Sarah Khan", role: "Marketing Specialist", img: "/pic.png" },
  { name: "John Doe", role: "AI Researcher", img: "/pic.png" },
  // Add as many as you want
];

const Team = () => {
  return (
    <section className="relative py-24 px-6 h-auto bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight mb-6">
          Meet Our{" "}
          <Highlighter action="underline" color="white">
            Team
          </Highlighter>
        </h2>
        <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
          The brilliant minds behind our AI-powered growth engine.
        </p>
      </div>

      {/* Horizontal Scrollable Team */}
      <div className="relative team-scroll z-10 h-auto flex gap-2 overflow-y-hidden  overflow-x-auto snap-x snap-mandatory px-6  sm:px-12 py-4">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-80 sm:w-96 bg-white/10 backdrop-blur-xl rounded-md p-8 text-center h-auto border border-purple-300 shadow-xl hover:border hover:border-purple-600 transition-all duration-300 snap-start"
          >
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/30 mb-6">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
            <p className="text-purple-100 text-lg leading-relaxed">
              {member.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
