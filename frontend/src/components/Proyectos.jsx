// pages/Proyectos.jsx
import React, { useRef } from 'react';
import { ProyectoCard } from '../components/ProyectoCard'
import '../styles/proyectos.css'
import codemx from '../assets/Codemx.jpg'
import sneakerspulse from '../assets/SneakersPulse.jpg'
import cpsoporte from '../assets/CPSoporte.jpg'
import portafolio from '../assets/Portafolio.jpg'
import reproductor from '../assets/Reproductor.jpg'
import {
  FaReact, FaBootstrap, FaNodeJs,
  FaPhp, FaJava, FaMicrosoft
} from 'react-icons/fa'
import {
  SiTailwindcss, SiAngular, SiExpress, SiMysql, SiSqlite
} from 'react-icons/si'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Proyectos = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true
  });

  const proyectos = [
    {
      img: codemx,
      alt: 'Proyecto CODEMX',
      titulo: 'CODEMX',
      descripcion: 'Plataforma web para programadores en México que recomienda vacantes personalizadas según sus preferencias y tecnologías dominadas. Incorpora funciones de red social para descubrir empresas y conocer el contenido que publican.',
      tecnologias: [
        { icon: <FaNodeJs className='text-sm sm:text-base md:text-lg text-[#68a063]' />, label: 'Node.js' },
        { icon: <FaReact className='text-sm sm:text-base md:text-lg text-[#61dafb]' />, label: 'React' },
        { icon: <FaBootstrap className='text-sm sm:text-base md:text-lg text-[#7952b3]' />, label: 'Bootstrap' },
        { icon: <FaPhp className='text-sm sm:text-base md:text-lg text-[#8892be]' />, label: 'PHP' },
        { icon: <SiMysql className='text-sm sm:text-base md:text-lg text-[#00758f]' />, label: 'MySQL' },
      ]
    },
    {
      img: sneakerspulse,
      alt: 'Proyecto SneakersPulse',
      titulo: 'SneakersPulse',
      descripcion: 'Plataforma de comercio electrónico especializada en la venta de calzado deportivo. Permite a los usuarios explorar, seleccionar y adquirir productos de manera intuitiva, integrando funcionalidades como carrito de compras, sistema de pagos y administración de productos.',
      tecnologias: [
        { icon: <FaNodeJs className='text-sm sm:text-base md:text-lg text-[#68a063]' />, label: 'Node.js' },
        { icon: <SiAngular className='text-sm sm:text-base md:text-lg text-[#dd1b16]' />, label: 'Angular' },
        { icon: <FaBootstrap className='text-sm sm:text-base md:text-lg text-[#7952b3]' />, label: 'Bootstrap' },
        { icon: <SiExpress className='text-sm sm:text-base md:text-lg text-white' />, label: 'Express.js' },
        { icon: <SiMysql className='text-sm sm:text-base md:text-lg text-[#00758f]' />, label: 'MySQL' },
      ]
    },
    {
      img: portafolio,
      alt: 'Proyecto Portafolio',
      titulo: 'Portafolio Web Personal',
      descripcion: 'Plataforma web desarrollada para presentar de forma organizada y visual mis proyectos más relevantes. Incluye información detallada de cada desarrollo, tecnologías utilizadas y funcionalidades clave, ofreciendo una visión profesional de mis habilidades como desarrollador full stack.',
      tecnologias: [
        { icon: <FaNodeJs className='text-sm sm:text-base md:text-lg text-[#68a063]' />, label: 'Node.js' },
        { icon: <FaReact className='text-sm sm:text-base md:text-lg text-[#61dafb]' />, label: 'React' },
        { icon: <SiTailwindcss className='text-sm sm:text-base md:text-lg text-[#38bdf8]' />, label: 'Tailwind' },
        { icon: <SiExpress className='text-sm sm:text-base md:text-lg text-white' />, label: 'Express.js' },
        { icon: <SiMysql className='text-sm sm:text-base md:text-lg text-[#00758f]' />, label: 'MySQL' },
      ]
    },
    {
      img: cpsoporte,
      alt: 'Proyecto CP Soporte',
      titulo: 'CP SOPORTE',
      descripcion: 'App de escritorio de gestión de Carta Porte desarrollado para una pequeña empresa, con el objetivo de facilitar la generación, control y almacenamiento de documentos de transporte.',
      tecnologias: [
        { icon: <FaMicrosoft className='text-sm sm:text-base md:text-lg text-[#239120]' />, label: 'C#' },
        { icon: <SiSqlite className='text-sm sm:text-base md:text-lg text-[#003b57]' />, label: 'SQLite' },
      ]
    },
    {
      img: reproductor,
      alt: 'Proyecto Reproductor',
      titulo: 'Reproductor de Música',
      descripcion: 'App móvil desarrollada en Java que permite reproducir archivos de audio almacenados localmente. Ofrece una interfaz intuitiva para gestionar listas de reproducción, controlar la reproducción y almacenar información del usuario y sus canciones favoritas mediante MySQL.',
      tecnologias: [
        { icon: <FaJava className='text-sm sm:text-base md:text-lg text-[#007396]' />, label: 'Java' },
        { icon: <SiMysql className='text-sm sm:text-base md:text-lg text-[#00758f]' />, label: 'MySQL' },
      ]
    }
  ]

  return (
    <div 
      ref={sectionRef}
      className={`contenedor-proyectos flex flex-col pt-12 pb-12 sm:pt-20 sm:pb-24 gap-5 mx-auto max-w-[1000px] ${
        isVisible ? 'animate-fadeUp' : 'opacity-0'
      }`}
    >
      <h1 className='titulo-seccion font-bold text-[18px] sm:text-[22px] md:text-[25px] lg:text-[30px] relative inline-block text-[#dde1e9]'>
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
