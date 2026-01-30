"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan proyek biasanya?",
      answer:
        "Waktu pengerjaan bervariasi sesuai lingkup proyek. Pembangunan dek mungkin memakan waktu 1-2 minggu, sementara renovasi total bisa 4-8 minggu. Kami akan memberikan jadwal yang jelas sejak awal.",
    },
    {
      question: "Apakah ada biaya untuk estimasi/survei lokasi?",
      answer:
        "Gratis! Kami menawarkan estimasi tanpa kewajiban apa pun. Kami akan mengunjungi lokasi Anda, mendiskusikan kebutuhan Anda, dan memberikan penawaran rinci.",
    },
    {
      question: "Apakah layanan Anda berlisensi dan bergaransi?",
      answer:
        "Tentu saja. Kami memiliki lisensi penuh dan jaminan asuransi untuk melindungi Anda serta properti Anda selama pengerjaan proyek berlangsung.",
    },
    {
      question: "Area mana saja yang Anda layani?",
      answer:
        "Kami melayani area operasional kami dan sekitarnya. Hubungi kami untuk memastikan lokasi Anda termasuk dalam jangkauan layanan kami.",
    },
    {
      question: "Apakah ada garansi untuk hasil pengerjaan?",
      answer:
        "Ya, kami menjamin kualitas pengerjaan kami dengan garansi komprehensif. Syarat dan ketentuan bergantung pada jenis proyek dan material yang digunakan.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <HelpCircle className="text-orange-600" size={20} />
            <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">
              FAQ
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
            Pertanyaan yang <span className="text-orange-600">Sering Diajukan</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-orange-50 transition-colors"
              >
                <span className="font-semibold text-[#1A1A1A] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="text-orange-600" size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}