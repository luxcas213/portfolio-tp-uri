"use client";

import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export default function Technologies() {
  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="text-gray-700" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      ],
    },
    {
      category: "Herramientas",
      items: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "VS Code", icon: <VscCode className="text-[#007ACC]" /> },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
      ],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 text-center">
          Tecnologías
        </h2>
        <p className="text-base text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Tecnologías y herramientas con las que trabajo
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center border-b-2 border-blue-600 pb-2">
                {tech.category}
              </h3>
              <div className="space-y-2">
                {tech.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-base font-medium text-gray-700">
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
