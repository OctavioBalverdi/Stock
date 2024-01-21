import BotonIngresar from "../Component/BotonIngresar"
import TarjetaStock from "../Component/TarjetaStock"

export const Stock=()=>{

    return(
          <><TarjetaStock></TarjetaStock>
          <br /><br />
          <div>
          <BotonIngresar texto = "Entrada" ></BotonIngresar>
          <BotonIngresar texto = "Salida" ></BotonIngresar>
          </div>
          </>
    )
}
