import React, { useState } from 'react';
import TarjetaProducto from "../Component/tarjetas/TarjetaProducto"
import Formularios from "../Component/formulario/Formulario";
import BotonIngresar from '../Component/botones/BotonIngresar';
import "./Productos.css";


export const Producto =()=>{


  import React, { useState } from 'react';

const AddProduct = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  const handleAddProduct = () => {
    // Aquí puedes enviar la información del producto
    // por ejemplo, a través de una función prop
    console.log('Nombre:', name);
    console.log('Foto:', photo);

    // Resetear el formulario y ocultarlo
    setName('');
    setPhoto('');
    setShowForm(false);
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Agregar</button>
      ) : (
        <form>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Foto:
            <input
              type="file"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </label>
          <button type="button" onClick={handleAddProduct}>
            Agregar
          </button>
          <button type="button" onClick={() => setShowForm(false)}>
            Salir
          </button>
        </form>
      )}
    </div>
  );
};

export default AddProduct;
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
}


