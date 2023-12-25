// context/UseProveedor.js
import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const UseProveedor = ({ children }) => {
  const [mostrarBotones, setMostrarBotones] = useState(false); // Cambiado a false
  const [CapturarIDusuario, setCapturarIDusuario] = useState([""]);
  const [capturarDatitosStock, setcapturarDatitosStock] = useState();
  return (
    <MyContext.Provider value={{
      mostrarBotones, setMostrarBotones,
      CapturarIDusuario, setCapturarIDusuario, capturarDatitosStock, setcapturarDatitosStock
    }}>
      {children}
    </MyContext.Provider>
  );
};
