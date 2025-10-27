"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Page() {
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <div className="min-h-screen h-auto w-full relative overflow-x-hidden overflow-y-auto bg-[#f8f8f8]">
      {/* Fondo con partículas */}
      <AnimatedBackground />
      
      {/* Contenido con z-index superior */}
      <div className="relative z-10 min-h-screen">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {activeSection === "inicio" && <Hero setActiveSection={setActiveSection} />}
        {activeSection === "sobre-mi" && <About />}
        {activeSection === "tecnologias" && <Technologies />}
        {activeSection === "contacto" && <Contact />}
      </div>
    </div>
  );
}