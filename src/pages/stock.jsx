import BotonIngresar from "../Component/BotonIngresar"
import TarjetaFinal from "../Component/TarjetaFinal"

export const Stock=()=>{

    return(
          <><TarjetaFinal></TarjetaFinal>
          <br /><br />
          <div>
            <BotonIngresar texto = "Ingresar"></BotonIngresar>
            <BotonIngresar texto = "Editar"></BotonIngresar>
            <BotonIngresar texto = "Borrar"></BotonIngresar>
          </div>
          </>
    )
}
