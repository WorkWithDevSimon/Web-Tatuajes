import React, { useState, useEffect } from 'react';

import "./estiloimg.css"

const ComponenteRegistroVenta = ({ MostrarTodoDetalleDeCompra, CapturarIDusuario }) => {
    const [compras, setCompras] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const detallesDeRegistroProd = await MostrarTodoDetalleDeCompra();
            const comprasUsuario = {};

            detallesDeRegistroProd.data.forEach((producto) => {
                if (producto.usuarioid === CapturarIDusuario[0].id) {
                    const compraID = producto.compraID;

                    // Crear una entrada para la compra si no existe
                    if (!comprasUsuario[compraID]) {
                        comprasUsuario[compraID] = {
                            productos: [],
                            total: 0,
                        };
                    }

                    comprasUsuario[compraID].productos.push(producto);
                }
            });
            // Calcular el total para cada compra
            for (const compraID in comprasUsuario) {
                const compra = comprasUsuario[compraID];
                compra.total = compra.productos.reduce((acumulador, producto) => {
                    return acumulador + (producto.price * producto.cantidad);
                }, 0);
            }

            setCompras(Object.values(comprasUsuario));
        }

        fetchData();
    }, [MostrarTodoDetalleDeCompra, CapturarIDusuario]);

    return (
        <>
            <h1>Compras realizadas</h1>

            {compras.map((compra, index) => (
                <div key={index}>


                    <table className="table">
                        <thead className="table table-bordered">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Total por Producto</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Img</th>
                            </tr>
                        </thead>
                        <tbody>
                            {compra.productos.map((producto, productoIndex) => (
                                <tr key={productoIndex}>
                                    <td>{producto.nameProduct}</td>
                                    <td>{producto.price}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.price * producto.cantidad}</td>
                                    <td>{producto.hora}</td>
                                    <td>{producto.fecha}</td>
                                    <td ><img src={producto.img} alt="Product Image" width={100} />

                                    </td>


                                </tr>
                            ))}
                        </tbody>
                        <tbody className="thead-dark">
                            <tr>
                                <td scope="col">Total:{compra.total}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            ))}
        </>
    );
};

export default ComponenteRegistroVenta;
