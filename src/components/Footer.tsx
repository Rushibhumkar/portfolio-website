"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 py-10 px-6 sm:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6"
      >
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Rushikesh Bhumkar. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="mailto:rushibhumkar11@gmail.com"
            className="hover:text-blue-500 transition-colors"
            target="_blank"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Rushibhumkar"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/rushibh"
            className="hover:text-blue-600 transition-colors"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
