 
import React, { useState, useEffect } from 'react';
import { MostrarTodoAgendar, RegistrarTodoUsuario, MostrarTodoProductos, MostrarTodoDetalleDeCompra } from "../../api/ingresar";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


import "./verProductos.css"

const VerMasGraficos = () => {
    const [data, setData] = useState(null);
    const MasFuncionalidades = () => {
        window.location.href = "http://127.0.0.1:8000/admin/";
    }  
    const VolverHaciaAtras = () => {
        window.location.href = "/AdministradorJefe";
    }
    useEffect(() => {
        const fetchData = async () => {
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

        fetchData();
    }, []);

    return (<>
        <input
            className='botonaMasFuncionalidades' // Clases de Bootstrap para un botón pequeño y con margen superior
            type="button"
            value="MAS FUNCIONALIDADES"
            onClick={MasFuncionalidades}
        />
        <input
            className='botonaMasFuncionalidades' // Clases de Bootstrap para un botón pequeño y con margen superior
            type="button"
            value="VOLVER"
            onClick={VolverHaciaAtras}
        />
         <div className="escoger-container">
            <h1>Usuarios ingresados</h1>
            {data ? (
                <Bar

                    data={data}
                    options={{
                        scales: {
                            x: {
                                type: 'category',
                                labels: ['Usuarios agendados', 'Usuarios', 'Productos', 'Usuarios que han comprado'],
                            },
                            y: {
                                beginAtZero: true,
                            },
                        },
                    }}
                />
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
 
    </>
    );
};



export default VerMasGraficos