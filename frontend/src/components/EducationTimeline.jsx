export default function EducationTimeline() {
  const education = [
    {
      degree: "D3 Sistem Informasi",
      year: "2022 - 2025",
      school: "Universitas Bina Sarana Informatika",
      desc: "Mengikuti program studi Sistem Informasi yang mencakup pengembangan perangkat lunak, manajemen basis data, dan analisis sistem. Memperoleh pengetahuan mendalam tentang metodologi pengembangan perangkat lunak dan praktik terbaik dalam industri teknologi informasi.",
    },
    {
      degree: "Teknik Komputer dan Jaringan",
      year: "2010 - 2014",
      school: "SMKN Rajapolah",
      desc: "Mempelajari dasar-dasar teknik komputer, jaringan komputer, dan administrasi sistem. Mengembangkan keterampilan praktis dalam instalasi perangkat keras, konfigurasi jaringan, dan pemecahan masalah teknis.",
    },
  ];

  return (
    <section className="max-w-2xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-8">Education</h2>

      <div className="relative border-l-4 border-green-500 pl-6">
        {education.map((edu, i) => (
          <div key={i} className="mb-10 relative">
            {/* Bulatan di garis */}
            <span className="absolute -left-9 top-1 w-5 h-5 bg-green-600 border-2 border-green-500 rounded-full"></span>

            {/* Konten */}
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-sm font-bold">{edu.year}</p>
            <p className="italic text-gray-600">{edu.school}</p>
            <p className="text-gray-700 mt-2 text-justify">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
