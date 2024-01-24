import React from 'react';
import "./TarjetaProducto.css";
import Boton from "../Component/Boton"
import {  useNavigate } from "react-router-dom"


const TarjetaProducto = ({props}) => {

  const { NombreProducto, descripcion, foto, Calidad ,Peso} = props.datos
  const navegador=useNavigate()

  return (
    <section id="card1" className="cards">
      <img src={foto} alt={nombre} />
      <div className="cards__content">
        <p className="cards__title">{NombreProducto}</p>
        <p className="cards__description">{Peso}</p>
        <p className="cards__description">{Calidad}</p>
        <p className="cards__description">{ descripcion }
        <Boton>Agregar</Boton><Boton>Editar</Boton><Boton>Borrar</Boton>
        </p>
      </div>
    </section>
  );
};

export default TarjetaProducto;