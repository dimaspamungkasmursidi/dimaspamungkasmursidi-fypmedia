import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "../../atoms/Title/Title";

const CardNews = [
  {
    image:
      "https://akcdn.detik.net.id/visual/2024/05/27/israel-palestinians-4_169.jpeg?w=715&q=90",
    title:
      "Serangan Israel ke Rafah Bikin Dunia Geram, Ini Sikap Tak Terduga AS",
    desc: "Presiden Amerika Serikat Joe Biden tidak berencana mengubah kebijakannya terhadap Israel menyusul serangan mematikan akhir pekan lalu di kamp pengungsi Rafah.",
    date: "2 jam lalu",
    category: "Internasional",
    link: "https://www.cnbcindonesia.com/news/20240529045734-4-541955/serangan-israel-ke-rafah-bikin-dunia-geram-ini-sikap-tak-terduga-as",
  },
  {
    image:
      "https://www.aljazeera.com/wp-content/uploads/2024/05/AP24128424090036-1716972279.jpg?resize=730%2C410&quality=80",
    title:
      "Apa itu 'Semua mata tertuju pada Rafah'? Menguraikan tren sosial yang viral mengenai perang Israel",
    desc: "Pasukan Israel menembaki sebuah kamp tenda di zona aman yang telah ditentukan di sebelah barat Rafah dan menewaskan setidaknya 21 orang, termasuk 13 perempuan dan anak perempuan, dalam pembantaian massal terbaru terhadap warga sipil Palestina.",
    date: "2 jam lalu",
    category: "Internasional",
    link: "https://www.aljazeera.com/wp-content/uploads/2024/05/AP24128424090036-1716972279.jpg?resize=730%2C410&quality=80",
  },
  {
    image:
      "https://asset.kompas.com/crops/3tBpUguRYfyeQvxbIB2446B19PM=/300x201:1500x1001/1200x800/data/photo/2024/03/15/65f451444331a.jpg",
    title: "Tidak Semua Pekerja Bisa Dapat Pembiayaan Rumah dari Tapera",
    desc: "Pekerja dengan yang menerima gaji minimal setara upah minimal regional (UMR) akan diwajibkan untuk menjadi peserta Tabungan Perumahan Rayat (Tapera).",
    date: "2 jam lalu",
    category: "Nasional",
    link: "https://www.kompas.com/kolom/2024/03/15/tidak-semua-pekerja-bisa-dapat-pembiayaan-rumah-dari-tapera",
  },
  {
    image:
      "https://asset.kompas.com/crops/hCdmsnLWo6LMy75NQ_s7PLUAX8k=/265x128:1192x745/750x500/data/photo/2024/05/29/66565a351c6b8.jpeg",
    title:
      "Claudia Nangis Usai Timnas Putri Libas Singapura, Lawan Sakit demi Garuda Pertiwi ",
    desc: "Penyerang timnas putri Indonesia, Claudia Scheunemann, menangis seusai Garuda Pertiwi melibas Singapura.",
    date: "2 jam lalu",
    category: "Olahraga",
    link: "https://www.kompas.com/kolom/2024/05/29/claudia-nangis-usai-timnas-putri-libas-singapura-lawan-sakit-demi-garuda-pertiwi",
  },
];

const LatestNews = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="py-4 px-6 max-w-screen mx-auto space-y-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Title>Berita Terkini</Title>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4"
        initial={{ opacity: 0 }}
        animate={sectionInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Left Card News */}
        <div className="flex flex-wrap items-center md:items-start justify-center md:justify-start w-full gap-4">
          {/* Big Card News */}
          <a href="https://sport.detik.com/sepakbola/liga-spanyol/d-7362617/jude-bellingham-pemain-terbaik-laliga-2023-2024">
          <motion.div
            className="flex justify-center items-center flex-wrap-reverse gap-4 lg:w-full md:flex-nowrap border-b hover:text-blue-800"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="md:w-[50%] mt-4 md:mt-0">
              <h2 className="font-bold text-2xl py-1">
                Jude Belingham menjadi pemain terbaik La Liga 2023/2024
              </h2>
              <p className="mb-2">
                Madrid - Jude Bellingham langsung moncer di musim pertamanya dan
                membawa Real Madrid juara LaLiga 2023/2024. Bellingham
                dinobatkan sebagai pemain terbaik.
              </p>
              <div className="flex gap-2 text-1 text-gray-500">
                <p>2 jam lalu</p>
                <p>|</p>
                <p className="font-bold text-black">Olahraga</p>
              </div>
            </div>
            <div className="-m-6 mt-4 md:m-0 md:mt-0 md:w-[30rem] overflow-hidden">
              <img
                src="https://smakcygowa.id/wp-content/uploads/2024/01/3834929-77931508-2560-1440-781x512.jpg"
                alt="Jude Belingham"
                className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded"
              />
            </div>
          </motion.div>
          </a>

          {/* Bottom Card News */}
          <div className="flex flex-wrap justify-center items-center mobile:justify-start mobile:items-start gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {CardNews.map((news, index) => (
                <motion.div
                  className="sm:max-w-[19rem] py-2 border-b hover:text-blue-800"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <a href={news.link}>
                  <div className="w-full h-32 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="line-clamp-3 py-1">{news.desc}</p>
                    <div className="flex gap-2 text-1 text-gray-500">
                      <p>{news.date}</p>
                      <p>|</p>
                      <p className="font-bold text-black">{news.category}</p>
                    </div>
                  </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row xl:flex-col sm:justify-start sm:items-start gap-4">
          {/* Right Card News */}
          <motion.div
            className="flex flex-col justify-center items-center md:max-w-[20rem] lg:ml-2 md:flex-nowrap border-b hover:text-blue-800"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <a href="https://www.kompas.com/tren/read/2024/05/29/083000965/update-kasus-vina--pengakuan-adik-ayah-dan-ibu-pegi-soal-nama-robi">
            
            <div className="md:w-full h-40 overflow-hidden">
              <img
                src="https://asset.kompas.com/crops/eJCEMFoLq4Pvd8Vj-54GcG2sI1s=/69x0:659x393/750x500/data/photo/2024/05/26/6652d0e7a1313.jpg"
                alt="Update Kasus Vina"
                className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded"
              />
            </div>
            <div className="md:w-full flex flex-col items-start">
              <div className="">
                <h2 className="font-bold text-xl py-1 line-clamp-3">
                  Update Kasus Vina: Pengakuan Adik, Ayah, dan Ibu Pegi soal
                  Nama Robi
                </h2>
                <p className="mb-2 line-clamp-3">
                  Kasus pembunuhan Vina Cirebon 2016 terus bergulir di
                  kepolisian usai Pegi Setiawan (30) ditetapkan sebagai
                  tersangka oleh Polda Jawa Barat.
                </p>
              </div>
              <div className="flex gap-2 text-1">
                <p className="text-gray-500">2 jam lalu</p>
                <p>|</p>
                <p className="font-bold text-black">Nasional</p>
              </div>
            </div>
            </a>
          </motion.div>

          {/* Text News */}
          <motion.div
            className="lg:ml-2 mt-6 border-b"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <a href="https://inet.detik.com/cyberlife/d-7362740/viral-video-azan-di-rafah-bikin-hati-pilu">
            <div className="md:max-w-[20rem] hover:underline">
              <h2 className="font-bold text-xl line-clamp-3 pb-1">
                Viral! Bikin Hati Pilu, Video Azan di Rafah di tengah kehancuran akibat serangan Israel biadab
              </h2>
              <p className="mb-2 line-clamp-3">
                Bersamaan dengan bergemanya All Eyes On Rafah di media sosial,
                sebuah video TikTok menarik perhatian netizen.
              </p>
            </div>
            <div className="flex gap-2 text-1">
              <p className="text-gray-500">2 jam lalu</p>
              <p>|</p>
              <p className="font-bold text-black">Nasional</p>
            </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LatestNews;
