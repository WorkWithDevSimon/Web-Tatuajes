import React from 'react'
import zaikoTattoo from '../../img/zaikoTattoo.png'

import './footer.css';

const Footer = () => {
    return (
        <>
            <footer className='Fotersito'>
                <div className="vertical-align">
                    <img src={zaikoTattoo} />
                </div>
                <div className='pdatos'>
                    <p>Teléfono: 123 45 67 89</p>
                    <p>Desde celulares: 01 - 2 3456789</p>
                    <p>Direccion: Av. Ignacio 1111, Quellon</p>
                    <p>E-mail: Tatto@gmail.com</p>
                </div>
                <nav>
                    <a href="/Ubicacion">Ubicacion</a>
                    <a href="/PoliticaPrivacidad">Políticas de Privacidad</a>
                    <hr />
                    <div className='iconos'>
                        <a href="https://twitter.com/?lang=es"><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href="https://www.youtube.com/"> <ion-icon name="logo-youtube"></ion-icon></a>
                        <a href="https://www.facebook.com/"> <ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="https://www.instagram.com/"> <ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                </nav>
            </footer>
        </>
    )
}

export default Footer