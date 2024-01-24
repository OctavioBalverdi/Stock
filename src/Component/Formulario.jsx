import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../Component/CampoTexto"
import Boton from '../Component/Boton'


const Formularios = (props) => {
    const [NombreProducto, actualizarNombreProducto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [Calidad, actualizarCalidad] = useState("")
    const [Peso, actualizarPeso] = useState("")
    

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


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Producto</h2>
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
            <CampoTexto
                titulo="Calidad"
                placeholder="Ingresar Calidad"
                required
                valor={Calidad}
                actualizarValor={actualizarCalidad}
            />
            <CampoTexto
                titulo="Peso"
                placeholder="Ingresar Peso"
                required
                valor={Peso}
                actualizarValor={actualizarPeso}
            />
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formularios