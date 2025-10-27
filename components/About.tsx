"use client";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
          Sobre Mí
        </h2>
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            Soy un desarrollador apasionado por crear experiencias digitales únicas
            y funcionales. Me especializo en tecnologías modernas de desarrollo web.
          </p>
          <p>
            Con experiencia en React, Next.js, TypeScript y más, me encanta transformar
            ideas en productos digitales de alta calidad.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-blue-600 mb-2">Frontend</h3>
              <p className="text-sm">React, Next.js, TypeScript</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-blue-600 mb-2">Backend</h3>
              <p className="text-sm">Node.js, Express, APIs</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-blue-600 mb-2">Diseño</h3>
              <p className="text-sm">UI/UX, Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
