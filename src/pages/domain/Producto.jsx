import React, { useState } from 'react';
import TarjetaProducto from "../Component/tarjetas/TarjetaProducto"
import Formularios from "../Component/formulario/Formulario";
import BotonIngresar from '../Component/botones/BotonIngresar';
import "./Producto.css";


export const Producto =()=>{
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  const handleAddProduct = () => {
    
    const data={
      nombre: name,
      avatar: photo
    }

    fetch('http://localhost:3000/saveProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(response=> response.json())
            .then(result => {
             
                console.log(result)
                
            })
            .catch(error =>{
                console.log(error)
            })
    
    
    
    console.log('Nombre:', name);
    console.log('Foto:', photo);

    
    setName('');
    setPhoto('');
    setShowForm(false);
  };
  return (
    <div className="bodylon">
      <div className="productos-container">
    <h2 className="productos-header">Agregar Producto</h2>
    {!showForm ? (
      <button className="form-button" onClick={() => setShowForm(true)}>Agregar</button>
    ) : (
      <form className="form-container">
        <label className="form-label">
          Nombre:
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="form-label">
          Foto:
          <input
            className="form-input"
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </label>
        <button className="form-button" type="button" style={{backgroundColor: 'red'}} onClick={handleAddProduct}>
          Agregar
        </button>
        <button className="form-button" type="button" style={{backgroundColor: 'red'}} onClick={() => setShowForm(false)}>
          Salir
        </button>
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

        {/* Mostrar el formulario si mostrarFormulario es true */}
         /* aqui empieza {mostrarFormulario && <Formularios />}
        </> aqui cierra 
        
    )*/