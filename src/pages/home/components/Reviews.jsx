import React from "react";
import { Star } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";
import TopShape from "@/components/TopShape";
import BottomShape from "@/components/BottomShape";

const reviews = [
  {
    name: "John Doe",
    role: "Plumber",
    text: "This AI lead generation system skyrocketed my business! High-quality local leads every week.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sarah Smith",
    role: "Electrician",
    text: "The combination of AI + human expertise is genius. My client calls increased 3x!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Mike Johnson",
    role: "HVAC Contractor",
    text: "Finally, a service that actually understands our industry. Highly recommended!",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Emma Wilson",
    role: "Roofer",
    text: "Simple, clear, and extremely effective. Leads are now consistent and targeted.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

const Reviews = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 blur-3xl opacity-20 -z-10">
        <TopShape />
        <BottomShape />
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-md">
          What Our{" "}
          <Highlighter action="underline" color="purple">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400">
              Clients
            </span>
          </Highlighter>{" "}
          Say
        </h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Real feedback from service businesses using our AI + human-powered lead generation system.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-6xl mx-auto">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-purple-200 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-purple-700">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-base mb-4 leading-relaxed">
              “{review.text}”
            </p>

            {/* Rating */}
            <div className="flex gap-1">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <Star key={idx} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
