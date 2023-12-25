import React from 'react';
import "./cuidados.css";
import tresbrasos from "../../img/ImgCuidados/tresbrasos.jpg";
import {FlechaArriba} from "../../components/componentFlechaArriba/FlechaArriba";

const Cuidados = () => {
  return (
    <div className="bodyBackgrounddd">
      <div>
        <br />
        <br />
        <div>
          <h1 className="titulo2">CUIDADOS PARA TU TATTOO</h1>
          <h3 className="subtituloCuidados">Consejos y Recomendaciones</h3>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="divflex">
          <div className="divflex1">
            <span className="Color-leter-black centradoText spanback">
              Es fundamental seguir los consejos que te dé tu tatuador para cuidar tu nuevo tatuaje, no es recomendable ignorarlos si quieres lucir un tatuaje que perdure y que te haga sentir que tu inversión valió la pena.
            </span>
            <span className="Color-leter-black centradoText spanback">
              Cuando te vas del estudio te haces responsable de tu tatuaje y con el tiempo se podrá ver si recibió los cuidados necesarios durante el proceso de curación.
            </span>
            <span className="Color-leter-black centradoText spanback">
              No es posible evitar el proceso de cicatrización, pero puedes lograr por medio de tus cuidados que al final quede en tu cuerpo una excelente obra de arte.
            </span>
          </div>
          <div className="divflex2">
            <img src={tresbrasos} className="imgdiv" alt="Tres Brazos" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="divflex">
          <br />
          <br />
          <h1 className="titulo3">Consejos <br /> para el cuidado de <br />tu tatuaje</h1>
          <ol id="lista4">
            <li>DESPUÉS DE TATUARTE
              <p>Quítate el vendaje colocado por el tatuador cuando pasen 5 horas.</p>
            </li>
            <li>MANTÉN LIMPIO TU TATUAJE
              <p>Lava el tatuaje con agua tibia y jabón/gel neutro utilizando la mano (no esponja) y sécalo palpando (no arrastrando) con una toalla limpia o toallitas de papel.</p>
            </li>
            <li>APLÍCATE CREMA CICATRIZANTE
              <p>Deja que el tatuaje seque un poco al aire, unos 10-15 minutos, y aplica una capa fina y transparente de crema. La crema debe aplicarse en capas muy finas 3-4 veces al día durante 2 semanas.</p>
            </li>
            <li>NO CUBRAS TU TATUAJE
              <p>NO vuelvas a cubrir el tatuaje con ningún tipo de apósitos o vendas.</p>
            </li>
            <li>PISCINAS, PLAYAS, BAÑERAS...
              <p>Durante dos semanas evitar humedecimiento de la zona tatuada (no sumergirse en piscinas, playa, bañera, spa, etc.) Lavar el tatuaje máximo 2 veces al día.</p>
            </li>
            <li>SOL Y CALOR
              <p>NO exponer la zona tatuada al sol o fuentes de calor, se recomienda llevarlo cubierto por una prenda de vestir a fin de evitar la contaminación.</p>
            </li>
            <li>CUIDA TU TATUAJE
              <p>NO rozar ni frotar ni rascar el tatuaje.</p>
            </li>
            <li>SUDOR Y EJERCICIO
              <p>Evitar sudar (ejercicio, etc.) durante dos semanas.</p>
            </li>
          </ol>
        <FlechaArriba></FlechaArriba>
        </div>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Cuidados;
