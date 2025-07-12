"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Delicious Dabbas",
    description:
      "A tiffin delivery app for bachelors with user and partner apps. Built using MERN stack and deployed on Play Store.",
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    image: "/projects/dabbas.jpg", // add your image inside public/projects/
    link: "https://play.google.com/store/apps/details?id=com.deliciousdabbas",
  },
  {
    title: "AXP Real Estate CRM",
    description:
      "Real estate business solution with dashboards, filtering, lead tracking, and notifications. Built during my time at Swavishtek.",
    tech: ["React Native", "Firebase", "Redux"],
    image: "/projects/axp.jpg",
    link: "#",
  },
  {
    title: "Resume Builder",
    description:
      "Web app for creating and managing professional resumes using Next.js, Node.js, and AWS hosting.",
    tech: ["Next.js", "Node.js", "AWS"],
    image: "/projects/resume.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white px-6 py-20 sm:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
