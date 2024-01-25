import React, { useState } from 'react';
import BotonIngresar from "../Component/BotonIngresar"
import TarjetaProducto from "../Component/TarjetaProducto"
import Formularios from "../Component/Formulario";
import "./Productos.css";


export const Producto =()=>{
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const handleIngresarClick = () => {
    // Mostrar el formulario al hacer clic en "Ingresar"
    setMostrarFormulario(true);
  };

    
    return(
        <>
        <div className="TarjetaProduct">
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>

        </div>
        <div className="PosicionBottons">
          <BotonIngresar texto = "Agregar" onIngresarClick={handleIngresarClick} ></BotonIngresar>
          <BotonIngresar texto = "Editar"></BotonIngresar>
          <BotonIngresar texto = "Eliminar"></BotonIngresar>
        </div>

        {/* Mostrar el formulario si mostrarFormulario es true */}
          {mostrarFormulario && <Formularios />}
        </>
        
    )
}


