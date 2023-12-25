import React, { useEffect, useState } from 'react'
import './flechaarriba.css';

export const FlechaArriba = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Muestra el botón cuando el usuario se desplaza hacia abajo
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpia el evento de desplazamiento cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <button
                id="scrollButton"
                onClick={scrollToTop}
                style={{ display: showButton ? 'block' : 'none' }}
            >
                <ion-icon name="arrow-up-outline"></ion-icon>
            </button>
 
        </>
    );
}

