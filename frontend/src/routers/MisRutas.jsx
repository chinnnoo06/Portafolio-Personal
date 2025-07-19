import React from 'react'
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Servicios } from '../components/Servicios';
import { Proyectos } from '../components/Proyectos';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { SobreMi } from '../components/SobreMi';

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/*HEADER Y NAVGEACION */}
        <Header/>

        {/*CONTENIDO CENTRAL */ }
        <section className='content'>
          <Routes>
              <Route path='/' element={<Navigate to="/inicio" />} />
              <Route path='/inicio' element={<Inicio/>} />
              <Route path='/sobremi' element={<SobreMi/>} />
              <Route path='/servicios' element={<Servicios/>} />
              <Route path='/proyectos' element={<Proyectos/>} />
              <Route path='/contacto' element={<Contacto/>} />
          </Routes>
        </section>


        {/*FOOTER*/ }
        <Footer/>
    </BrowserRouter>
  )
}
