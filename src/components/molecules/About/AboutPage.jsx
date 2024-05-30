import React from "react";
import { motion } from "framer-motion";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";

const projects = [
  {
    Image: "/images/ads1.png",
    name: "IT Is Fun Studio",
    link: "https://itisfun.vercel.app/",
  },
  {
    Image: "/images/dinosource.png",
    name: "Dinosource",
    link: "https://dinosource.vercel.app/",
  },
  {
    Image: "/images/portofolio.png",
    name: "My Personal Website",
    link: "https://dimaspamungkasportofolio.vercel.app/",
  },
];

const AboutPage = () => {
  return (
    <section className="py-4 px-6 max-w-screen mx-auto space-y-4 mb-8">
      <Title>Tentang Website</Title>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 p-6 rounded shadow-md"
      >
        <div>
          <p className="mb-4">
            Website ini dibuat oleh Dimas Pamungkas Mursidi yang bertujuan untuk
            memenuhi tugas FGD FYP Media.
          </p>
              <p>
                Desain website ini terinspirasi dari desain website{" "}
                <span className="font-bold text-sky-600">
                  <a href="https://www.bbc.com">BBC</a>
                </span>{" "}
                dan{" "}
                <span className="font-bold text-sky-600">
                  <a href="https://fypmedia.id/">FYP Media</a>.
                </span>{" "}
                Dan sumber berita website ini diambil dari website{" "}
                <span className="font-bold text-sky-600">
                  <a href="https://www.aljazeera.com">Aljazeera,</a>
                </span>{" "}
                <span className="font-bold text-sky-600">
                  <a href="https://www.kompas.com">Kompas,</a>
                </span>{" "}
                <span className="font-bold text-sky-600">
                  <a href="https://www.bbc.com">BBC,</a>
                </span>{" "}
                <span className="font-bold text-sky-600">
                  <a href="https://fypmedia.id">FYP Media,</a>
                </span>{" "}
                <span className="font-bold text-sky-600">
                  <a href="https://www.detik.com">Detik.</a>
                </span>{" "}
              </p>
        </div>
            <p className="mt-4">Website lain :</p>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2">
          {projects.map((project, index) => (
          <div className="shadow-lg w-72" key={index}>
            <div className="overflow-hidden">
              <img
                src={project.Image}
                alt="Website 1"
                className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-between items-center p-2">
              <h1 className="text-lg font-bold">{project.name}</h1>
              <a href={project.link}>
              <Button>Demo</Button>
              </a>
            </div>
          </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;

// const AboutPage = () => {
//   return (
//     <>
//       <main className="bg-gray-100 py-8 px-6 min-h-screen">
//         <Title>Tentang Website</Title>
//         <section className="flex gap-6 mx-auto h-80">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white rounded shadow-lg overflow-hidden"
//           >
//             <img
//               src="https://i0.wp.com/dianisa.com/wp-content/uploads/2023/06/1-Foto-Ikon-Profil-WA-Baru.jpg?resize=1000%2C580&ssl=1"
//               alt="Profile"
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-bold">Dimas Pamungkas Mursidi</h3>
//               <p className="text-gray-600">Frontend Developer</p>
//               <br />
//               {/* <p className="text-gray-800">Website Portofolio :</p>
//               <p>
//                 Klik{" "}
//                 <span className="text-sky-600 font-bold">
//                   <a href="https://dimaspamungkasportofolio.vercel.app/">
//                     My Personal Website
//                   </a>
//                 </span>{" "}
//               </p>
//               <p>
//                 Klik{" "}
//                 <span className="text-sky-600 font-bold">
//                   <a href="https://itisfun.vercel.app/">IT Is Fun Studio</a>
//                 </span>{" "}
//               </p>
//               <p>
//                 Klik{" "}
//                 <span className="text-sky-600 font-bold">
//                   <a href="https://dinosource.vercel.app/">Dinosource</a>
//                 </span>{" "}
//               </p> */}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white p-6 rounded shadow-md mb-6 h-96"
//           >
//             <div>
//               <p className="mb-4">
//                 Website ini dibuat oleh Dimas Pamungkas Mursidi yang bertujuan
//                 untuk memenuhi tugas FGD FYP Media.
//               </p>
//               <p>
//                 Desain website ini terinspirasi dari desain website{" "}
//                 <span className="font-bold text-sky-600">
//                   <a href="https://www.bbc.com">BBC</a>
//                 </span>{" "}
//                 dan{" "}
//                 <span className="font-bold text-sky-600">
//                   <a href="https://fypmedia.id/">FYP Media</a>.
//                 </span>{" "}
//                 Dan sumber berita website ini diambil dari website{" "}
//                 <span className="font-bold text-sky-600">
//                   <a href="https://www.aljazeera.com">Aljazeera</a>
//                 </span>{" "}
//                 <span className="font-bold text-sky-600">
//                   <a href="https://www.kompas.com">Kompas</a>
//                 </span>{" "}
//                 <span className="font-bold text-sky-600">
//                   <a href="https://www.bbc.com">BBC</a>
//                 </span>{" "}
//                 <span className="font-bold text-sky-600">
//                   <a href="https://fypmedia.id">FYP Media</a>
//                 </span>{" "}
//               </p>
//             </div>
//             <div className="shadow-lg w-72">
//               <p className="mt-4">Website lain :</p>
//               <div className="overflow-hidden mt-2">
//                 <img
//                   src="/images/ads1.png"
//                   alt="Website 1"
//                   className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
//                 />
//               </div>
//               <div className="flex justify-between items-center p-2">
//                 <h1 className="text-lg font-bold">IT Is Fun Studio</h1>
//                 <Button>Demo</Button>
//               </div>
//             </div>
//           </motion.div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default AboutPage;
