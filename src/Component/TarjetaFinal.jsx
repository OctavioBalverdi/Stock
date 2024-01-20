import React from 'react';
import './TarjetaFinal.css'; // Asegúrate de importar tu archivo de estilos

const TarjetaFinal = ({ title, content }) => {
  return (
    <div className="card">
      <div className="title-1">{title}</div>
      <div className="content">{content}</div>
      <button className="btn">Learn more</button>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>
    </div>
  );
}

export default TarjetaFinal;