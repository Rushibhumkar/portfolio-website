"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    name: "React Native",
    icon: <FaReact size={40} className="text-blue-500" />,
  },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="text-blue-600" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={40} className="text-yellow-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={40} className="text-black dark:text-white" />,
  },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-orange-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[70vh] bg-gray-100 dark:bg-[#1e293b] text-gray-800 dark:text-white py-20 px-6 sm:px-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400"
      >
        Skills & Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#0f172a] shadow-lg rounded-xl p-5 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <p className="mt-3 text-sm sm:text-base font-medium">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
