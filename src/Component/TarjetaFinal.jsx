import React from 'react';
import './TarjetaFinal.css'; // Asegúrate de importar tu archivo de estilos
import PropTypes from 'prop-types';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="title-1">{title}</div>
      <img src="../assets/img/Logo.jpg" alt="Foto" />
      <div className="content">
        {content}
      </div>
      <button className="btn">Producto</button>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;



