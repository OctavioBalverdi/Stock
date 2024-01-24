import { useState } from 'react';
import { v4 as uuid } from "uuid"
import TarjetaProducto from "../Component/TarjetaProducto"
import Formularios from "../Component/Formulario"


export const Producto =()=>{

    const [mostrarFormulario, actualizarMostrar] = useState(false)
    const [Producto, actualizarProducto] = useState([{
        id: uuid(),
        NombreProducto: "Pediatra",
        foto: "https://media.licdn.com/dms/image/D4D03AQHdrDngGxQcxg/profile-displayphoto-shrink_200_200/0/1680814409956?e=1704931200&v=beta&t=ElX8VQxaF_wo4dE63Cvrs3FeZTrNgLvu5bZiGF_WZzc",
        nombre: "Octavio Balverdi",
        Calidad: "",
        Peso:"",
        descripcion: "exelente medico",
        }])

        const cambiarMostrar = () => {
            actualizarMostrar(!mostrarFormulario)
          }
        
          //Registrar colaborador
          const registrarProducto = (Producto) => {
            actualizarProducto([...Productos, Producto])
          }
        
          //Eliminar colaborador
          const eliminarProducto = (id) => {
            const nuevosProducto = Producto.filter((Producto) => Producto.id != id)
            actualizarProductos(nuevosProductos)
          }
        

    return(
        <>
        <TarjetaProducto>
        <Formularios></Formularios>
        </TarjetaProducto>
        </>
        
    )
}