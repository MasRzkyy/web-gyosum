"use client";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-orange-600 text-lg">→</span>
            <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">
              Elite Contractors LLC
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A1A1A] leading-tight">
            Get in <span className="text-orange-600">Touch</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Ready to start your next project? We’re here to listen, advise, and deliver — with integrity, every time.
          </p>
        </div>
      </section>

      {/* Contact Info + Form Grid */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">
              Let’s Build Something <span className="text-orange-600">Great</span> Together
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="text-orange-600 text-2xl mt-1">📞</div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A]">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-orange-600 text-2xl mt-1">✉️</div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A]">Email Us</h3>
                  <p className="text-gray-600">hello@elitecontractors.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="text-orange-600 text-2xl mt-1">📍</div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A]">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Builder’s Way<br />
                    Springfield, IL 62701<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="text-orange-600 text-2xl mt-1">⏰</div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A]">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday – Friday: 7AM – 6PM<br />
                    Saturday: 8AM – 4PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons (Optional) */}
            <div className="mt-10 flex gap-4">
              <a href="#" className="text-orange-600 hover:text-orange-700 transition">
                📱 Instagram
              </a>
              <a href="#" className="text-orange-600 hover:text-orange-700 transition">
                🔗 LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Send Us a Message</h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we’ll get back to you within 24 hours.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition">
                  <option value="">Select a service</option>
                  <option value="renovation">Home Renovation</option>
                  <option value="new-build">New Construction</option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="bathroom">Bathroom Upgrade</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-bold py-4 rounded-lg hover:bg-orange-700 transition text-lg"
              >
                Send Message
              </button>
            </form>

            {/* Note */}
            <p className="mt-8 text-sm text-gray-500 text-center">
              We respond to all inquiries within 24 hours. For emergencies, please call us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-8">
            Find Us on the Map
          </h2>
          <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
            {/* Placeholder for Google Maps */}
            <Image
              src="/asset/map-placeholder.jpg" // Ganti dengan screenshot Google Maps Anda
              alt="Office Location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
              <p className="text-white text-center px-4">
                <strong>Location: 123 Builder’s Way, Springfield, IL</strong><br />
                <span className="text-sm">Google Maps integration available on live site</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Don’t wait — let’s turn your vision into reality with quality you can trust.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+15551234567"
              className="px-6 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition text-center"
            >
              Call Now
            </a>
            <a
              href="#contact-form"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition text-center"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}