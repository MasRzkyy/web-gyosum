"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Renovasi Dapur Modern",
      location: "Jakarta, Indonesia",
      img: "/asset/data3.jpg",
    },
    {
      id: 2,
      title: "Dek Halaman Belakang Kustom",
      location: "Surabaya, Indonesia",
      img: "/asset/data3.jpg",
    },
    {
      id: 3,
      title: "Penambahan Serambi Depan",
      location: "Bandung, Indonesia",
      img: "/asset/data3.jpg",
    },
    {
      id: 4,
      title: "Renovasi Kamar Mandi",
      location: "Medan, Indonesia",
      img: "/asset/data3.jpg",
    },
    {
      id: 5,
      title: "Konstruksi Rangka Rumah Baru",
      location: "Semarang, Indonesia",
      img: "/asset/data3.jpg",
    },
    {
      id: 6,
      title: "Pemasangan Siding Eksterior",
      location: "Yogyakarta, Indonesia",
      img: "/asset/data3.jpg",
    },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4EF] text-white">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs sm:text-sm text-orange-400 mb-3"
          >
            <span className="w-4 h-4 rounded-full bg-orange-400 flex items-center justify-center text-black text-[10px]">
              <ImageIcon size={12} />
            </span>
            <span className="tracking-wider font-medium">HASIL KERJA KAMI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500"
          >
            GALERI PROYEK
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed"
          >
            Lihat proyek nyata yang telah kami selesaikan — mulai dari konstruksi rangka dan siding hingga dek, serambi, dan renovasi total. Setiap detail dikerjakan dengan penuh ketelitian.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 sm:px-6 md:px-16 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImage(index)}
              className="relative group overflow-hidden rounded-xl shadow-lg border border-[#2a2a2a] hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 md:h-80 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">{item.location}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-2 text-xs sm:text-sm text-orange-400 hover:text-orange-300 transition"
                >
                  Lihat Proyek →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-colors z-10"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-2 sm:left-4 text-white bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-4 text-white bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
                <Image
                  src={galleryItems[selectedImage].img}
                  alt={galleryItems[selectedImage].title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-4 text-white px-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{galleryItems[selectedImage].title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mt-2">{galleryItems[selectedImage].location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 bg-[#F8F4EF]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4"
          >
            Ingin Lihat Lebih Banyak?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 px-4"
          >
            Jelajahi seluruh portofolio proyek kami yang telah selesai — mulai dari pembaruan kecil hingga transformasi hunian secara total.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(234,88,12,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-orange-500 transition"
          >
            Lihat Semua Proyek
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}