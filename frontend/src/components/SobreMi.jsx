import React from 'react'
import '../styles/sobremi.css'
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaBootstrap, FaNodeJs, FaPhp, FaJava, FaDatabase, FaMicrosoft
} from 'react-icons/fa';
import { SiTailwindcss, SiAngular, SiExpress, SiC, SiCplusplus, SiMysql, SiFirebase, SiFigma, SiSqlite } from 'react-icons/si';

export const SobreMi = () => {
  return (
    <div className='contenedor-sobremi flex flex-col pt-36 pb-24 gap-5 mx-auto max-w-[1000px]'>

      {/* Título */}
      <h1 className='titulo-seccion font-bold text-[18px] sm:text-[22px] md:text-[25px] lg:text-[30px] relative inline-block'>
        Sobre Mí
        <span className="absolute left-0 bottom-[-6px] w-16 h-1 bg-[#b03a3a] rounded-full"></span>
      </h1>

      {/* Sección: ¿Quién soy?, Mi perfil, Mi objetivo */}
      <div className='fil1 flex flex-col lg:flex-row justify-between items-stretch gap-5'>

        {/* ¿Quién soy? */}
        <div className='contenedor-dato flex-1 flex flex-col bg-[#272727] border-t-4 border-[#b03a3a] shadow-md p-4 h-52 rounded'>
          <div className='titulo-dato'>
            <h3 className='font-semibold text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] pb-2 text-[#b03a3a] flex items-center gap-2'>
              <span className="icon-bg bg-[#5a1f1f] rounded-full p-1.5 flex justify-center items-center">
                <i className="fa-solid fa-circle-user text-[14px] text-[#b03a3a]"></i>
              </span> 
              ¿Quién soy?
            </h3>
          </div>
          <div className='contenido-dato overflow-hidden'>
            <span className='text-[#dde1e9] text-[9px] sm:text-[11px] md:text-[13px] lg:text-[14px] font-extralight block'>
              Soy un estudiante de 19 años de Ingeniería en Desarrollo de Software, cuento con un título
              de tecnólogo en la carrera, altamente motivado por superarme día a día con sólidos conocimientos
              en desarrollo y diseño web, así como en aplicaciones de escritorio.
            </span>
          </div>
        </div>

        {/* Mi perfil */}
        <div className='contenedor-dato flex-1 flex flex-col bg-[#272727] border-t-4 border-[#b03a3a] shadow-md p-4 h-52 rounded'>
          <div className='titulo-dato'>
            <h3 className='font-semibold text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] pb-2 text-[#b03a3a] flex items-center gap-2'>
              <span className="icon-bg bg-[#5a1f1f] rounded-full p-1.5 flex justify-center items-center">
                <i className="fa-solid fa-address-card text-[14px] text-[#b03a3a]"></i>
              </span> 
              Mi perfil
            </h3>
          </div>
          <div className='contenido-dato overflow-hidden'>
            <span className='text-[#dde1e9] text-[9px] sm:text-[11px] md:text-[13px] lg:text-[14px] font-extralight block'>
              Me caracterizo por aprender de forma autodidacta y adaptarme rápidamente a nuevos entornos
              y tecnologías emergentes. Cuento con nivel de inglés B2 y actualmente estudio ingeniería.
            </span>
          </div>
        </div>

        {/* Mi objetivo */}
        <div className='contenedor-dato flex-1 flex flex-col bg-[#272727] border-t-4 border-[#b03a3a] shadow-md p-4 h-52 rounded'>
          <div className='titulo-dato'>
            <h3 className='font-semibold text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] pb-2 text-[#b03a3a] flex items-center gap-2'>
              <span className="icon-bg bg-[#5a1f1f] rounded-full p-1.5 flex justify-center items-center">
                <i className="fa-solid fa-rocket text-[14px] text-[#b03a3a]"></i>
              </span> 
              Mi objetivo
            </h3>
          </div>
          <div className='contenido-dato overflow-hidden'>
            <span className='text-[#dde1e9] text-[9px] sm:text-[11px] md:text-[13px] lg:text-[14px] font-extralight block'>
              Mi objetivo es seguir aprendiendo nuevas tecnologías y aplicar mis conocimientos actuales
              para ganar experiencia tanto en Frontend como Backend. Me apasiona crear soluciones elegantes.
            </span>
          </div>
        </div>
      </div>

      {/* Sección habilidades técnicas */}
      <div className='contenedor-dato flex flex-col items-center justify-center bg-[#272727] shadow-md p-4 h-auto rounded border-t-4 border-[#b03a3a]'>
        <h3 className='font-semibold text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] pb-2 text-[#b03a3a] relative inline-block'>
          Mis habilidades Técnicas
          <span className="absolute left-1/2 bottom-[-6px] transform -translate-x-1/2 w-16 h-1 bg-[#b03a3a] rounded-full"></span>
        </h3>

        <div className='contenedor-tecnologias flex flex-row flex-wrap justify-center items-center gap-6 mt-6'>

          {/* Íconos con texto debajo */}
          <div className='tecnologia flex flex-col items-center text-center'>
            <FaHtml5 className='text-2xl sm:text-3xl md:text-4xl text-[#e34c26]' />
            <span className='text-xs text-[#dde1e9] mt-1'>HTML5</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <FaCss3Alt className='text-2xl sm:text-3xl md:text-4xl text-[#264de4]' />
            <span className='text-xs text-[#dde1e9] mt-1'>CSS3</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <FaJsSquare className='text-2xl sm:text-3xl md:text-4xl text-[#f0db4f]' />
            <span className='text-xs text-[#dde1e9] mt-1'>JavaScript</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <FaReact className='text-2xl sm:text-3xl md:text-4xl text-[#61dafb]' />
            <span className='text-xs text-[#dde1e9] mt-1'>React</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <SiAngular className='text-2xl sm:text-3xl md:text-4xl text-[#dd1b16]' />
            <span className='text-xs text-[#dde1e9] mt-1'>Angular</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <FaGitAlt className='text-2xl sm:text-3xl md:text-4xl text-[#f1502f]' />
            <span className='text-xs text-[#dde1e9] mt-1'>Git</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <FaBootstrap className='text-2xl sm:text-3xl md:text-4xl text-[#7952b3]' />
            <span className='text-xs text-[#dde1e9] mt-1'>Bootstrap</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <SiTailwindcss className='text-2xl sm:text-3xl md:text-4xll text-[#38bdf8]' />
            <span className='text-xs text-[#dde1e9] mt-1'>Tailwind</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <FaNodeJs className='text-2xl sm:text-3xl md:text-4xl text-[#68a063]' />
            <span className='text-xs text-[#dde1e9] mt-1'>Node.js</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <SiExpress className='text-2xl sm:text-3xl md:text-4xl text-[#ffffff]' />
            <span className='text-xs text-[#dde1e9] mt-1'>Express.js</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <FaPhp className='text-2xl sm:text-3xl md:text-4xl text-[#8892be]' />
            <span className='text-xs text-[#dde1e9] mt-1'>PHP</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <SiC className='text-2xl sm:text-3xl md:text-4xl text-[#555]' />
            <span className='text-xs text-[#dde1e9] mt-1'>C</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <SiCplusplus className='text-2xl sm:text-3xl md:text-4xl text-[#00599c]' />
            <span className='text-xs text-[#dde1e9] mt-1'>C++</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <FaMicrosoft className='text-2xl sm:text-3xl md:text-4xl text-[#239120]' />
            <span className='text-xs text-[#dde1e9] mt-1'>C#</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <FaJava className='text-2xl sm:text-3xl md:text-4xl text-[#007396]' />
            <span className='text-xs text-[#dde1e9] mt-1'>Java</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <SiMysql className='text-2xl sm:text-3xl md:text-4xl text-[#00758f]' />
            <span className='text-xs text-[#dde1e9] mt-1'>MySQL</span>
          </div>
          
          <div className='tecnologia flex flex-col items-center text-center'>
            <SiSqlite className='text-2xl sm:text-3xl md:text-4xl text-[#003b57]' />
            <span className='text-xs text-[#dde1e9] mt-1'>SQLite</span>
          </div>
          
          <div className='tecnologia flex flex-col items-center text-center'>
            <SiFirebase className='text-2xl sm:text-3xl md:text-4xl text-[#ffca28]' />
            <span className='text-xs text-[#dde1e9] mt-1'>Firebase</span>
          </div>

          <div className='tecnologia flex flex-col items-center text-center'>
            <SiFigma className='text-2xl sm:text-3xl md:text-4xl text-[#f24e1e]' />
            <span className='text-xs text-[#dde1e9] mt-1'>Figma</span>
          </div>

        </div>
      </div>
    </div>
  )
}
