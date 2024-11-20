"use client";

import Image from "next/image";
import { FadeInSection } from "@/components/FadeInSection";
import { Users2, Target, Award, TrendingUp } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80">
          <div
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CrestBeam</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Leading the way in innovative financial solutions for Nigerians
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <FadeInSection>
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">About Us</h2>
                <p className="text-gray-700 leading-relaxed">
                      Welcome to Crestbeam Nigeria, your trusted micro-lending partner. Established in 2020, we are dedicated to empowering working-class individuals and small business owners by providing quick and easy access to collateral-free loans.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Specializing in both nano and micro-lending, we offer flexible, collateral-free loans tailored to the needs of individuals and small business owners across Nigeria. Whether you require a small loan to cover urgent personal expenses or a larger loan to grow your business, we provide reliable and affordable financial solutions.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our loans range from as little as ₦3,000 to ₦200,000, ensuring we cater to both small, immediate financial needs and more substantial funding requirements.
                    </p>
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground">
                To provide financial inclusion and empower individuals and small businesses in Nigeria by
                offering accessible, affordable, and reliable micro-lending solutions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p className="text-muted-foreground">
                To be the leading micro-lending institution in Nigeria, recognized for transforming lives and
                helping businesses grow.
                </p>

              </div>
            </div>
            
          </div>
          
        </section>
      </FadeInSection>

      {/* Values */}
      <FadeInSection>
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-background rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  Our customers' success is our success.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously innovate to provide better solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* History */}
      <FadeInSection>
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-semibold mb-2">2020 - Foundation</h3>
                  <p className="text-muted-foreground">
                    Established with a vision to transform Nigeria's lending landscape.
                  </p>
                </div>
                <div className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-semibold mb-2">2024 - Digital Innovation</h3>
                  <p className="text-muted-foreground">
                    Launched our digital platform for seamless applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
