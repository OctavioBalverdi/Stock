import React, { useState } from 'react';
import './TarjetaStock.css'; // Asegúrate de importar tu archivo de estilos
import PropTypes from 'prop-types';
import Logo from '../assets/img/Logo.jpg'
import FormularioStock from './FormularioStock';

const TarjetaStock = ({ title, content }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleIngresarClick = () => {
    // Mostrar el formulario al hacer clic en "Entrada"
    setMostrarFormulario(false);}

  return (
    <div className="cards">
      <div className="title-1">{title}</div>
      <img src={Logo} alt="" className='w-[250px] h-[250px] border rounded p-6' />
      <div className="content">
        {content}
      </div>
      <button className="btn" onIngresarClick={handleIngresarClick} >Entrada</button>
      <button className="btn1">Salida</button>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>
      {/* Mostrar el formulario si mostrarFormulario es true */}
      {mostrarFormulario && <FormularioStock />}
    </div>
  );
};


TarjetaStock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TarjetaStock;



