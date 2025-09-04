import React from "react";
import Buttonrgb from "@/components/Buttonrgb";
import { Highlighter } from "@/components/magicui/highlighter";
import { Mail } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative lg:px-0 overflow-hidden bg-gradient-to-tl from-purple-200 via-white to-purple-200"
      aria-labelledby="about-heading"
    >
      {/* Heading */}
      <div className="text-center py-8">
        <h1
          id="about-heading"
          className="text-xl md:text-2xl font-bold text-gray-800 mb-2 tracking-tight"
        >
          About
        </h1>
        <Highlighter action="underline" color="purple">
          <h2 className="text-2xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-sm max-w-4xl mx-auto leading-snug">
            Leagun Technologies
          </h2>
        </Highlighter>
      </div>

      {/* Company Info */}
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6 mb-12">
        <p className="text-gray-900 sm:text-lg md:text-xl leading-relaxed">
          <strong>Leagun Technologies</strong>, formerly Soft Stone Technologies, has been pushing boundaries for 3 years. We’ve tested a lot, failed a lot, and figured out what actually works. That’s how our <strong>Sales Growth Engine</strong> was born — not theory, but real strategies tested in the field.
        </p>
        <p className="text-gray-800 sm:text-lg md:text-xl leading-relaxed">
          Founded by <strong>Zain Noor</strong>, we focus on helping local businesses across the <strong>USA and Canada</strong> grow their sales. From HVAC companies to remodelers, dental clinics, med spas, electricians, and more, we partner with small and mid-sized businesses that want predictable, repeatable revenue.
        </p>
        <p className="text-gray-900 sm:text-lg md:text-xl leading-relaxed">
          Our mission is simple: to make sure local businesses don’t just <strong>survive</strong>, but <strong>grow</strong>, with systems that deliver visibility, leads, and consistent sales.
        </p>
      </div>

      {/* Leadership Section */}
      <section className="bg-white/70 backdrop-blur-md rounded-lg mb-5 shadow-lg py-10 px-6 md:px-12 max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <Highlighter action="underline" color="purple">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400">
              Leadership
            </h2>
          </Highlighter>
        </header>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1 space-y-5">
            <h3 className="text-2xl md:text-3xl underline font-bold text-gray-900">Zain Noor</h3>
            <p className="text-purple-700 font-semibold text-lg md:text-xl">
              Founder, Leagun Technologies | Sales Growth Specialist
            </p>
            <p className="text-gray-700 sm:text-lg md:text-xl">
              Zain has spent <strong>5+ years</strong> selling in some of the toughest markets — USA, UK, and UAE — working with global companies and leading Mid-Market sales at the multi-billion-dollar <strong>Motive Technologies</strong>.
            </p>
            <p className="text-gray-700 sm:text-lg md:text-xl">
              His edge? Taking messy, underperforming pipelines and turning them into <strong>predictable sales engines</strong>. Not theory, not fluff, just systems proven to win more deals, generate repeatable revenue, and actually <strong>grow businesses</strong>.
            </p>

            {/* Contact */}
            <div className="mt-6 flex flex-col items-start gap-2">
              <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600" /> Contact Me
              </h4>
              <a
                href="mailto:workwithzain@yahoo.com"
                className="text-purple-600 font-semibold text-lg underline hover:text-purple-800 transition"
              >
                workwithzain@yahoo.com
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <figure className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src="/pic.jpg"
              alt="Zain Noor, Founder of Leagun Technologies"
              className="rounded-2xl shadow-xl border-4 border-purple-200 transition-transform hover:scale-105 duration-500"
            />
          </figure>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center bg-gradient-to-r from-purple-50 to-white backdrop-blur-xl rounded-2xl shadow-lg px-2 py-12 border border-purple-100">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400 mb-4">
            Ready to Scale with Us?
          </h2>
          <p className="text-gray-700 sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Let’s build a predictable system for your sales growth. Book a free consultation with Zain and discover how <strong>Leagun Technologies</strong> can help your business thrive.
          </p>
          <Buttonrgb
            txt="Book My Free Consultation"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500 hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 text-white shadow-md hover:shadow-xl transition-all duration-300 px-10 py-5 rounded-full text-lg font-semibold"
          />
        </div>
      </section>
    </section>
  );
};

export default About;
