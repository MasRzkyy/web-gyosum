"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";

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

export default function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Kualitas Terbaik",
      desc: "Setiap proyek dikerjakan dengan detail untuk ketahanan jangka panjang",
    },
    {
      icon: TrendingUp,
      title: "Harga Kompetitif",
      desc: "Transparansi biaya tanpa ada biaya tambahan tersembunyi",
    },
    {
      icon: Shield,
      title: "Berlisensi & Terjamin",
      desc: "Sertifikasi lengkap untuk keamanan dan kenyamanan Anda",
    },
    {
      icon: Clock,
      title: "Pengerjaan Tepat Waktu",
      desc: "Komitmen pengerjaan selesai sesuai jadwal yang disepakati",
    },
  ];

  const stats = [
    { number: 400, label: "Proyek Selesai", suffix: "+" },
    { number: 15, label: "Tahun Pengalaman", suffix: "+" },
    { number: 98, label: "Kepuasan Pelanggan", suffix: "%" },
  ];

  return (
    <section className="w-full bg-[#F8F4EF] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
            Mengapa Memilih <span className="text-orange-600">Kami</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Rasakan pengerjaan kualitas terbaik dari tenaga profesional berpengalaman
          </p>
        </motion.div>

        {/* Stats - Horizontal Layout (No White Container) */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-12">
            {stats.map((stat, index) => (
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

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4"
                >
                  <Icon className="text-orange-600 w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
