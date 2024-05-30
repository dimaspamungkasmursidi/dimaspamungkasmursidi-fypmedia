import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-4 p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
        >
          <div className="text-lg font-bold w-44">
            <Link to="/">
              <img
                src="https://fypmedia.id/wp-content/themes/lmd-fypmedia/img/logo.png"
                alt="Logo"
                className="w-48"
              />
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-gray-400">
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex md:justify-end space-x-4 md:w-44">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <CiFacebook className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/dimas-pamungkas-mursidi-7511b9262/" className="hover:text-gray-400">
              <CiLinkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/dmspamungkass/" className="hover:text-gray-400">
              <CiInstagram className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="bg-gray-800 text-center py-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          © 2024 Dimas Pamungkas M. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
