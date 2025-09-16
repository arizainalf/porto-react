export default function ExperienceTimeLine() {
  const education = [
    {
      degree: "Freelance Web Developer",
      year: "2023 - Sekarang",
      school: "Proyek Independen, Remote",
      desc: "Membangun dan mengelola berbagai situs web untuk klien menggunakan HTML, CSS, JavaScript, dan framework seperti React dan Tailwind CSS. Bertanggung jawab untuk desain responsif, optimasi SEO, dan integrasi API pihak ketiga.",
    },
    {
      degree: "Software Development Intern",
      year: "2024",
      school: "Bank BJB KCP Pemkot Tasikmalaya",
      desc: "Membuat dan mengembangkan aplikasi Sistem Informasi Pengelolaan Arsip Nasabah Menggunakan Laravel Filament dan Livewire dengan database yang digunakan yaitu mysql.",
    },
  ];

  return (
    <section className="max-w-2xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>

      <div className="relative border-l-4 border-green-500 pl-6">
        {education.map((edu, i) => (
          <div key={i} className="mb-10 relative">
            {/* Bulatan di garis */}
            <span className="absolute -left-9 top-1 w-5 h-5 bg-green-600 border-2 border-green-500 rounded-full"></span>

            {/* Konten */}
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-sm font-bold">{edu.year}</p>
            <p className="italic text-gray-600">{edu.school}</p>
            <p className="text-gray-700 mt-2">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
