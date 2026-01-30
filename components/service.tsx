"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hammer, ArrowRight } from "lucide-react";
import { useFadeIn } from "@/hooks/useScrollAnimation";

export default function ServicesSection() {
  const sectionRef = useFadeIn(0);

  const services = [
    {
      title: "Konstruksi Rangka",
      desc: "Membangun rangka kayu sebagai penopang utama hunian Anda, menjamin kekokohan dinding dan atap dengan presisi tinggi.",
      img: "/asset/data2.jpg",
    },
    {
      title: "Pemasangan Siding",
      desc: "Melindungi rumah Anda dari cuaca sekaligus memberikan tampilan eksterior yang bersih dan elegan.",
      img: "/asset/data2.jpg",
    },
    {
      title: "Dek Kustom",
      desc: "Menciptakan ruang luar impian untuk bersantai dan berkumpul bersama keluarga dengan desain dek yang fungsional.",
      img: "/asset/data3.jpg",
    },
    {
      title: "Renovasi Rumah",
      desc: "Pengerjaan interior mulai dari dapur hingga kamar mandi untuk meningkatkan kenyamanan dan nilai estetika rumah Anda.",
      img: "/asset/data3.jpg",
    },
    {
      title: "Serambi & Teras",
      desc: "Menambah pesona dan fungsi pada hunian Anda dengan area santai yang menyatu dengan alam.",
      img: "/asset/data3.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#0E0E0E] text-white py-20 px-6 md:px-16">
      {/* Top Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 text-sm text-orange-400 mb-3"
      >
        <span className="w-4 h-4 rounded-full bg-orange-400 flex items-center justify-center text-black text-[10px]">
          <Hammer size={12} />
        </span>
        <span className="tracking-wider font-medium">APA YANG KAMI LAKUKAN</span>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold text-orange-500"
      >
        LAYANAN KAMI
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 mt-4 max-w-2xl leading-relaxed"
      >
        Kami menangani berbagai proyek hunian,{" "}
        <span className="text-orange-400">mulai dari rangka dan siding</span>
        {" "}hingga{" "}
        <span className="text-orange-400">
          dek, teras, dan renovasi total
        </span>{" "}
        — dikerjakan dengan telaten hingga tuntas.
      </motion.p>

      {/* ROW 1 — 2 items */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {services.slice(0, 2).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative bg-[#1A1A1A] rounded-xl overflow-hidden shadow-md border border-[#2a2a2a] group"
          >
            {/* IMAGE */}
            <div className="relative h-100 w-full aspect-[3/3.6]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-sm text-orange-400 hover:text-orange-300 transition flex items-center gap-1"
                >
                  Selengkapnya <ArrowRight size={16} />
                </motion.button>
              </div>

              <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ROW 2 — 3 items */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {services.slice(2, 5).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index + 2) * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative bg-[#1A1A1A] rounded-xl overflow-hidden shadow-md border border-[#2a2a2a] group"
          >
            {/* IMAGE */}
            <div className="relative h-72 w-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-sm text-orange-400 hover:text-orange-300 transition flex items-center gap-1"
                >
                  Selengkapnya <ArrowRight size={16} />
                </motion.button>
              </div>

              <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Lihat Semua Layanan
        </motion.button>
      </div>
    </section>
  );
}
