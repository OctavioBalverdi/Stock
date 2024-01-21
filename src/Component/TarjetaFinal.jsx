import React from 'react';
import './TarjetaFinal.css'; // Asegúrate de importar tu archivo de estilos
import PropTypes from 'prop-types';
import Logo from '../assets/img/Logo.jpg'

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="title-1">{title}</div>
      <img src={Logo} alt="" className='w-[250px] h-[250px] border rounded p-6' />
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



