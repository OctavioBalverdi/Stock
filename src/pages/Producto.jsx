<<<<<<< HEAD
import { useState } from 'react';
import { v4 as uuid } from "uuid"
import TarjetaProducto from "../Component/TarjetaProducto"
import Formularios from "../Component/Formulario"


export const Producto =()=>{

    const [mostrarFormulario, actualizarMostrar] = useState(false)
    const [Producto, actualizarProducto] = useState([{
        id: uuid(),
        NombreProducto: "Pediatra",
        foto: "https://media.licdn.com/dms/image/D4D03AQHdrDngGxQcxg/profile-displayphoto-shrink_200_200/0/1680814409956?e=1704931200&v=beta&t=ElX8VQxaF_wo4dE63Cvrs3FeZTrNgLvu5bZiGF_WZzc",
        nombre: "Octavio Balverdi",
        Calidad: "",
        Peso:"",
        descripcion: "exelente medico",
        }])

        const cambiarMostrar = () => {
            actualizarMostrar(!mostrarFormulario)
          }
        
          //Registrar colaborador
          const registrarProducto = (Producto) => {
            actualizarProducto([...Productos, Producto])
          }
        
          //Eliminar colaborador
          const eliminarProducto = (id) => {
            const nuevosProducto = Producto.filter((Producto) => Producto.id != id)
            actualizarProductos(nuevosProductos)
          }
        

    return(
        <>
        <TarjetaProducto>
        <Formularios></Formularios>
        </TarjetaProducto>
        </>
        
    )
}
=======

import React, { useState } from 'react';
import CardComponent from '../Component/cardcomponentprueba';
import FormComponent from '../Component/formcomponentPrueba';

export const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddProduct = (product) => {
    setProducts([...products, { id: Date.now(), ...product }]);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const clearSelection = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Stock de Productos</h1>
      <div className="mb-4">
        <button onClick={clearSelection} className="btn btn-success me-2">
          Agregar Producto
        </button>
        {selectedProduct && (
          <span className="text-muted">(Editando: {selectedProduct.name})</span>
        )}
      </div>
      {selectedProduct && (
        <FormComponent
          onAdd={handleAddProduct}
          onUpdate={handleUpdateProduct}
          selectedProduct={selectedProduct}
          clearSelection={clearSelection}
        />
      )}
      <div className="row mt-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <CardComponent
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


>>>>>>> cf00ec5eb27d3f662c6eef0abc1eb62c6d570c24
