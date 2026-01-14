"use client";
import Image from "next/image";

export default function GalleryPage() {
  // Data foto galeri (sesuaikan dengan gambar Anda)
  const galleryItems = [
    {
      id: 1,
      title: "Modern Kitchen Remodel",
      location: "Springfield, IL",
      img: "/asset/data3.jpg", // Ganti dengan path gambar Anda
    },
    {
      id: 2,
      title: "Custom Backyard Deck",
      location: "Chicago, IL",
      img: "/asset/data3.jpg",
    },
    {
      id: 3,
      title: "Front Porch Addition",
      location: "Peoria, IL",
      img: "/asset/data3.jpg",
    },
    {
      id: 4,
      title: "Bathroom Renovation",
      location: "Rockford, IL",
      img: "/asset/data3.jpg",
    },
    {
      id: 5,
      title: "New Home Framing",
      location: "Decatur, IL",
      img: "/asset/data3.jpg",
    },
    {
      id: 6,
      title: "Siding Installation",
      location: "Urbana, IL",
      img: "/asset/data3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F4EF] text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Top Label */}
          <div className="flex items-center gap-2 text-sm text-orange-400 mb-3">
            <span className="w-4 h-4 rounded-full bg-orange-400 flex items-center justify-center text-black text-[10px]">
              🖼️
            </span>
            <span className="tracking-wider font-medium">OUR WORK</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500">
            PROJECT GALLERY
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
            See real projects we’ve completed — from framing and siding to decks, porches, and full remodels. Every detail built with care.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-lg border border-[#2a2a2a] hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-80 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* TEXT OVERLAY */}
              <div className="absolute bottom-0 left-0 w-full p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{item.location}</p>
                <button className="mt-2 text-sm text-orange-400 hover:text-orange-300 transition">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 bg-[#F8F4EF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Want to See More?
          </h2>
          <p className="text-gray-600 mb-8">
            Browse our full portfolio of completed projects — from small updates to full home transformations.
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-500 transition">
            View All Projects
          </button>
        </div>
      </section>
    </div>
  );
}