import React, { useContext, useState, useEffect } from 'react';
import "./iniciarSeccion.css";
import { MyContext } from "../../context/UseProveedor";
import { BrowserRouter, Navigate, useNavigate } from "react-router-dom";
import { RegistrarTodoUsuario } from "../../api/ingresar";
import bcrypt from 'bcryptjs'; // Importa la biblioteca bcrypt

const IniciarSeccion = () => {
    const [DatosUsuario, setDatosUsuario] = useState({
        Nombre: "",
        Contraseña: ""
    });
    const [usuarios, setUsuarios] = useState([]);
    const { setMostrarBotones, setCapturarIDusuario } = useContext(MyContext);
    const navigate = useNavigate();
    useEffect(() => {
        // Obtener los datos de usuarios desde la API cuando se monta el componente
        obtenerUsuarios();
    }, []);
    const obtenerUsuarios = async () => {
        try {
            const response = await RegistrarTodoUsuario();
            setUsuarios(response.data);
        } catch (error) {
            console.error("Error al obtener datos de usuarios:", error);
        }
    };
    const IngresarAMiCuenta = (e) => {
        e.preventDefault();

        if (DatosUsuario.Nombre === '' || DatosUsuario.Contraseña === '') {
            setMostrarBotones(false);
            alert("Ingrese todos los datos correspondientes");
            return;
        }
        // Encripta la contraseña ingresada antes de la comparación
        const UsuarioFiltradoCliente = usuarios.filter((x) =>
            x.nombre_usuario === DatosUsuario.Nombre &&
            bcrypt.compareSync(DatosUsuario.Contraseña, x.contraseña_usuario) &&
            x.TipoUsuario === "Cliente"
        );

        const UsuarioFiltradoAdministrador = usuarios.filter((x) =>
            x.nombre_usuario === DatosUsuario.Nombre &&
            bcrypt.compareSync(DatosUsuario.Contraseña, x.contraseña_usuario) &&
            x.TipoUsuario === "Administrador"
        );
        if (UsuarioFiltradoCliente.length > 0) {
            setCapturarIDusuario(UsuarioFiltradoCliente)
            alert("Bienvenido")
            // Las credenciales son correctas
            setMostrarBotones(true);
            navigate("/Perfil");
        } else if (UsuarioFiltradoAdministrador.length > 0) {
            alert("Administrador")
            // Las credenciales son correctas
            setMostrarBotones(true);
            window.location.href = "/AdministradorJefe";
            // window.location.href = "http://127.0.0.1:8000/admin/";

        } else {
            // Credenciales incorrectas
            setMostrarBotones(false);
            alert("Credenciales incorrectas");
        }
    };
    const CapturarDatosImportantes = (e) => {
        const { name, value } = e.target;
        const maxLength = {
            Nombre: 15,
            Contraseña: 15
        }
        if (value.length > maxLength[name]) {
            return alert(`La cantidad de caracteres ha excedido el límite permitido`);
        }
        setDatosUsuario({ ...DatosUsuario, [name]: value });
    };
    return (
        <>
            <section className='sect'>
                <div className='formulario-caja'>
                    <div className="formulario-value">
                        <h2 className='IniciarSeccion'>Iniciar sesión</h2>
                        <div className='inputCaja'>
                            <ion-icon name="person-outline"></ion-icon>
                            <input
                                type="text"
                                name='Nombre'
                                id='Nombre' // Agrega un id único al campo de entrada
                                value={DatosUsuario.Nombre}
                                onChange={CapturarDatosImportantes}
                                required
                            />
                            <label htmlFor='Nombre'>Nombre de Usuario</label>
                        </div>
                        <div className='inputCaja'>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input
                                type="password"
                                name='Contraseña'
                                id='Contraseña' // Agrega un id único al campo de entrada
                                value={DatosUsuario.Contraseña}
                                onChange={CapturarDatosImportantes}
                                required
                            />
                            <label htmlFor='Contraseña'>Contraseña de Usuario</label>
                        </div>
                        <button className='BtnIngresar' type="submit" onClick={IngresarAMiCuenta}>Ingresar</button>
                        <div className="registrarse">
                            <p>No tienes una cuenta?
                                <a href="/CrearCuenta"> Regístrate </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );

};
export default IniciarSeccion;

