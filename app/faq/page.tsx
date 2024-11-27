"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from 'next/image';

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

// Category-specific feature items
const categoryFeatures = {
  "Application Process": [
    {
      id: 1,
      image: "/images/features/register.svg",
      title: "Quick Registration",
      description: "Create your account in minutes with just your basic information. No paperwork needed!"
    },
    {
      id: 2,
      image: "/images/features/verify.svg",
      title: "Simple Verification",
      description: "Verify your identity digitally through our secure system. Fast and hassle-free!"
    },
    {
      id: 3,
      image: "/images/features/apply.svg",
      title: "Easy Application",
      description: "Select your desired loan amount and term. No collateral required!"
    },
    {
      id: 4,
      image: "/images/features/instant.svg",
      title: "Instant Approval",
      description: "Get instant approval and receive your loan amount directly in your bank account."
    }
  ],
  "Loan Details": [
    {
      id: 1,
      image: "/images/features/amount.svg",
      title: "Flexible Amounts",
      description: "Choose loan amounts from ₦50,000 to ₦5,000,000 based on your needs."
    },
    {
      id: 2,
      image: "/images/features/terms.svg",
      title: "Flexible Terms",
      description: "Select repayment periods from 3 to 24 months that suit your budget."
    },
    {
      id: 3,
      image: "/images/features/disbursement.svg",
      title: "Instant Disbursement",
      description: "Receive your loan amount instantly in your bank account after approval."
    },
    {
      id: 4,
      image: "/images/features/repayment.svg",
      title: "Easy Repayment",
      description: "Make repayments easily through our multiple payment options."
    }
  ],
  "Eligibility": [
    {
      id: 1,
      image: "/images/features/eligible.svg",
      title: "Simple Eligibility",
      description: "Basic requirements: 18+ years, valid ID, and a bank account."
    },
    {
      id: 2,
      image: "/images/features/income.svg",
      title: "Income Flexibility",
      description: "No strict income requirements. We evaluate each case individually."
    },
    {
      id: 3,
      image: "/images/features/credit.svg",
      title: "Credit History",
      description: "No perfect credit score needed. We believe in giving everyone a chance."
    },
    {
      id: 4,
      image: "/images/features/documents.svg",
      title: "Zero Documentation",
      description: "No physical documents needed. Everything is digital and instant!"
    }
  ],
  "Support": [
    {
      id: 1,
      image: "/images/features/support.svg",
      title: "24/7 Support",
      description: "Our dedicated team is available round the clock to assist you."
    },
    {
      id: 2,
      image: "/images/features/chat.svg",
      title: "Live Chat",
      description: "Connect instantly with our support team through live chat."
    },
    {
      id: 3,
      image: "/images/features/help.svg",
      title: "Help Center",
      description: "Access our comprehensive help center for instant solutions."
    },
    {
      id: 4,
      image: "/images/features/secure.svg",
      title: "Secure Service",
      description: "Your data is protected with bank-grade security measures."
    }
  ]
};

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

function FeatureCarousel({ items }: { items: typeof categoryFeatures["Application Process"] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(0);
  const [lastInteraction, setLastInteraction] = useState<number | null>(null);

  useEffect(() => {
    if (!autoplay) return;

    if (lastInteraction) {
      const timeSinceInteraction = Date.now() - lastInteraction;
      if (timeSinceInteraction < 5000) {
        const timeout = setTimeout(() => {
          setCurrentIndex((prevIndex) => 
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
          );
          setDirection(1);
        }, 5000 - timeSinceInteraction);
        return () => clearTimeout(timeout);
      }
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
      setDirection(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, lastInteraction, items.length]);

  const handleDotClick = (index: number) => {
    const distance = index - currentIndex;
    const newDirection = distance > 0 ? 1 : -1;
    
    if (Math.abs(distance) > items.length / 2) {
      setDirection(-newDirection);
    } else {
      setDirection(newDirection);
    }
    
    setCurrentIndex(index);
    setLastInteraction(Date.now());
  };

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
    setLastInteraction(Date.now());
  };

  const getNextIndex = (offset: number) => {
    const nextIndex = currentIndex + offset;
    if (nextIndex >= items.length) return nextIndex - items.length;
    if (nextIndex < 0) return items.length + nextIndex;
    return nextIndex;
  };

  return (
    <div className="w-full bg-muted/30 py-16 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[700px]">
          {/* Image Column - Full width in mobile */}
          <div className="relative h-[600px] bg-gradient-to-b from-primary/10 to-primary/5 rounded-2xl overflow-hidden order-2 md:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ 
                  opacity: 0,
                  y: direction * 100,
                  scale: 0.95
                }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                exit={{ 
                  opacity: 0,
                  y: direction * -100,
                  scale: 0.95
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                  duration: 0.5 
                }}
                className="absolute inset-0 flex items-center justify-center p-12"
              >
                <Image
                  src={items[currentIndex].image}
                  alt={items[currentIndex].title}
                  width={500}
                  height={500}
                  className="object-contain max-h-[500px] w-auto"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text Column */}
          <div className="relative min-h-[600px] flex flex-col justify-center order-1 md:order-2 px-6">
            {/* Previous Text Preview */}
            <div className="mb-12 opacity-50">
              <p className="text-muted-foreground text-lg">
                {items[getNextIndex(-1)].title}
              </p>
            </div>

            {/* Current Text */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ 
                  opacity: 0,
                  y: direction * 75,
                  scale: 0.98
                }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                exit={{ 
                  opacity: 0,
                  y: direction * -75,
                  scale: 0.98
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                  duration: 0.5 
                }}
                className="mb-12"
              >
                <h3 className="text-4xl font-bold mb-6">
                  {items[currentIndex].title}
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {items[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Next Text Preview */}
            <div className="opacity-50">
              <p className="text-muted-foreground text-lg">
                {items[getNextIndex(1)].title}
              </p>
            </div>

            {/* Progress Indicators */}
            <div className="absolute -left-12 h-full flex flex-col justify-between py-8 hidden md:flex">
              {items.map((_, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => handleDotClick(index)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Dot Container */}
                  <div className="relative">
                    {/* Background Circle - Only visible when active */}
                    {index === currentIndex && (
                      <motion.div 
                        layoutId="activeDot"
                        className="w-8 h-8 rounded-full bg-primary scale-110 shadow-lg"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Center Dot */}
                    <div 
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-4 h-4 bg-white shadow-md"
                          : "w-2.5 h-2.5 bg-black/80 hover:bg-black"
                      }`} 
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Progress Indicators */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
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

        {/* Feature Carousel Section */}
        <div className="mb-16">
          {/* Carousel Title - Always at top */}
          <h2 className="text-3xl font-bold text-center mb-8">
            {selectedCategory} Features
          </h2>
          <FeatureCarousel items={categoryFeatures[selectedCategory]} />
        </div>

        {/* FAQ Items */}
        {currentCategory && <FAQAccordion questions={currentCategory.questions} />}
      </div>
    </div>
  );
}