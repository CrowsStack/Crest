"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Application Process",
    questions: [
      {
        id: "ap1",
        q: "How do I apply for a loan?",
        a: "Simply click the 'Apply Now' button on our website and fill out the quick online form. Our process is 100% digital and instant!"
      },
      {
        id: "ap2",
        q: "How long does it take to get approved?",
        a: "Our approval process is instant! Once you submit your application, you'll receive an immediate decision."
      },
      {
        id: "ap3",
        q: "Do I need to provide any documents?",
        a: "No! Our loans are completely paperwork-free. Just fill out the online application - that's all we need!"
      },
      {
        id: "ap4",
        q: "Is collateral required for the loan?",
        a: "Absolutely not! We offer 100% collateral-free loans. No security deposits or assets needed."
      }
    ]
  },
  {
    category: "Loan Details",
    questions: [
      {
        id: "ld1",
        q: "What loan amounts are available?",
        a: "We offer flexible loan amounts ranging from ₦50,000 to ₦5,000,000, instantly available upon approval."
      },
      {
        id: "ld2",
        q: "What are the loan terms?",
        a: "Choose from flexible repayment periods of 3 to 24 months. Select what works best for you!"
      },
      {
        id: "ld3",
        q: "How quickly can I get the money?",
        a: "Funds are disbursed instantly after approval. You'll receive the money in your account right away!"
      },
      {
        id: "ld4",
        q: "Can I pay back my loan early?",
        a: "Yes! You can repay your loan early at any time with no additional fees."
      }
    ]
  },
  {
    category: "Eligibility",
    questions: [
      {
        id: "el1",
        q: "Who can apply for a loan?",
        a: "Any Nigerian resident aged 18 and above can apply for our loans. Our instant approval process makes it accessible to everyone!"
      },
      {
        id: "el2",
        q: "Do I need to have a certain income level?",
        a: "Our loans are designed to be accessible to everyone. Apply now to check your instant eligibility!"
      },
      {
        id: "el3",
        q: "Can I apply if I have other loans?",
        a: "Yes, you can apply! Each application is evaluated instantly based on our simple digital criteria."
      },
      {
        id: "el4",
        q: "Do I need a bank account?",
        a: "Yes, you'll need a Nigerian bank account for loan disbursement. That's all you need - no paperwork, no collateral!"
      }
    ]
  },
  {
    category: "Support",
    questions: [
      {
        id: "sp1",
        q: "How can I contact customer support?",
        a: "Our customer support team is available 24/7 through our website chat, email, or phone. We're here to help!"
      },
      {
        id: "sp2",
        q: "What if I have trouble with my application?",
        a: "Our process is super simple, but if you need help, our support team is available instantly to assist you."
      },
      {
        id: "sp3",
        q: "Can I modify my loan after approval?",
        a: "Yes! Contact our support team for instant assistance with any modifications you need."
      },
      {
        id: "sp4",
        q: "Is my information secure?",
        a: "Absolutely! We use bank-grade encryption to protect your information. Your security is our priority."
      }
    ]
  }
];

function FAQAccordion({ questions }: { questions: typeof faqs[0]['questions'] }) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-2">
      {questions.map((faq) => (
        <div key={faq.id} className="border-b border-gray-200">
          <button
            className="w-full py-4 flex justify-between items-center text-left"
            onClick={() => toggleItem(faq.id)}
          >
            <span className="font-medium text-lg">{faq.q}</span>
            <ChevronDown
              className={`transform transition-transform duration-200 ${
                openItems.includes(faq.id) ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {openItems.includes(faq.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="pb-4 text-gray-600">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState(faqs[0].category);
  const currentCategory = faqs.find((cat) => cat.category === selectedCategory);

  return (
    <div className="min-h-screen py-16 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground text-center mb-8">
          Get instant answers about our collateral-free, paperwork-free loans
        </p>

        {/* Category Selector */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {faqs.map((category) => (
            <button
              key={category.category}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category.category
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        {currentCategory && <FAQAccordion questions={currentCategory.questions} />}
      </div>
    </div>
  );
}