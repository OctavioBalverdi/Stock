import BotonBorrar from "../Component/BotonBorrar"
import BotonEditar from "../Component/BotonEditar"
import BotonIngresar from "../Component/BotonIngresar"
import TarjetaFinal from "../Component/TarjetaFinal"

export const Stock=()=>{

    return(
          <><TarjetaFinal></TarjetaFinal>
          <BotonIngresar></BotonIngresar>
          <BotonEditar></BotonEditar>
          <BotonBorrar></BotonBorrar>
          </>
    )
}
