import React, { useState } from 'react';
import "./crearCuenta.css";
import { CrearRegistrousuario, RegistrarTodoUsuario } from "../../api/ingresar";

const CrearCuenta = () => {
  const [Datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    nacionalidad: "",
    correoElectronico: "",
    nombre_usuario: "",
    contraseña_usuario: "",
    TipoUsuario: "Cliente"
  });
  const verificar = (event) => {
    const { value, name } = event.target;

    // Definir la longitud máxima permitida para cada campo
    const maxLength = {
      nombre: 15,
      apellido: 15,
      telefono: 15,
      nacionalidad: 15,
      correoElectronico: 30,
      nombre_usuario: 12,
      contraseña_usuario: 12,
    };
    if (value.length > maxLength[name]) {
      return alert(`La cantidad de caracteres ha excedido el límite permitido`);
    }
    setDatos((oldDatos) => ({
      ...oldDatos,
      [name]: value,
    }));
  };

  const CrearCuentaAsync = async () => {

    if (
      Datos.nombre === "" ||
      Datos.apellido === "" ||
      Datos.telefono === "" ||
      Datos.nacionalidad === "" ||
      Datos.correoElectronico === "" ||
      Datos.nombre_usuario === "" ||
      Datos.contraseña_usuario === ""
    ) {
      alert("Por favor, completa todos los campos.");
      return; // No envíes los datos si hay campos vacíos
    }

    // Verifica si el usuario ya existe antes de crearlo
    const usuariosRegistrados = await RegistrarTodoUsuario();

    // Desencripta la contraseña proporcionada (Datos.contraseña_usuario) y compárala con la contraseña almacenada
    const usuarioExistente = usuariosRegistrados.data.find((usuario) =>
      usuario.nombre_usuario === Datos.nombre_usuario
    );

    if (usuarioExistente) {
      alert("El nombre de usuario ya existe, elige otro.");
      return; // No creas el usuario si ya existe
    } else {
      // Si no existe, procede con la creación del usuario
      await CrearRegistrousuario(Datos);
      console.log("Estos son los datos del registro:", Datos)
      setDatos({
        nombre: "",
        apellido: "",
        telefono: "",
        nacionalidad: "",
        correoElectronico: "",
        nombre_usuario: "",
        contraseña_usuario: ""
      });
      alert("Cuenta creada exitosamente");
    }
  };
  const Enviar = () => {
    CrearCuentaAsync();
  };
  return (
    <>
      <section className='sect'>
        <div className='formulario-cajaa'>
          <div className="formulario-value">
            <h2 className='registro'>Registro</h2>
            <div className='inputCaja'>
              <ion-icon name="person-outline"></ion-icon>
              <input type="text" id="nombre" name="nombre" value={Datos.nombre} onChange={verificar} />
              <label htmlFor="nombre">Nombre</label>
            </div>
            <div className='inputCaja'>
              <ion-icon name="person-outline"></ion-icon>
              <input type="text" id="apellido" name="apellido"
                value={Datos.apellido} onChange={verificar}
              />
              <label htmlFor="apellido">Apellido</label>
            </div>
            <div className='inputCaja'>
              <ion-icon name="phone-portrait-outline"></ion-icon>
              <input type="text" id="telefono" name="telefono" value={Datos.telefono}
                onChange={verificar}
              />
              <label htmlFor="telefono">Telefono</label>
            </div>
            <div className='inputCaja'>
              <ion-icon name="person-outline"></ion-icon>
              <input type="text" id="nacionalidad" name="nacionalidad"
                value={Datos.nacionalidad} onChange={verificar}

              />
              <label htmlFor="nacionalidad">Nacionalidad</label>
            </div>
            <div className='inputCaja'>
              <ion-icon name="person-outline"></ion-icon>
              <input type="text" id="correoElectronico" name="correoElectronico"
                value={Datos.correoElectronico} onChange={verificar}
              />
              <label htmlFor="correoElectronico">Correo Electrónico</label>
            </div>
            <div className='inputCaja'>
              <ion-icon name="person-outline"></ion-icon>
              <input type="text" id="nombre_usuario" name="nombre_usuario"
                value={Datos.nombre_usuario} onChange={verificar}
              />
              <label htmlFor="nombre_usuario">Nombre de Usuario</label>
            </div>
            <div className='inputCaja'>
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" id="contraseña_usuario" name="contraseña_usuario"
                value={Datos.contraseña_usuario} onChange={verificar}
              />
              <label htmlFor="contraseña_usuario">Contraseña de Usuario</label>
            </div>
            <button className='BtnIngresar' onClick={Enviar}>Ingresar</button>
            <div className="registrarse">
              <p>¿Ya tienes una cuenta?
                <a href="/IniciarSeccion"> Ingresar </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CrearCuenta;

