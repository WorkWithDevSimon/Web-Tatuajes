import React, { useContext, useEffect, useState } from 'react';
import './navegador.css';
import zaikoTattoo from "../../img/zaikoTattoo.png";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from "react-router-dom";

import { MyContext } from "../../context/UseProveedor";

const Menu = () => (
    <>
        <Link to="/Inicio">Inicio</Link><br />
        <Link to="/Historia">Nuestra Historia</Link><br />
        <Link to="/Tatuadores">Tatuadores</Link><br />
        <Link to="/Cuidados">Cuidados</Link><br />
        <Link to="/ForoDepreguntas">Preguntas</Link><br />
        <Link to="/Tatuajes">Tatuajes</Link><br />
        <Link to="/Horarios">Horarios</Link><br />
        <Link to="/Agendar">Agendar</Link><br />
        <Link to="/ComprarProductos">
            <ion-icon name="cart-outline"></ion-icon>
        </Link>

    </>
);
const Navegador = () => {
    const [Contraer, setContraer] = useState(false);
    const { mostrarBotones, CapturarIDusuario } = useContext(MyContext);



    return (
        <div className="navegador">
            <div className="navegador-links">
                <div className="navegador-links_logo">
                    <img src={zaikoTattoo} alt="Logo" />
                </div>
                <div className="navegador-links_container">
                    <Menu />
                </div>
            </div>
            <div className="navegador-sign">
                {mostrarBotones ? (
                    <>
                        <Link to="/Perfil">
                            <ion-icon name="person-outline"></ion-icon>
                        </Link><br />
                        <p style={{ color: 'white' }}>Bienvenido {CapturarIDusuario[0].nombre_usuario}</p>
                    </>

                ) : (
                    <>
                        <Link to="/IniciarSeccion">
                            <button type='button'>Ingresar</button>

                        </Link><br />
                        <Link to="/CrearCuenta">
                            <button type="button">Registrarse</button>
                        </Link>


                    </>
                )}
            </div>
            <div className='navegador-menu'>
                {Contraer ? (
                    <RiCloseLine color="#fff" size={27} onClick={() => setContraer(false)} />
                ) : (
                    <RiMenu3Line color="#fff" size={27} onClick={() => setContraer(true)} />
                )}
                {Contraer && (
                    <div className='navegador-menu_contenedor scale-up-center'>
                        <div className='navegador-menu_contenedor-links'>
                            <Menu />
                            <div className='navegador-menu_contenedor-links-sign'>
                                {mostrarBotones ? (
                                    <Link to="/Perfil">
                                        <ion-icon name="person-outline"></ion-icon>
                                        <p style={{ color: 'white' }}>Bienvenido {CapturarIDusuario[0].nombre_usuario}</p>

                                    </Link>
                                ) : (
                                    <>
                                        <Link to="/IniciarSeccion">
                                            <button type='button'>Ingresar</button>
                                        </Link><br />
                                        <Link to="/CrearCuenta">
                                            <button type="button">Registrarse</button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navegador;
