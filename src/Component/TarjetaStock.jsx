import React, { useState } from 'react';
import './TarjetaStock.css'; // Asegúrate de importar tu archivo de estilos
import Logo from '../assets/img/Logo.jpg'
import CodigodeBarra2 from './CodigodeBarras2';
import CodigodeBarras1 from './CodigodeBarra1';

const TarjetaStock = ({ title, content }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarFormulario2, setMostrarFormulario2] = useState(false);

  const handleIngresarClick = () => {
    // Mostrar el formulario al hacer clic en "Entrada"
    setMostrarFormulario(true);}
    const handleIngresarClick2 = () => {
      // Mostrar el formulario al hacer clic en "Entrada"
      setMostrarFormulario2(true);}

  return (
    <div className="cards">
      <div className="title-1">{title}</div>
      <img src={Logo} alt="" className='w-[250px] h-[250px] border rounded p-6' />
      <div className="content">
        {content}
      </div>
      <button className="btn" onClick={handleIngresarClick} >Entrada</button>
      <button className="btn1" onClick={handleIngresarClick2}>Salida</button>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>
      {/* Mostrar el formulario si mostrarFormulario es true */}
      <div className='CodigosdeB'>
      {mostrarFormulario && <CodigodeBarras1 Texto="INGRESAR"></CodigodeBarras1>}
      {mostrarFormulario2 && <CodigodeBarra2 Texto="SALIDA"></CodigodeBarra2>}
      </div>
    </div>
  );
};


export default TarjetaStock;



