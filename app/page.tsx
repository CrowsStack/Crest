"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/FadeInSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BadgeCheck, Banknote, Building2, Calculator } from "lucide-react";

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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80">
          <Image
            src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2940&auto=format&fit=crop"
            alt="Hero background"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Financial Growth Partner
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Access quick and flexible loans to achieve your goals. Whether it's personal,
            business, or mortgage loans, we've got you covered.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Loan Types Carousel */}
      <FadeInSection>
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Loan Products</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto px-4"
            >
              <CarouselContent>
                {loanTypes.map((loan, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 bg-background rounded-lg shadow-lg h-full">
                      <loan.icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{loan.title}</h3>
                      <p className="text-muted-foreground">{loan.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </FadeInSection>

      {/* Features Section */}
      <FadeInSection>
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 shadow-lg rounded-3xl gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collateral-Free Loans</h3>
                <p className="text-muted-foreground">
                We believe in making loans accessible without the burden of collateral. Your goals
                matter, and we’re here to support you every step of the way.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Interest Rates</h3>
                <p className="text-muted-foreground">
                  Enjoy some of the best interest rates in the market. We prioritize
                  affordability to help you achieve financial stability without unnecessary strain.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Loan Durations</h3>
                <p className="text-muted-foreground">
                Our repayment terms are designed with your convenience in mind. Whether short-term or
medium-term, we provide options that suit your financial situation and goals.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Approval And Disbursement</h3>
                <p className="text-muted-foreground">
                We know time is of the essence, so our application process is quick and straightforward,
                ensuring funds are disbursed within 24 to 48 hours after approval.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer-Centric Services</h3>
                <p className="text-muted-foreground">
                At Crestbeam Nigeria, we place our customers at the heart of everything we do. Our
dedicated team is always available to answer your questions and guide you through the
loan process.
                </p>
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
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards your financial goals today. Our team is ready
              to help you find the perfect loan solution.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}