"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: "/images/features/register.png",
    title: "Quick Registration",
    description: "Create your account in minutes with just your basic information. No paperwork needed!"
  },
  {
    id: 2,
    image: "/images/features/verify.png",
    title: "Simple Verification",
    description: "Verify your identity digitally through our secure system. Fast and hassle-free!"
  },
  {
    id: 3,
    image: "/images/features/apply.png",
    title: "Easy Application",
    description: "Select your desired loan amount and term. No collateral required!"
  },
  {
    id: 4,
    image: "/images/features/instant.png",
    title: "Instant Approval",
    description: "Get instant approval and receive your loan amount directly in your bank account."
  },
  {
    id: 5,
    image: "/images/features/manage.png",
    title: "Manage Your Loan",
    description: "Track your loan, make payments, and manage your account all from our app."
  }
];

export default function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(0);
  const [lastInteraction, setLastInteraction] = useState<number | null>(null);

  useEffect(() => {
    if (!autoplay) return;

    // Check if we need to wait after user interaction
    if (lastInteraction) {
      const timeSinceInteraction = Date.now() - lastInteraction;
      if (timeSinceInteraction < 5000) {
        const timeout = setTimeout(() => {
          setCurrentIndex((prevIndex) => 
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
          );
          setDirection(1);
        }, 5000 - timeSinceInteraction);
        return () => clearTimeout(timeout);
      }
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
      setDirection(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, lastInteraction]);

  const handleDotClick = (index: number) => {
    // Calculate direction based on distance and position
    const distance = index - currentIndex;
    const newDirection = distance > 0 ? 1 : -1;
    
    // For wrapping cases (e.g., going from last to first or vice versa)
    if (Math.abs(distance) > carouselItems.length / 2) {
      setDirection(-newDirection); // Reverse direction for shorter path
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
    if (nextIndex >= carouselItems.length) return nextIndex - carouselItems.length;
    if (nextIndex < 0) return carouselItems.length + nextIndex;
    return nextIndex;
  };

  return (
    <div className="w-full bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[700px]">
          {/* Image Column */}
          <div className="relative h-[600px] bg-gradient-to-b from-primary/10 to-primary/5 rounded-2xl overflow-hidden">
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
                  src={carouselItems[currentIndex].image}
                  alt={carouselItems[currentIndex].title}
                  width={500}
                  height={500}
                  className="object-contain max-h-[550px] w-auto"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text Column */}
          <div className="relative min-h-[600px] flex flex-col justify-center">
            {/* Previous Text Preview */}
            <div className="mb-16 opacity-50">
              <p className="text-muted-foreground text-xl">
                {carouselItems[getNextIndex(-1)].title}
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
                className="mb-16"
              >
                <h3 className="text-5xl font-bold mb-8">
                  {carouselItems[currentIndex].title}
                </h3>
                <p className="text-2xl text-muted-foreground leading-relaxed">
                  {carouselItems[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Next Text Preview */}
            <div className="opacity-50">
              <p className="text-muted-foreground text-xl">
                {carouselItems[getNextIndex(1)].title}
              </p>
            </div>

            {/* Progress Indicators */}
            <div className="absolute -left-12 h-full flex flex-col justify-between py-8">
              {carouselItems.map((_, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}
