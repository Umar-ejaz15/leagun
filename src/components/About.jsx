import Buttonrgb from "@/components/Buttonrgb";
import { Highlighter } from "@/components/magicui/highlighter";
import React from "react";
import { Mail } from "lucide-react";

const About = () => {
  return (
    <section
      className="relative lg:px-0 overflow-hidden bg-gradient-to-tl from-purple-200 via-white md:mt-0 to-purple-200"
      aria-labelledby="about-heading"
    >
      {/* Heading */}
      <header className="text-center py-5">
        <h1
          id="about-heading"
          className="text-[clamp(1.5rem,4vw,3.2rem)] font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-sm mb-5 max-w-4xl mx-auto leading-snug"
        >
          About{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              <b>Leagun Technologies</b>
            </span>
          </Highlighter>
        </h1>
      </header>

      {/* Company Section */}
      <div className="relative px-6 z-10 max-w-6xl mx-auto mb-5 text-center">
        <p className="sm:text-xl md:text-2xl text-gray-900 leading-relaxed">
          <strong>Leagun Technologies</strong>, formerly Soft Stone Technologies, has been pushing boundaries for 3 years. We’ve tested a lot, failed a lot, and figured out what actually works. That’s how our <strong>Sales Growth Engine</strong> was born — not theory, but real strategies tested in the field.
        </p>

        <p className="mt-8 sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
          Founded by <strong>Zain Noor</strong>, we focus on helping local businesses across the <strong>USA and Canada</strong> grow their sales. From HVAC companies to remodelers, dental clinics, med spas, electricians, and more, we partner with small and mid-sized businesses that want predictable, repeatable revenue.
        </p>

        <p className="mt-8 sm:text-xl md:text-2xl text-gray-900 leading-relaxed">
          Our mission is simple: to make sure local businesses don’t just <strong>survive</strong>, but <strong>grow</strong>, with systems that deliver visibility, leads, and consistent sales.
        </p>
      </div>

      {/* Leadership Section */}
      <section
        className="relative px-6 bg-purple-50 py-5 z-10 mx-auto"
        aria-labelledby="leadership-heading"
      >
        <header className="flex justify-center mb-10">
          <Highlighter action="underline" color="purple">
            <h2
              id="leadership-heading"
              className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-center bg-clip-text text-transparent 
                         bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-sm max-w-4xl mx-auto leading-snug"
            >
              Leadership
            </h2>
          </Highlighter>
        </header>

        <div className="grid lg:grid-cols-2 max-w-6xl justify-center mx-auto items-center gap-10">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Zain Noor</h3>
            <p className="text-purple-700 font-semibold text-xl mb-3">
              Founder, Leagun Technologies | Sales Growth Specialist
            </p>

            <p className="text-gray-700 sm:text-lg md:text-xl">
              Zain has spent <strong>5+ years</strong> selling in some of the toughest markets — USA, UK, and UAE — working with global companies and leading Mid-Market sales at the multi-billion-dollar <strong>Motive Technologies</strong>.
            </p>

            <p className="mt-6 text-gray-700 sm:text-lg md:text-xl">
              His edge? Taking messy, underperforming pipelines and turning them into <strong>predictable sales engines</strong>. Not theory, not fluff, just systems proven to win more deals, generate repeatable revenue, and actually <strong>grow businesses</strong>.
            </p>

            {/* Contact Section */}
            <div className="mt-10">
              <h4 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Mail className="w-6 h-6 text-purple-600" /> Contact Me
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
              className="rounded-md w-full md:w-2/4 object-cover border-4 border-purple-200 shadow-lg transition-transform duration-300"
            />
          </figure>
        </div>

        {/* CTA Section */}
        <div className="mt-5 max-w-5xl mx-auto text-center bg-gradient-to-r from-purple-50 to-white 
                        backdrop-blur-xl rounded-2xl shadow-lg px-10 py-12 border border-purple-100">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] bg-clip-text text-transparent bg-gradient-to-r 
                         from-purple-500 via-purple-600 to-purple-400 font-extrabold mb-4">
            Ready to Scale with Us?
          </h2>
          <p className="text-gray-700 sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Let’s build a predictable system for your sales growth. Book a free consultation with Zain and discover how <strong>Leagun Technologies</strong> can help your business thrive.
          </p>
          <Buttonrgb
            txt="Book My Free Consultation →"
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-500 
                       hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 
                       text-white shadow-md hover:shadow-xl hover:shadow-purple-400/40
                       transition-all duration-300 px-10 py-5 rounded-full text-lg font-semibold"
            aria-label="Book your free consultation with Leagun Technologies"
          />
        </div>
      </section>
    </section>
  );
};

export default About;
