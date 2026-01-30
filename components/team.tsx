"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Jim Anderson",
      role: "Pendiri & Kepala Konstruksi",
      img: "/asset/data3.jpg",
    },
    {
      name: "Mike Torres",
      role: "Manajer Proyek",
      img: "/asset/data3.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Konsultan Desain",
      img: "/asset/data3.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Users className="text-orange-600" size={20} />
            <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">
              Tim Kami
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
            Kenali <span className="text-orange-600">Para Ahli Kami</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Profesional berpengalaman yang berdedikasi mewujudkan visi Anda menjadi kenyataan
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>

              {/* Info */}
              <motion.div
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
              >
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-orange-400 text-sm mt-1">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}