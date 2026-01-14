"use client";
import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section className="bg-[#F8F4EF] py-20 px-6 md:px-16 lg:px-24">
      {/* ======================= ABOUT SECTION ======================= */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          {/* Small Label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-orange-600 text-lg">→</span>
            <p className="text-sm font-semibold tracking-wide text-orange-700">
              ELITE CONTRACTORS LLC
            </p>
          </div>

          {/* Title */}
          <h2 className="text-5xl font-extrabold text-[#1A1A1A] leading-tight">
            ABOUT US
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-4 max-w-sm">
            We take pride in getting the job done right—on time, on budget, and
            built to last for years to come.
          </p>

          {/* Button */}
          <button className="mt-4 px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-2xl font-bold text-[#1A1A1A] leading-snug">
            We’re a team that <span className="text-orange-600">shows up</span>,{" "}
            <span className="text-orange-600">works hard</span>, and stands
            behind everything we build.
          </h3>

          <p className="text-gray-600 mt-4">
            At Elite Contractors, we believe in honest work that speaks for
            itself. Founded 15 years ago by Jim—a builder with over 35 years in
            the construction industry—we’ve grown into a reliable team of 25,
            running 11 active crews across the region. From day one, we’ve
            focused on getting the basics right: show up, do the work, and do it
            well.
          </p>

          {/* Stats */}
          <div className="flex gap-12 mt-10 border-l-2 border-r-2 border-gray-400 pl-6 pr-6">
            <div className="border-r-2 border-gray-400 pl-6 pr-6">
              <h3 className="text-4xl font-extrabold text-orange-600">400+</h3>
              <p className="text-gray-600 text-sm mt-1">Projects Done</p>
            </div>

            <div className="border-r-2 border-gray-400 pl-6 pr-6">
              <h3 className="text-4xl font-extrabold text-orange-600">4.8</h3>
              <p className="text-gray-600 text-sm mt-1">Reviews Rating</p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-orange-600">35+</h3>
              <p className="text-gray-600 text-sm mt-1">
                Years in Construction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Image */}
      <div className="relative w-full h-120 md:h-[420px] rounded-xl overflow-hidden mt-16">
        <Image
          src="/asset/hero.jpg" // ganti sesuai gambar kamu
          alt="Construction"
          fill
          className="object-cover"
        />
      </div>

      {/* ====================== BENEFITS SECTION ====================== */}
      <div className="mt-24">
        {/* Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-orange-600 text-xl">✨</span>
          <p className="text-sm font-semibold tracking-wide text-orange-700">
            WHY CHOOSE US
          </p>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
          OUR <span className="text-black">BENEFITS</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-xl md:text-2xl text-[#3a3a3a] font-medium">
          We keep things{" "}
          <span className="text-orange-600">simple, honest, and focused</span>{" "}
          on what matters to you.
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-600 max-w-3xl">
          Working with Elite Contractors means less stress and better results.
          We show up on time, keep you informed, and do what we say we’ll do.
          From start to finish, we stay focused on your goals, your budget, and
          the quality you expect.
        </p>

        {/* Benefit Items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-14">
          {/* Item 1 */}
          <div>
            <div className="text-orange-600 text-3xl mb-4">📋</div>
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Clear Communication
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              We keep you updated at every step so there are no surprises.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <div className="text-orange-600 text-3xl mb-4">🏷️</div>
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Upfront Pricing
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              We give fair, honest quotes and stick to them—no hidden fees.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <div className="text-orange-600 text-3xl mb-4">🏠</div>
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Built to Last
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Strong methods + reliable materials that hold up.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <div className="text-orange-600 text-3xl mb-4">🧤</div>
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              Respect for Your Home
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Clean, safe, and treated like it’s our own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
