import React from "react";
import Buttonrgb from "@/components/Buttonrgb";

const Final = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white py-20 px-6 md:px-12 overflow-hidden ">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),transparent_70%)] pointer-events-none"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Ready to Get More Local Leads & Grow Your Business?
        </h2>
        <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
          Let’s put your business on the map. Start your journey with AI-powered
          local SEO today.
        </p>
        <div className="flex flex-col  sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 rounded-xl bg-black text-white0 font-semibold shadow-lg hover:bg-purple-600 transition"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-xl bg-white text-purple-700 font-semibold shadow-lg hover:bg-purple-100 transition"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Final;
