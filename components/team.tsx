// app/components/TeamSection.tsx
"use client";
import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Project Manager",
      image: "/asset/orang1.jpg"
    },
    {
      name: "Sarah Wilson",
      role: "Estimator / Planner",
      image: "/asset/orang1.jpg"
    },
    {
      name: "David Clark",
      role: "Architect",
      image: "/asset/orang1.jpg"
    },
    {
      name: "James Miller",
      role: "Construction Manager",
      image: "/asset/orang1.jpg"
    }
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-1 rounded-full text-xs font-semibold mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a4 4 0 014-4h4M12 14a4 4 0 01-4-4H4M12 14a4 4 0 01-4 4h4M12 14a4 4 0 014 4h4" />
          </svg>
          PROFESSIONALS
        </div>
        <h2 className="text-4xl font-extrabold text-orange-500 mb-4">OUR TEAM</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={533}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-400 text-sm mt-1">{member.role}</p>
          </div>
        ))}
      </div>

      {/* We're Hiring Section */}
      <div className="bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">
          We’re <span className="text-orange-500">hiring!</span>
        </h3>
        <p className="text-gray-300 mb-6">
          Join our team at Elite Contractors. We employ dependable team players who seek long-term employment in the trades.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
          Apply Now
        </button>
      </div>
    </section>
  );
}