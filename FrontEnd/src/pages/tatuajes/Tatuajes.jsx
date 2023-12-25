import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./tatuajes.css"; 
import {Tatuaje_peque,Tatuajes_Medianos,Tatuajes_Grandes} from './data'



const Tatuajes = () => {
  return (
    <div>
    <div>
    <h1 className='elegantshadow'>Tattu</h1>
    
    </div>

      
      <div className="carousel-container">
        <h2 className='custom-h2'>Tatuajes Pequeños (Horas de seccion:2 hrs)</h2> 
        <Carousel showArrows={true} dynamicHeight={false} showThumbs={false}>
        {Tatuaje_peque.map((tatuaje, index) => (
            <div key={index}>
              <img src={tatuaje.imagen} alt={tatuaje.nombre} />
              <h6> {tatuaje.nombre} (Precio: {tatuaje.precio})</h6>
            </div>
          ))}


        </Carousel>
      </div>


      <div className="carousel-container">
        <h2 className="custom-h2">Tatuajes Medianos (Horas de seccion:4 hrs)</h2> 
        <Carousel showArrows={true} dynamicHeight={false} showThumbs={false}>
        {Tatuajes_Medianos.map((tatuaje, index) => (
            <div key={index}>
              <img src={tatuaje.imagen} alt={tatuaje.nombre} />
              <h6>{tatuaje.nombre} (Precio: {tatuaje.precio})</h6>
            </div>
          ))}
        </Carousel>
      </div>


      <div className="carousel-container">
        <h2 className="custom-h2">Tatuajes Grandes (Horas de seccion:8 hrs)</h2>
        <Carousel showArrows={true} dynamicHeight={false} showThumbs={false}>
        {Tatuajes_Grandes.map((tatuaje, index) => (
            <div key={index}>
              <img src={tatuaje.imagen} alt={tatuaje.nombre} />
              <h6> {tatuaje.nombre} (Precio: {tatuaje.precio})</h6>
            </div>
          ))}
        </Carousel>
        <br />
          <br />
          <br />
          <br />
          <br />
      </div>
    </div>
  );
}

export default Tatuajes;

