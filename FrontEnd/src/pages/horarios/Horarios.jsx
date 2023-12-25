import React, { useEffect, useState } from 'react';
import { MostrarTodoAgendar } from "../../api/ingresar";

import "./hora.css"
const Horarios = () => {
  const [fechasDisponibles, setFechasDisponibles] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');
  const [TodoLoAgendado, setTodoLoAgendado] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = (await MostrarTodoAgendar()).data;
      setTodoLoAgendado(data);
    };
    fetchData(); // Llama a la función asincrónica cuando el componente se monta
  }, []); // El segundo argumento, un arregl
  const buscarFechasDisponibles = async () => {
    //Aqui cargamos los datos de la api
    const InformacionDeApi = (await MostrarTodoAgendar()).data;
    //Filtramos los datos de la api para saber que datos son importantes los filtramos con 
    //los datos que se ingresar en el input tipo date con los datos ya cargados de api
    //filtamos eso y lo guardamos en una costante que no se modifique luego abajo lo recorremos con un ma
    //pero depende si se cumplen las condiciones.
    const fechasEncontradas = InformacionDeApi.filter((item) => {
      return item.fecha === fechaSeleccionada;
    });
    if (fechasEncontradas.length > 0) {
      setFechasDisponibles(fechasEncontradas);
    } else {
      alert("No hay registros de esta fecha");
    }
  };

  return (
    <>
      <div className='container mt-5'>
        <div className='alert alert-dark display-1' style={{ textAlign: 'center' }}>Días y horarios de disponibilidad</div>
        <div className='mt-5'>
          <label htmlFor="datepicker">Buscar fechas disponibles</label>
          <input
            type="date"
            className="form-control"
            id="datepicker"
            name='fecha'
            value={fechaSeleccionada}
            onChange={(e) => setFechaSeleccionada(e.target.value)}
          />
        </div>
        <br />
        <button className='btn btn-dark' onClick={buscarFechasDisponibles}>Buscar</button>
        <div className='mt-4'>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Nombre del tatuador</td>
                <td>Fecha ocupadas</td>
                <td>Hora de inicio ya asignada </td>
                <td>Hora final ya asignada</td>
                <td>Tamaño del tatuaje</td>
              </tr>
            </thead>
            <tbody>
              {fechasDisponibles.map((item, index) => (
                <tr key={index}>
                  <td>{item.tatuador}</td>
                  <td>{item.fecha}</td>
                  <td>{item.hora_Inicio}</td>
                  <td>{item.hora_Fin}</td>
                  <td>{item.Tamañotatuaje}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='mt-4'>
          <div className='alert alert-secondary
            display-6' style={{ textAlign: 'center' }}>La disponibilidad está agotada en todos estos días y horarios</div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Nombre del tatuador</td>
                <td>Fecha ocupadas</td>
                <td>Hora de inicio ya asignada </td>
                <td>Hora final ya asignada</td>
                <td>Tamaño del tatuaje</td>
              </tr>
            </thead>
            <tbody>
              {TodoLoAgendado.map((item, index) => (
                <tr key={index}>
                  <td>{item.tatuador}</td>
                  <td>{item.fecha}</td>
                  <td>{item.hora_Inicio}</td>
                  <td>{item.hora_Fin}</td>
                  <td>{item.Tamañotatuaje}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};
export default Horarios;
