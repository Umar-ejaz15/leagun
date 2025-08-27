import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
      className={cn(
        'group border border-white/10 rounded-xl bg-gradient-to-br from-white/5 to-transparent',
        'backdrop-blur-md transition-all duration-300',
        isOpen ? 'shadow-lg shadow-blue-800/20' : 'hover:shadow-md hover:shadow-purple-800/20'
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={cn(
            'text-left text-base font-medium',
            'bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 to-gray-800',
            isOpen && 'from-purple-800 to-pink-800'
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className={cn(
            'shrink-0 rounded-full p-1 bg-gradient-to-r from-blue-800 to-purple-800 text-white',
            'transition-transform'
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.25, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: 'easeInOut' },
                opacity: { duration: 0.25 },
              },
            }}
          >
            <div className="border-t border-white/10 px-6 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="text-gray-800 text-sm leading-relaxed"
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
   {
  question: 'Is my data secure on your platform?',
  answer:
    'Yes, we prioritize security with end-to-end encryption and GDPR compliance. Your business data and lead information are fully protected at all times.',
},
{
  question: 'How accurate are the AI-generated leads?',
  answer:
    'Our AI uses advanced machine learning models and real-time data validation to ensure over 90% accuracy in lead qualification, reducing wasted time and effort.',
},
{
  question: 'What pricing plans do you offer?',
  answer:
    'We offer flexible pricing starting from a free trial to premium plans designed for scaling businesses. Check out our pricing page for details.',
},
{
  question: 'Do you provide real-time lead updates?',
  answer:
    'Yes! Our platform delivers real-time updates whenever new leads are generated or qualified, ensuring your sales team always works with the latest data.',
},
{
  question: 'Can I integrate your tool with email automation systems?',
  answer:
    'Absolutely! We integrate seamlessly with tools like Mailchimp, ActiveCampaign, and more to help you automate your outreach.',
},
{
  question: 'How do you ensure high ROI for businesses?',
  answer:
    'Our AI minimizes guesswork by identifying high-intent leads, reducing acquisition costs and improving conversion rates significantly.',
},
{
  question: 'Do you provide analytics and reporting?',
  answer:
    'Yes! You’ll get detailed analytics on lead performance, conversion rates, and campaign ROI through an easy-to-use dashboard.',
},
{
  question: 'Can I target leads by specific industries and locations?',
  answer:
    'Yes! Our platform allows granular targeting by location, industry, company size, and even decision-maker roles for precise campaigns.',
},
{
  question: 'What level of customer support do you offer?',
  answer:
    'We provide 24/7 customer support via live chat, email, and dedicated account managers for premium users.',
},
{
  question: 'Do you offer a free trial or demo?',
  answer:
    'Yes, you can start with a free trial to explore our features and experience how our AI can supercharge your lead generation.',
},

  ];

  return (
    <section className="relative w-full overflow-hidden py-20 bg-white">
      {/* Decorative gradient glows */}
      <div className="absolute top-20 -left-32 h-72 w-72 rounded-full bg-blue-800/20 blur-3xl" />
      <div className="absolute bottom-20 -right-32 h-72 w-72 rounded-full bg-purple-800/20 blur-3xl" />
      
      <div className="relative container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <Badge
            variant="outline"
            className="border border-purple-400/50 text-purple-300 mb-4 px-4 py-1 text-xs font-semibold tracking-widest uppercase"
          >
            FAQs
          </Badge>
          <h2 className="bg-gradient-to-r from-blue-400 via-purple-800 to-pink-800 bg-clip-text text-4xl font-extrabold text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Everything you need to know about MVPBlocks
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

        {/* Support Call-To-Action */}
       
      </div>
    </section>
  );
}
