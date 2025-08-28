import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import TopShape from "@/components/TopShape";
import BottomShape from "@/components/BottomShape";

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-lg shadow-sm hover:shadow-md transition-all duration-300`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={`text-left font-semibold text-gray-900 text-lg md:text-xl transition-colors ${
            isOpen ? "text-purple-600" : "hover:text-purple-500"
          }`}
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 rounded-full p-2 bg-purple-50 text-purple-600"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="border-t border-purple-100 bg-purple-50/50 px-6 py-4 rounded-b-2xl">
              <p className="text-gray-700 text-base leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const faqs = [
    { question: "Is my data secure on your platform?", answer: "Yes, we prioritize security with end-to-end encryption and GDPR compliance." },
    { question: "How accurate are the AI-generated leads?", answer: "Over 90% accuracy using advanced ML and real-time validation." },
    { question: "What pricing plans do you offer?", answer: "Flexible plans from free trials to premium for scaling businesses." },
    { question: "Do you provide real-time lead updates?", answer: "Yes, real-time notifications for all qualified leads." },
    { question: "Can I integrate your tool with email automation?", answer: "Absolutely! Integrates with Mailchimp, ActiveCampaign, and more." },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 blur-3xl opacity-20 -z-10">
        <TopShape />
        <BottomShape />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <Badge
          variant="outline"
          className="border border-purple-300 bg-purple-50 text-purple-700 px-4 py-1 mb-4 text-sm font-semibold tracking-wide"
        >
          FAQs
        </Badge>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Everything you need to know about LeadGun
        </p>

        <dl className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </dl>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
