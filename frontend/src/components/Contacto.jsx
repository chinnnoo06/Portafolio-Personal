import React, { useRef, useState } from 'react';
import '../styles/contacto.css'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Contacto = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true
  });

  const [correoEnviado, setCorreoEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    encabezado: '',
    mensaje: ''
  })

   const enviarCorreo = async (e) => {
    e.preventDefault(); 
    setEnviando(true);
    try {
      const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000'
        : 'https://www.devfranciscoinda.com.mx';

      const response = await fetch(`${API_BASE}/api/enviarcorreo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setCorreoEnviado(true);
        setFormData({ nombre: '', correo: '', encabezado: '', mensaje: '' });

        setTimeout(() => setCorreoEnviado(false), 4000);
      }
    } catch (error) {
      console.error('Error al enviar:', error);
    } finally {
      setEnviando(false);
    }
  };

  const manejarValorInput = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const esFormularioValido = () => {
    const { nombre, correo, encabezado, mensaje } = formData;

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo); // expresión regular para email

    return (
      nombre.trim() !== '' &&
      correo.trim() !== '' &&
      encabezado.trim() !== '' &&
      mensaje.trim() !== '' &&
      correoValido
    );
  };


  return (
    <div 
      ref={sectionRef}
      className={`contenedor-contacto flex flex-col pt-20 pb-24 gap-5 mx-auto max-w-[1000px] ${
        isVisible ? 'animate-fadeUp' : 'opacity-0'
      }`}
    >
      <h1 className='titulo-seccion font-bold text-[18px] sm:text-[22px] md:text-[25px] lg:text-[30px] relative inline-block'>
        Trabajemos Juntos
        <span className="absolute left-0 bottom-[-6px] w-16 h-1 bg-[#b03a3a] rounded-full"></span>
      </h1>

      <div className='flex flex-col md:flex-row gap-10 items-center'>
        <div className='col1 flex flex-col md:w-1/2 gap-4'>
          <h3 className='font-semibold text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] '>
            ¿Tienes un proyecto o una idea?
          </h3>
          <p className='text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] '>
            Ya seas una empresa, una startup o un particular con una idea, estoy listo para ayudarte a convertirla en una solución tecnológica real. 
            Me especializo en desarrollo web moderno, diseño de interfaces intuitivas y construcción de plataformas escalables.
          </p>

          <p className='text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] '>
            Estoy abierto a colaborar con agencias, equipos de desarrollo, emprendedores y empresas de cualquier tamaño. No dudes en enviarme un mensaje con tu propuesta, o simplemente saludar.
          </p>

          <div className=''>
            <p className='text-sm mb-1'><span className='font-semibold text-[#b03a3a]'>Ubicación:</span> Guadalajara, México</p>
            <p className='text-sm mb-1'><span className='font-semibold text-[#b03a3a]'>Modalidad:</span> Remoto, híbrido o presencial (dependiendo del proyecto)</p>
            <p className='text-sm'><span className='font-semibold text-[#b03a3a]'>Colaboraciones:</span> Freelance, contratos por proyecto, asociaciones tecnológicas</p>
          </div>

          <div className='redes-sociales flex gap-5 pt-2 text-xl'>
            <a href='https://www.linkedin.com/in/francisco-gabriel-inda-lomeli-3ab9b0323' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-linkedin'></i></a>
            <a href='https://github.com/chinnnoo06' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-github'></i></a>
            <a href='https://wa.me/523318237277?text=Hola%20Francisco%2C%20quiero%20más%20información.' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fab fa-whatsapp'></i></a>
            <a href='mailto:franciscoinda@codemx.net' target='_blank' rel='noopener noreferrer' className='hover:text-[#b03a3a]'><i className='fas fa-envelope'></i></a>
          </div>
        </div>
        <div className='col2 flex flex-col w-full md:w-1/2'>
          {correoEnviado ? (
            <div className='p-6 bg-[#1e1e1e] rounded-2xl shadow-lg border border-[#383838] h-[27rem] sm:h-[27.8rem md:h-[30rem] flex flex-col justify-center items-center animate-fade-in'>
              <div className="text-[#b03a3a] text-6xl animate-bounce">
                <i className="fas fa-check-circle"></i>
              </div>
              <p className="text-[#dde1e9] mt-4 text-lg font-semibold text-center animate-bounce">
                ¡Tu mensaje fue enviado con éxito!<br /> ¡Gracias por contactarme!
              </p>
            </div>
          ) : (
            <form
              className="p-4 bg-[#1e1e1e] rounded-2xl shadow-lg space-y-5 border border-[#383838]
                        h-[26rem] sm:h-[28rem] md:h-[30rem] lg:h-[32rem]"
              onSubmit={enviarCorreo}
            >
              <div>
                <label
                  htmlFor="nombre"
                  className="block font-semibold text-[#dde1e9] mb-1
                            text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-2 py-[6px] sm:py-2 md:py-[10px] lg:py-[12px]
                            rounded-lg bg-[#2b2b2b] text-[#dde1e9] border border-[#444] placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-[#b03a3a] focus:border-[#b03a3a] transition
                            text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                  placeholder="Escribe tu nombre"
                  value={formData.nombre}
                  onChange={manejarValorInput}
                />
              </div>

              <div>
                <label
                  htmlFor="correo"
                  className="block font-semibold text-[#dde1e9] mb-1
                            text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  className="w-full px-2 py-[6px] sm:py-2 md:py-[10px] lg:py-[12px]
                            rounded-lg bg-[#2b2b2b] text-[#dde1e9] border border-[#444] placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-[#b03a3a] focus:border-[#b03a3a] transition
                            text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                  placeholder="Escribe tu correo"
                  value={formData.correo}
                  onChange={manejarValorInput}
                />
              </div>

              <div>
                <label
                  htmlFor="encabezado"
                  className="block font-semibold text-[#dde1e9] mb-1
                            text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
                >
                  Encabezado de correo
                </label>
                <input
                  type="text"
                  id="encabezado"
                  name="encabezado"
                  className="w-full px-2 py-[6px] sm:py-2 md:py-[10px] lg:py-[12px]
                            rounded-lg bg-[#2b2b2b] text-[#dde1e9] border border-[#444] placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-[#b03a3a] focus:border-[#b03a3a] transition
                            text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                  placeholder="Escribe el encabezado del correo"
                  value={formData.encabezado}
                  onChange={manejarValorInput}
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block font-semibold text-[#dde1e9] mb-1
                            text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  className="w-full px-2 py-[6px] sm:py-2 md:py-[10px] lg:py-[12px]
                            rounded-lg bg-[#2b2b2b] text-[#dde1e9] border border-[#444] placeholder-gray-400
                            resize-none focus:outline-none focus:ring-2 focus:ring-[#b03a3a] focus:border-[#b03a3a] transition
                            text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                  placeholder="Escribe el mensaje"
                  value={formData.mensaje}
                  onChange={manejarValorInput}
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  className={`px-3 sm:px-4 md:px-5 lg:px-6
                              py-[6px] sm:py-[7px] md:py-[8px] lg:py-[9px]
                              rounded-lg font-semibold transition duration-300
                              text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]
                              ${
                                esFormularioValido()
                                  ? 'bg-[#b03a3a] text-[#dde1e9] hover:bg-[#932f2f]'
                                  : 'bg-gray-500 text-[#dde1e9] cursor-not-allowed'
                              }`}
                  type="submit"
                  disabled={!esFormularioValido() || enviando}
                >
                  {enviando ? 'Enviando...' : 'Enviar Correo'}
                </button>
              </div>
            </form>
          )}
          
        </div>       
      </div>
    </div>
  )
}