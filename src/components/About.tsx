"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[80vh] bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white flex flex-col justify-center items-center px-6 py-20 sm:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
      >
        I’m a passionate developer who loves creating seamless mobile and web
        experiences. With 3 years of experience in React Native and 2+ years in
        full-stack (Node.js, Next.js), I specialize in building scalable apps
        that users love. Previously, I co-founded
        <span className="text-blue-500 font-semibold"> Delicious Dabbas</span>,
        a tiffin startup for bachelors, where I led the mobile and web app
        development.
      </motion.p>
    </section>
  );
};

export default About;
