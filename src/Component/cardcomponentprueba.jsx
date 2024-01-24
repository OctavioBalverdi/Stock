import React from 'react';

const CardComponent = ({ product, onEdit, onDelete }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: {product.price}</p>
        <p className="card-text">Empaquetado: {product.packaging}</p>
        <p className="card-text">Detalle: {product.detail}</p>
        <button onClick={() => onEdit(product)} className="btn btn-warning me-2">
          Editar
        </button>
        <button onClick={() => onDelete(product.id)} className="btn btn-danger">
          Borrar
        </button>
      </div>
    </div>
  );
};

export default CardComponent;

