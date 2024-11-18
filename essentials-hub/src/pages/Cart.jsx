import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate the total price of the cart
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  // Handle removing item from cart
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded shadow p-4 flex justify-between items-center"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">${product.price}</p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(product.id)} // Call the remove function
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-800">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <button
            className={`${
              cart.length === 0 ? "bg-gray-400" : "bg-green-500"
            } text-white px-6 py-3 rounded hover:bg-green-600 transition`}
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
