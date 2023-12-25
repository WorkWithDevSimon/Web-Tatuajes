 
const ComponentPerfil = ({ datosRegistros }) => {
  return (
    <>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Telefono</th>
            <th scope="col">Nacionalidad</th>
            <th scope="col">Correo Electronico</th>
           </tr>
        </thead>
        <tbody>
          {datosRegistros.map((x, index) => (
            <tr key={index}>
              <td>{x.nombre}</td>
              <td>{x.apellido}</td>
              <td>{x.telefono}</td>
              <td>{x.nacionalidad}</td>
              <td>{x.correoElectronico}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
};

export default ComponentPerfil;
