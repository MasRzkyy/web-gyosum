"use client";

import BenefitsSection from "@/components/benefit";
import FAQSection from "@/components/faq";
import ServicesSection from "@/components/service";
import TeamSection from "@/components/team";
import TestimonialsPage from "@/components/testimonial";
import Link from "next/link";
// import Image from "next/image";

export default function BerandaPage() {
  return (
    <div className="w-full min-h-screen font-poppins">
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/asset/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 z-10 h-full">
          <div className="grid md:grid-cols-[2fr_1fr] gap-5 h-full pt-32 pt-20 md:pt-24">
            {/* LEFT TEXT */}
            <div className="flex flex-col justify-center">
              <p className="uppercase text-sm tracking-widest text-white/80">
                <i className="ri-user-3-line mr-2 text-xl"></i>
                Construction Company
              </p>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#B74219] drop-shadow-md">
                WHERE PLANS <br /> BECOME PROJECTS
              </h1>

              <p className="text-white mt-4 max-w-md drop-shadow">
                From first idea to final build, we turn your plans into solid
                results — with clear communication, fair pricing, and work you
                can count on.
              </p>

              <div className="flex gap-4 mt-6">
                <button className="bg-black/80 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md">
                  Call (913) 297-3000
                </button>

                <button className="bg-[#E76A32] hover:bg-[#cf5b2b] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md">
                  Contact Us
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <ServicesSection />
      {/* Team */}
      <TeamSection />
      {/* Benefit */}
      <BenefitsSection />
      {/* Testimonials */}
      <TestimonialsPage />
      {/* FAQ */}
      <FAQSection />

      <section className="bg-orange-600 text-white py-16 px-4 md:px-12 relative overflow-hidden -mb-0">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/*锯齿形装饰 - kiri atas */}
          <svg
            className="absolute top-0 left-0 w-48 h-48 opacity-30"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            <path
              d="M0,0 L100,100 M0,50 L50,100 M50,0 L100,50"
              stroke="white"
              strokeWidth="4"
            />
          </svg>

          {/*锯齿形装饰 - kanan bawah */}
          <svg
            className="absolute bottom-0 right-0 w-64 h-64 opacity-30 transform rotate-180"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            <path
              d="M0,0 L100,100 M0,50 L50,100 M50,0 L100,50"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            WHERE PLANS BECOME PROJECTS
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let’s bring your plans to life—reach out today to start your project
            with a team you can trust.
          </p>
          <Link
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
