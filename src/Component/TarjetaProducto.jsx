import React from 'react';
import './TarjetaProducto.css';
import Logo from '../assets/img/Logo.jpg'

const TarjetaProducto = ({ title, peso, calidad, details }) => {
  return (
    <div className="cards1">
      <div className="cards1-details">
        <p className="text-title">{title}</p>
        <img src={Logo} alt="" className='w-[180px] h-[150px] border rounded p-1' />
        <p className="text-body">{peso}</p>
        <p className="text-body">{calidad}</p>
        <p className="text-body">{details}</p>
      </div>
    </div>
  );
}

export default TarjetaProducto;