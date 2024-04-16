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

/*const Fila = ({ celdas, productos, ejemplo }) => {
  return (
    <div className='target-item'>
      {celdas.map((contenido, index) => (
        contenido !== null && ejemplo[contenido] !== null ? (
          <TarjetaStock key={index} producto={productos[ejemplo[contenido]]} />
        ) : (
          <div key={index} className="empty-card"></div>
        )
      ))}
    </div>
  );
};

export default Fila;*/