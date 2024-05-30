import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowRoundForward } from "react-icons/io";
import Title from "../../atoms/Title/Title";

const articles = [
  {
    image:
      "https://fypmedia.id/wp-content/uploads/2024/05/IMG_8979-Copy-yunan-ramdani-official-2-e1716279256355-600x335.jpg",
    title:
      "Laisyana Solehatunnisa: Content Creator Petualangan Muda yang Menginspirasi",
    desc: "Laisyana Solehatunnisa, seorang content creator muda berbakat berusia 15 tahun asal Garut, telah mencuri perhatian banyak orang dengan konten petualangannya yang anti mainstream.",
    date: "29 Mei 2024",
    link: "https://fypmedia.id/laisyana-solehatunnisa-content-creator-petualangan-muda-yang-menginspirasi-2/#google_vignette",
  },
  {
    image:
      "https://fypmedia.id/wp-content/uploads/2024/03/429799570_18422587126028834_7199299634722882027_n-600x335.jpg",
    title: "Cerita Singkat Nathania Lestari Sebagai Content Creator dan MC",
    desc: "FYPMEDIA.ID-Nathania Lestari atau biasa dipanggil Nata adalah seorang Content Creator specialist dibidang beauty lebih tepatnya beauty travel lifestyle dan juga seorang MC diberbagai event, ia berusia 30 tahun yang berasal dari Jakarta Utara.",
    date: "28 Mei 2024",
    link: "https://fypmedia.id/cerita-singkat-nathania-lestari-sebagai-content-creator-dan-mc-2/#google_vignette",
  },
  {
    image: "https://fypmedia.id/wp-content/uploads/2024/05/tubuh.jpeg",
    title: "7 Makanan yang Sebaiknya Dihindari untuk Tubuh Sehat Anda",
    desc: "FYPMedia - Makanan merupakan salah satu faktor penting dalam menjaga kesehatan tubuh. Namun, tidak semua makanan baik dikonsumsi untuk tubuh kita. Beberapa makanan memiliki kandungan yang dapat berdampak buruk bagi kesehatan kita. Berikut adalah 7 makanan yang sebaiknya dihindari untuk menjaga tubuh sehat Anda:",
    date: "28 Mei 2024",
    link: "https://fypmedia.id/7-makanan-yang-sebaiknya-dihindari-untuk-tubuh-sehat-anda-2/#google_vignette",
  },
];

const Blog = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-8 px-6 max-w-screen-lg mx-auto mb-8">
      <div className="flex justify-center items-center">
        <Title>Blog</Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            ref={ref}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <a href={article.link} className="hover:underline">
                <h2 className="text-xl font-bold mb-2 line-clamp-2">
                  {article.title}
                </h2>
              </a>
              <p className="text-gray-700 mb-4 line-clamp-5">{article.desc}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">{article.date}</p>
                <div className="h-6 flex items-center justify-center">
                  <a href={article.link} className="flex items-center">
                    <p className="text-blue-500 text-sm">Selengkapnya</p>
                    <IoIosArrowRoundForward className="w-6 h-6 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
