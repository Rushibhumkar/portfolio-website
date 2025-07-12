"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    company: "Swavishtek",
    role: "React Native Developer",
    description:
      "Working on AXP (Real Estate CRM) app involving dashboards, lead management, and Firebase integration. Optimized performance and UI consistency.",
  },
  {
    year: "2023 - 2024",
    company: "Quantiix",
    role: "Full Stack Developer",
    description:
      "Built modules for organization-based workflows. Used Node.js, MongoDB, and React Native to scale multi-tenant features.",
  },
  {
    year: "2022 - 2023",
    company: "Delicious Dabbas (Startup)",
    role: "Founder & Developer",
    description:
      "Created a tiffin delivery app for bachelors using the MERN stack. Managed app launch, customer onboarding, and technical operations.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gray-50 dark:bg-[#0f172a] py-20 px-6 sm:px-20 text-gray-800 dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-16 text-center text-blue-600 dark:text-blue-400"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-blue-400 ml-4 pl-4 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="absolute -left-3 top-1.5 w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-[#0f172a]" />
            <div>
              <h3 className="text-xl font-semibold">
                {exp.role}{" "}
                <span className="text-blue-500">@ {exp.company}</span>
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {exp.year}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
