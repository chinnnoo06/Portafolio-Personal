import React from 'react';

export const ProyectoCard = ({ img, alt, titulo, descripcion, tecnologias }) => (
  <div className='contenedor-dato bg-[#272727] shadow-md h-auto rounded flex flex-col'>
    <img
        src={img}
        alt={alt}
        className="w-full h-48 object-cover object-top rounded-t"
    />

    <div className="p-4 flex flex-col">
      <h3 className="text-[#b03a3a] font-semibold text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px]">
        {titulo}
      </h3>

      <div className='contenedor-texto h-32'>
        <span className="text-[#dde1e9] text-[13px] lg:text-[14px] font-extralight block pt-2">
          {descripcion}
        </span>
      </div>

      <div className="contenido-tecnologias flex flex-wrap gap-5 pt-4">
        {tecnologias.map((tech, index) => (
          <div key={index} className='flex flex-col items-center'>
            {tech.icon}
            <span className='text-xs text-[#dde1e9] mt-1'>{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
