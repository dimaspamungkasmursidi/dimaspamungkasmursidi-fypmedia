import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "../../atoms/Title/Title";

const Article = [
  {
    image:
      "https://fypmedia.id/wp-content/uploads/2023/10/Roti-Ganda-correcto.id_.jpg",
    category: "News",
    title: "Roti Ganda, Si Empuk Nan Menggugah dari Pematang Siantar",
    link: "https://fypmedia.id/roti-ganda-si-empuk-nan-menggugah-dari-pematang-siantar/",
  },
  {
    image:
      "https://fypmedia.id/wp-content/uploads/2023/09/Web-Banner-FYP-150x150.png",
    category: "News",
    title: "Heboh! Fakta Tradisi 'Kawin Tangkap' di Sumba",
    link: "https://fypmedia.id/heboh-fakta-tradisi-kawin-tangkap-di-sumba/",
  },
  {
    image:
      "https://fypmedia.id/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-24-at-16.25.18-scaled-e1695993329724-150x150.jpeg",
    category: "Blog",
    title: "Mba Ghin, Content Creator The Power of Kepepet",
    link: "https://fypmedia.id/mba-ghin-content-creator-the-power-of-kepepet/",
  },
];

const PopularArticle = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-4 px-6 max-w-screen">
      <Title>Artikel Populer</Title>

      <div className="flex flex-wrap md:flex-nowrap gap-4">
        {/* Card Article */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-[30rem]"
        >
          <a href="https://fypmedia.id/bullying-dan-remaja-problematik-2024/">
          <div className="overflow-hidden">
            <img
              src="https://fypmedia.id/wp-content/uploads/2024/02/download-8.jpg"
              alt="News"
              className="w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded"
            />
          </div>
          <h2 className="text-2xl font-bold py-2">Bullying dan Remaja 2024</h2>
          <p className="line-clamp-3">
            Masa remaja adalah masa pencarian identitas. Mereka akan merasa
            bangga apabila dirinya mendapat pengakuan dari banyak orang.
          </p>
          </a>
        </motion.div>

        {/* Card Right Article */}
        <div className="flex flex-col gap-4">
          {Article.map((article, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center items-center gap-4"
            >
              <div className="w-32 h-28 overflow-hidden">
                <img
                  src={article.image}
                  alt="News"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded"
                />
              </div>
              <div className="flex flex-col w-52">
                <p className="text-2 font-thin">{article.category}</p>
                <h4 className="text-4 font-bold line-clamp-2">
                  {article.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ADS */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <div>
            <h1 className="font-bold text-4xl border-b-2 mb-2">Iklan</h1>
          </div>
          <div className="max-w-[30rem] overflow-hidden">
            <a href="https://itisfun.vercel.app">
              <img
                src="/images/ads1.png"
                alt="Iklan"
                className="mb-2 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </a>
            <p className="text-justify">
              Ingin punya website personal atau untuk bisnis? di IT Is Fun aja,
              dengan harga mulai dari 50K kamu sudah bisa memiliki website untuk
              keperluan kamu.{" "}
              <span className="text-blue-600 cursor-pointer font-bold">
                <a href="https://itisfun.vercel.app/">Klik Disini...</a>
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularArticle;
