import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white border rounded shadow p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {item.name}
              </h3>
              <p className="text-gray-600 mt-2">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
