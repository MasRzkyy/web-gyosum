"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openServices, setOpenServices] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceItems = [
    { name: "Framing", href: "/services/framing" },
    { name: "Siding", href: "/services/siding" },
    { name: "Decks", href: "/services/decks" },
    { name: "Remodeling", href: "/services/remodeling" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full  bg-transparent backdrop-blur-md shadow-sm pt-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 ">
          <Image
            src="/asset/logo1.png"
            width={80}
            height={80}
            alt="Logo"
            className="  object-contain "
          />
        </Link>
      
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-800">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-[#C05A2B] ${
                pathname === item.href ? "text-[#C05A2B]" : "text-gray-800"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Dropdown Services */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            <div
              className={`flex items-center gap-1 hover:text-[#C05A2B] ${
                pathname.startsWith("/services")
                  ? "text-[#C05A2B]"
                  : "text-gray-800"
              }`}
            >
              Our Services
              <ChevronDown size={16} />
            </div>

            {openServices && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-lg py-3 w-44 z-40 border">
                {serviceItems.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      pathname === service.href
                        ? "text-[#C05A2B]"
                        : "text-gray-800"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Call Button */}
        <div className="hidden md:block">
          <a
            href="tel:9132973000"
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
