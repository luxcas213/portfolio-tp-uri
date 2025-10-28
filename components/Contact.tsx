"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
      url: "https://github.com/UriZaltzman",
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
    <section className="min-h-screen flex items-center justify-center px-6 py-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
          Contacto
        </h2>
        
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          {/* Información Personal - Compacta */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6 pb-6 border-b border-gray-200">
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
              <Image
                src="/posh.png"
                alt="Uriel Zaltzman"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {contactInfo.name}
              </h3>
              <p className="text-lg text-gray-600 mb-1">{contactInfo.role}</p>
              <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 text-sm">
                <FaMapMarkerAlt /> {contactInfo.location}
              </p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <p className="text-center text-gray-600 mb-5 text-lg font-semibold">
              Conéctate conmigo en:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-5 p-5 rounded-xl bg-linear-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 shadow-md hover:shadow-xl transition-all duration-300 ${social.color} group border border-gray-200`}
                >
                  <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg md:text-xl text-gray-800">
                      {social.name}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      {social.name === "Email" ? contactInfo.email : `@${social.name === "LinkedIn" ? "uri-zaltzman" : social.name === "GitHub" ? "UriZaltzman" : "uri.zaltzman"}`}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Mensaje de llamada a la acción */}
          <div className="mt-5 text-center">
            <p className="text-gray-600 text-base">
              ¿Tienes un proyecto en mente? ¡No dudes en contactarme!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
