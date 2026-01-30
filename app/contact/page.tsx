"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock, Instagram, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
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
            Get in <span className="text-orange-600">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 px-4"
          >
            Siap untuk memulai proyek Anda? Kami di sini untuk mendengarkan, memberi saran, dan memberikan hasil nyata — dengan integritas, di setiap langkah.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column: Contact Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6 sm:mb-8"
            >
              Mari Bangun Sesuatu yang <span className="text-orange-600">Luar Biasa</span> Bersama
            </motion.h2>

            <div className="space-y-5 sm:space-y-6">
              {[
                { icon: Phone, title: "Telepon Kami", info: "(913) 297-3000", href: "tel:+19132973000" },
                { icon: Mail, title: "Email Kami", info: "elitecontractor66@gmail.com", href: "mailto:elitecontractor66@gmail.com" },
                { icon: MapPin, title: "Kunjungi Kami", info: "18495 South Ridgeview Road\nOlathe, KS, USA", href: "#" },
                { icon: Clock, title: "Jam Operasional", info: "Senin – Jumat: 07.00 – 18.00\nSabtu: 08.00 – 16.00\nMinggu: Tutup", href: "#" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors"
                    >
                      <Icon className="text-orange-600 w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-[#1A1A1A]">{item.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm whitespace-pre-line">{item.info}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 sm:mt-10 flex gap-3 sm:gap-4"
            >
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">Kirim Pesan</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              Isi formulir di bawah ini dan kami akan menghubungi Anda kembali dalam waktu 24 jam.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {[
                { label: "Nama", type: "text", placeholder: "Nama lengkap Anda", name: "name" },
                { label: "Email", type: "email", placeholder: "email.anda@contoh.com", name: "email" },
                { label: "Telepon", type: "tel", placeholder: "(913) 297-3000", name: "phone" },
              ].map((field, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#ea580c" }}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Jenis Proyek
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02, borderColor: "#ea580c" }}
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Pilih layanan</option>
                  <option value="renovation">Renovasi Rumah</option>
                  <option value="new-build">Konstruksi Baru</option>
                  <option value="kitchen">Renovasi Dapur</option>
                  <option value="bathroom">Renovasi Kamar Mandi</option>
                  <option value="other">Lainnya</option>
                </motion.select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02, borderColor: "#ea580c" }}
                  rows={5}
                  placeholder="Ceritakan tentang proyek Anda..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(234,88,12,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-600 text-white font-bold py-3 sm:py-4 rounded-lg hover:bg-orange-700 transition text-sm sm:text-base lg:text-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Kirim Pesan
              </motion.button>
            </form>

            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500 text-center">
              Kami menanggapi semua pertanyaan dalam waktu 24 jam. Untuk keadaan darurat, silakan hubungi kami langsung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1A1A1A] mb-6 sm:mb-8">
            Temukan Kami di Peta
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-64 sm:h-80 md:h-96 bg-gray-200 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/asset/map-placeholder.jpg"
              alt="Office Location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center p-4">
              <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-center max-w-sm">
                <MapPin className="mx-auto mb-2 text-orange-600 w-6 h-6 sm:w-8 sm:h-8" />
                <p className="font-bold text-sm sm:text-base text-[#1A1A1A]">123 Builder's Way, Springfield, IL</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Google Maps integration available on live site</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

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
            Jangan tunda lagi — mari wujudkan visi Anda menjadi kenyataan dengan kualitas yang dapat Anda andalkan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            <motion.a
              href="tel:+19132973000"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-orange-600 text-sm sm:text-base font-bold rounded-full hover:bg-gray-100 transition text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Telepon Sekarang
            </motion.a>
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white text-sm sm:text-base font-bold rounded-full hover:bg-white/10 transition text-center flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              Dapatkan Estimasi Gratis
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}