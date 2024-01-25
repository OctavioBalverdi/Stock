import React, { useState } from 'react';
import "./CodigodeBarra.css";

const CodigodeBarra = ({Texto}) => {
  const [codigoBarras, setCodigoBarras] = useState('');

  const manejarCambioCodigoBarras = (event) => {
    // Actualizar el estado con el código de barras ingresado
    setCodigoBarras(event.target.value);
  };

  const obtenerInformacionCodigoBarras = () => {
    // Aquí puedes realizar acciones con el código de barras,
    // como enviarlo a un servidor para obtener información.

    // Por ahora, simplemente mostraremos la información en la consola.
    console.log('Código de barras escaneado:', codigoBarras);
  };

  return (
    <div className='CodigoDeBarras2'>
      <label className= 'CodigoLabel2'htmlFor="codigoBarras">Ingrese el código de barras:</label>
      < input className='CodigoInput2'
        type="text"
        id="codigoBarras"
        value={codigoBarras}
        onChange={manejarCambioCodigoBarras}
      />
      <button className='CodigoButton2' onClick={obtenerInformacionCodigoBarras}>{Texto}</button>
    </div>
  );
};

export default CodigodeBarra;
