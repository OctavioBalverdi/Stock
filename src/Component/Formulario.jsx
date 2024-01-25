import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../Component/CampoTexto"
import Boton from "./Boton"
import ListaPeso from "./ListaPeso"
import ListaCalidad from "./ListaCalidad"
import EscanerComponente from "./EscanerCodigo"



const Formularios = (props) => {
    const [NombreProducto, actualizarNombreProducto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [Calidad, actualizarCalidad] = useState("")
    const [Peso, ActualizarPeso] = useState("")
    
    

    const { registrarColaborador } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            NombreProducto,
            foto,
            Calidad,
            descripcion,
            Peso
        }
        registrarColaborador(datosAEnviar)
    }


    return  <section className="formulario">
        <div className="ubicacion">
        <form onSubmit={manejarEnvio}>
            <h2>Producto</h2>
            <div className="Camp">
            <CampoTexto
                titulo="Nombre Producto"
                placeholder="Ingresar Nombre Producto"
                required
                valor={NombreProducto}
                actualizarValor={actualizarNombreProducto}
            />
            <CampoTexto
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <CampoTexto
                titulo="Descripcion"
                placeholder="Ingresar descripcion breve"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />
            <ListaCalidad
                titulo="Calidad"
                selecOption = {Calidad}
                
            />
            <ListaPeso
                 titulo="Peso"
            />
            </div>
           <div><EscanerComponente Texto = "Crear"></EscanerComponente></div>
        </form>
        </div>
    </section>
}

export default Formularios