"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeInSection } from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "What types of loans do you offer?",
    subtitles: [
      { id: 1, title: "Collateral-Free Loans" },
      { id: 2, title: "Nano and Micro-Lending Expertise" },
      { id: 3, title: "Competitive Interest Rates" },
      { id: 4, title: "Flexible Loan Durations" },
      { id: 5, title: "Fast Approval and Disbursement" },
      { id: 6, title: "Customer-Centric Services" }
    ],
    //answer: "We offer a variety of loans including personal loans, business loans, mortgage loans, and equipment financing. Each loan type is designed to meet specific needs with flexible terms and competitive rates."
  },
  {
    question: "Who Can Apply?",
    subtitles: [
      { id: 1, title: "Salaried employees in Nigeria." },
      { id: 2, title: "Small business owners looking for capital to grow their ventures." },
    ],
    //answer: "We offer a variety of loans including personal loans, business loans, mortgage loans, and equipment financing. Each loan type is designed to meet specific needs with flexible terms and competitive rates."
  },
  {
    question: "How long does the loan approval process take?",
    answer: "Most loan applications are processed within 24-48 hours. However, the actual time may vary depending on the loan type and the completeness of your application."
  },
  {
    question: "What documents do I need to apply?",
    answer: "Generally, you'll need valid ID, proof of income (pay slips or bank statements), utility bill for address verification, and employment details. Additional documents may be required based on the loan type."
  },
  {
    question: "What are your interest rates?",
    answer: "Our interest rates are competitive and vary based on the loan type, amount, and term. Contact our team for current rates and personalized quotes."
  },
  {
    question: "How can I repay my loan?",
    answer: "We offer multiple repayment options including direct debit, bank transfer, and online payments. You can choose the method that's most convenient for you."
  },
  {
    question: "Is there a penalty for early repayment?",
    answer: "We encourage responsible financial management and generally do not charge penalties for early repayment. However, terms may vary by loan type."
  },
  {
    question: "Can I apply if I have a bad credit score?",
    answer: "While we consider credit scores in our assessment, we evaluate each application holistically. We may still be able to help with alternative loan products or credit-building options."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our loan products and services
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
               <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
        {faq.question}
      </AccordionTrigger>
      
      <AccordionContent className="text-muted-foreground">
        {/* Use optional chaining and provide a fallback to an empty array */}
        {(faq.subtitles || []).map((subtitle) => (
          <h4 key={subtitle.id} className="">
            <li>{subtitle.title}</li>
          </h4>
        ))}
        {/* Display the answer */}
        <p>{faq.answer}</p>
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}