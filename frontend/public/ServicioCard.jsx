// Componente ServicioCard actualizado
import React, { useState } from 'react';

export const ServicioCard = ({ titulo, descripcion, icono, detalles, isActive, onClick }) => {
  return (
    <div 
      className='contenedor-dato bg-[#272727] border-t-4 border-[#b03a3a] shadow-md p-6 rounded-lg flex flex-col transition-all duration-300 hover:shadow-xl cursor-pointer ${isActive ? '
    >
      <h3 className='font-semibold text-lg md:text-xl pb-3 text-[#b03a3a] flex items-center gap-3'>
        <span className="icon-bg bg-[#5a1f1f] rounded-full p-3 flex justify-center items-center">
          {icono}
        </span>
        {titulo}
      </h3>
      
      <div className='contenido-dato mb-4'>
        <p className="text-[#dde1e9] text-sm md:text-base font-light leading-relaxed">
          {descripcion}
        </p>
      </div>

      {/* Información adicional que se muestra al hacer clic */}
      {isActive && (
        <div className="detalles-adicionales mt-4 pt-4 border-t border-gray-600">
          <h4 className="text-[#dde1e9] font-medium mb-2">Lo que incluye:</h4>
          <ul className="list-disc list-inside text-[#dde1e9] text-sm space-y-1 mb-4">
            {detalles.map((detalle, index) => (
              <li key={index}>{detalle}</li>
            ))}
          </ul>
          

        </div>
      )}
    </div>
  );
};