"use client";

const projects = [
  {
    id: 1,
    title: "wallettic",
    description: "una billetera virtual para gente de tercera edad",
    technologies: "React, Node.js, MongoDB, Socket.io",
    link: "https://wallettic.vercel.app"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con pasarela de pagos integrada",
    technologies: "Next.js, Express, PostgreSQL, Stripe",
    link: "https://ecommerce-demo.vercel.app"
  },
  {
    id: 3,
    title: "todo app",
    description: "Aplicación de tareas con creación, edición, prioridades, etiquetas y sincronización en tiempo real",
    technologies: "React, TypeScript, Firebase, TailwindCSS",
    link: "https://blog-cms-demo.vercel.app"
  },
  {
    id: 4,
    title: "aplicacion de clima",
    description: "Dashboard interactivo del clima con visualizaciones y pronósticos extendidos",
    technologies: "Vue.js, Node.js, OpenWeather API, Chart.js",
    link: "https://weather-dashboard-demo.vercel.app"
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-slate-50">
      {/* Decorative background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Proyectos
          </h2>
          <p className="text-gray-600 text-lg">Explorá mis trabajos más recientes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Glassmorphism card */}
              <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Accent line */}
                <div className="h-1.5 w-16 bg-blue-500 rounded-full mb-6"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Stack</span>
                  <p className="text-sm text-gray-600 mt-1 font-medium">
                    {project.technologies}
                  </p>
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Ver Proyecto</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}