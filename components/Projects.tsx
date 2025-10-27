"use client";

export default function Projects() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Una aplicación web moderna con React y Next.js",
      tech: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Proyecto 2",
      description: "Sistema de gestión con autenticación y base de datos",
      tech: ["TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      title: "Proyecto 3",
      description: "Landing page animada con efectos interactivos",
      tech: ["React", "Framer Motion", "CSS"],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gray-900 text-center">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
