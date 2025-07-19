import React from 'react'

export const ServicioCard = ({ titulo, descripcion, icono, tecnologias }) => {
  return (
    <div className="contenedor-dato bg-[#272727] border-t-4 border-[#b03a3a] shadow-md p-4 rounded flex flex-col min-h-fit lg:h-[250px]">
      <h3 className='font-semibold text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] pb-2 text-[#b03a3a] flex items-center gap-2'>
        <span className="icon-bg bg-[#5a1f1f] rounded-full p-2 flex justify-center items-center">
          {icono}
        </span>
        {titulo}
      </h3>
      <div className='contenido-dato'>
        <span className='text-[#dde1e9] text-[13px] lg:text-[14px] font-extralight block'>
          {descripcion}
        </span>
      </div>
      <div className='contenido-tecnologias flex flex-wrap gap-2 pt-6 mt-auto'>
        {tecnologias.map((tech, index) => (
          <div key={index} className='flex flex-col items-center w-16'>
            {tech.icon}
            <span className='text-xs text-[#dde1e9] mt-1 text-center'>{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
