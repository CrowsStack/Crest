"use client";

import { FadeInSection } from "@/components/FadeInSection";
import { AutoCarousel } from "@/components/ui/auto-carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeatureCarousel from "@/components/ui/feature-carousel";
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
      {/* Hero Section */}
      <FadeInSection>
        <section className="py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold mb-6">
                Our Financial Products
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover our range of instant, collateral-free loan products designed to meet your needs
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Feature Carousel Section */}
      <FadeInSection>
        <FeatureCarousel />
      </FadeInSection>

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
        <section className="py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Additional Services</h2>
            <AutoCarousel
              items={services}
              className="w-full max-w-7xl mx-auto px-4"
              renderItem={(service, index) => (
                <div className="p-4 h-full flex items-center">
                  <div className="p-8 bg-background rounded-lg shadow-lg h-full w-full">
                    <div className="flex flex-col items-center text-center h-full justify-between">
                      <service.icon className="w-20 h-20 text-primary mb-6" />
                      <div>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-muted-foreground text-lg md:text-xl">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
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