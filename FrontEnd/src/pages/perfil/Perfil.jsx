import { useContext } from "react";
import ComponentPerfil from "../../components/compPerfil/ComponentPerfil";
import ComponenteRegistroVenta from "../../components/compPerfil/ComponenteRegistroVenta";
import ComponenteAgendar from "../../components/compPerfil/ComponenteAgendar";
import { useNavigate } from 'react-router-dom';
import { MyContext } from "../../context/UseProveedor";
import { MostrarTodoDetalleDeCompra, MostrarTodoAgendar } from "../../api/ingresar";
import { Link } from 'react-router-dom';

import "./perfil.css"
const Perfil = () => {
  const { setMostrarBotones, CapturarIDusuario, mostrarBotones } = useContext(MyContext);
  const navigate = useNavigate();
  const volverAlInicio = () => {
    navigate("/Inicio");
    setMostrarBotones(false)
  };
  if (!mostrarBotones) {
    return (
      <div className='container'>
        <p>Ingrese nuevamente, Datos vacíos</p>
        <a href="/Inicio" className="btn btn-primary">Cerrar</a>
        <br />
        <br />
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <h1 className="TituloPerfil">Mi Perfil</h1>
        <button onClick={volverAlInicio} className="BotonCerrarSeccionn">
          <ion-icon name="exit-outline"></ion-icon>Cerrar la sesión
        </button>
        <br />
        <br />
        <h1>Datos de mi cuenta</h1>
        <div>
          <ComponentPerfil datosRegistros={CapturarIDusuario} />
        </div>
          <div>
            <ComponenteRegistroVenta
              MostrarTodoDetalleDeCompra={MostrarTodoDetalleDeCompra}
              CapturarIDusuario={CapturarIDusuario} />
          </div>
        <div>
        <ComponenteAgendar MostrarTodoAgendar={MostrarTodoAgendar} CapturarIDusuario={CapturarIDusuario} Link={Link} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Perfil;
