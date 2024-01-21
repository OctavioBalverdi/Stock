import BotonIngresar from "../Component/BotonIngresar"
import TarjetaStock from "../Component/TarjetaStock"

export const Stock=()=>{

    return(
          <><TarjetaStock></TarjetaStock>
          <br /><br />
          <div>
            <BotonIngresar texto = "Ingresar"></BotonIngresar>
            <BotonIngresar texto = "Editar"></BotonIngresar>
            <BotonIngresar texto = "Borrar"></BotonIngresar>
          </div>
          </>
    )
}
