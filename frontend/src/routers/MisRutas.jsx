import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Servicios } from '../components/Servicios';
import { Proyectos } from '../components/Proyectos';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { SobreMi } from '../components/SobreMi';

export const MisRutas = () => {
  return (
    <>
      <Header />

      <main className='content'>
        <section id="inicio">
          <Inicio />
        </section>

        <section id="sobremi" className='fondo-oscuro'>
          <SobreMi />
        </section>

        <section id="servicios">
          <Servicios />
        </section>

        <section id="proyectos" className='fondo-oscuro min-h-screen'>
          <Proyectos />
        </section>

         <section id="contacto">
          <Contacto />
        </section>
      </main>

      <Footer />
    </>
  );
};