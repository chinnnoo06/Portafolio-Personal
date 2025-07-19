import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // Ocultar al bajar
      } else {
        setShowHeader(true);  // Mostrar al subir
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div  className={`contenedor-header bg-[#272727] fixed top-0 left-0 w-full z-[9999] transition-transform duration-300 ${
      showHeader ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Header principal */}
      <header className="max-w-[1200px] mx-auto h-[5.5rem] flex justify-between items-center px-4 uppercase">
        {/* Logo a la izquierda */}
        <div className="logo" translate="no">
          <Link to="/usuario-candidato/inicio-candidato">
            <h1 className="text-[1.7rem] text-[#dde1e9] font-bold">
              FRANCISCO <span className="text-[#b03a3a]">INDA</span>
            </h1>
          </Link> 
        </div>
        
        {/* Secciones en medio */}
        <nav className="nav hidden md:flex gap-[2rem]">
          <NavLink 
            to="/inicio" 
            className={({isActive}) => isActive ? 
              "text-[#b03a3a] font-semibold transition-all duration-300" : 
              "text-[#dde1e9] font-semibold hover:text-[#b03a3a] transition-all duration-300" }
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/sobremi" 
            className={({isActive}) => isActive ? 
              "text-[#b03a3a] font-semibold transition-all duration-300" : 
              "text-[#dde1e9] font-semibold hover:text-[#b03a3a] transition-all duration-300" }
          >
            Sobre Mí
          </NavLink>
          <NavLink 
            to="/servicios" 
            className={({isActive}) => isActive ? 
              "text-[#b03a3a] font-semibold transition-all duration-300" : 
              "text-[#dde1e9] font-semibold hover:text-[#b03a3a] transition-all duration-300" }
          >
            Servicios
          </NavLink>
          <NavLink 
            to="/proyectos" 
            className={({isActive}) => isActive ? 
              "text-[#b03a3a] font-semibold transition-all duration-300" : 
              "text-[#dde1e9] font-semibold hover:text-[#b03a3a] transition-all duration-300" }
          >
            Proyectos
          </NavLink>
          <NavLink 
            to="/contacto" 
            className={({isActive}) => isActive ? 
              "text-[#b03a3a] font-semibold transition-all duration-300" : 
              "text-[#dde1e9] font-semibold hover:text-[#b03a3a] transition-all duration-300" }
          >
            Contacto
          </NavLink>
        </nav>

        {/* Redes sociales a la derecha */}
        <div className="redes-sociales hidden md:flex gap-4">
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

        {/* Menú responsive */}
        <div 
          className="nav-responsive md:hidden text-[#dde1e9] text-[1.6rem] pr-[0.2rem] cursor-pointer hover:text-[#b03a3a]" 
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>

      {/* Menú lateral */}
      <div className={`menu-lateral fixed top-0 right-0 h-screen bg-[#272727] w-64 transform ${
        menuVisible ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-[10000] flex flex-col`}>
        <div className="flex justify-between items-center p-4 border-b border-[#3d3d3d]">
          <button 
            className="text-[#dde1e9] hover:text-[#b03a3a] text-xl" 
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-4">
          <NavLink 
            to="/inicio" 
            className={({isActive}) => isActive ? 
              "text-[#b03a3a] font-semibold" : 
              "text-[#dde1e9] hover:text-[#b03a3a]" }
            onClick={toggleMenu}
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/sobremi" 
            className={({isActive}) => isActive ? 
              "text-[#b03a3a] font-semibold" : 
              "text-[#dde1e9] hover:text-[#b03a3a]" }
            onClick={toggleMenu}
          >
            Sobre Mi
          </NavLink>
          <NavLink 
            to="/servicios" 
            className={({isActive}) => isActive ? 
              "text-[#b03a3a] font-semibold" : 
              "text-[#dde1e9] hover:text-[#b03a3a]" }
            onClick={toggleMenu}
          >
            Servicios
          </NavLink>
          <NavLink 
            to="/proyectos" 
            className={({isActive}) => isActive ? 
              "text-[#b03a3a] font-semibold" : 
              "text-[#dde1e9] hover:text-[#b03a3a]" }
            onClick={toggleMenu}
          >
            Proyectos
          </NavLink>
          <NavLink 
            to="/contacto" 
            className={({isActive}) => isActive ? 
              "text-[#b03a3a] font-semibold" : 
              "text-[#dde1e9] hover:text-[#b03a3a]" }
            onClick={toggleMenu}
          >
            Contacto
          </NavLink>
        </nav>
        
        {/* Redes sociales en menú móvil */}
        <div className="mt-auto p-4 flex justify-center gap-6 border-t border-[#3d3d3d]">
          <a href="https://www.linkedin.com/in/francisco-gabriel-inda-lomeli-3ab9b0323" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] text-xl">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/chinnnoo06" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] text-xl">
             <i className="fab fa-github"></i>
          </a>
          <a href="https://wa.me/523318237277?text=Hola%20Francisco%2C%20quiero%20más%20información." target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] text-xl">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:franciscoinda@codemx.net" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] text-xl">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Fondo oscuro cuando el menú está activo */}
      {menuVisible && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]" 
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};