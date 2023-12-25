import { useNavigate, useParams } from "react-router-dom";
import "./actualizar.css";
import React, { useContext, useState } from "react";
import { MostrarTodoAgendar, actualizarAgendar } from "../../api/ingresar";
import { Tatuaje_peque, Tatuajes_Medianos, Tatuajes_Grandes } from '../tatuajes/data';
import { MyContext } from "../../context/UseProveedor";

const ActualizarAgendar = () => {
    const navigate = useNavigate();
    const [nombreTatuajes, setnombreTatuajes] = useState([]);
    const [tamañoSeleccionado, setTamañoSeleccionado] = useState("");
    const { CapturarIDusuario, mostrarBotones } = useContext(MyContext);
    const { id } = useParams();
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        tatuador: "",
        Tamañotatuaje: "",
        NombreDeltatuaje: "",
        fecha: "",
        hora_Inicio: "",
        hora_Fin: "",
        usuarioid: CapturarIDusuario[0].id
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const maxLength = {
            nombre: 15,
            apellido: 15
        }
        if (value.length > maxLength[name]) {
            return alert(`La cantidad de caracteres ha excedido el límite permitido`);
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleTamañoChange = (event) => {
        const newSize = event.target.value;
        setTamañoSeleccionado(newSize);
        switch (newSize) {
            case "Pequeño":
                setnombreTatuajes(Tatuaje_peque.map(tatuaje => tatuaje.nombre));
                break;
            case "Mediano":
                setnombreTatuajes(Tatuajes_Medianos.map(tatuaje => tatuaje.nombre));
                break;
            case "Grande":
                setnombreTatuajes(Tatuajes_Grandes.map(tatuaje => tatuaje.nombre));
                break;
            default:
                setnombreTatuajes([]);
        }
    };


    //----------------------------------------------------------------------------------------------------------------------------------------------------------- 
    const verDatos = async () => {


        if (mostrarBotones) {
            const selectedDate = formData.fecha;
            const today = new Date();
            const year = today.getFullYear();
            const month = `${today.getMonth() + 1}`.padStart(2, '0');
            const day = `${today.getDate()}`.padStart(2, '0');
            const hoy = `${year}-${month}-${day}`;
            // Compara las fechas
            console.log("Esta es la fecha seleccionada", selectedDate);
            console.log("Esta es la fecha que me trae por defecto la de hoy", hoy);
            if (selectedDate < hoy) {
                alert('No puedes seleccionar una fecha anterior a la fecha actual');
                return;
            }

            if (
                formData.nombre === "" ||
                formData.apellido === "" ||
                formData.tatuador === "" ||
                formData.Tamañotatuaje === "" ||
                formData.NombreDeltatuaje === "" ||
                formData.fecha === "" ||
                formData.hora_Inicio === "" ||
                formData.usuarioid === ""
            ) {
                return alert("Por favor, completa todos los campos.")
            } else {
                const esHoraCompleta = formData.hora_Inicio.endsWith(":00");
                if (!esHoraCompleta) {
                    return alert("Por favor, ingresa una hora completa en punto (ejemplo: 13:00)");
                }
                // Obtén la hora actual
                var horaIngresada = formData.hora_Inicio;

                // Define las horas límite
                var horaInicio = new Date();
                horaInicio.setHours(10, 0, 0); // 10:00 AM

                var horaFin = new Date();
                horaFin.setHours(18, 0, 0); // 6:00 PM

                // Convierte la hora ingresada en un objeto Date
                var horaIngresadaDate = new Date();
                horaIngresadaDate.setHours(parseInt(horaIngresada.split(":")[0]), parseInt(horaIngresada.split(":")[1]), 0);
                // Realiza la comparación
                if (horaIngresadaDate < horaInicio || horaIngresadaDate > horaFin) {
                    return alert("Fuera del tiempo correspondido (10:00 AM - 6:00 PM)");
                }
                const TodosLosDatosAgendar = (await MostrarTodoAgendar()).data
                if (formData.Tamañotatuaje === "Grande") {
                    horaIngresadaDate.setHours(horaIngresadaDate.getHours() + 8)
                    //tomo la hora y minutos por separados
                    var horas = horaIngresadaDate.getHours()
                    var minutos = horaIngresadaDate.getMinutes()
                    //recorro TodosLosDatosAgendar
                    for (const agendamiento of TodosLosDatosAgendar) {
                        //si la fecha y el tatuado coinsiden se salta la alerta
                        if (
                            formData.fecha === agendamiento.fecha &&
                            formData.tatuador === agendamiento.tatuador && formData.hora_Inicio === agendamiento.hora_Inicio &&
                            formData.hora_Fin === agendamiento.hora_Fin

                        ) {
                            alert("Este tatuador ya tiene una cita con otro cliente.");
                            return;
                        }
                    }

                    if (horas > 18) {
                        alert("La tienda cierra a la 18:00")
                        return;
                    }

                    //en caso de que los numeros sea menor a dos digitos se le agrega un cero
                    if (minutos < 10) {
                        minutos = '0' + minutos;
                    }
                    // concatenamos las horas y minitos y los guardamos en el objeto formData
                    formData.hora_Fin = horas + ':' + minutos;
                }

                else if (formData.Tamañotatuaje === "Mediano") {
                    horaIngresadaDate.setHours(horaIngresadaDate.getHours() + 4)
                    //tomo la hora y minutos por separados
                    var horas = horaIngresadaDate.getHours()
                    var minutos = horaIngresadaDate.getMinutes()
                    if (horas > 18) {
                        alert("La tienda cierra a la 18:00")
                        return;
                    }
                    //en caso de que los numeros sea menor a dos digitos se le agrega un cero
                    if (minutos < 10) {
                        minutos = '0' + minutos;
                    }

                    // concatenamos las horas y minitos y los guardamos en el objeto formData
                    formData.hora_Fin = horas + ':' + minutos;


                }
                else if (formData.Tamañotatuaje === "Pequeño") {
                    horaIngresadaDate.setHours(horaIngresadaDate.getHours() + 2)
                    //tomo la hora y minutos por separados
                    var horas = horaIngresadaDate.getHours()
                    var minutos = horaIngresadaDate.getMinutes()
                    if (horas > 18) {
                        alert("La tienda cierra a la 18:00")
                        return;
                    }
                    //en caso de que los numeros sea menor a dos digitos se le agrega un cero
                    if (minutos < 10) {
                        minutos = '0' + minutos;
                    }
                    //concatenamos las horas y minitos y los guardamos en el objeto formData
                    formData.hora_Fin = horas + ':' + minutos;
                }

                // validacion para los tatuajes medianos y pequeños
                for (const agendamiento of TodosLosDatosAgendar) {
                    var Hor_inicio = new Date()
                    var Hor_fin = new Date()

                    var Hor_inicioApi = new Date()
                    var Hor_finalApi = new Date()

                    Hor_inicio.setHours(parseInt(formData.hora_Inicio.split(":")[0], parseInt(formData.hora_Inicio.split(":")[1], 0)))
                    Hor_fin.setHours(parseInt(formData.hora_Fin.split(":")[0], parseInt(formData.hora_Fin.split(":")[1])))

                    Hor_inicioApi.setHours(parseInt(agendamiento.hora_Inicio.split(":")[0], parseInt(agendamiento.hora_Inicio.split(":")[1], 0)))
                    Hor_finalApi.setHours(parseInt(agendamiento.hora_Fin.split(":")[0], parseInt(agendamiento.hora_Fin.split(":")[1])))

                    //validacion cuando hay un tatuaje Grande


                    if (formData.hora_Fin > 18) {
                        alert("Sobrepasa los limetes de nuestro horario 18:00")
                        return;
                    }
                    if (
                        agendamiento.Tamañotatuaje === "Grande" &&
                        formData.fecha === agendamiento.fecha &&
                        formData.tatuador === agendamiento.tatuador &&
                        Hor_fin > Hor_inicioApi
                    ) {
                        alert("Este tatuador ya tiene una cita con otro cliente.");
                        return;
                    }
                    //si en la fecha agendada coincide el tatuador y el tamaño del tatuaje es pequeño o mediano realiza la validacion  
                    if (
                        agendamiento.Tamañotatuaje != "Grande" &&
                        formData.fecha === agendamiento.fecha &&
                        formData.tatuador === agendamiento.tatuador &&
                        Hor_finalApi > Hor_inicio
                    ) {
                        alert("Este tatuador ya tiene una cita con otro cliente.");
                        return;
                    }

                    if (
                        agendamiento.Tamañotatuaje === "Grande" &&
                        formData.fecha === agendamiento.fecha &&
                        formData.usuarioid === agendamiento.usuarioid &&
                        Hor_fin > Hor_inicioApi
                    ) {
                        alert("Lo siento usted ya tiene un hora agendada para hoy.");
                        return;
                    }
                    if (
                        agendamiento.Tamañotatuaje != "Grande" &&
                        formData.fecha === agendamiento.fecha &&
                        formData.usuarioid === agendamiento.usuarioid &&
                        Hor_finalApi > Hor_inicio
                    ) {
                        alert("Lo siento usted ya tiene un hora agendada para hoy.");
                        return;
                    }
                    formData.hora_Fin = horas + ':' + minutos;

                    // Verificamos si la hora final supera las 18:00
                    const horaFinNumerica = parseInt(formData.hora_Fin.split(":")[0], 10);
                    if (horaFinNumerica > 18) {
                        alert("Sobrepasa los límites de nuestro horario (18:00)");
                        return;
                    }

                }
                await actualizarAgendar(id, formData);
                navigate("/Perfil");

            }
        } else {
            return alert("Inicie sesión para agendar.");
        }
    };

    //----------------------------------------------------------------------------------------------------------------------------------------------------------- 
    if (!mostrarBotones) {
        return (
            <div className='container'>
                <h1>Ingrese nuevamente a su cuenta si desea Actualizar su agendado</h1>
                <a href="/Inicio" className="btn btn-primary">Cerrar</a>
                <br />
                <br />
            </div>
        );
    }
    return (
        <>
            <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
                <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-5 display-3 fw-bold ls-tight">
                                Tattoo Zaiko <br />
                                <span className="text-primary">Ajuste personalizado
                                </span>
                            </h1>
                            <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                                Te damos la más cordial bienvenida a nuestro exclusivo espacio de personalización. En esta sección, te brindamos la oportunidad única de adaptar y perfeccionar a tu gusto la hora y la fecha de tu cita, con el propósito de hacer tu experiencia de tatuaje aún más personal y conveniente.
                            </p>
                            <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>

                                Queremos que cada detalle de tu agenda se ajuste perfectamente a tus preferencias, permitiéndote planificar el momento especial en el que darás vida a tu tatuaje más significativo. Con esta opción de modificación, buscamos ofrecerte la flexibilidad que necesitas para asegurarte de que este proceso sea completamente a tu medida. ¡Estamos aquí para hacer que cada paso hacia tu tatuaje soñado sea excepcionalmente fácil y adaptado a ti!
                            </p>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card">
                                <div className="card-body py-5 px-md-5">
                                    <section className="form-register">
                                        <h4>ACTUALIZAR MI AGENDA</h4>
                                        <input
                                            className="controls"
                                            type="text"
                                            name="nombre"
                                            placeholder="Ingrese su Nombre"
                                            value={formData.nombre}
                                            onChange={handleInputChange}
                                            maxLength={20}
                                        />
                                        <input
                                            className="controls"
                                            type="text"
                                            name="apellido"
                                            placeholder="Ingrese su Apellido"
                                            value={formData.apellido}
                                            onChange={handleInputChange}
                                            maxLength={20}
                                        />
                                        <select
                                            className='controls'
                                            name="tatuador"
                                            value={formData.tatuador}
                                            onChange={handleInputChange}
                                        >
                                            <option>Escoja su tatuador</option>
                                            <option>Juan</option>
                                            <option>Mario</option>
                                            <option>Laura</option>
                                            <option>Carlos</option>
                                        </select>
                                        <select
                                            className='controls'
                                            name="Tamañotatuaje"
                                            onChange={(e) => {
                                                handleInputChange(e);
                                                handleTamañoChange(e);
                                            }}
                                            value={formData.Tamañotatuaje}
                                        >
                                            <option value="">Escoja el tamaño del tatuaje</option>
                                            <option value="Pequeño">Pequeño</option>
                                            <option value="Mediano">Mediano</option>
                                            <option value="Grande">Grande</option>
                                        </select>
                                        <select
                                            className='controls'
                                            name="NombreDeltatuaje"
                                            value={formData.NombreDeltatuaje}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">nombre de tatuajes</option>
                                            {nombreTatuajes.map((nombre, index) => (
                                                <option key={index} value={nombre}>{nombre}</option>
                                            ))}
                                        </select>
                                        <h6>Seleccione la fecha que desee agendar</h6>
                                        <input
                                            className="controls"
                                            type="date"
                                            name="fecha"
                                            value={formData.fecha}
                                            onChange={handleInputChange}
                                        />
                                        <h6>Seleccione la hora que desee agendar</h6>
                                        <input
                                            className="controls"
                                            type="time"
                                            name="hora_Inicio"
                                            id="hora_Inicio"
                                            value={formData.hora_Inicio}
                                            onChange={handleInputChange}
                                        />
                                        <input className="botons" type="submit" value="Agendar" onClick={verDatos} />
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}
export default ActualizarAgendar;
