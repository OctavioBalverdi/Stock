import React from 'react';
import Celda from './Celda';
import TarjetaStock from '../tarjetas/TarjetaStock';
import './matriS.css'

const Fila = ({ celdas }) => {
  return (
    <div className='target-item'>
      {celdas.map((contenido, index) => (
        <TarjetaStock key={index} contenido={contenido} />
      ))}
      {console.log(celdas)}
    </div>
  );
};

export default Fila;