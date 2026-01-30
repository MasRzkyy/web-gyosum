"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: "Siska Pratama",
      role: "Pemilik Rumah",
      text: "Tim ini mengubah dapur lama kami menjadi maha karya modern. Detail pengerjaan dan profesionalisme mereka benar-benar melampaui ekspektasi kami!",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      role: "Manajer Properti",
      text: "Kami telah bekerja sama untuk beberapa properti. Mereka sangat handal, efisien, dan kualitas hasil kerjanya selalu konsisten luar biasa.",
      rating: 5,
    },
    {
      name: "Larasati Putri",
      role: "Pemilik Rumah",
      text: "Dek baru kami sangat indah! Tim bekerja profesional, rapi, dan selesai tepat waktu sesuai jadwal. Sangat direkomendasikan!",
      rating: 5,
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="w-full bg-linear-to-br from-orange-600 to-orange-500 text-white py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Quote className="mx-auto mb-4" size={48} />
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Apa Kata Klien Kami
          </h2>
          <p className="mt-4 text-orange-100 max-w-2xl mx-auto">
            Dengarkan langsung dari para pemilik rumah yang telah memercayakan proyek mereka kepada keahlian kami
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative h-80 flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-yellow-300 text-2xl"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <p className="text-lg md:text-xl text-center mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="text-center">
                  <p className="font-bold text-xl">{testimonials[currentIndex].name}</p>
                  <p className="text-orange-100">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}