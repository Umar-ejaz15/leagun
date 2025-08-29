import BottomShape from "@/components/BottomShape";
import Buttonrgb from "@/components/Buttonrgb";
import { Highlighter } from "@/components/magicui/highlighter";
import TopShape from "@/components/TopShape";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const About = () => {
  // Chart Data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Leads Generated",
        data: [120, 180, 240, 310, 400, 500],
        borderColor: "#8b5cf6", // Purple
        backgroundColor: "rgba(139, 92, 246, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "#6b7280" }, // Gray-600
      },
      y: {
        ticks: { color: "#6b7280" },
        grid: { color: "#e5e7eb" },
      },
    },
  };

  return (
    <section className="relative px-6 py-16 sm:py-20 lg:px-0 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Shapes */}
      <div className="absolute blur-xl inset-0 -z-10 opacity-10">
        <TopShape />
        <BottomShape />
      </div>

      {/* Heading */}
      <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-sm mb-12 max-w-3xl mx-auto leading-snug">
        Your{" "}
        <Highlighter action="underline" color="purple">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
            Growth Engine
          </span>
        </Highlighter>{" "}
        for Leads & Revenue
      </h1>

      {/* Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-y-12 lg:grid-cols-2 lg:items-center lg:gap-x-16">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
            AI + Human Intelligence
          </p>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
            At <span className="font-semibold text-purple-700">LeaGun</span>, we
            help businesses scale faster by combining AI-driven strategies with
            human expertise. From generating high-quality leads to automating
            workflows, our AI-powered SaaS solutions keep your pipeline full and
            predictable.
          </p>

          {/* Bullet Points */}
          <ul className="mt-8 space-y-5 text-gray-700">
            {[
              {
                title: "AI-Powered Lead Generation.",
                desc: "Predictable, qualified leads on autopilot.",
              },
              {
                title: "Fully Integrated CRM.",
                desc: "Automate follow-ups, track performance, and close deals faster.",
              },
              {
                title: "Done-for-You Campaigns.",
                desc: "We run ads, nurture leads, and set appointments for you.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                  ✔
                </div>
                <span>
                  <strong className="font-semibold text-gray-900">
                    {item.title}
                  </strong>{" "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
            Growth isn’t a guessing game anymore. It’s a predictable system that
            works for you. Let us help you dominate your niche with AI.
          </p>
        </div>

        {/* Right Graph */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg h-80 bg-white rounded-2xl shadow-lg border border-purple-100 p-6  transition-all duration-300">
            <Line data={data} options={options} />
          
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 max-w-5xl mx-auto text-center bg-white/60 backdrop-blur-xl rounded-2xl shadow-md px-8 py-14 border border-purple-100">
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400 font-extrabold mb-4">
          Want to learn more about how we can help you?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Schedule a free consultation call and explore how our strategies can
          bring more customers to your business without the guesswork.
        </p>
        <Buttonrgb
          txt="Schedule My Free Call →"
          className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500 
               hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 
               text-white shadow-md hover:shadow-xl transition-all duration-300 px-8 py-4 rounded-full text-base font-semibold"
        />
      </div>
    </section>
  );
};

export default About;
