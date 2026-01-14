"use client";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Framing",
      desc: "We put up the wood frame that holds your home. It's the base for walls, floors, and roofs — and it has to be done right.",
      img: "/asset/data2.jpg",
    },
    {
      title: "Siding",
      desc: "We install siding that protects your home from weather and gives it a clean, finished look you can feel good about.",
      img: "/asset/data2.jpg",
    },
    {
      title: "Custom Decks",
      desc: "We design and build decks that fit your space, giving you more room to relax, gather, and enjoy the outdoors.",
      img: "/asset/data3.jpg",
    },
    {
      title: "Remodeling",
      desc: "We update kitchens, bathrooms, and other spaces to improve how they look, feel, and work for your everyday life.",
      img: "/asset/data3.jpg",
    },
    {
      title: "Porches",
      desc: "We build porches that add charm and function — giving you a place to sit, greet guests, or enjoy fresh air.",
      img: "/asset/data3.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#0E0E0E] text-white py-20 px-6 md:px-16">
      {/* Top Label */}
      <div className="flex items-center gap-2 text-sm text-orange-400 mb-3">
        <span className="w-4 h-4 rounded-full bg-orange-400 flex items-center justify-center text-black text-[10px]">
          ⚒
        </span>
        <span className="tracking-wider font-medium">WHAT WE DO</span>
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
        OUR SERVICES
      </h2>

      {/* Subtitle */}
      <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
        We handle a wide range of home projects,{" "}
        <span className="text-orange-400">from framing and siding</span>
        to{" "}
        <span className="text-orange-400">
          decks, porches, and remodeling
        </span>{" "}
        — done with care, done the right way.
      </p>

      {/* Cards */}
      {/* ROW 1 — 2 items */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {services.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="relative bg-[#1A1A1A] rounded-xl overflow-hidden shadow-md border border-[#2a2a2a]"
          >
            {/* IMAGE */}
            <div className="relative h-100 w-full aspect-[3/3.6] ">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <button className="text-sm text-orange-400 hover:text-orange-300 transition">
                  Read More →
                </button>
              </div>

              <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ROW 2 — 3 items */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {services.slice(2, 5).map((item, index) => (
          <div
            key={index}
            className="relative bg-[#1A1A1A] rounded-xl overflow-hidden shadow-md border border-[#2a2a2a]"
          >
            {/* IMAGE */}
            <div className="relative h-72 w-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <button className="text-sm text-orange-400 hover:text-orange-300 transition">
                  Read More →
                </button>
              </div>

              <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-10">
        <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          Services Page
        </button>
      </div>
    </section>
  );
}
