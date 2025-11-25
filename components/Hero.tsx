"use client";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texto a la izquierda */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gray-900">
            Uriel Zaltzman
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Desarrollador Full Stack | Diseñador | Creativo
          </p>
          <button
            onClick={() => setActiveSection("proyectos")}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Ver proyectos
          </button>
        </div>

        {/* Imagen circular a la derecha */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-200 shadow-2xl">
            <img
              src="/posh.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
