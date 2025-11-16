import codemx from '../assets/CodeMX.jpg'
import sneakerspulse from '../assets/SneakersPulse.jpg'
import cpsoporte from '../assets/CPSoporte.jpg'
import portafolio from '../assets/PortafolioWeb.jpg'
import reproductor from '../assets/Reproductor.jpg'
import druckenmexicopromocionales from '../assets/DruckenMexicoPromocionales.jpg'
import { FaReact, FaBootstrap, FaNodeJs, FaPhp, FaJava, FaMicrosoft } from 'react-icons/fa';
import { SiTailwindcss, SiAngular, SiExpress, SiMysql, SiSqlite, SiMongodb } from 'react-icons/si';

export const proyectos = [
    {
      img: codemx,
      alt: 'Proyecto CODEMX',
      titulo: 'CODEMX',
      descripcion: 'Plataforma web orientada a programadores en México que combina funcionalidades de bolsa de trabajo y red social. Ofrece recomendaciones de vacantes personalizadas según tecnologías dominadas y preferencias del usuario, además de permitir la interacción con empresas y el acceso a su contenido publicado. Desarrollada con React y Bootstrap en el frontend, junto con un backend en PHP y Node.js que se conecta a una base de datos MySQL para la gestión eficiente de usuarios, vacantes y publicaciones.',
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
      descripcion: 'E-commerce especializado en calzado deportivo que ofrece una experiencia de compra rápida y sencilla. Los usuarios pueden explorar el catálogo de productos, añadirlos al carrito, gestionar pedidos y realizar pagos de forma segura. Incluye un sistema de administración para gestionar inventario y órdenes. El frontend se desarrolló con Angular y Bootstrap para lograr una interfaz ágil y responsiva, mientras que el backend en Node.js con Express se conecta a MySQL para garantizar la gestión estructurada de la información.',
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
      descripcion: 'Aplicación web diseñada para mostrar de forma profesional los proyectos desarrollados como full stack developer. Cada proyecto incluye descripción, tecnologías utilizadas y características principales, lo que permite a potenciales clientes o empleadores tener una visión clara de las habilidades técnicas. Desarrollada con React y Tailwind para un diseño moderno y responsivo, junto con un backend en Express y Node.js que conecta con MySQL para la gestión de datos.',
      tecnologias: [
        { icon: <FaNodeJs className='text-sm sm:text-base md:text-lg text-[#68a063]' />, label: 'Node.js' },
        { icon: <FaReact className='text-sm sm:text-base md:text-lg text-[#61dafb]' />, label: 'React' },
        { icon: <SiTailwindcss className='text-sm sm:text-base md:text-lg text-[#38bdf8]' />, label: 'Tailwind' },
        { icon: <SiExpress className='text-sm sm:text-base md:text-lg text-white' />, label: 'Express.js' },
        { icon: <SiMysql className='text-sm sm:text-base md:text-lg text-[#00758f]' />, label: 'MySQL' },
      ]
    },
    {
      img: druckenmexicopromocionales,
      alt: 'Drucken México Promocionales',
      titulo: 'Drucken México Promocionales',
      descripcion: 'Plataforma web tipo e-commerce con diseño de landing page, desarrollada para una empresa especializada en artículos promocionales. Incluye catálogo dinámico de productos, integración con base de datos NoSQL y una interfaz moderna e intuitiva construida con React y Tailwind. El backend, implementado con Express y Node.js, gestiona la lógica de negocio y la comunicación con MongoDB, garantizando escalabilidad y rendimiento.',
      tecnologias: [
        { icon: <FaNodeJs className='text-sm sm:text-base md:text-lg text-[#68a063]' />, label: 'Node.js' },
        { icon: <FaReact className='text-sm sm:text-base md:text-lg text-[#61dafb]' />, label: 'React' },
        { icon: <SiTailwindcss className='text-sm sm:text-base md:text-lg text-[#38bdf8]' />, label: 'Tailwind' },
        { icon: <SiExpress className='text-sm sm:text-base md:text-lg text-white' />, label: 'Express.js' },
        { icon: <SiMongodb className='text-sm sm:text-base md:text-lg text-[#47A248]' />, label: 'MongoDB' },
      ]
    },
    {
      img: cpsoporte,
      alt: 'Proyecto CP Soporte',
      titulo: 'CP SOPORTE',
      descripcion: 'Aplicación de escritorio desarrollada en C# para la gestión de documentos de Carta Porte en una pequeña empresa de transporte. Facilita la generación, control y almacenamiento de la información requerida por el SAT, ofreciendo una solución práctica para digitalizar procesos administrativos. Utiliza SQLite como base de datos ligera y eficiente, ideal para entornos de escritorio.',
      tecnologias: [
        { icon: <FaMicrosoft className='text-sm sm:text-base md:text-lg text-[#239120]' />, label: 'C#' },
        { icon: <SiSqlite className='text-sm sm:text-base md:text-lg text-[#003b57]' />, label: 'SQLite' },
      ]
    },
    {
      img: reproductor,
      alt: 'Proyecto Reproductor',
      titulo: 'Reproductor de Música',
      descripcion: 'Aplicación móvil desarrollada en Java para la reproducción de archivos de audio locales. Ofrece una interfaz sencilla e intuitiva que permite gestionar listas de reproducción, controlar la música y almacenar información de usuarios junto con sus canciones favoritas. Implementa MySQL como base de datos para mantener la persistencia y organización de los datos de forma estructurada.',
      tecnologias: [
        { icon: <FaJava className='text-sm sm:text-base md:text-lg text-[#007396]' />, label: 'Java' },
        { icon: <SiMysql className='text-sm sm:text-base md:text-lg text-[#00758f]' />, label: 'MySQL' },
      ]
    }

  ]