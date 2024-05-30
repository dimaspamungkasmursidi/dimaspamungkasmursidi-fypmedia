// src/components/ContactForm/ContactForm.js
import React from "react";
import { motion } from "framer-motion";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";

const ContactForm = () => {
  return (
    <section className="py-8 px-6">
      <Title>Kontak</Title>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 rounded-lg shadow-lg p-6"
      >
        <form>
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nama
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nama Anda"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="contoh@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Pesan
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Pesan Anda"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <Button type="submit">Kirim</Button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
