import React from 'react'
import "./App.css"
import Navegador from "./components/navegador/Navegador";
import Footer from "./components/compfooter/Footer";
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";
import {
  Tatuajes, ComprarProductos, Agendar, CrearCuenta,
  Cuidados, Historia, IniciarSeccion, Inicio, Tatuadores, Perfil,
  PoliticaPrivacidad, Ubicacion, Horarios, Foro, ActualizarAgendar, Borrar,VerMasGraficos
}
  from "./pages/index";
import { UseProveedor } from "../src/context/UseProveedor";
import Escoger from './pages/admin/Escoger';
const App = () => {
  return (
    <>
      <div className='App'>
        <div className='gradient__bg'>
          <div className='container'>
          </div>
          <BrowserRouter>
            <UseProveedor>
              <Navegador />
              <Routes>
                <Route path='/' element={<Navigate to="/Inicio" />} />
                <Route path='/Inicio' element={<Inicio />} />
                <Route path='/Historia' element={<Historia />} />
                <Route path='/Tatuadores' element={<Tatuadores />} />
                <Route path='/Cuidados' element={<Cuidados />} />
                <Route path='/Tatuajes' element={<Tatuajes />} />
                <Route path='/ComprarProductos' element={<ComprarProductos />} />
                <Route path='/Agendar' element={<Agendar />} />
                <Route path='/CrearCuenta' element={<CrearCuenta />} />
                <Route path='/IniciarSeccion' element={<IniciarSeccion />} />
                <Route path='/Perfil' element={<Perfil />} />
                <Route path='/Ubicacion' element={<Ubicacion />} />
                <Route path='/PoliticaPrivacidad' element={<PoliticaPrivacidad />} />
                <Route path='/Horarios' element={<Horarios />} />
                <Route path='/ForoDepreguntas' element={<Foro />} />
                <Route path='/ActualizarAgendar/:id' element={<ActualizarAgendar />} />
                <Route path='/Borrar/:id' element={<Borrar />}/>
                <Route path='/AdministradorJefe' element={<Escoger />} />
                <Route path='/Ver-MasGraficos' element={<VerMasGraficos />} />
              </Routes>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Footer />
            </UseProveedor>
          </BrowserRouter>
          
        </div>
      </div>
       
    </>

  )
}
export default App