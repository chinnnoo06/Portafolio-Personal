import React, { use, useState } from 'react';
import '../styles/inicio.css'
import imagen from '../assets/img1.jpg'
import { Link } from 'react-router-dom';

export const Inicio = () => {

  
  const descargarCV = async () => {
    try {
      const API_BASE = window.location.hostname === 'localhost'
        ? 'http://localhost:5000'
        : 'https://www.devfranciscoinda.com.mx';

      const response = await fetch(`${API_BASE}/api/descargarcv`, {
        method: 'GET',
      });

      if (!response.ok) throw new Error('Error al descargar el CV');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'CV_FranciscoInda.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error al descargar:', error);
    }
  };


  return (
    <div className='contenedor-inicio flex justify-center items-center pt-44 pb-28 gap-10 mx-auto max-w-[1000px]'>
      
      {/* TEXTO A LA IZQUIERDA */}
      <div className='col1 flex flex-col'>
        <div className='contenedor-texto'>
          <h3 className='font-semibold text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px]'>
            Hola, soy Francisco Inda
          </h3>

          <h1 className='font-bold text-[18px] sm:text-[22px] md:text-[25px] lg:text-[30px] mt-1'>
            Tecnólogo y estudiante de ingenieria en Desarrollo de Software
          </h1>

          <span className='text-[11px] sm:text-[13px] md:text-[15px] lg:text-[16px] font-extralight mt-2 block'>
            Me apasiona transformar ideas en soluciones digitales que realmente importan. A lo largo de mi formación,
            he adquirido habilidades sólidas en desarrollo web y software, y las he puesto en práctica creando proyectos
            modernos, funcionales y centrados en la experiencia del usuario.
            <br /><br />
            Mi objetivo es crear tecnología que inspire, resuelva problemas reales y genere valor. Soy una persona
            autodidacta, curiosa por naturaleza y con una fuerte orientación al detalle. Siempre busco mejorar y
            aprender nuevas herramientas que me permitan llevar cada proyecto al siguiente nivel.
          </span>
        </div>

        {/* BOTONES */}
        <div className='contenedor-botones flex flex-wrap gap-4 pt-4'>

          <button className='px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm md:px-5 md:py-2 md:text-base bg-[#b03a3a] text-white rounded hover:bg-[#932f2f] transition' onClick={descargarCV}>
            Descargar CV
          </button>

          <Link
              to="/contacto"
              className='px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm md:px-5 md:py-2 md:text-base border border-[#b03a3a] text-[#b03a3a] rounded hover:bg-[#b03a3a] hover:text-white transition'
            >
              Contactar
            </Link>
        </div>

        {/* ICONOS SOCIALES */}
        <div className='redes-sociales flex gap-4 pt-4 text-lg sm:text-xl md:text-2xl'>
            <a href='https://www.linkedin.com/in/francisco-gabriel-inda-lomeli-3ab9b0323' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-linkedin'></i></a>
            <a href='https://github.com/chinnnoo06' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-github'></i></a>
            <a href='https://wa.me/523318237277?text=Hola%20Francisco%2C%20quiero%20más%20información.' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-whatsapp'></i></a>
            <a href='mailto:franciscoinda@codemx.net' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fas fa-envelope'></i></a>
        </div>
      </div>

      {/* IMAGEN A LA DERECHA */}
      <div className='col2'>
        <div className='relative rounded-full overflow-hidden w-[300px] h-[300px] border-2 border-[#b03a3a] shadow-lg'>
          <img src={imagen} alt='foto de francisco inda' className='object-cover w-full h-full' />
        </div>
      </div>
    </div>
  )
}
