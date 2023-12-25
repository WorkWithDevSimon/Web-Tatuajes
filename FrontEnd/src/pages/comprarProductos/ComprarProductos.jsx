import React, { useContext, useState } from 'react'
import "./comprarProductos.css"
import Encabezados from "../../components/compComprarproducto/Encabezados";
import ProductoList from "../../components/compComprarproducto/ProductoList";
import { MyContext } from '../../context/UseProveedor';
import { FlechaArriba } from "../../components/componentFlechaArriba/FlechaArriba";
import { useNavigate } from "react-router-dom";
const ComprarProductos = () => {
  const [TodoProducto, setTodoProducto] = useState([])
  const [Total, setTotal] = useState(0)
  const [ContadorProduct, SetContadorProduct] = useState(0)
  const { mostrarBotones, setcapturarDatitosStock, capturarDatitosStock, CapturarIDusuario } = useContext(MyContext);
  const [datosImport, setDatosImport] = useState([]);
  const [SubTotal, setSubTotal] = useState();
  return (
    <>
      <div className='ContenderoCompra'>
        <Encabezados
          TodoProducto={TodoProducto}
          setTodoProducto={setTodoProducto}
          Total={Total}
          setTotal={setTotal}
          ContadorProduct={ContadorProduct}
          SetContadorProduct={SetContadorProduct}
          saberSiEstrueOfalse={mostrarBotones}
          capturarDatitosStock={capturarDatitosStock}
          CapturarIDusuario={CapturarIDusuario}
          datosImport={datosImport}
          setDatosImport={setDatosImport}
          setcapturarDatitosStock={setcapturarDatitosStock}
          useNavigate={useNavigate}
          SubTotal={SubTotal}
          />
        <ProductoList
          TodoProducto={TodoProducto}
          setTodoProducto={setTodoProducto}
          Total={Total}
          setTotal={setTotal}
          ContadorProduct={ContadorProduct}
          SetContadorProduct={SetContadorProduct}
          saberSiEstrueOfalse={mostrarBotones}
          setcapturarDatitosStock={setcapturarDatitosStock}
          datosImport={datosImport}
          setDatosImport={setDatosImport}
          setSubTotal={setSubTotal}
        />
        <FlechaArriba></FlechaArriba>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
export default ComprarProductos