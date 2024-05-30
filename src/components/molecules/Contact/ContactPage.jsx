// src/components/Contact/Contact.js
import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-4">Informasi Kontak</h2>
      <p className="mb-2">
        <strong>Alamat :</strong> Bekasi, Jawa Barat
      </p>
      <p className="mb-2">
        <strong>Telepon :</strong> 0858-9182-1080
      </p>
      <p className="mb-2">
        <strong>Email :</strong> dimaspamungkas.m19@gmail.com
      </p>
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.3079372287716!2d106.997923!3d-6.233556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c62b5ae6c27%3A0xb8b5e0e8c8b9f0!2sJl.%20Bekasi%20Raya%20No.1%2C%20Marga%20Jaya%2C%20Kec.%20Bekasi%20Sel.%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017144%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1623201450010!5m2!1sen!2sus"
          width="100%"
          height="200"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg"
          title="Google Maps"
        ></iframe>
      </div>
    </motion.div>
    </>
  );
};

export default ContactPage;
