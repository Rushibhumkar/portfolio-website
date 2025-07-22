"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-[#0f172a] text-gray-800 dark:text-white px-6 py-20 sm:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        <p className="text-center text-sm sm:text-base max-w-xl text-gray-600 dark:text-gray-300">
          Have a project in mind, want to collaborate, or just say hi? Feel free
          to connect with me:
        </p>

        <div className="flex gap-6 text-3xl mt-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rushibhumkar11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/Rushibhumkar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rushibh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="mt-10 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Rushikesh Bhumkar. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
