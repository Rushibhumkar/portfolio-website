import { notFound } from "next/navigation";
import { allProjects } from "@/constants/data";

export default function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white px-6 py-12 sm:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          {project.title}
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base">
          {project.description}
        </p>

        <div className="w-full h-48 bg-white p-4 flex items-center justify-center">
          <project.image className="max-h-full max-w-full object-contain" />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 mt-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-800 text-sm px-3 py-1 rounded-full dark:text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.modules && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Modules</h2>
            <ul className="list-disc pl-5 text-gray-800 dark:text-gray-300">
              {project.modules.map((module, index) => (
                <li key={index} className="mb-1">
                  {module}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Live Project →
          </a>
        )}
      </div>
    </main>
  );
}
