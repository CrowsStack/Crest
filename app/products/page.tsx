"use client";

import { FadeInSection } from "@/components/FadeInSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BadgeCheck,
  Banknote,
  Building2,
  Calculator,
  CheckCircle2,
  CreditCard,
  Home,
  Landmark,
  ShieldCheck,
  Tractor,
} from "lucide-react";

const products = [
  {
    id: "NANO",
    title: "Nano-Lending",
    description: "Quick access to funds for your personal needs",
    features: [
      "Loans up to ₦50,000",
      "Competitive interest rates",
      "Flexible repayment terms",
      "Quick approval process",
    ],
    icon: Banknote,
  },
  {
    id: "MICRO",
    title: "Micro-Lending",
    description: "Grow your business with flexible financing options",
    features: [
      "Loans up to ₦200,000",
      "Tailored repayment plans",
      "No collateral required for small loans",
      "Business advisory services",
    ],
    icon: Building2,
  },
  /*{
    id: "mortgage",
    title: "Mortgage Loans",
    description: "Make your dream home a reality",
    features: [
      "Up to 25 years tenure",
      "Competitive interest rates",
      "Flexible down payment options",
      "Property advisory services",
    ],
    icon: Home,
  },
  {
    id: "equipment",
    title: "Equipment Financing",
    description: "Get the tools you need to succeed",
    features: [
      "100% equipment financing",
      "Flexible terms up to 5 years",
      "Quick approval process",
      "Competitive rates",
    ],
    icon: Tractor,
  },
  {
    id: "sme",
    title: "SME Loans",
    description: "Specialized financing for small and medium enterprises",
    features: [
      "Working capital loans",
      "Asset financing",
      "Trade finance",
      "Business expansion loans",
    ],
    icon: Landmark,
  },*/
];

const services = [
  {
    title: "Financial Advisory",
    description: "Expert guidance for your financial decisions",
    icon: Calculator,
  },
  {
    title: "Business Planning",
    description: "Professional help with business strategy",
    icon: Building2,
  },
  {
    title: "Credit Building",
    description: "Build and improve your credit score",
    icon: CreditCard,
  },
  {
    title: "Risk Assessment",
    description: "Comprehensive risk analysis services",
    icon: ShieldCheck,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <FadeInSection key={product.id}>
                <div className="bg-background rounded-lg shadow-lg p-6 h-full">
                  <product.icon className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <FadeInSection>
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto px-4"
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 bg-background rounded-lg shadow-lg h-full">
                      <service.icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
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

      {/* Process Section */}
      <FadeInSection>
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Loan Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
                <p className="text-muted-foreground">
                  Complete our simple online application form
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Document Submission</h3>
                <p className="text-muted-foreground">
                  Upload required documents
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Verification</h3>
                <p className="text-muted-foreground">
                  Quick verification of your application
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Disbursement</h3>
                <p className="text-muted-foreground">
                  Receive funds in your account
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}