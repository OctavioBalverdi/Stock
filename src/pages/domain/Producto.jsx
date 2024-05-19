import React, { useState } from 'react';
import TarjetaProducto from "../Component/tarjetas/TarjetaProducto"
import Formularios from "../Component/formulario/Formulario";
import BotonIngresar from '../Component/botones/BotonIngresar';
import "./Producto.css";


export const Producto = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  const handleAddProduct = () => {
    const avatarProcesado = new FormData()
    avatarProcesado.append('avatar', photo)
    const data = {
      nombre: JSON.stringify(name),
      avatar: avatarProcesado
    }

    if (!name || !photo) {
      alert('ERROR, Debes enviar tanto el nombre del producto como su foto')
      return
    } else {
      
      fetch('http://localhost:3000/saveProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      })
        .then(response => response.json())
        .then(result => {

          console.log(result)

        })
        .catch(error => {
          console.error(error)
        })

      setName('');
      setPhoto('');
      document.getElementById("NOMBRE").value=""
      document.getElementById("FOTO").value=null
      setShowForm(false);
    }
  };
  return (
    <div className="bodylon">
      <div className="productos-container">
        <h2 className="productos-header">Agregar Producto :D</h2>
        {!showForm ? (
          <button className="form-button" onClick={() => setShowForm(true)}>Agregar</button>
        ) : (
          <form className="form-container">
            <label className="form-label">
              Nombre:
              <input 
                id="NOMBRE"
                className="form-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="form-label">
              Foto:
              <input
                id="FOTO"
                className="form-input"
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </label>
           <div className="botn-form">
           <button className="form-button" type="button" style={{ backgroundColor: 'red',display:'inlane-block'}} onClick={handleAddProduct}>
              Agregar
            </button>
            <button className="form-button" type="button" style={{ backgroundColor: 'red',display:'inlane-block' }} onClick={() => setShowForm(false)}>
              Salir
            </button>
           </div>
          </form>
        )}
      </div>
    </div>
  );


}


//aqui ant
/* const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const handleIngresarClick = () => {
    // Mostrar el formulario al hacer clic en "Ingresar"
    setMostrarFormulario(true);
  };

    
    return(
        <>
        <div className="TarjetaProduct">
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>

        </div>
        <div className="PosicionBottons">
          <BotonIngresar texto = "Agregar" onIngresarClick={handleIngresarClick} ></BotonIngresar>
          <BotonIngresar texto = "Editar"></BotonIngresar>
          <BotonIngresar texto = "Eliminar"></BotonIngresar>
        </div> aqui cierro*/

{/* Mostrar el formulario si mostrarFormulario es true */ }
/* aqui empieza {mostrarFormulario && <Formularios />}
</> aqui cierra 
 
)*/