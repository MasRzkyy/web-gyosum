// app/components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-15 pb-8">
      {/* Header Footer */}
      <div className="container mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo & Company Info */}
          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            {/* Mock Logo SVG */}
            <div className="w-32 h-24 relative">
              <svg
                viewBox="0 0 100 50"
                className="w-full h-full fill-orange-500 stroke-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="5" width="90" height="40" rx="5" strokeWidth="2" />
                <path d="M20,25 L80,25 M40,15 L60,35 M60,15 L40,35" strokeWidth="2" />
                <text x="50" y="40" textAnchor="middle" fontSize="10" fontWeight="bold">ELITE CONTRACTORS LLC</text>
              </svg>
            </div>
            <div className="text-sm leading-relaxed max-w-md">
              <p className="text-orange-400 font-semibold mb-2">Elite Contractors LLC</p>
              <p>
                With 15 years in business and 35+ years of industry experience, our team offers reliable home building and repair services in and around Olathe, KS, USA.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Links */}
      <div className="container mx-auto px-6 mb-10 border-t border-gray-700 pt-8">
        <h3 className="text-orange-400 text-sm uppercase font-semibold mb-6">Our Services</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {['Framing', 'Siding', 'Custom Decks', 'Remodeling', 'Porches'].map((service) => (
            <Link key={service} href="#" className="hover:text-orange-400 transition-colors">
              {service}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h4 className="text-orange-400 text-sm uppercase font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="hover:text-orange-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-orange-400 text-sm uppercase font-semibold mb-4">Address</h4>
            <p className="mb-2">18495 South Ridgeview Road, Olathe, KS, USA</p>
            <Link href="#" className="text-orange-400 hover:underline text-sm">
              Show on Map →
            </Link>
            <div className="mt-6">
              <h4 className="text-orange-400 text-sm uppercase font-semibold mb-4">Social</h4>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook" className="text-white hover:text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="#" aria-label="Instagram" className="text-white hover:text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.847.07 3.242.148 4.68 1.656 4.847 4.847.058 1.263.069 1.643.069 4.847s-.012 3.584-.069 4.847c-.149 3.242-1.656 4.68-4.847 4.847-1.263.058-1.643.069-4.847.069s-3.584-.012-4.847-.069c-3.242-.149-4.68-1.656-4.847-4.847-.057-1.263-.069-1.643-.069-4.847s.012-3.584.069-4.847c.167-3.191 1.605-4.699 4.847-4.847.127-.005.271-.007.416-.007h1.216c1.367 0 1.605.016 2.428.031zm0 1.775L11.99 2.163h.02c1.316 0 1.544.006 2.268.034 2.404.107 3.574 1.337 3.681 3.681.028.724.034 1.004.034 3.083v.01c0 1.32-.005 1.604-.034 2.328-.107 2.404-1.337 3.574-3.681 3.681-.724.028-1.004.034-3.083.034h-.01c-1.32 0-1.604-.005-2.328-.034-2.404-.107-3.574-1.337-3.681-3.681-.028-.724-.034-1.004-.034-3.083v-.01c0-1.32.005-1.604.034-2.328.107-2.404 1.337-3.574 3.681-3.681.724-.028 1.004-.034 3.083-.034zM12 15.847c-3.224 0-5.847-2.623-5.847-5.847s2.623-5.847 5.847-5.847 5.847 2.623 5.847 5.847-2.623 5.847-5.847 5.847zm0-9.887c-2.255 0-4.09 1.835-4.09 4.09s1.835 4.09 4.09 4.09 4.09-1.835 4.09-4.09-1.835-4.09-4.09-4.09zm6.574 5.847c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Phone & Email */}
          <div>
            <h4 className="text-orange-400 text-sm uppercase font-semibold mb-4">Phone</h4>
            <p className="text-xl font-bold mb-4">(913) 297-3000</p>
            <h4 className="text-orange-400 text-sm uppercase font-semibold mb-4">Email</h4>
            <p className="text-lg mb-4">elitecontractor66@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 border-t border-gray-700 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Elite Contractors LLC. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-orange-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-orange-400">Terms of Service</Link>
            <Link href="#" className="hover:text-orange-400">Cookies Settings</Link>
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