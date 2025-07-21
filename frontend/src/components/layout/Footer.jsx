import React from 'react';

export const Footer = () => {
  return (
    <div className="contenedor-footer bg-[#272727] border-t border-[#3d3d3d]">
      <footer className="max-w-[1200px] mx-auto py-10 px-12 flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
        
        {/* Logo y derechos */}
        <div className="logo flex flex-col items-center md:items-start gap-2" translate="no">
          <a href="/">
            <h2 className="text-2xl text-[#dde1e9] font-bold tracking-wide">
              FRANCISCO <span className="text-[#b03a3a]">INDA</span>
            </h2>
          </a>
          <p className="text-[#dde1e9] text-base">
            &copy; {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="text-[#b03a3a] font-semibold uppercase text-lg">Enlaces Rápidos</h3>
          <div className="flex flex-col gap-2">
            <a href="#inicio" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-base">
              Inicio
            </a>
            <a href="#sobremi" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-base">
              Sobre Mí
            </a>
            <a href="#servicios" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-base">
              Servicios
            </a>
            <a href="#proyectos" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-base">
              Proyectos
            </a>
            <a href="#contacto" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-base">
              Contacto
            </a>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <h3 className="text-[#b03a3a] font-semibold uppercase text-lg">Redes Sociales</h3>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/francisco-gabriel-inda-lomeli-3ab9b0323" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] transition-colors duration-300">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="https://github.com/chinnnoo06" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] transition-colors duration-300">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://wa.me/523318237277?text=Hola%20Francisco%2C%20quiero%20más%20información." target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] transition-colors duration-300">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a href="mailto:franciscoinda@codemx.net" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-2xl">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p className="text-[#dde1e9] text-base mt-2 hidden md:block">
            inda5054@gmail.com
          </p>
        </div>

      </footer>
    </div>
  );
};
