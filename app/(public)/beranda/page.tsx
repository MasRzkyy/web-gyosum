"use client";

import BenefitsSection from "@/components/benefit";
import FAQSection from "@/components/faq";
import ServicesSection from "@/components/service";
import TeamSection from "@/components/team";
import TestimonialsPage from "@/components/testimonial";
import Scene3D from "@/components/Scene3D";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, User } from "lucide-react";

export default function BerandaPage() {
  return (
    <div className="w-full min-h-screen font-poppins">
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center pt-20"
        style={{ backgroundImage: "url('/asset/hero.jpg')" }}
      >
        {/* 3D Background */}
        <Scene3D />

        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 z-10 h-full">
          <div className="grid md:grid-cols-[2fr_1fr] gap-5 h-full py-20 md:py-24">
            {/* LEFT TEXT */}
            <div className="flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="uppercase text-xs sm:text-sm tracking-widest text-white/80 flex items-center gap-2"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Perusahaan Konstruksi Terpercaya</span>
                <span className="sm:hidden">Kontraktor Profesional</span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#B74219] drop-shadow-md mt-4"
              >
                WUJUDKAN RENCANA <br /> JADI NYATA
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm sm:text-base text-white mt-4 max-w-md drop-shadow"
              >
                Dari konsep awal hingga bangunan jadi, kami mewujudkan rencana Anda menjadi hasil yang kokoh — dengan komunikasi transparan, harga jujur, dan kualitas yang bisa Anda andalkan.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6"
              >
                <motion.a
                  href="tel:9132973000"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black/80 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Telp: (913) 297-3000</span>
                  <span className="sm:hidden">Telepon</span>
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(231,106,50,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#E76A32] hover:bg-[#cf5b2b] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  Konsultasi Gratis
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
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

      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-orange-600 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.svg
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 0.3, rotate: 360 }}
            viewport={{ once: true }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48"
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
          </motion.svg>

          <motion.svg
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 0.3, rotate: -360 }}
            viewport={{ once: true }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 transform rotate-180"
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
          </motion.svg>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4"
          >
            WUJUDKAN BANGUNAN IMPIAN ANDA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            Mari wujudkan rencana Anda menjadi nyata — hubungi kami hari ini untuk memulai proyek bersama tim yang dapat Anda andalkan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-orange-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                Mulai Konsultasi
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
