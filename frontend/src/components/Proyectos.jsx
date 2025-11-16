// pages/Proyectos.jsx
import React, { useRef } from 'react';
import { ProyectoCard } from '../components/ProyectoCard'
import '../styles/proyectos.css'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { proyectos } from '../data/proyectos';

export const Proyectos = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={sectionRef}
      className={`contenedor-proyectos flex flex-col pt-12 pb-12 sm:pt-20 sm:pb-24 gap-6 mx-auto max-w-[1000px] ${isVisible ? 'animate-fadeUp' : 'opacity-0'
        }`}
    >
      <h1 className='titulo-seccion font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] relative inline-block text-[#dde1e9] mb-6'>
        Portafolio de Proyectos
        <span className="absolute left-0 bottom-[-6px] w-16 h-1 bg-[#b03a3a] rounded-full"></span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {proyectos.map((proyecto, index) => (
          <ProyectoCard key={index} {...proyecto} />
        ))}
      </div>
    </div>
  )
}
