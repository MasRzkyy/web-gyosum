"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-md bg-[#F8F4EF]">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-orange-600 text-lg">→</span>
            <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">
              Elite Contractors LLC
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A1A1A] leading-tight">
            About <span className="text-orange-600">Elite Contractors</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Founded with integrity and built on experience, we bring over 35 years of expertise to every project.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A]">
              Building <span className="text-orange-600">Trust</span> Through Quality
            </h2>
            <p className="mt-4 text-gray-600">
              At Elite Contractors, we believe in honest work that speaks for itself. Founded 15 years ago by Jim—a builder with over 35 years in the construction industry—we’ve grown into a reliable team of 25, running 11 active crews across the region. From day one, we’ve focused on getting the basics right: show up, do the work, and do it well.
            </p>
            <p className="mt-4 text-gray-600">
              We take pride in getting the job done right—on time, on budget, and built to last for years to come.
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition">
              Learn More
            </button>
          </div>
          <div className="relative w-full h-96 rounded-xl overflow-hidden">
            <Image
              src="/asset/hero.jpg" // Ganti dengan path gambar Anda
              alt="Elite Contractors Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-extrabold text-orange-600">400+</h3>
            <p className="mt-2 text-gray-600">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-5xl font-extrabold text-orange-600">4.8★</h3>
            <p className="mt-2 text-gray-600">Average Client Rating</p>
          </div>
          <div>
            <h3 className="text-5xl font-extrabold text-orange-600">35+</h3>
            <p className="mt-2 text-gray-600">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="text-orange-600 text-xl">⭐</span>
            <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">
              Our Core Values
            </p>
          </div>
          <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A]">
            What We <span className="text-orange-600">Stand For</span>
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            We keep things simple, honest, and focused on what matters to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
            {[
              { emoji: '📋', title: 'Clear Communication', desc: 'We keep you updated at every step so there are no surprises.' },
              { emoji: '🏷️', title: 'Upfront Pricing', desc: 'We give fair, honest quotes and stick to them—no hidden fees.' },
              { emoji: '🏠', title: 'Built to Last', desc: 'Strong methods + reliable materials that hold up.' },
              { emoji: '🧤', title: 'Respect for Your Home', desc: 'Clean, safe, and treated like it’s our own.' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
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
            Let us bring your vision to life with quality and care you can trust.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition">
              Get a Quote
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}