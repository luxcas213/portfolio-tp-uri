"use client";

export default function Technologies() {
  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind CSS", icon: "🎨" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚂" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
      ],
    },
    {
      category: "Herramientas",
      items: [
        { name: "Git", icon: "📦" },
        { name: "Docker", icon: "🐳" },
        { name: "VS Code", icon: "💻" },
        { name: "Figma", icon: "🎯" },
      ],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gray-900 text-center">
          Tecnologías
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Estas son las tecnologías y herramientas con las que trabajo para crear
          experiencias digitales modernas y eficientes.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center border-b-2 border-blue-600 pb-3">
                {tech.category}
              </h3>
              <div className="space-y-4">
                {tech.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-lg font-medium text-gray-700">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
