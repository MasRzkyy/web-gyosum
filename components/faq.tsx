// app/components/FAQSection.tsx

'use client'; // Penting: karena kita pakai state dan event handler

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of projects do you take on?",
      answer: "We handle a wide range of residential projects including framing, siding, decks, porches, remodeling, and full home builds. We work with homeowners to bring their vision to life."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes, we offer free, no-obligation estimates to help you plan and budget your project. Just reach out and we’ll schedule a time to discuss your needs."
    },
    {
      question: "How long will my project take?",
      answer: "Project timelines vary depending on scope, size, and weather conditions. After reviewing your plans, we’ll provide a detailed timeline with milestones so you know what to expect."
    },
    {
      question: "Can you help with design ideas?",
      answer: "Absolutely! Our team has years of experience and can offer suggestions, recommend materials, and even connect you with designers if needed to refine your vision."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Elite Contractors LLC is fully licensed and insured in Kansas. Your safety and peace of mind are our top priorities."
    },
    {
      question: "How do I get started?",
      answer: "Simply click the 'Contact Us' button below or call us directly. We’ll set up a consultation to discuss your goals, provide an estimate, and outline next steps."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-orange-50 py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Left Column - Title & CTA */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">FAQs</h2>
            <p className="text-gray-600 mb-8">
              Have questions? Here are some common things homeowners ask before starting a project with us.
            </p>
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-colors">
              Contact Us
            </button>
          </div>

          {/* Right Column - Accordion */}
          <div className="md:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 py-3 focus:outline-none"
                >
                  {faq.question}
                  <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 pt-2 pb-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}