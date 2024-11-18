import React from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 25,
    image: "https://via.placeholder.com/150",
  },
  { id: 2, name: "Jeans", price: 40, image: "https://via.placeholder.com/150" },
  {
    id: 3,
    name: "Sneakers",
    price: 60,
    image: "https://via.placeholder.com/150",
  },
];

const Home = () => {
  const { addToCart } = useCart(); // Add cart context to manage cart actions

  return (
    <main className="container mx-auto mt-6">
      {/* Welcome Section */}
      <div className="bg-blue-100 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to Essentials Hub
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Find the best clothes and essentials at unbeatable prices.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Clothing", "Accessories", "Home Essentials", "Electronics"].map(
            (category) => (
              <div
                key={category}
                className="bg-gray-100 p-6 rounded shadow text-center"
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {category}
                </h3>
                <p className="text-gray-600 mt-2">
                  Explore our range of {category.toLowerCase()}.
                </p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  Shop {category}
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Free Shipping Promotion Section */}
      <div className="bg-yellow-100 py-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-600">
            Free Shipping on Orders Over $50!
          </h2>
          <p className="text-gray-700 mt-2">Shop now and save big!</p>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="bg-gray-50 p-6 rounded shadow">
              <p className="text-gray-700">
                "Amazing products! The quality and prices are unbeatable."
              </p>
              <h4 className="text-blue-600 font-semibold mt-4">
                - Customer {testimonial}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-600 py-10 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-6">
            Stay updated with the latest offers and discounts.
          </p>
          <div className="flex justify-center items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l border-none focus:outline-none"
            />
            <button className="bg-yellow-400 px-4 py-2 rounded-r text-blue-600 hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
