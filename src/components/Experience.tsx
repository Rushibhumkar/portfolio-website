"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "Sept 2024 - Present",
    company: "Swavishtek",
    url: "https://swavishtek.com/",
    role: "React Native Developer",
    description:
      "Working on AXP (Real Estate CRM) app involving dashboards, lead management, and Firebase integration. Optimized performance and UI consistency.",
  },
  {
    year: "2023 - 2024",
    company: "Delicious Dabbas (Startup)",
    url: "https://www.ambitionbox.com/overview/delicious-dabbas-food-chain-and-co-overview?section=aboutUs",
    role: "Founder & Developer",
    description:
      "Created a tiffin delivery app for bachelors using the MERN stack. Managed app launch, customer onboarding, and technical operations.",
  },
  {
    year: "2022 - 2023",
    company: "Helpy Moto",
    url: "https://helpymoto.com/",
    role: "Full Stack Developer",
    description:
      "Developed and maintained full-stack features for a bike service app. Worked with React Native, Node.js, and MongoDB. Integrated GPS tracking and payment systems.",
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
            <span className="absolute -left-[25px] top-1/6 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-[#0f172a]" />

            <div>
              <h3 className="text-xl font-semibold">
                {exp.role}{" "}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  @ {exp.company}
                </a>
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
