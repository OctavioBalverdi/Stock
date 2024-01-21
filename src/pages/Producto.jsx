import BotonIngresar from "../Component/BotonIngresar"
import TarjetaProducto from "../Component/TarjetaProducto"

export const Producto =()=>{
    return(
        <>
        <TarjetaProducto Titulo = "Mango" Descripcion = "200 kg"></TarjetaProducto>
        <br /><br />
        <div>
            <BotonIngresar texto = "Ingresar"></BotonIngresar>
            <BotonIngresar texto = "Editar"></BotonIngresar>
            <BotonIngresar texto = "Borrar"></BotonIngresar>
        </div>
        </>
        
    )
}