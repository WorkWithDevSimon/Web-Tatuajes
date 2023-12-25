import React from 'react';
import './inicio.css';
import estudio from "../../img/Imginicio/estudio.png";

import { FlechaArriba } from "../../components/componentFlechaArriba/FlechaArriba";


import img1 from "../../img/PersonasTatuajes/img1.jpg";
import img2 from "../../img/PersonasTatuajes/img2.jpg";

import img3 from "../../img/PersonasTatuajes/img3.png";
import img4 from "../../img/PersonasTatuajes/img4.jpg";

import img5 from "../../img/PersonasTatuajes/img5.jpg";

// -----------
import img6 from "../../img/PersonasTatuajes/img6.jpeg";
import img7 from "../../img/PersonasTatuajes/img7.jpg";
import img8 from "../../img/PersonasTatuajes/img8.jpeg";


import img9 from "../../img/PersonasTatuajes/img9.jpeg";
import img10 from "../../img/PersonasTatuajes/img10.jpg";
import img11 from "../../img/PersonasTatuajes/img11.jpg";
import img12 from "../../img/PersonasTatuajes/img12.jpg";









import img234 from "../../img/ImgTatuadores/img234.jpeg";
import main2 from "../../img/ImgTatuadores/2/main2.jpg";
import main4 from "../../img/ImgTatuadores/4/main4.jpg";
import main3 from "../../img/ImgTatuadores/3/main3.jpg";

const Inicio = () => {
  return (
    <>
      <div className="container">

        <div className="contenedorCentrado">

          <h1 className="textitoInicio">
            Bienvenido a nuestra página web Tattoo zaiko
          </h1>
        </div>
        <br />
        <br />
        <div className='ImagenDelMundTattu'>
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
          <img src={img7} />
          <img src={img8} />
          <img src={img9} />
          <img src={img10} />
          <img src={img11} />
          <img src={img12} />
        </div>
        <br />
        <br />
        <br />
        <div className='bienvenida-texto'>
          <p>
            Bienvenido a la web de Tatto Zaiko. Donde la tinta corre todos los días.
            Si deseas concertar una cita con nosotros, te invitamos a explorar el proceso paso a paso para agendarla de manera sencilla.
            Además, si estás en busca de inspiración, te recomendamos visitar nuestra galería de tatuajes. En ella, encontrarás información detallada sobre cada uno de nuestros tatuadores y sus estilos.
            No olvides consultar nuestros valiosos consejos sobre los cuidados higiénicos para tatuajes y piercings. Tu salud y bienestar son nuestra prioridad.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* ------------------------------------------------------------------------------------------------------------- */}
        <div className='TatuajePasoApaso'>
          <h1>Explora tu transformación en el viaje del tatuaje, un paso a la vez</h1>
          <img src={estudio} />
          <h3>Explora el Arte de los Tatuajes que ofrecemos, paso a paso</h3>
          <div>
            <br />
            <div className='ListaOrdenada'>
              <ul>1. Contempla los misteriosos servicios que ofrecemos, como portales hacia mundos inexplorados.</ul>
              <ul>2. Explora el abanico de tatuadores, cada uno de ellos un artista en el lienzo de la piel humana.</ul>
              <ul>3. Reflexiona sobre los tatuajes que anidan en el rincón de tu imaginación, esperando cobrar vida.</ul>
              <ul>4. Considera con sabiduría los cuidados necesarios tras inscribir en tu piel el testimonio de tu existencia.</ul>
              <ul>5. Forja tu propio camino, crea una cuenta y cruza el umbral hacia una experiencia única.</ul>
              <ul>6. Si ya eres un viajero de estas sendas, agendar es tu prerrogativa sin obstáculos.</ul>
              <ul>7. Si ya eres un viajero de estas sendas,puedes obtener tus productos sin obstáculos.</ul>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* ------------------------------------------------------------------------------------------------------------- */}

        <div className="servicio-header">
          <h1 className='letrita'>Nuestros Servicios</h1>
          <br />
          <p>
            En Tattoo Zaiko, nuestra distinción radica en la prestación de servicios de excelencia a lo largo de todos estos años. Hemos consolidado una reputación sólida basada en nuestra capacidad para ofrecer a nuestros clientes servicios de la más alta calidad en la industria del tatuaje. Nuestra dedicación a la artesanía y la satisfacción del cliente ha sido fundamental en nuestro éxito continuo. Nos enorgullece mantener un estándar constante de excelencia
            en cada uno de nuestros servicios, lo que nos ha convertido en un referente en la industria del tatuaje.
          </p>
        </div>

        <div className="servicios-container">
          <div className="servicisios">
            <h3>Tatuajes</h3>
            <p>Somos una empresa con más de 16 años de experiencia en tatuajes. Realizamos trabajos seguros y cómodos, cumpliendo con todos los reglamentos y protocolos</p>
            <ion-icon name="pencil-outline"></ion-icon><br /><br /><br />

          </div>


          <div className="servicisios">
            <h3>Accesorios y más</h3>
            <p>La tienda de “Tatto Zaiko” afrece una gran variedad de accesorios para complementación de tu vestimenta tanto
              anillos como collares, pulseras, etc. Además de la venta de diferentes prendas de vestir para personalizar tu outfit  además de accsesoris y variada ropa entregamos diferentes tipos de elelemntos para el cuidado de tu Tatuaje en sus primeras semanas de creación.</p>
            <ion-icon name="shirt-outline"></ion-icon><br /><br /><br /><br /><br />
          </div>
        </div>
        <br />
        <br />

        <div className='Nuestrostatuadores'>
          <h1>Nuestros tatuadores</h1>
          <p>En el arte del tatuaje, encontramos una expresión única de la intersección entre la destreza humana y la creatividad infinita. Nuestros tatuadores personifican la búsqueda de la excelencia en este arte milenario, donde la piel se convierte en lienzo y la tinta en el lenguaje de la individualidad.
            En nuestro estudio, estos virtuosos artistas exploran y dominan los diversos dialectos del tatuaje: desde la simplicidad de lo minimalista, que habla en silenciosa elegancia, hasta la explosión de vida en tatuajes a todo color. Experimentan con la dualidad de blanco y negro, donde las sombras y la luz juegan su eterna danza. Además, exploran los misteriosos diseños maorí que conectan con las raíces culturales y los tribales que llevan consigo el peso de la historia. Abrazan el realismo, donde la tinta cobra vida, y el estilo japonés, un homenaje a la tradición y la espiritualidad.
            En cada trazo, en cada aguja, se encuentra una búsqueda de identidad, una declaración de ser. Como los antiguos filósofos buscaban la verdad en la reflexión profunda, nuestros tatuadores buscan la autenticidad en la piel. Invitamos a cada individuo a unirse a esta travesía, donde el cuerpo se convierte en un testamento de la historia personal, donde el arte trasciende lo efímero y se funde con la esencia de la existencia</p>
        </div>
        <div className='ImagenesTaTuadores'>
          <img src={img234} />
          <img src={main2} />
          <img src={main4} />
          <img src={main3} />
        </div>
        <br />

        <div className="row w-100">
          <div className="col v-center">
            <a href='/Tatuadores' className="btn btn-dark d-block mx-auto">Conocer mucho mas</a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className='inner text-center'>
          <span>Agenda tu hora</span>
          <h2 className='ListoPatatatueate?'>¿Listo para tu tatuaje?</h2>
          <a href="/Agendar" className='btn btn-danger'>Quiero agendar</a>
        </div>
        <FlechaArriba></FlechaArriba>
      </div>
    </>
    // -----------------------------------------------------------------------------------------------------------------------


  );
};

export default Inicio;
