import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../atoms/Button/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Header -----------------------------------------------------------------------------------------
    <header className="bg-gray-900 text-white w-full">
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center space-x-4">
          {/* Search input */}
          <motion.div
            className="hidden md:block w-[12rem]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Cari Berita..."
              className="p-1 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-700 border"
            />
          </motion.div>
          {/* Mobile menu button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </motion.button>
        </div>
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-lg font-bold">
            <Link to="/">
              <img
                src="https://fypmedia.id/wp-content/themes/lmd-fypmedia/img/logo.png"
                alt="Logo.png"
                className="w-32 sm:w-56"
              />
            </Link>
          </div>
        </motion.div>
        {/* Buttons */}
        <motion.div
          className="hidden md:flex md:items-end md:justify-end gap-4 w-[12rem]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/about">
            <Button color="bg-gray-200 hover:bg-gray-700 text-black hover:text-white">Register</Button>
          </Link>
          <Link to="/about">
            <Button color="hover:bg-gray-700 text-white hover:text-white border">Login</Button>
          </Link>
        </motion.div>
      </div>

      {/* Navbar Mobile -------------------------------------------------------------------------------- */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-gray-900 p-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/news" className="hover:text-gray-400">
              News
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
            <br />
            <input
              type="text"
              placeholder="Cari Berita..."
              className="mt-2 p-1 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600 border"
            />
          </nav>
        </motion.div>
      )}

      {/* Navbar Bawah -------------------------------------------------------------------------------- */}
      <motion.div
        className="hidden md:flex items-center justify-center py-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <nav className="md:flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/news" className="hover:text-gray-400">
            News
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
