import React, { useState, useEffect } from 'react';

// ... (importaciones)

const ComponenteAgendar = ({ CapturarIDusuario, MostrarTodoAgendar, Link }) => {
    const [agendados, setAgendados] = useState([]);

    useEffect(() => {
        const fetchAgendados = async () => {
            try {
                const response = await MostrarTodoAgendar();
                // Filtrar agendados por el ID del usuario capturado
                const agendadosFiltrados = response.data.filter(
                    (agendado) => agendado.usuarioid === CapturarIDusuario[0].id
                );
                setAgendados(agendadosFiltrados);
            } catch (error) {
                console.error('Error al obtener los agendados', error);
            }
        };
        fetchAgendados();
    }, [CapturarIDusuario]);

    return (
        <>
            <h1>Datos de mi agenda</h1>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Tatuador</th>
                        <th scope="col">Nombre del tatuaje</th>
                        <th scope="col">Tamaño del tatuaje</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora de inicio</th>
                        <th scope="col">Hora de fin</th>
                        <th scope="col">Ajustar cita programada </th>
                        <th scope="col">Revocar cita programada</th>
                    </tr>
                </thead>
                <tbody>
                    {agendados.map((agendado) => (
                        <tr key={agendado.id}>
                            <td>{agendado.id}</td>
                            <td>{agendado.nombre}</td>
                            <td>{agendado.apellido}</td>
                            <td>{agendado.tatuador}</td>
                            <td>{agendado.NombreDeltatuaje}</td>
                            <td>{agendado.Tamañotatuaje}</td>
                            <td>{agendado.fecha}</td>
                            <td>{agendado.hora_Inicio}</td>
                            <td>{agendado.hora_Fin}</td>
                            <td>
                                <Link to={`/ActualizarAgendar/${agendado.id}`} style={{ border: "4px", background: "#000", color: "#fff",padding: "10px 10px", textDecoration: "none", borderRadius: "3px", }}>
                                    Editar
                                </Link>
                            </td>
                            <td>
                                <Link to={`/Borrar/${agendado.id}`} style={{ border: "4px", background: "red", color: "#fff", padding: "10px 10px", textDecoration: "none", borderRadius: "3px" }}>
                                    Cancelar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ComponenteAgendar;
