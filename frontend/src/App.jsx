import DataImage from "./data";
import { listProyek } from "./data";
import Skills from "./components/SkillCard";
import EducationTimeline from "./components/EducationTimeline";
import ExperienceTimeline from "./components/ExperienceTimeline";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-6 items-center xl:gap-0 gap-6 grid-cols-1" id="beranda">
        <div>
          <div className="flex items-center gap-3 mb-6 w-fit bg-zinc-800 p-4 rounded-2xl hover:scale-105 transition-transform duration-300">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Kode yang indah, lahir dari ketekunan.👌</q>
          </div>
          <h1 className="text-2xl/tight font-bold mb-6 ">
            Halo, Saya <span className="text-green-500">Ari Zainal Fauziah</span>
          </h1>
          <p className="text-base/loose mb-6">
            Lulusan D3 Sistem Informasi Universitas Bina Sarana Informatika
            yang kini mendalami bidang <span className="text-green-500">Fullstack Developer</span>. Memiliki pemahaman dasar yang kuat dalam jaringan
            komputer serta ketertarikan mendalam pada pemrograman web.
            Saya terus berusaha mengembangkan keterampilan di berbagai
            teknologi backend dan frontend untuk menjadi pengembang full
            stack yang siap beradaptasi dengan kebutuhan industri. Saya
            antusias dalam belajar teknologi baru dan berkontribusi dalam
            proyek pengembangan perangkat lunak yang berdampak.
          </p>
          <div className="flex items-center sm:gap-4 gap-2 ">
            <a href="#" className="bg-green-600 hover:text-green-600 text-white p-4 rounded-lg hover:bg-zinc-800 transition">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#project" className="bg-zinc-600 text-white p-4 rounded-lg hover:bg-zinc-800 transition">
              Lihat Project <i className="ri-skip-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col relative sm:w-[400px] md:ml-auto hover:scale-105 transition-transform duration-300">
          <img src={DataImage.HeroImage} alt="Hero Image" className=" rounded-4xl" />
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 p-4 bg-zinc-800 rounded-lg flex items-center gap-3 shadow-lg social-icons">
            <a href="#" className="hover:bg-green-600 text-green-600 hover:text-white p-4 rounded-lg hover:bg-green-800 transition">
              <i class="ri-github-fill ri-lg"></i>
            </a>
            <a href="#" className="hover:bg-green-600 text-green-600 hover:text-white p-4 rounded-lg hover:bg-green-800 transition">
              <i class="ri-mail-send-line ri-lg"></i>
            </a>
            <a href="#" className="hover:bg-green-600 text-green-600 hover:text-white p-4 rounded-lg hover:bg-green-800 transition">
              <i class="ri-whatsapp-line ri-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Tentang */}

      <div className="tentang mt-20 pb-6 rounded-2xl" id="tentang">
        <div className="xl:w-4/5 lg:w-11/12 w-full mx-auto p-6 md:p-8 bg-zinc-800 rounded-2xl profile-card shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-2/5 w-full flex justify-center">
              <img src={DataImage.ImageHero} alt="Image" className="contrast-85 w-full max-w-xs md:max-w-sm rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="lg:w-3/5 w-full">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed md:leading-loose mb-8 md:mb-10">
                Saya adalah seorang pengembang perangkat lunak yang bersemangat dengan pengalaman dalam membangun aplikasi web yang responsif dan user-friendly. Saya memiliki keterampilan dalam berbagai teknologi seperti HTML, CSS, JavaScript, serta framework populer seperti React dan Node.js. Saya selalu berusaha untuk terus belajar dan mengikuti perkembangan terbaru dalam dunia teknologi untuk memberikan solusi terbaik bagi pengguna.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
                <div className="text-center bg-zinc-900 p-4 rounded-xl shadow-md w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                  <h1 className="text-3xl md:text-4xl font-bold mb-1 text-white stat-number">17 <span className="text-green-500">+</span></h1>
                  <p>Proyek Selesai</p>
                </div>
                <div className="text-center bg-zinc-900 p-4 rounded-xl shadow-md w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                  <h1 className="text-3xl md:text-4xl font-bold mb-1 text-white stat-number">1 <span className="text-green-500">+</span></h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:grid grid-cols-2 gap-6 mt-8" id="resume">
        <EducationTimeline />
        <ExperienceTimeline />
      </div>

      {/* skill */}

      <div className="skill rounded-2xl" id="skill">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <Skills />
      </div>

      {/* portofolio */}

      <div className="portofolio grid md:grid-cols-2 lg:grid-cols-3 pt-6 sm:pt-12 items-center xl:gap-4 gap-6 grid-cols-1" id="project">
        <h2 className="text-3xl font-bold mb-6 text-center col-span-full">Project</h2>
        {listProyek.map((proyek) => (
          <div key={proyek.id} className="rounded-xl shadow-md p-4 bg-zinc-800 hover:scale-105 transition-transform duration-300">
            <img src={proyek.gambar} alt={proyek.nama} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-lg font-bold mt-3">{proyek.nama}</h2>
            <p className="text-sm mt-1">{proyek.desk}</p>
            <div className="mt-3">
              <h3 className="font-semibold text-sm">Tools:</h3>
              <ul className="flex flex-wrap gap-2 mt-1">
                {proyek.tools.map((tool, index) => (
                  <li key={index} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-right text-xs mt-2">Dad: {proyek.dad}</p>
          </div>
        ))}
      </div>

      {/* kontak me */}

      <section id="kontak" className="kontak mt-16 py-6 rounded-2xl" >
        <div className="xl:w-full lg:w-11/12 w-full mx-auto p-6 md:p-8 bg-zinc-800 rounded-2xl profile-card shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-12">

            <div className="lg:w-2/5 w-full">
              <h2 className="text-3xl font-bold mb-3">Mari Diskusi</h2>
              <p className="text-gray-400 mb-6">
                Saya selalu terbuka untuk jadi pekerja freelance. Hubungi saya jika Anda memiliki proyek yang cocok untuk saya kerjakan.
              </p>

              <address className="flex flex-col gap-4 not-italic">
                <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-lg">
                  <i className="ri-map-pin-line ri-2x text-green-500"></i>
                  <div>
                    <span className="font-semibold text-white">Lokasi</span>
                    <span className="block text-gray-400">Tasikmalaya, Indonesia</span>
                  </div>
                </div>
                <a href="mailto:arizainalf@gmail.com" className="flex items-center gap-4 p-4 bg-zinc-900 rounded-lg hover:bg-zinc-700 transition-colors">
                  <i className="ri-mail-send-line ri-2x text-green-500"></i>
                  <div>
                    <span className="font-semibold text-white">Email</span>
                    <span className="block text-gray-400">kirim pesan ke saya</span>
                  </div>
                </a>
                <a href="https://wa.me/6281930865458" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-zinc-900 rounded-lg hover:bg-zinc-700 transition-colors">
                  <i className="ri-whatsapp-line ri-2x text-green-500"></i>
                  <div>
                    <span className="font-semibold text-white">WhatsApp</span>
                    <span className="block text-gray-400">+62 819-3086-5458</span>
                  </div>
                </a>
              </address>
            </div>

            <div className="lg:w-3/5 w-full">
              <p className="text-gray-400 mb-6">
                Saya selalu terbuka untuk mendiskusikan pekerjaan atau peluang kemitraan. Isi form di bawah ini.
              </p>

              <form action="#" method="POST" className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Nama</label>
                  <input type="text" id="name" name="name" className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:ring-green-500 focus:border-green-500" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                  <input type="email" id="email" name="email" className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:ring-green-500 focus:border-green-500" placeholder="name@example.com" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Pesan</label>
                  <textarea id="message" name="message" rows="4" className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:ring-green-500 focus:border-green-500" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>
                <button type="submit" className="bg-green-600 text-white font-bold py-3 px-5 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default App