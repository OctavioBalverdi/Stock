import React from 'react';
import Fila from './fila';
import './matriS.css'

const Estante = ({ filas }) => {
  return (
    <div>
      {filas.map((celdas, index) => (
        <Fila key={index} celdas={celdas} />
      ))}
      {console.log(filas)}
    </div>
  );
};

export default Estante;