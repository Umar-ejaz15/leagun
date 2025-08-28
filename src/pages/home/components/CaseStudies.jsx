import React from "react";

const caseStudies = [
  {
    title: "Boosted Local SEO for HVAC Company",
    desc: "Increased organic traffic by 150% and generated 200+ new leads in 3 months.",
    img: "https://via.placeholder.com/600x400", // Replace with real image later
    metrics: ["+150% Traffic", "200+ Leads", "Top 3 on Google"],
  },
  {
    title: "Plumbing Business Domination",
    desc: "Ranked #1 for local keywords, increasing revenue by 80% within 90 days.",
    img: "https://via.placeholder.com/600x400",
    metrics: ["#1 Rankings", "+80% Revenue", "50% Lower Ad Spend"],
  },
  {
    title: "Electrical Contractor Growth",
    desc: "Scaled client acquisition with GBP optimization and backlink strategy.",
    img: "https://via.placeholder.com/600x400",
    metrics: ["+120% Calls", "10K Monthly Visits", "High DA Backlinks"],
  },
];

const CaseStudies = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Case Studies That Speak for Themselves
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how we’ve helped service businesses dominate local search and grow revenue.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-transform hover:-translate-y-1"
          >
            <img
              src={caseStudy.img}
              alt={caseStudy.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{caseStudy.desc}</p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
