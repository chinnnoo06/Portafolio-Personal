import React, { useState } from 'react';

export const ProyectoCard = ({ img, alt, titulo, descripcion, tecnologias }) => {

  return (
    <div className='contenedor-dato bg-[#272727] shadow-md h-auto rounded-lg flex flex-col overflow-hidden'>
      <div className="relative w-full h-56 overflow-hidden bg-[#353535]">
        <img
          src={img}
          alt={alt}
          className='w-full h-full object-contain'
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-[#b03a3a] font-semibold text-lg md:text-xl mb-2">
          {titulo}
        </h3>

        <div className='contenedor-texto mb-4 flex-grow'>
          <p className="text-[#dde1e9] text-sm md:text-base font-light leading-relaxed">
            {descripcion}
          </p>
        </div>

        <div className="contenido-tecnologias flex flex-wrap gap-3 pt-2 border-t border-gray-600">
          {tecnologias.map((tech, index) => (
            <div key={index} className='flex flex-col items-center p-2 bg-[#353535] rounded-lg'>
              <div className="text-lg mb-1">{tech.icon}</div>
              <span className='text-xs text-[#dde1e9]'>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};