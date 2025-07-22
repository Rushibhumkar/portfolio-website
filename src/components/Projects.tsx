"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { allProjects } from "@/constants/data";
import { myConsole } from "@/utils/myConsole";
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
        {allProjects.map((project, index) => {
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={`/projects/${project.slug}`}>
                <div>
                  <div className="w-full h-48 bg-white p-4 flex items-center justify-center">
                    <project.image className="max-h-full max-w-full object-contain" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
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
                        onClick={(e) => e.stopPropagation()}
                      >
                        Play Store →
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
