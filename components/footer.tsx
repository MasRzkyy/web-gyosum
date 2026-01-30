"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useFadeIn } from '@/hooks/useScrollAnimation';

export default function Footer() {
  const footerRef = useFadeIn(0);

  return (
    <footer ref={footerRef} className="bg-black text-white pt-15 pb-8">
      {/* Header Footer */}
      <div className="container mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo & Company Info */}
          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            {/* Mock Logo SVG */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-32 h-24 relative"
            >
              <svg
                viewBox="0 0 100 50"
                className="w-full h-full fill-orange-500 stroke-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="5" width="90" height="40" rx="5" strokeWidth="2" />
                <path d="M20,25 L80,25 M40,15 L60,35 M60,15 L40,35" strokeWidth="2" />
                <text x="50" y="40" textAnchor="middle" fontSize="10" fontWeight="bold">ELITE CONTRACTORS LLC</text>
              </svg>
            </motion.div>
            <div className="text-sm leading-relaxed max-w-md">
              <p className="text-orange-400 font-semibold mb-2">Elite Contractors LLC</p>
              <p>
                Dengan 15 tahun beroperasi dan total pengalaman industri lebih dari 35 tahun, tim kami menawarkan layanan pembangunan dan perbaikan hunian yang handal dan terpercaya.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Links */}
      <div className="container mx-auto px-6 mb-10 border-t border-gray-700 pt-8">
        <h3 className="text-orange-400 text-sm uppercase font-semibold mb-6">Layanan Kami</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            { name: 'Konstruksi Rangka', href: '/services/framing' },
            { name: 'Pemasangan Siding', href: '/services/siding' },
            { name: 'Dek Kustom', href: '/services/decks' },
            { name: 'Renovasi Rumah', href: '/services/remodeling' },
            { name: 'Serambi & Teras', href: '/services/porches' }
          ].map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="hover:text-orange-400 transition-colors">
                {service.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h4 className="text-orange-400 text-sm uppercase font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { name: 'Beranda', href: '/' },
                { name: 'Tentang Kami', href: '/about' },
                { name: 'Galeri', href: '/gallery' },
                { name: 'Hubungi Kami', href: '/contact' }
              ].map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-orange-400 text-sm uppercase font-semibold mb-4 flex items-center gap-2">
              <MapPin size={16} /> Alamat
            </h4>
            <p className="mb-2">18495 South Ridgeview Road, Olathe, KS, USA</p>
            <Link href="#" className="text-orange-400 hover:underline text-sm">
              Lihat di Peta →
            </Link>
            <div className="mt-6">
              <h4 className="text-orange-400 text-sm uppercase font-semibold mb-4">Social</h4>
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link href="#" aria-label="Facebook" className="text-white hover:text-orange-400">
                    <Facebook size={24} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                  <Link href="#" aria-label="Instagram" className="text-white hover:text-orange-400">
                    <Instagram size={24} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Phone & Email */}
          <div>
            <h4 className="text-orange-400 text-sm uppercase font-semibold mb-4 flex items-center gap-2">
              <Phone size={16} /> Phone
            </h4>
            <motion.a
              href="tel:9132973000"
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold mb-4 block hover:text-orange-400 transition-colors"
            >
              (913) 297-3000
            </motion.a>
            <h4 className="text-orange-400 text-sm uppercase font-semibold mb-4 flex items-center gap-2">
              <Mail size={16} /> Email
            </h4>
            <motion.a
              href="mailto:elitecontractor66@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="text-lg mb-4 block hover:text-orange-400 transition-colors"
            >
              elitecontractor66@gmail.com
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 border-t border-gray-700 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Elite Contractors LLC. Hak cipta dilindungi undang-undang.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-orange-400">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-orange-400">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-orange-400">Pengaturan Cookie</Link>
          </div>
          <p className="text-gray-400">
            Web Design & Digital Marketing with ❤️ by{' '}
            <Link href="#" className="text-orange-400 hover:underline">Dotcom Design</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}