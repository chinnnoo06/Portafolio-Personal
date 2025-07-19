import React, { useState } from 'react';
import '../styles/contacto.css';

export const Contacto = () => {
  const [correoEnviado, setCorreoEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    encabezado: '',
    mensaje: ''
  });

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
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    return (
      nombre.trim() !== '' &&
      correo.trim() !== '' &&
      encabezado.trim() !== '' &&
      mensaje.trim() !== '' &&
      correoValido
    );
  };

  return (
    <div className='contenedor-contacto flex flex-col pt-36 pb-24 gap-5 mx-auto max-w-[1000px] px-4'>
      {/* ... aquí tu JSX sin cambios ... */}
    </div>
  );
};
