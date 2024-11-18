import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 25,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jeans",
    price: 40,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 60,
    image: "https://via.placeholder.com/150",
  },
];

const ProductPage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Shop Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded shadow p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
            <p className="text-gray-600 mt-2">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
