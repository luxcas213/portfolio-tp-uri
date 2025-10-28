"use client";

import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';


export default function Contact() {
  const contactInfo = {
    name: "Uriel Zaltzman",
    role: "Desarrollador Full Stack",
    email: "uri.zaltzman@gmail.com",
    location: "Buenos Aires, Argentina",
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/uri-zaltzman-405662357/",
      color: "hover:text-blue-700",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/tu-usuario",
      color: "hover:text-gray-900",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/uri.zaltzman",
      color: "hover:text-pink-600",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: `mailto:${contactInfo.email}`,
      color: "hover:text-red-600",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gray-900 text-center">
          Contacto
        </h2>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Información Personal */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl text-white">
              <FaUser />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {contactInfo.name}
            </h3>
            <p className="text-xl text-gray-600 mb-2">{contactInfo.role}</p>
            <p className="text-gray-500 flex items-center justify-center gap-2">
              <FaMapMarkerAlt /> {contactInfo.location}
            </p>
          </div>

          {/* Email */}
          <div className="mb-8 text-center">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 text-lg text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <FaEnvelope />
              {contactInfo.email}
            </a>
          </div>

          {/* Redes Sociales */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-600 mb-6 text-lg">
              Conéctate conmigo en:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 ${social.color} group`}
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span className="font-medium text-gray-700">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Mensaje de llamada a la acción */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              ¿Tienes un proyecto en mente? ¡No dudes en contactarme!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
