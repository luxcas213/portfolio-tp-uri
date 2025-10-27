"use client";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gray-900">
          Bienvenido
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Desarrollador Full Stack | Diseñador | Creativo
        </p>
        <button
          onClick={() => setActiveSection("tecnologias")}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Ver tecnologías
        </button>
      </div>
    </section>
  );
}
