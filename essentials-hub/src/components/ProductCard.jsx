import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md p-4 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-2" />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
