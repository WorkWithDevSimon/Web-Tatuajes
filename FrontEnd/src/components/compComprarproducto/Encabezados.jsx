import axios from 'axios';
import React, { useState } from 'react';
import { actualizarStrock, InsertarDetallesProducto } from "../../api/ingresar";

const apiURL = actualizarStrock
const apiDetallesProducto = InsertarDetallesProducto
const Encabezados = ({ TodoProducto, setTodoProducto, Total,
	setTotal, ContadorProduct, SetContadorProduct,
	saberSiEstrueOfalse, CapturarIDusuario, capturarDatitosStock, useNavigate, SubTotal }) => {
	const [activo, setActivo] = useState(false);
	const navigate = useNavigate();
	const EliminarProduct = (producto) => {
		const resultado = TodoProducto.filter(item => item.id !== producto.id);
		setTotal(Total - producto.price * producto.cantidad);
		SetContadorProduct(ContadorProduct - producto.cantidad);
		setTodoProducto(resultado);
	}
	const vaciarCarrito = () => {
		setTodoProducto([]);
		setTotal(0);
		SetContadorProduct(0);
	}
	const comprarProducto = async () => {
		if (saberSiEstrueOfalse) {
			alert("Ha ingresado correctamente");
			if (capturarDatitosStock && capturarDatitosStock.length > 0) {
				// Usamos Promise.all para esperar a que todas las solicitudes se completen
				const promises = capturarDatitosStock.map(async (producto) => {
					const id = producto.id;
					// Actualiza los campos de ProductosEntregados con los datos necesarios
					const updatedProductosEntregados = {
						img: producto.img,
						nameProduct: producto.nameProduct,
						price: producto.price,
						stock: producto.stock, // Resta 1 al stock
						cantidad: 1 // Puedes dejar la cantidad en 1 o ajustarla según tus necesidades
					};
					// Realiza la solicitud PUT para actualizar el stock
					axios.put(`${apiURL}${id}/`, updatedProductosEntregados);
				});
				// Espera a que todas las solicitudes se completen
				await Promise.all(promises);
			}
			// ---------------------------------------------------------------------------------
			const fechaActual = new Date();
			const dia = fechaActual.getDate();
			const mes = fechaActual.getMonth() + 1;
			const anio = fechaActual.getFullYear();
			const hora = fechaActual.toLocaleTimeString('es-ES', { hour12: false }); // Obtiene la hora en formato HH:MM:SS
			const promises = TodoProducto.map(async (x) => {
				const productosAInsertar = {
					img: x.img,
					nameProduct: x.nameProduct,
					price: x.price,
					cantidad: x.cantidad,
					fecha: `${anio}-${mes}-${dia}`, // Asegúrate de que la fecha esté en el formato correcto
					hora: hora,
					Total: Total, // Ajusta el valor según tus necesidades
					usuarioid: CapturarIDusuario[0].id// Ajusta el ID del usuario según tus necesidades
					// Productoid: 1, // Ajusta el ID del producto según tus necesidades
				};
				try {
					await axios.post(apiDetallesProducto, productosAInsertar);
					console.log("Detalles de Productos creados correctamente");
				} catch (error) {
					console.error("Error al crear productos:", error);
				}
			}
			)
			await Promise.all(promises);
			navigate("/Perfil");
		}
	}
	return (
		<>
			<header id='HeaderComponente'>
				<h1>Tienda Tattoo Zaiko</h1>
				<div className="container-icon">
					<div className="container-cart-icon" onClick={() => setActivo(!activo)}>
						{/* Esto es basicamente lo del icono del carrito hasta donde termina estas 2 llaves */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="icon-cart"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
							/>
						</svg>
						<div className="count-products">
							<span id="contador-productos">{ContadorProduct}</span>
						</div>
					</div>
					{/* ////////////////////////////////////////////////////////////////////////// */}
					<div className={`container-cart-products ${activo ? "" : "hidden-cart"}`}>
						{TodoProducto.length ? (
							<>
								<p style={{ fontSize: '18px', color: '#000', fontWeight: 'bold', textAlign: 'center' }}>
									¡Encuentra lo que te inspira y adquiere productos de calidad!
								</p>
								<div className="row-product">
									{TodoProducto.map((valor) => (
										<div className="cart-product" key={valor.id}>
											<div className="info-cart-product">
												<span className="cantidad-producto-carrito">{valor.cantidad}</span>
												<p className="titulo-producto-carrito">{valor.nameProduct}</p>
												<span className="precio-producto-carrito">{valor.price}</span>
											</div>
											{/* Este svg represneta donde esta la x para eliminar un producto */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="icon-close"
												onClick={() => EliminarProduct(valor)}
											>
												<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
											</svg>
											{/* //////////////////////////////////////////////////////////////////// */}
										</div>
									))}
								</div>
								<div className="cart-total">
									<h3>Total:</h3>
									<span className="total-pagar">${Total}</span>
								</div>
								<div className="button-container">
									<div className="button-container">
										<button className='btn-clear-all' onClick={vaciarCarrito}>Vaciar Carrito</button>
										<button className='btn-clear-all' onClick={comprarProducto} >Confirmar Comprar</button>
									</div>

								</div>

							</>
						) : (
							<p className="cart-empty">El carrito está vacío</p>
						)}
					</div>
				</div>
			</header>
		</>
	);
};

export default Encabezados;
