import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "group border border-gray-200 rounded-2xl bg-white transition-all duration-300",
        isOpen
          ? "shadow-lg"
          : "hover:shadow-md"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4"
      >
        <h3
          className={cn(
            "text-left text-lg sm:text-xl font-medium text-gray-900",
            isOpen && "text-purple-600"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0 rounded-full p-1 bg-gray-100 text-gray-600 transition-transform"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { height: { duration: 0.4 }, opacity: { duration: 0.3, delay: 0.05 } },
            }}
            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } } }}
          >
            <div className="border-t text-left border-gray-100 px-5 py-3">
              <motion.p
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-700 text-sm sm:text-md leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq3() {
  const faqs = [
    { question: "Is my data secure on your platform?", answer: "Yes, we prioritize security with end-to-end encryption and GDPR compliance." },
    { question: "How accurate are the AI-generated leads?", answer: "Over 90% accuracy using advanced ML and real-time validation." },
    { question: "What pricing plans do you offer?", answer: "Flexible plans from free trials to premium for scaling businesses." },
    { question: "Do you provide real-time lead updates?", answer: "Yes, real-time notifications for all qualified leads." },
    { question: "Can I integrate your tool with email automation?", answer: "Absolutely! Integrates with Mailchimp, ActiveCampaign, and more." },
  ];

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-">
      <div className="relative mx-auto max-w-3xl text-center">
        <Badge
          variant="outline"
          className="border border-gray-300 text-purple-500 mb-4 px-4 py-1 text-lg sm:text-xl font-semibold tracking-widest uppercase"
        >
          FAQs
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-sm sm:text-md">
          Everything you need to know about LeadGun
        </p>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
