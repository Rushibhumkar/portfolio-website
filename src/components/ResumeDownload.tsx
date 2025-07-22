"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const ResumeDownload = () => {
  return (
    <section className="bg-white dark:bg-[#0f172a] py-10 px-6 sm:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
      >
        <FaDownload className="text-xl" />
        <a
          href="https://drive.google.com/drive/folders/1lRR2zGsh74XrKfZ0tcy9-WsSq_NsEcgF"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download My Resume
        </a>
      </motion.div>
    </section>
  );
};

export default ResumeDownload;
