import React, { useRef, useState } from 'react';
import { ServicioCard } from '../components/ServicioCard';
import '../styles/servicios.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Servicios = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeService, setActiveService] = useState(null);

  const servicios = [
    {
      titulo: 'Diseño UI/UX',
      descripcion: 'Creación de interfaces atractivas y funcionales en Figma. Prototipado interactivo y diseño centrado en el usuario para páginas web y apps móviles.',
      icono: <i className="fa-solid fa-object-ungroup text-[#b03a3a]"></i>,
      detalles: [
        'Diseño de wireframes y mockups',
        'Prototipos interactivos en Figma',
        'Sistemas de diseño consistentes',
        'Pruebas de usabilidad',
        'Diseño responsive y adaptable'
      ]
    },
    {
      titulo: 'Desarrollo Web (Frontend + Backend)',
      descripcion: 'Creación de páginas web completas, responsivas y funcionales. Desde el diseño visual hasta el manejo de bases de datos y lógica del servidor.',
      icono: <i className="fa-solid fa-address-card text-[#b03a3a]"></i>,
      detalles: [
        'Desarrollo con React o Angular ',
        'Backend con Node.js o PHP ',
        'Bases de datos SQL y NoSQL',
        'APIs RESTful',
        'Despliegue en servidores'
      ]
    },
    {
      titulo: 'Aplicaciones de Escritorio',
      descripcion: 'Desarrollo de programas para Windows usando C++, C# o Java. Ideal para herramientas empresariales, control de inventarios y automatización.',
      icono: <i className="fa-solid fa-computer text-[#b03a3a]"></i>,
      detalles: [
        'Interfaces nativas de Windows',
        'Aplicaciones de base de datos',
        'Integración con hardware',
        'Aplicaciones multi-hilo',
        'Sistemas de autenticación'
      ]
    },
    {
      titulo: 'Desarrollo Móvil',
      descripcion: 'Creación de aplicaciones móviles nativas con Java para Android o multiplataforma con C#. Ideal para apps empresariales o personales.',
      icono: <i className="fa-solid fa-mobile-screen-button text-[#b03a3a]"></i>,
      detalles: [
        'Apps nativas Android con Java/Kotlin',
        'Integración con APIs nativas',
        'Publicación en stores'
      ]
    }
  ];

  return (
    <section id="servicios" ref={sectionRef}
      className={`contenedor-servicios flex flex-col pt-12 pb-12 sm:pt-20 sm:pb-24 gap-5 mx-auto max-w-[1200px] px-4 ${isVisible ? 'animate-fadeUp' : 'opacity-0'
        }`}
    >
      <h1 className='titulo-seccion font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] relative inline-block mb-6'>
        Servicios
        <span className="absolute left-0 bottom-[-6px] w-16 h-1 bg-[#b03a3a] rounded-full"></span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
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
      <div className="metodologia-trabajo bg-[#272727] rounded-lg p-6 md:p-8">
        <h2 className="font-semibold text-lg md:text-xl pb-2 text-[#b03a3a] mb-6 text-center">Metodología de Trabajo</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="etapa text-center p-4">
            <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
            <h3 className="font-semibold text-[#dde1e9] mb-2">Consulta</h3>
            <p className="text-sm text-[#dde1e9]">Analizamos tus necesidades y objetivos</p>
          </div>
          <div className="etapa text-center p-4">
            <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
            <h3 className="font-semibold text-[#dde1e9] mb-2">Propuesta</h3>
            <p className="text-sm text-[#dde1e9]">Diseñamos una solución a medida</p>
          </div>
          <div className="etapa text-center p-4">
            <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
            <h3 className="font-semibold text-[#dde1e9] mb-2">Desarrollo</h3>
            <p className="text-sm text-[#dde1e9]">Implementamos con tecnologías modernas</p>
          </div>
          <div className="etapa text-center p-4">
            <div className="numero-etapa w-10 h-10 bg-[#b03a3a] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">4</div>
            <h3 className="font-semibold text-[#dde1e9] mb-2">Entrega</h3>
            <p className="text-sm text-[#dde1e9]">Aseguramos calidad y soporte continuo</p>
          </div>
        </div>
      </div>


    </section>
  );
};