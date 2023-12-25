import axios from 'axios';

//----------------------------- Ingresa- Registarse------------------------------------------------------------------------
const getTodoIngresar = axios.create({
     baseURL: "http://127.0.0.1:8000/Usuario/api/v1/Usuario/"
});
export const RegistrarTodoUsuario = () => getTodoIngresar.get('/');
export const CrearRegistrousuario = (DatosUser) => getTodoIngresar.post('/', DatosUser);
//-------------------------Agendar----------------------------------------------------------------------------



const getTodoAgendar = axios.create({
     baseURL: "http://127.0.0.1:8000/agendar/api/v2/agendar/"
});
export const MostrarTodoAgendar = () => getTodoAgendar.get('/');
export const CrearAgendar = (datosAgendar) => getTodoAgendar.post('/', datosAgendar);
export const actualizarAgendar = (id, datos) => getTodoAgendar.put(`/${id}/`, datos);
export const EliminarAgendarPorId = (id) => getTodoAgendar.delete(`/${id}/`);





//-----------------------------------------productosDeCompra------------------------------------------------------------
const getTodoproductosDeCompra = axios.create({
     baseURL: "http://127.0.0.1:8000/productosDeCompra/api/v3/ComprarProductos/"
});
export const actualizarStrock = "http://127.0.0.1:8000/productosDeCompra/api/v3/ComprarProductos/";
export const MostrarTodoProductos = () => getTodoproductosDeCompra.get('/');
export const ActualizarStock = actualizarStrock
// ---------------------------------------------------------------------------------------------------------------------

//-----------------------------------------registroDeCompra------------------------------------------------------------
const getTodoDetallDeCompra = axios.create({
     baseURL: "http://127.0.0.1:8000/DetallesDeVentaDeCompra/api/v4/DetallesDeVentaDeCompra/"
});
export const MostrarTodoDetalleDeCompra = () => getTodoDetallDeCompra.get('/');
export const InsertarDetallesProducto = "http://127.0.0.1:8000/DetallesDeVentaDeCompra/api/v4/DetallesDeVentaDeCompra/"
