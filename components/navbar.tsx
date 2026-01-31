"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [openServices, setOpenServices] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for navbar appearance adjustments
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const serviceItems = [
    { name: "Konstruksi Rangka", href: "/services/framing" },
    { name: "Pemasangan Siding", href: "/services/siding" },
    { name: "Dek Kustom", href: "/services/decks" },
    { name: "Renovasi Rumah", href: "/services/remodeling" },
  ];
  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Galeri", href: "/gallery" },
    { name: "Hubungi Kami", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-2xl transition-all duration-500 ease-out max-w-6xl w-full ${scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-1.5"
          : "bg-white/40 backdrop-blur-md shadow-sm"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 pl-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12">
              <Image
                src="/asset/logo1.png"
                alt="Elite Contractors Logo"
                fill
                priority
                className={`object-contain transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}
              />
            </div>
            <span className="hidden lg:block font-bold text-[#1A1A1A] text-base tracking-tight">
              Elite <span className="text-orange-600">Contractors</span>
            </span>
          </motion.div>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 font-medium text-gray-800">
          {menuItems.map((item, index) => (
            <motion.div key={item.href} className="relative">
              <Link
                href={item.href}
                className={`px-3 py-1.5 rounded-2xl transition-all duration-300 text-xs lg:text-sm hover:bg-black/5 ${pathname === item.href ? "text-orange-600 bg-orange-50/50" : "text-gray-700 font-normal"
                  }`}
              >
                {item.name}
              </Link>
              {pathname === item.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.div>
          ))}

          {/* Dropdown Services */}
          <div
            className="relative"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-1.5 rounded-2xl transition-all duration-300 text-xs lg:text-sm hover:bg-black/5 ${pathname.startsWith("/services") ? "text-orange-600 bg-orange-50/50" : "text-gray-700 font-normal"
                }`}
            >
              Services
              <motion.div animate={{ rotate: openServices ? 180 : 0 }}>
                <ChevronDown size={12} />
              </motion.div>
            </button>

            <AnimatePresence>
              {openServices && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl py-1 w-44 border border-white/20 z-10 overflow-hidden"
                >
                  {serviceItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-2 text-xs transition-colors hover:bg-orange-50 ${pathname === service.href ? "text-orange-600 bg-orange-50 font-semibold" : "text-gray-700"
                        }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <motion.a
            href="tel:9132973000"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 text-white px-4 lg:px-5 py-1.5 rounded-2xl text-xs font-bold shadow-lg shadow-orange-600/20 flex items-center gap-2 transition-transform"
          >
            <Phone size={12} fill="currentColor" />
            <span>Konsultasi Gratis</span>
          </motion.a>
        </div>

        {/* Mobile Menu Trigger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden bg-black/5 p-2 rounded-2xl text-gray-800 hover:bg-black/10 transition-colors"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-0 right-0 mt-3 mx-4 md:hidden bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-60"
            >
              <div className="p-5 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-xl transition-all ${pathname === item.href ? "bg-orange-600 text-white font-bold" : "text-gray-800 hover:bg-black/5"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-black/5">
                  <p className="text-xs font-bold text-gray-500 uppercase px-4 mb-2 tracking-wider">Layanan Kami</p>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-2.5 px-4 rounded-xl text-sm text-gray-700 hover:bg-black/5 transition-all"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="pt-6">
                  <a
                    href="tel:9132973000"
                    className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-orange-600/30"
                  >
                    <Phone size={18} fill="currentColor" />
                    Hubungi Sekarang
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
