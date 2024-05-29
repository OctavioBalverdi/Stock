import React from 'react';

const ProductoCard = ({ nombre, foto }) => {
  return (
    <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
      <img src={foto} alt={nombre} className="w-full h-auto rounded-lg mb-2" />
      <p className="text-white text-lg font-semibold">{nombre}</p>
    </div>
  );
};

export default ProductoCard;