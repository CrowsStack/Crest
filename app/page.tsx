"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/FadeInSection";
import { AutoCarousel } from "@/components/ui/auto-carousel";
import { BadgeCheck, Banknote, Building2, Calculator, Star, Quote, ChevronDown, Users, Timer, TrendingUp } from "lucide-react";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Head from 'next/head';

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
    image: "https://images.unsplash.com/photo-1500648767791-dfedbc827105?q=80&w=1974&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf21cfd?q=80&w=1974&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1489424731084-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop",
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
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [shouldStartAuto, setShouldStartAuto] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  // Handle automatic sliding
  useEffect(() => {
    const slideInterval = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteraction;
      
      if (timeSinceLastInteraction >= 2000 && !isSwiping) {
        setDirection(1);
        setCurrentIndex((current) => getNextIndex(1));
        setIsPaused(false);
      }
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [lastInteraction, isSwiping]);

  const getNextIndex = (step: number) => {
    const nextIndex = currentIndex + step;
    if (nextIndex < 0) return testimonials.length - 1;
    if (nextIndex >= testimonials.length) return 0;
    return nextIndex;
  };

  const handleSwipe = (info: any) => {
    setIsSwiping(true);
    if (Math.abs(info.offset.x) > 100) {
      const direction = info.offset.x > 0 ? -1 : 1;
      setDirection(direction);
      setCurrentIndex(current => getNextIndex(direction));
      setLastInteraction(Date.now());
    }
    setTimeout(() => setIsSwiping(false), 100);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setLastInteraction(Date.now());
  };

  const calculateMonthlyPayment = () => {
    const interestRate = 0.15; // 15% annual interest rate
    const monthlyRate = interestRate / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                   (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return Math.round(payment);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>CrestBeam</title>
      </Head>
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
            <motion.div 
              className="w-full bg-muted/30 py-16 rounded-2xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="container mx-auto px-4">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[700px] relative"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => handleSwipe(info)}
                  onDragStart={() => setIsSwiping(true)}
                  onClick={() => {
                    setLastInteraction(Date.now());
                    setIsPaused(true);
                  }}
                  whileTap={{ cursor: "grabbing" }}
                >
                  {/* Mobile Swipe Indicator - Only visible initially */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 0.5 }}
                    className="absolute inset-x-0 top-4 flex flex-col items-center gap-1 md:hidden pointer-events-none"
                  >
                    <div className="flex items-center gap-2">
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        animate={{ x: [-3, 3, -3] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <path d="m9 18 6-6-6-6"/>
                      </motion.svg>
                      <span className="text-sm text-muted-foreground">
                        Slide to explore
                      </span>
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        animate={{ x: [-3, 3, -3] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <path d="m15 18-6-6 6-6"/>
                      </motion.svg>
                    </div>
                  </motion.div>

                  {/* Image Column */}
                  <motion.div 
                    className="relative h-[600px] bg-gradient-to-b from-primary/10 to-primary/5 rounded-2xl overflow-hidden order-2 md:order-1"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => handleSwipe(info)}
                    onDragStart={() => setIsSwiping(true)}
                    whileTap={{ cursor: "grabbing" }}
                  >
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        initial={{ 
                          opacity: 0,
                          x: direction * 100,
                          scale: 0.95
                        }}
                        animate={{ 
                          opacity: 1,
                          x: 0,
                          scale: 1
                        }}
                        exit={{ 
                          opacity: 0,
                          x: direction * -100,
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
                        <div className="w-full h-full relative">
                          <Image
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            fill
                            className="object-cover md:rounded-2xl rounded-full"
                            priority
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  {/* Text Column */}
                  <div className="relative min-h-[600px] flex flex-col justify-center order-1 md:order-2 px-6">
                    {/* Previous Text Preview */}
                    <div className="mb-12 opacity-50 transition-opacity duration-300">
                      <p className="text-muted-foreground text-lg">
                        {testimonials[getNextIndex(-1)].name}
                      </p>
                    </div>

                    {/* Current Text */}
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        initial={{ 
                          opacity: 0,
                          x: direction * 75,
                          scale: 0.98
                        }}
                        animate={{ 
                          opacity: 1,
                          x: 0,
                          scale: 1
                        }}
                        exit={{ 
                          opacity: 0,
                          x: direction * -75,
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
                        <Quote className="w-12 h-12 text-primary opacity-50 mb-6" />
                        <p className="text-2xl font-medium mb-8 leading-relaxed">
                          "{testimonials[currentIndex].content}"
                        </p>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold">{testimonials[currentIndex].name}</h3>
                          <p className="text-muted-foreground text-lg">{testimonials[currentIndex].role}</p>
                          <div className="flex items-center gap-1">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Next Text Preview */}
                    <div className="opacity-50 transition-opacity duration-300">
                      <p className="text-muted-foreground text-lg">
                        {testimonials[getNextIndex(1)].name}
                      </p>
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleDotClick(index)}
                          className="group p-2"
                          aria-label={`Go to slide ${index + 1}`}
                        >
                          <div className="relative">
                            {/* Active dot background */}
                            {index === currentIndex && (
                              <motion.div 
                                layoutId="activeDot"
                                className="absolute inset-0 -m-1 rounded-full bg-primary/20"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            )}
                            {/* Dot */}
                            <div 
                              className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                index === currentIndex 
                                  ? "bg-primary scale-100" 
                                  : "bg-primary/30 scale-75 group-hover:scale-100 group-hover:bg-primary/50"
                              )}
                            />
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Auto-play Indicator */}
                    <div 
                      className={cn(
                        "absolute top-0 left-0 right-0 h-1 bg-primary/10 overflow-hidden transition-opacity duration-300",
                        isPaused || !shouldStartAuto ? "opacity-0" : "opacity-100"
                      )}
                    >
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ scaleX: 0, transformOrigin: "left" }}
                        animate={{ scaleX: shouldStartAuto ? 1 : 0 }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
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