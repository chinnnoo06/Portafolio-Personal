import React, { useRef, useState } from 'react';
import { ServicioCard } from '../components/ServicioCard';
import '../styles/servicios.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { servicios } from '../data/servicios';

export const Servicios = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeService, setActiveService] = useState(null);

  return (
    <section id="servicios" ref={sectionRef}
      className={`contenedor-servicios flex flex-col pt-12 pb-12 sm:pt-20 sm:pb-24 gap-6 mx-auto max-w-[1200px] px-4 ${isVisible ? 'animate-fadeUp' : 'opacity-0'
        }`}
    >
      <h1 className='titulo-seccion font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] relative inline-block mb-6'>
        Servicios
        <span className="absolute left-0 bottom-[-6px] w-16 h-1 bg-[#b03a3a] rounded-full"></span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
        {servicios.map((servicio, index) => (
          <ServicioCard
            key={index}
            {...servicio}
            isActive={activeService === index}
            onClick={() => setActiveService(activeService === index ? null : index)}
          />
        ))}
      </div>

      {/* Sección de metodología de trabajo */}
      <div className="contenedor-dato flex flex-col items-center justify-center bg-[#272727] shadow-md p-4 h-auto rounded border-t-4 border-[#b03a3a]">
        <h3 className='font-semibold text-lg md:text-xl pb-2 text-[#b03a3a] relative inline-block mb-2'>
          Metodología de Trabajo
          <span className="absolute left-1/2 bottom-[-6px] transform -translate-x-1/2 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="etapa text-center p-4">
            <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 text-base md:text-lg ">1</div>
            <h3 className="font-semibold text-[#dde1e9] text-base md:text-lg mb-2">Consulta</h3>
            <p className="text-sm md:text-base font-light leading-relaxed text-[#dde1e9]">Analizo las necesidades y objetivos</p>
          </div>
          <div className="etapa text-center p-4">
            <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 text-base md:text-lg ">2</div>
            <h3 className="font-semibold text-[#dde1e9] text-base md:text-lg mb-2">Propuesta</h3>
            <p className="text-sm md:text-base font-light leading-relaxed text-[#dde1e9]">Tengo la capacidad de diseñar una solución a la medida</p>
          </div>
          <div className="etapa text-center p-4">
            <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 text-base md:text-lg ">3</div>
            <h3 className="font-semibold text-[#dde1e9] text-base md:text-lg mb-2">Desarrollo</h3>
            <p className="text-sm md:text-base font-light leading-relaxed text-[#dde1e9]">Implemento en mis proyectos tecnologías modernas</p>
          </div>
          <div className="etapa text-center p-4">
            <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 text-base md:text-lg ">4</div>
            <h3 className="font-semibold text-[#dde1e9] text-base md:text-lg mb-2">Entrega</h3>
            <p className="text-sm md:text-base font-light leading-relaxed text-[#dde1e9]">Cada proyecto asegura calidad y soporte continuo</p>
          </div>
        </div>
      </div>


    </section>
  );
};