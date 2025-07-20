import React, { useRef } from 'react';
import { ServicioCard } from '../components/ServicioCard'
import '../styles/servicios.css'
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs,
  FaPhp, FaJava, FaMicrosoft
} from 'react-icons/fa'
import {
  SiTailwindcss, SiAngular, SiExpress, SiMysql, SiFirebase, SiFigma, SiC, SiCplusplus, SiSqlite
} from 'react-icons/si'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Servicios = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true
  });

  const servicios = [
    {
      titulo: 'Diseño UI/UX',
      descripcion: 'Creación de interfaces atractivas y funcionales en Figma. Prototipado interactivo y diseño centrado en el usuario para páginas web y apps móviles.',
      icono: <i className="fa-solid fa-object-ungroup text-[#b03a3a]"></i>,
      tecnologias: [
        { icon: <SiFigma className="text-sm sm:text-base md:text-lg text-[#f24e1e]" />, label: 'Figma' }
      ]
    },
    {
      titulo: 'Desarrollo Web (Frontend + Backend)',
      descripcion: 'Creación de páginas web completas, responsivas y funcionales. Desde el diseño visual hasta el manejo de bases de datos y lógica del servidor.',
      icono: <i className="fa-solid fa-address-card text-[#b03a3a]"></i>,
      tecnologias: [
        { icon: <FaHtml5 className='text-sm sm:text-base md:text-lg text-[#e34c26]' />, label: 'HTML5' },
        { icon: <FaCss3Alt className='text-sm sm:text-base md:text-lg text-[#264de4]' />, label: 'CSS3' },
        { icon: <FaJsSquare className='text-sm sm:text-base md:text-lg text-[#f0db4f]' />, label: 'JavaScript' },
        { icon: <FaReact className='text-sm sm:text-base md:text-lg text-[#61dafb]' />, label: 'React' },
        { icon: <SiAngular className='text-sm sm:text-base md:text-lg text-[#dd1b16]' />, label: 'Angular' },
        { icon: <FaBootstrap className='text-sm sm:text-base md:text-lg text-[#7952b3]' />, label: 'Bootstrap' },
        { icon: <SiTailwindcss className='text-sm sm:text-base md:text-lg text-[#38bdf8]' />, label: 'Tailwind' },
        { icon: <FaNodeJs className='text-sm sm:text-base md:text-lg text-[#68a063]' />, label: 'Node.js' },
        { icon: <SiExpress className='text-sm sm:text-base md:text-lg text-white' />, label: 'Express.js' },
        { icon: <FaPhp className='text-sm sm:text-base md:text-lg text-[#8892be]' />, label: 'PHP' },
        { icon: <SiMysql className='text-sm sm:text-base md:text-lg text-[#00758f]' />, label: 'MySQL' },
        { icon: <SiFirebase className='text-sm sm:text-base md:text-lg text-[#ffca28]' />, label: 'Firebase' }
      ]
    },
    {
      titulo: 'Aplicaciones de Escritorio',
      descripcion: 'Desarrollo de programas para Windows usando C++, C# o Java. Ideal para herramientas empresariales, control de inventarios y automatización.',
      icono: <i className="fa-solid fa-computer text-[#b03a3a]"></i>,
      tecnologias: [
        { icon: <SiC className='text-sm sm:text-base md:text-lg text-[#555]' />, label: 'C' },
        { icon: <SiCplusplus className='text-sm sm:text-base md:text-lg text-[#00599c]' />, label: 'C++' },
        { icon: <FaMicrosoft className='text-sm sm:text-base md:text-lg text-[#239120]' />, label: 'C#' },
        { icon: <SiMysql className='text-sm sm:text-base md:text-lg text-[#00758f]' />, label: 'MySQL' },
        { icon: <SiSqlite className='text-sm sm:text-base md:text-lg text-[#003b57]' />, label: 'SQLite' },
        { icon: <SiFirebase className='text-sm sm:text-base md:text-lg text-[#ffca28]' />, label: 'Firebase' }
      ]
    },
    {
      titulo: 'Desarrollo Móvil',
      descripcion: 'Creación de aplicaciones móviles nativas con Java para Android o multiplataforma con C#. Ideal para apps empresariales o personales.',
      icono: <i className="fa-solid fa-mobile-screen-button text-[#b03a3a]"></i>,
      tecnologias: [
        { icon: <FaJava className='text-sm sm:text-base md:text-lg text-[#007396]' />, label: 'Java' },
        { icon: <SiMysql className='text-sm sm:text-base md:text-lg text-[#00758f]' />, label: 'MySQL' },
        { icon: <SiFirebase className='text-sm sm:text-base md:text-lg text-[#ffca28]' />, label: 'Firebase' }
      ]
    }
  ]

  return (
    <div  ref={sectionRef}
          className={`contenedor-servicios flex flex-col pt-12 pb-12 sm:pt-20 sm:pb-24 gap-5 mx-auto max-w-[1000px] ${
          isVisible ? 'animate-fadeUp' : 'opacity-0'
           }`}
    >
    
      <h1 className='titulo-seccion font-bold text-[18px] sm:text-[22px] md:text-[25px] lg:text-[30px] relative inline-block'>
        Servicios
        <span className="absolute left-0 bottom-[-6px] w-16 h-1 bg-[#b03a3a] rounded-full"></span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {servicios.map((servicio, index) => (
          <ServicioCard key={index} {...servicio} />
        ))}
      </div>
    </div>
  )
}
