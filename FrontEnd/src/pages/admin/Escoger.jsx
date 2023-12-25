import React, { useState, useEffect } from 'react';
import { MostrarTodoAgendar, MostrarTodoDetalleDeCompra } from '../../api/ingresar';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

import './escoger.css';

const Escoger = () => {
  const [data, setData] = useState(null);
  const [datosCompra, setDatosCompra] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedDataCompra, setSelectedDataCompra] = useState(null);

  const URL_ADMIN = 'http://127.0.0.1:8000/admin/';

  const redireccionarAAdmin = () => {
    window.location.href = URL_ADMIN;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const agendarData = (await MostrarTodoAgendar()).data;
        const detalleCompraData = (await MostrarTodoDetalleDeCompra()).data;

        const tamanosTatuajes = agendarData.map((item) => item.Tamañotatuaje);
        const tamañoCounts = tamanosTatuajes.reduce((acc, tamaño) => {
          acc[tamaño] = (acc[tamaño] || 0) + 1;
          return acc;
        }, {});

        const productosTotales = detalleCompraData.reduce((acc, producto) => {
          const { nameProduct, cantidad, price } = producto;
          if (!acc[nameProduct]) {
            acc[nameProduct] = {
              total: 0,
              cantidad: 0,
              price: price,
            };
          }
          acc[nameProduct].total += cantidad * price;
          acc[nameProduct].cantidad += cantidad; // Sumar la cantidad del producto
          return acc;
        }, {});

        const nombresProductos = Object.keys(productosTotales);

        const dataProductos = {
          labels: nombresProductos,
          datasets: [
            {
              label: 'Total del Producto',
              data: nombresProductos.map((nombre) => productosTotales[nombre].total),
              backgroundColor: 'rgba(75,192,192,0.6)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
            {
              label: 'Cantidad del Producto',
              data: nombresProductos.map((nombre) => productosTotales[nombre].cantidad),
              backgroundColor: 'rgba(255,99,132,0.6)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
            },
          ],
        };


        setData({
          labels: Object.keys(tamañoCounts),
          datasets: [
            {
              data: Object.values(tamañoCounts),
              backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
            },
          ],
        });

        setDatosCompra(dataProductos);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataa = async () => {
      try {
        const agendarData = (await MostrarTodoAgendar()).data;
        const usuarioData = (await RegistrarTodoUsuario()).data;
        const productosData = (await MostrarTodoProductos()).data;
        const detalleCompraData = (await MostrarTodoDetalleDeCompra()).data;

        const totalAgendar = agendarData.length;
        const totalUsuarios = usuarioData.length;
        const totalProductos = productosData.length;
        const totalDetallesCompra = detalleCompraData.length;
 
        const chartData = {
          labels: ['Agendar', 'Usuarios', 'Productos', 'Detalles de Compra'],
          datasets: [
            {
              label: 'Cantidad',
              data: [totalAgendar, totalUsuarios, totalProductos, totalDetallesCompra],
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
              borderWidth: 1,
            },
          ],
        };

        setData(chartData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchDataa();
  }, []);

  const VerMasGraficos=()=>{
    window.location.href = "/Ver-MasGraficos";
  }


  const handleChartClick = async (elements) => {
    if (elements.length > 0) {
      const clickedIndex = elements[0].index;
      const nombreSeleccionado = data.labels[clickedIndex];
      const agendarData = (await MostrarTodoAgendar()).data;

      // Filtra agendarData para obtener solo los elementos con el Tamañotatuaje correspondiente
      const datosNombre = agendarData.filter((x) => x.Tamañotatuaje === nombreSeleccionado);

      const tatuajesUnicos = [...new Set(datosNombre.map((x) => x.NombreDeltatuaje))];

      const count = {};
      datosNombre.forEach((tatuaje) => {
        count[tatuaje.NombreDeltatuaje] = (count[tatuaje.NombreDeltatuaje] || 0) + 1;
      });

      console.log('Cantidad de Repeticiones:');
      Object.keys(count).forEach((tatuaje) => {
        console.log(`${tatuaje}: ${count[tatuaje]} rep.`);
      });

      const groupedData = {
        labels: tatuajesUnicos,
        datasets: [
          {
            label: 'Cantidad',
            data: tatuajesUnicos.map((tatuaje) => count[tatuaje] || 1),
            backgroundColor: 'rgba(75,192,192,0.6)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      };

      const chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      };

      setSelectedData({ ...groupedData, options: chartOptions });
    }
  };

 


  return (
    <>
      <input
        className="botonaMasFuncionalidades"
        type="button"
        value="MAS FUNCIONALIDADES"
        onClick={redireccionarAAdmin}
      />
      <div className="containeerdegraficos">
        <div className="chart-container">
          <h1>Tamaños de tatuajes</h1>
          {data && <Doughnut data={data} options={{ onClick: (_, elements) => handleChartClick(elements) }} />}
        </div>
        {selectedData && (
          <div className="Graficodebarra">
            <h1>Nombres de tatuajes junto con sus respectivas cantidades</h1>
            <Bar data={selectedData} />
          </div>
        )}
      </div>
      <div className="container mt-5">
          <h1>Total del Productos y cantidades ingresadas por los usuarios</h1>
        <div className="chartProductos">
          {datosCompra && (
            <Bar data={datosCompra} />
          )}
        </div>
      </div>   
      <div className="container mt-5">
        <button className='btn btn-primary' onClick={VerMasGraficos}>Ver mas graficos</button>
      </div>
      <br />
      <br />

    </>
  );
};

export default Escoger;
