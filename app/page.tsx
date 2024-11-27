"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/FadeInSection";
import { AutoCarousel } from "@/components/ui/auto-carousel";
import { BadgeCheck, Banknote, Building2, Calculator, Star, Quote, ChevronDown, Users, Timer, TrendingUp } from "lucide-react";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const loanTypes = [
  {
    title: "Nano-Lending:",
    description: "Quick access to funds for your personal needs",
    icon: Banknote,
  },
  {
    title: "Micro-Lending:",
    description: "Ideal for medium-term personal needs and financial flexibility.",
    icon: Building2,
  },
  {
    title: "Small Business Financing.",
    description: "Small loans to fuel business growth and expansion.",
    icon: BadgeCheck,
  },
  {
    title: "Equipment Financing",
    description: "Get the tools you need to succeed",
    icon: Calculator,
  },
];

const testimonials = [
  {
    name: "Oluwaseun Adebayo",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    content: "CrestBeam's nano-lending service helped me expand my grocery store. The quick approval process and flexible repayment terms made it possible to stock up inventory during peak seasons.",
    rating: 5
  },
  {
    name: "Chidinma Okonkwo",
    role: "Market Trader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    content: "I've tried several lending platforms, but CrestBeam stands out. Their customer service is exceptional, and the loan process is straightforward. They truly understand the needs of small traders.",
    rating: 5
  },
  {
    name: "Ibrahim Musa",
    role: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1970&auto=format&fit=crop",
    content: "The micro-lending option from CrestBeam was instrumental in helping me purchase essential equipment for my startup. Their competitive rates and quick disbursement made all the difference.",
    rating: 5
  },
  {
    name: "Aisha Mohammed",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1970&auto=format&fit=crop",
    content: "CrestBeam's business loan helped me renovate my restaurant during the off-peak season. Their understanding of seasonal business cycles and flexible terms were exactly what I needed.",
    rating: 5
  },
  {
    name: "Emmanuel Okafor",
    role: "Transport Service Provider",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    content: "Thanks to CrestBeam, I was able to expand my transport fleet. Their professional approach and quick processing made the entire experience smooth and stress-free.",
    rating: 5
  },
  {
    name: "Folake Adeleke",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    content: "CrestBeam understood my vision when other lenders didn't. Their micro-lending service helped me purchase industrial sewing machines and expand my workshop.",
    rating: 5
  },
  {
    name: "Yusuf Abdullahi",
    role: "Agricultural Supplier",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    content: "The agricultural sector needs flexible financing, and CrestBeam delivers exactly that. Their understanding of farming cycles and seasonal needs sets them apart.",
    rating: 5
  },
  {
    name: "Grace Obasanjo",
    role: "Beauty Salon Owner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    content: "CrestBeam's support helped me transform my small salon into a full-service beauty center. Their faith in small businesses and supportive approach make them the best choice.",
    rating: 5
  },
  {
    name: "Victor Nnamdi",
    role: "Electronics Retailer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    content: "The efficiency of CrestBeam's loan process is unmatched. Within days, I was able to stock up on new inventory and expand my product range. Their platform is truly revolutionary.",
    rating: 5
  },
  {
    name: "Amina Bello",
    role: "Education Services Provider",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop",
    content: "CrestBeam helped me establish my tutorial center with their education-focused loan package. Their commitment to supporting educational initiatives in Nigeria is commendable.",
    rating: 5
  }
];

const quickFAQs = [
  {
    question: "How quickly can I get my loan?",
    answer: "Our process is instant! Once you apply, you can receive your loan within minutes. No waiting, no paperwork!"
  },
  {
    question: "What documents do I need?",
    answer: "None! Our loans are completely paperwork-free. Just apply online and get instant approval - it's that simple!"
  },
  {
    question: "Is collateral required?",
    answer: "Absolutely not! We offer 100% collateral-free loans. We believe in making loans accessible to everyone without any burden of collateral or paperwork."
  }
];

export default function Home() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const calculateMonthlyPayment = () => {
    const interestRate = 0.15; // 15% annual interest rate
    const monthlyRate = interestRate / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                   (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return Math.round(payment);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative z-10 container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Quick, Collateral-Free Loans
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Get instant approval with zero paperwork. Your financial goals are just a click away!
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Types Carousel */}
      <FadeInSection>
        <section className="py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Our Loan Products</h2>
            <AutoCarousel
              items={loanTypes}
              className="w-full max-w-7xl mx-auto px-4"
              renderItem={(loan, index) => (
                <div className="p-4 h-full flex items-center">
                  <div className="p-8 bg-background rounded-lg shadow-lg h-full w-full">
                    <div className="flex flex-col items-center text-center h-full justify-between">
                      <loan.icon className="w-20 h-20 text-primary mb-6" />
                      <div>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{loan.title}</h3>
                        <p className="text-muted-foreground text-lg md:text-xl">{loan.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </section>
      </FadeInSection>

      {/* Success Metrics Section */}
      <FadeInSection>
        <section className="py-24 bg-primary text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Users className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">20,000+</div>
                <div className="text-lg opacity-90">Happy Customers</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Timer className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">Instant</div>
                <div className="text-lg opacity-90">Loan Approval</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">₦5B+</div>
                <div className="text-lg opacity-90">Loans Disbursed</div>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Features Section with Images */}
      <FadeInSection>
        <section className="py-24">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Why Choose CrestBeam?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quick Process */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2071&auto=format&fit=crop"
                    alt="Quick Loan Process"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Instant Approval</h3>
                <p className="text-muted-foreground">
                  Get your loan approved instantly. No waiting periods, no paperwork - just quick access to funds when you need them.
                </p>
              </div>

              {/* No Collateral */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2070&auto=format&fit=crop"
                    alt="No Collateral"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">100% Collateral-Free</h3>
                <p className="text-muted-foreground">
                  No collateral required. We trust in your potential and offer loans without any security deposits.
                </p>
              </div>

              {/* Zero Paperwork */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
                    alt="Zero Paperwork"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Zero Paperwork</h3>
                <p className="text-muted-foreground">
                  Say goodbye to endless forms and documentation. Our digital process is completely paperwork-free.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Loan Calculator Section */}
      <FadeInSection>
        <section className="py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Calculate Your Loan</h2>
            <div className="max-w-3xl mx-auto bg-background rounded-lg shadow-lg p-8">
              <div className="space-y-8">
                <div>
                  <label className="block text-lg mb-2">Loan Amount: ₦{loanAmount.toLocaleString()}</label>
                  <input
                    type="range"
                    min="50000"
                    max="5000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-lg mb-2">Loan Term: {loanTerm} months</label>
                  <input
                    type="range"
                    min="3"
                    max="24"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="bg-primary/5 rounded-lg p-6 text-center">
                  <div className="text-lg mb-2">Estimated Monthly Payment</div>
                  <div className="text-4xl font-bold text-primary">
                    ₦{calculateMonthlyPayment().toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    *This is an estimate. Actual rates may vary.
                  </div>
                </div>
                <div className="text-center">
                  <Button size="lg">
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials Section */}
      <FadeInSection>
        <section className="py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
            <AutoCarousel
              items={testimonials}
              className="w-full max-w-7xl mx-auto px-4"
              renderItem={(testimonial, index) => (
                <div className="p-4 h-full flex items-center">
                  <div className="p-8 bg-background rounded-lg shadow-lg h-full w-full">
                    <div className="flex flex-col items-center text-center h-full justify-between space-y-6">
                      <Quote className="w-12 h-12 text-primary opacity-50" />
                      <p className="text-muted-foreground text-lg md:text-xl italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </section>
      </FadeInSection>

      {/* Quick FAQs Section */}
      <FadeInSection>
        <section className="py-24">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {quickFAQs.map((faq, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform",
                        activeQuestion === index ? "transform rotate-180" : ""
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {activeQuestion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 text-muted-foreground border-t">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link href="/faq">View All FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Join thousands of satisfied customers who trust CrestBeam for their financial needs.
            </p>
            <Button size="lg" variant="secondary">
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>
        </section>
      </FadeInSection>

    </div>
  );
}