import React from "react";
import './historia.css';
import prim from '../../components/CompHistoria/Como-comensamos.jpg';
import seg from '../../components/CompHistoria/Que-hacemos.jpg';
import ter from '../../components/CompHistoria/Quienes-Somos.jpg';
import xd from '../../components/CompHistoria/xd.jpg';
import { FlechaArriba } from "../../components/componentFlechaArriba/FlechaArriba";

const History = () => {
  return (
    <div className="history-container">
      <div className="divtitulo">
        <h1 className='titulo'>TATOO ZAIKO</h1>
      </div>

      <div className='div-cartas-izquierda slide-in-bottom'>
        <section className="sectawdawd">
          <div className="main">
            <div className="images-carta">
              <img src={xd} alt="Como comenzamos" className="imagen" />
            </div>
            <div className="detail">
              <h1 className="subtitulo">Cómo Empezamos</h1>
              <p>
                Nuestra empresa fue fundada el 26 de octubre de 2019, marcando el inicio oficial de nuestro viaje. Sin embargo, nuestra historia se remonta aún más atrás, a cuando nuestro tatuador en jefe, Juan Iglesias, emprendió su camino de manera autónoma. Hace aproximadamente dos años, comenzó a ofrecer servicios de tatuajes a domicilio, armado solo con las herramientas esenciales y una gran pasión por su arte. Con esfuerzo y determinación, logró reunir los recursos necesarios para abrir nuestro estudio.
              </p>
              <p>
                Una vez que nuestro estudio abrió sus puertas, Juan Iglesias trabajó incansablemente y, con el tiempo, reunió a un talentoso equipo compuesto por tres tatuadores excepcionales y una recepcionista dedicada. Hoy en día, no solo nos dedicamos a la creación de impresionantes tatuajes, sino que también ofrecemos una variedad de productos y servicios, incluyendo ropa, piercings y productos de cuidado post-tatuaje. Estamos comprometidos en proporcionar a nuestros clientes una experiencia completa y satisfactoria en el mundo del arte corporal y la autenticidad de los tatuajes.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className='div-cartas-derecha slide-in-bottom'>
        <section>
          <div className="main">
            <div className="images-carta">
              <img src={seg} alt="Qué Hacemos" className="imagen" />
            </div>
            <div className="detail">
              <h1 className="subtitulo">Qué Hacemos</h1>
              <p>
                En nuestro estudio, nos dedicamos principalmente a la creación de tatuajes personalizados, donde transformamos las ideas y preferencias de nuestros clientes en obras de arte en la piel. Nuestro proceso comienza con consultas detalladas para diseñar tatuajes únicos que se adapten perfectamente a la anatomía del cliente y reflejen su estilo personal. Garantizamos la máxima higiene y seguridad al preparar la piel y utilizar equipos esterilizados, y nuestros tatuadores aplican la tinta con precisión y cuidado.
              </p>
              <p>
                Además de los servicios de tatuaje, ofrecemos una variedad de productos de post-tatuaje de alta calidad, desde cremas y lociones para el cuidado de la piel hasta opciones de joyería especializada. Tras finalizar un tatuaje, proporcionamos instrucciones detalladas para el cuidado posterior del mismo, asegurando una cicatrización adecuada y resultados duraderos. Nuestra prioridad es la satisfacción y seguridad de nuestros clientes en todas las etapas, desde la consulta inicial hasta la atención post-tatuaje.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className='div-cartas-izquierda slide-in-bottom'>
        <section>
          <div className="main">
            <div className="images-carta">
              <img src={ter} alt="Quiénes Somos" className="imagen" />
            </div>
            <div className="detail">
              <h1 className="subtitulo">Quiénes Somos</h1>
              <p>
                Nuestro talentoso equipo de trabajo está conformado por:
              </p>
              <ul>
                <li>Juan Iglesias, el tatuador en jefe y administrador del negocio, quien aporta su experiencia y creatividad para garantizar la excelencia en cada proyecto.</li>
                <li>Mario Castañeda, el segundo tatuador, es una especialista en tatuajes grandes y elaborados, destacándose por su atención meticulosa a los detalles.</li>
                <li>Carlos Gonzales, nuestro tercer tatuador, se especializa en tatuajes medianos y pequeños, brindando a los clientes diseños precisos y personalizados.</li>
                <li>Laura Torres, el cuarto miembro del equipo, es experta en tatuajes pequeños y piercings, combinando habilidad artística con profesionalismo en cada servicio.</li>

              </ul>
            </div>
          </div>
        </section>
      </div>
      <FlechaArriba></FlechaArriba>

    </div>
  );
};

export default History;
