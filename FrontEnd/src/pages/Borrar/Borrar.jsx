import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { EliminarAgendarPorId } from "../../api/ingresar";
import "./borrar.css";
import { MyContext } from '../../context/UseProveedor';



const Borrar = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { mostrarBotones } = useContext(MyContext);

    const Cancelar = async () => {
        navigate("/Perfil");

    }
    const Aceptar = async () => {
        const eliminarPorid = await EliminarAgendarPorId(id)
        console.log(eliminarPorid)
        navigate("/Perfil");
    };

    if (!mostrarBotones) {
        return (
            <div className='container'>
                <h1>Ingrese nuevamente a su cuenta si desa cancelar su hora y fecha agendado</h1>
                <a href="/Inicio" className="btn btn-primary">Cerrar</a>
                <br />
                <br />
            </div>
        );
    }
    return (
        <>
            <div className='contenedorBorrar'>
                <div className="custom">
                    <h2 className="text-center">¿Está seguro de que desea cancelar su agenda?</h2>
                    <div >
                    <input className="boton aceptar" type="button" value="Aceptar" onClick={Aceptar} />
                        <input className="boton cancelar" type="button" value="Cancelar" onClick={Cancelar} />
                    </div>
                </div>
            </div>
        </>
    );

}
export default Borrar;

