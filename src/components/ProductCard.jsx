import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border rounded shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
      <p className="text-gray-600 mt-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
