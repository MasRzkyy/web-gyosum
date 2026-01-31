"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <div ref={ref}>{count}</div>;
}

export default function AboutPage() {
  return (
    <div className="min-h-screen text-md bg-[#F8F4EF]">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-2 mb-4"
          >
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-orange-600 text-base sm:text-lg"
            >
              →
            </motion.span>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-orange-700 uppercase">
              Elite Contractors LLC
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-tight"
          >
            Tentang <span className="text-orange-600">Elite Contractors</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
          >
            Bermula dari integritas dan bertumbuh lewat pengalaman, kami menghadirkan keahlian konstruksi lebih dari 35 tahun di setiap proyek Anda.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              Membangun <span className="text-orange-600">Kepercayaan</span> Lewat Kualitas
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Di Elite Contractors, kami percaya bahwa hasil kerja yang jujur adalah reputasi terbaik. Didirikan 15 tahun lalu oleh Jim — seorang praktisi konstruksi dengan pengalaman lebih dari 35 tahun — kami telah berkembang menjadi tim yang solid dengan 25 personel dan 11 kru aktif. Sejak hari pertama, fokus kami sederhana: hadir tepat waktu, bekerja dengan giat, dan memberikan hasil pengerjaan terbaik.
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Kami bangga menyelesaikan setiap pekerjaan dengan benar — tepat waktu, sesuai anggaran, dan kokoh untuk jangka panjang.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(234,88,12,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-600 text-white text-sm sm:text-base font-bold rounded-full hover:bg-orange-700 transition flex items-center gap-2"
            >
              Pelajari Selengkapnya <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, scale: 1, clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/asset/hero.jpg"
              alt="Elite Contractors Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-12">
            {[
              { number: 400, label: "Proyek Selesai", suffix: "+" },
              { number: 15, label: "Tahun Pengalaman", suffix: "+" },
              { number: 98, label: "Kepuasan Pelanggan", suffix: "%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <div className="flex items-start justify-center gap-1 mb-3">
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-orange-600 leading-none">
                    <CountUp end={stat.number} />
                  </span>
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-600 leading-none mt-1">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-2 mb-6"
          >
            <span className="text-orange-600 text-lg sm:text-xl">⭐</span>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-orange-700 uppercase">
              Nilai Inti Kami
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-center text-[#1A1A1A]"
          >
            Apa Yang Kami <span className="text-orange-600">Pegang Teguh</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-center text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4"
          >
            Kami menjaga segala hal tetap sederhana, jujur, dan berfokus pada apa yang paling berarti bagi Anda.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-14">
            {[
              { icon: CheckCircle, title: 'Komunikasi Transparan', desc: 'Kami memberikan pembaruan rutin di setiap tahap pengerjaan agar Anda merasa tenang.' },
              { icon: TrendingUp, title: 'Harga Jujur', desc: 'Penawaran harga yang adil dan transparan tanpa ada biaya tambahan tak terduga.' },
              { icon: Shield, title: 'Kokoh & Tahan Lama', desc: 'Metode konstruksi kuat dan material pilihan demi ketahanan maksimal.' },
              { icon: Users, title: 'Menghargai Hunian Anda', desc: 'Bekerja secara rapi, aman, dan menjaga kebersihan hunian layaknya milik sendiri.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4"
                  >
                    <Icon className="text-orange-600 w-6 h-6 sm:w-8 sm:h-8" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A]">{item.title}</h3>
                  <p className="mt-2 text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-20 md:py-24 bg-linear-to-r from-orange-500 to-orange-600 text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
          >
            Siap Memulai Proyek Anda?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg opacity-90"
          >
            Mari wujudkan visi Anda menjadi kenyataan dengan kualitas dan dedikasi yang dapat Anda andalkan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-orange-600 text-sm sm:text-base font-bold rounded-full hover:bg-gray-100 transition"
            >
              Dapatkan Penawaran
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white text-sm sm:text-base font-bold rounded-full hover:bg-white/10 transition"
            >
              Hubungi Kami
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}