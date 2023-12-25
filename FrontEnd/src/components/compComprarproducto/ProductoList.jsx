import React, { useEffect, useState } from 'react';
import { MostrarTodoProductos } from "../../api/ingresar";
import "./esiloProduc.css"

const ProductoList = ({
  TodoProducto,
  setTodoProducto,
  Total,
  setTotal,
  ContadorProduct,
  SetContadorProduct, saberSiEstrueOfalse, setcapturarDatitosStock, setSubTotal

}) => {
  const [datosImport, setDatosImport] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MostrarTodoProductos();
        setDatosImport(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, []);

  const AgregarProduc = async (x_entregada) => {

    if (!saberSiEstrueOfalse) {
      alert("Incie sesion para comprar")
      return
    }

    if (TodoProducto.find(valorx => valorx.id === x_entregada.id)) {
      const productos = TodoProducto.map(x =>
        x.id === x_entregada.id
          ? { ...x, cantidad: x.cantidad + 1 }
          : x
      );
      setTotal(Total + x_entregada.price * x_entregada.cantidad);
      SetContadorProduct(ContadorProduct + x_entregada.cantidad);
      setSubTotal(x_entregada.price * x_entregada.cantidad)
      //------------------------------------------------------------------------------------------

      setTodoProducto([...productos]);
    } else {
      setTotal(Total + x_entregada.price * x_entregada.cantidad);
      SetContadorProduct(ContadorProduct + x_entregada.cantidad);
      setSubTotal(x_entregada.price * x_entregada.cantidad)
      //------------------------------------------------------------------------------------------

      //------------------------------------------------------------------------------------------
      setTodoProducto([...TodoProducto, x_entregada]);
    }
    const updatedDatosImport = datosImport.map(x => {
      if (x.id === x_entregada.id) {
        const newStock = x.stock - x_entregada.cantidad;

        return { ...x, stock: newStock >= 0 ? newStock : 0 };
      }
      return x;
    });
    setDatosImport(updatedDatosImport);
    setcapturarDatitosStock(updatedDatosImport)
  };
  return (
    <div className="container-items">
      {datosImport.length === 0 ? (
        <h1>No hay productos hasta el momento</h1>
      ) : (
        datosImport.map(x => (
          <div className="item" key={x.id}>
            <figure>
              <img
                src={x.img}
                alt={x.nameProduct}
              />
            </figure>
            <div className="info-product">
              <h2>{x.nameProduct}</h2>
              <p className="Stock">Stock:{x.stock}</p>
              <p className="price">${x.price}</p>
              {x.stock != 0 ? (
                <button className="btn-add-cart" onClick={() => {
                  AgregarProduc(x);
                }}>
                  Añadir al carrito
                </button>
              ) : (
                <>

                  <p className="stock-agotado">Este producto está temporalmente agotado. Por favor, actualice para verificar el stock.</p>
                  {/* <p className="stock-agotado">Lo sentimos, el producto está agotado. Por favor, refresque la página para verificar la disponibilidad.</p> */}
                  {/* <p className="stock-agotado">Stock agotado. Por favor, actualice para reflejar el recuento de stock.</p> */}
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductoList;
