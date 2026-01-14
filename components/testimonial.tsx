import Head from 'next/head';

// Interface untuk testimoni
interface Testimonial {
  id: number;
  name: string;
  text: string;
}

// Data testimoni statis (bisa diganti dari API)
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jessica Parker",
    text: "Pengalaman luar biasa! Tim mereka sangat profesional, teliti, dan menyelesaikan proyek saya dengan sempurna.",
  },
  {
    id: 2,
    name: "Michael Thompson",
    text: "Kami memiliki pengalaman sukses bekerja sama dengan perusahaan ini. Mereka tidak hanya menyelesaikan pekerjaan tepat waktu...",
  },
  {
    id: 3,
    name: "Sarah Williams",
    text: "Kolaborasi yang luar biasa dan perhatian terhadap detail! Hasil akhir melebihi ekspektasi.",
  },
  {
    id: 4,
    name: "David Miller",
    text: "Sangat direkomendasikan untuk siapa saja yang mengutamakan kualitas dan kepercayaan.",
  },
  {
    id: 5,
    name: "Emily Johnson",
    text: "Timnya sangat membantu, sabar, dan menyelesaikan pekerjaan tepat waktu.",
  },
  {
    id: 6,
    name: "Mohamed Davis",
    text: "Kualitas pekerjaannya luar biasa — kami akan merekomendasikan mereka tanpa ragu!",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Testimoni Pelanggan | Nama Perusahaan</title>
        <meta name="description" content="Dengarkan langsung dari pelanggan kami yang puas." />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Testimoni Pelanggan</h1>
            <p className="mt-4 text-lg text-gray-600">
              Dengarkan langsung dari klien yang telah mempercayakan proyek mereka kepada kami.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">“{testimonial.text}”</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </div>
    </>
  );
}